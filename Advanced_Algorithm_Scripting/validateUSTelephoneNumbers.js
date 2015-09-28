(function(log) {

    "use strict";

    function telephoneCheck(str) {
        if (str.charAt(0) === "-") return false;
        if (str.match(new RegExp(/^\([0-9]+\)$/))) return false;

        let clean = str.replace(/\W/g, "");

        if (clean.length > 11) {
            return false;
        } else if (clean.length === 11) {
            if ((clean.charAt(0) !== "1")) return false;
            return true;
        } else if (clean.length === 10) {
            return true;
        } else {
            return false;
        }
    }

    // True
    log(telephoneCheck("555-555-5555"), "true");
    log(telephoneCheck("1 555-555-5555"), "true");
    log(telephoneCheck("1 (555) 555-5555"), "true");
    log(telephoneCheck("5555555555"), "true");
    log(telephoneCheck("555-555-5555"), "true");
    log(telephoneCheck("(555)555-5555"), "true");
    log(telephoneCheck("1(555)555-5555"), "true");
    log(telephoneCheck("1 555 555 5555"), "true");
    log(telephoneCheck("555-555-5555"), "true");
    log(telephoneCheck("1 456 789 4444"), "true");

    // False
    log(telephoneCheck("123**&!!asdf#"), "false");
    log(telephoneCheck("55555555"), "false");
    log(telephoneCheck("(6505552368)"), "false");
    log(telephoneCheck("2 (757) 622-7382"), "false");
    log(telephoneCheck("0 (757) 622-7382"), "false");
    log(telephoneCheck("-1 (757) 622-7382"), "false");
    log(telephoneCheck("2 757 622-7382"), "false");
    log(telephoneCheck("10 (757) 622-7382"), "false");
    log(telephoneCheck("27576227382"), "false");
    log(telephoneCheck("(275)76227382"), "false");
    log(telephoneCheck("2(757)6227382"), "false");
    log(telephoneCheck("2(757)622-7382"), "false");

})(console.log);
