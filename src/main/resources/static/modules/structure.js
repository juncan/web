layui.define(['jquery', 'element', 'laytpl'], function (exports) {
    'use strict';
    //引用layui模块
    var $ = layui.jquery,
        element = layui.element,
        laytpl = layui.laytpl;

    //记录当前状态
    var state = {
        currentModule: '',
        loadedPage: []
    };

    //菜单数据
    var menuData = [{
        parent: 'BaseData',
        url: '/BaseData/Company/Index',
        text: '企业管理',
        class: 'structure 企业管理_n',
        children: []
    }, {
        parent: 'BaseData',
        url: '/BaseData/Team/Index',
        text: '车队管理',
        class: 'structure 车队管理_n',
        children: []
    },
    {
        parent: 'BaseData',
        url: '/BaseData/Vehicle/Index',
        text: '车辆管理',
        class: 'structure 车辆管理_n',
        children: []
    }, {
        parent: 'BaseData',
        url: '/BaseData/Employee/Index',
        text: '人员管理',
        class: 'structure 人员管理_n',
        children: []
    }, {
        parent: 'BaseData',
        url: '/BaseData/Passager/Index',
        text: '乘客信息',
        class: 'structure 乘客信息_n',
        children: []
    }, {
        parent: 'BaseData',
        url: '/BaseData/Area/Index',
        text: '区域管理',
        class: 'structure 区域管理_n',
        children: []
    }, {
        parent: 'BaseData',
        url: '/BaseData/Freight/Index',
        text: '运价信息',
        class: 'structure 运价信息_n',
        children: []
    }, {
        parent: 'BaseData',
        url: '/BaseData/Infrastructure',
        text: '基础设施',
        class: 'structure 基础设施_n',
        children: [{ url: '/BaseData/Infrastructure/Index', text: '基础设施' }]
    }];

    //部署路由模块
    var router = Router({
        '/([^\/]*)/?([^\/]*)/?([^\/]*)\/': function (m, c, a) {
            //切换模块
            if (m !== '' && c === '' && a === '') {
                _renderModule(m);
            }
            else if (m !== '' && c !== '' && a !== '') {
                _renderModule(m);
                _renderMenu(m, c, a);
            }
        }
    });


    /** 函数区 **/

    /**
     * icon变换
     */
    var handleChangeIcon = function () {
        var i = $(this).find('i'),
            oldClass = i.prop('class'),
            newClass = '';

        if (oldClass) {
            if (~oldClass.indexOf('n')) {
                newClass = oldClass.replace('n', 'a');
            } else {
                newClass = oldClass.replace('a', 'n');
            }

            i.prop('class', newClass);
        }
    };

    /**
     * 设置页面hash值
     */
    var _setHash = function (hash) {
        try {
            var currentHash = location.hash;
            if (hash !== currentHash) {
                window.location.hash = hash;
            }
        } catch (ex) {
            console.error('set hash error!  ' + hash);
        }

    };

    /**
     * 渲染模块菜单
     */
    var _renderModule = function (m) {
        var menuHtml = [],
            menuTpl = '<li class="layui-nav-item nav-item">' +
                '{{#  if(d.children.length){ }}' +
                '<a href="javascript:;">' +
                '{{#  } else { }}' +
                '<a href="#{{d.url}}">' +
                '{{#  } }}' +
                '<i class="{{d.class}}"></i>' +
                '{{d.text}}' +
                '</a>' +
                '{{#  if(d.children.length){ }}' +
                '<dl class="layui-nav-child">' +
                '{{#layui.each(d.children, function(index,item){ }}' +
                '<dd><a href="#{{item.url}}">{{ item.text  }}</a></dd>' +
                '{{# }) }}' +
                '</dl>' +
                '{{#  } }}' +
                '</li>';

        var moduleMenu = $('.left').find('[href="#/'+m+'"]').parent();
        if(!moduleMenu.hasClass('layui-this')){
            $('.left').find('.layui-this').removeClass('layui-this');
            moduleMenu.addClass('layui-this');
        }

        if (state.currentModule !== m) {
            _.forEach(menuData, function (menu) {
                if (menu.parent === m) {
                    menuHtml.push(laytpl(menuTpl).render(menu));
                }
            });
            $('#leftMenu').html(menuHtml.join(''));
            state.currentModule = m;
            element.render('nav');
        }
    };

    /**
     * 渲染菜单内容
     */
    var _renderMenu = function (m, c, a) {
        var fullPath = '/' + m + '/' + c + '/' + a,
            menu = _.find(menuData, function (item) { return item.url === fullPath; });

        if (!~state.loadedPage.indexOf(fullPath) && menu) {
            $.get('./' + c + '.html').then(function (html) {
                element.tabAdd('main', {
                    title: menu.text
                    , content: html
                    , id: fullPath
                });
                state.loadedPage.push(fullPath);
                element.render('tab');
                element.tabChange('main', fullPath);
            });
        } else {
            element.tabChange('main', fullPath);
        }
    }

    /** 事件绑定区 **/

    //左边菜单Icon变换
    $('.layui-side .layui-nav')
        .on('mouseenter', 'a', handleChangeIcon)
        .on('mouseleave', 'a', handleChangeIcon);

    //监听选项卡被删除
    element.on('tabDelete(main)', function (data) {
        if (state.loadedPage.length > 1) {
            if (data.index === 0) {
                _setHash(state.loadedPage[data.index + 1]);
            } else {
                _setHash(state.loadedPage[data.index - 1]);
            }
        } else {
            _setHash('');
        }
        state.loadedPage.splice(data.index, 1);
    });

    //监听选项卡切换
    element.on('tab(main)', function (data) {
        _setHash(state.loadedPage[data.index]);
    });

    //路由模块初始化
    router.init();

    //默认打开第一个
    _setHash('BaseData');
    exports('structure', null);
});