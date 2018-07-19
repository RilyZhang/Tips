(function () {
    var links = ['iconfont.css', 'tips.css'];
    var path, js = document.scripts;
    path = js[js.length - 1].src.substring(0, js[js.length - 1].src.lastIndexOf("/") + 1);
    links.forEach(function (value) {
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = path + value;
        document.head.appendChild(link);
    })
})(window);

function Tips() {
}

Tips.prototype = {
    showTime: 2000,
    prevTip: {
        timer: null,
        dom: null,
    },
    timer: null,
    openTip: function (msg, type) {
        var dom = this.getRootDom();
        if (type == 'success') {
            dom.classList.add('success-tip');
            dom.innerHTML = '<span class="iconfont icon-duihao"></span><span>' + msg + '</span>';
        }
        else if (type == 'fail') {
            dom.classList.add('error-tip');
            dom.innerHTML = '<span class="iconfont icon-chacha"></span><span>' + msg + '</span>';
        }
        this.showDom(dom);
    },
    success: function (msg) {
        this.openTip(msg, 'success');
    },
    fail: function (msg) {
        this.openTip(msg, 'fail');
    },
    getRootDom: function () {
        var dom = document.createElement('div');
        dom.classList.add('status-tip');
        return dom;
    },
    showDom: function (dom) {
        var that = this
        if (that.prevTip.timer && that.prevTip.dom) {
            clearTimeout(that.prevTip.timer)
            document.body.removeChild(that.prevTip.dom);
        }
        document.body.appendChild(dom)
        dom.style.marginLeft = -dom.offsetWidth / 2 + 'px';
        dom.style.marginTop = -dom.offsetHeight / 2 + 'px';
        dom.style.opacity = '1';
        that.prevTip.dom = dom
        that.prevTip.timer = setTimeout(function () {
            dom.style.opacity = '0';
            setTimeout(function () {
                try {
                    document.body.removeChild(dom);
                } catch(e) {}
                that.prevTip.dom = null;
            }, 500)
        }, that.showTime);
    }
}