module.exports = {
    resolveTrackingLinkIssue: function (tracking) {
        if (!tracking.includes('{visitor_id}')) return 'Your tracking does not include the mandatory visitor_id parameter!';
        else if (hasWhiteSpace(tracking)) return 'Your tracking link has a blank space in the ' + (tracking.indexOf(' ')+1) + 'th character.';
        else if (!isUrl(tracking)) return 'This is not a correct URL';
        else return 'Ask Oriol.';
    }
   
}

function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
}

function isUrl(str) {
    var strRegex = "^((https|http)?://)"
        + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
        + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
        + "|" // 允许IP和DOMAIN（域名）
        + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
        + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
        + "[a-z]{2,6})" // first level domain- .com or .museum
        + "(:[0-9]{1,4})?" // 端口- :80
        + "((/?)|" // a slash isn't required if there is no file name
        + "(/[0-9a-z_!~*'().;?:@&=+$,%#-{}]+)+/?)$";
    var re=new RegExp(strRegex);
    return re.test(str);
}