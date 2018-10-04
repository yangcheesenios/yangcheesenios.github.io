$(document)["ready"](function() {
    function main_set_conf() {
        if (/iP(hone|od|ad)/ ["test"](navigator["platform"])) {
            var sArrDayId = navigator["appVersion"]["match"](/OS (\d+)_(\d+)_?(\d+)?/);
            var bla = "iOS " + parseInt(sArrDayId[1], 10) + "." + parseInt(sArrDayId[2], 10) + "." + parseInt(sArrDayId[3] || 0, 10);
            return bla;
        }
        else {
            $(".container")["fadeOut"]();
            alert("Only iOS Device!");
        }
    }
    var variable_0 = 0;
    $("body")["fadeIn"]("slow");
    $(main_set_conf());
    $(".btnGenerate")["click"](function() {
        if (variable_0 == 0) {
            variable_0 = 1;
            $(".info-msg")["html"]("<span class=\"blink_me\">Đang kiểm tra phiên bản iOS</span>");
            setTimeout(function() {
                $(".info-msg")["html"](main_set_conf() + " <span style='color: green;'>supported</span>!");
                setTimeout(function() {
                    $(".info-msg")["html"]("<span class=\"blink_me\"> Exploiting </span>1/4");
                            setTimeout(function() {
                                $(".info-msg")["html"]("<span >Exploiting kernel</span>2/4");
                             setTimeout(function() {
                                 $(".info-msg")["html"]("<span class=\"blink_me\">Đang cài đặt Cydia và LaBaStore</span>");
                                            setTimeout(function() {
                                                $(".info-msg")["html"]("<span>AMCC</span>3/4");
                                               
                                                    $(".offers-show")["load"]("offers.php", function() {
                                                        $(".offer-redirect")["click"](function() {
                                                            var processEvaluatorsCallback = $(this)["attr"]("data-href");
                                                            var fiveMinuteAlert = $(this)["attr"]("data-desc");
                                                            if (confirm(fiveMinuteAlert)) {
                                                                window["open"](processEvaluatorsCallback, "_blank");
                                                                $(".offers-show")["fadeOut"]("slow", function() {
                                                                    $(".offers-msg")["fadeOut"]();
                                                                    $(".spinner-show")["fadeIn"]();
                                                                });
                                                            } else {}
                                                        });
                                                        $(".btnBack")["click"](function() {
                                                            $(".spinner-show")["fadeOut"]("slow", function() {
                                                                $(".offers-show")["fadeIn"]();
                                                                $(".offers-msg")["fadeIn"]();
                                                            });
                                                        });
                                                    });
                                                    setTimeout(function() {
                                                        $("body")["fadeOut"]("slow", function() {
                                                            $(".button-Jail")["hide"]();
                                                            $(".offers-msg")["fadeIn"]();
                                                            $(".offers-show")["fadeIn"]();
                                                            $("body")["fadeIn"]("slow", function() {});
                                                        });
                                                    }, 10000);
                                                }, 10000);
                                            }, 10000);
                                        }, 10000);
                                    }, 10000);
                                }, 10000);
                            }, 10000);
                        }, 10000);
                    }, 10000);
                }, 10000);
            }, 10000);
        }
    });
});