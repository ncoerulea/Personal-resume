/**
 * Created by user on 2017/2/16.
 */
////    windows.innerWidth ? windows.innerWidth : document.body.clientWidth;
//    document.documentElement.style.fontSize = 100 * innerWidth / 750 + 'px';
//    addEventListener('load', function() {
//        setTimeout(function(){
//            document.documentElement.style.fontSize = 100 * innerWidth / 640 + 'px';
//        }, 480);
//    // �жϴ����Ƿ���һ������� ���window.top = window.self ûǶ�� ��ǰ���ھ��Ƕ��㴰��
//        var isInApp = (window.self != window.top);
//        if (!isInApp) {
//            window.parent.postMessage({name: 'web:inject', token: Math.random().toString(), usertype: 1}, '*');
//            }
//        })
////    �ֻ���ת�¼�
//    addEventListener('orientationchange', function() {
//    document.documentElement.style.fontSize = 100 * innerWidth / 750 + 'px'
//    });
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    /*DOMContentLoaded�ĵ�������ɲ�����ͼƬ��Դ onload����ͼƬ��Դ*/
})(document, window);
/*
    1rem = 100px;
 <script type="text/javascript">
 (function(doc, win) {
 var basicWidth = 750;
 var minWidth = 320;
 var htmlElement = doc.documentElement;
 var recalc = function() {
 var clientWidth = htmlElement.clientWidth || (basicWidth / 2);
 clientWidth = clientWidth < minWidth? minWidth : clientWidth;
 htmlElement.style.fontSize = 100 * (clientWidth / basicWidth) + 'px';
 };
 recalc();
 if (!win.addEventListener) return;
 win.addEventListener('resize', recalc, false);
 })(document, window);
 </script>

 * */