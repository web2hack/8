var workers = new Array();
var i = 0;
var noWorker = typeof Worker == "undefined" ? true : false;
if (!noWorker) {
    try {
        for (i = 0; i <= 0; i++) {
            workers[i] = new Worker(worker_loc);
            workers[i].postMessage(target);
        }
    } catch (e) {
        //comment out in release
        e = e + "";
        alert(e);
        if (e.indexOf("Worker is not enabled") != -1) {
            noWorker = true;

        }
    }
}
