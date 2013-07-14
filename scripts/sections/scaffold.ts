$("body") {
	$(".//div[@id='SiteFrameHolder']") {
		$("./div[@id='SiteFrame']") {
			insert_top("header", id: "mw_header") {
			    insert_after("div", id: "mw_body") {
			      insert_after("footer", id: "mw_footer")
			    }
			}
		}
	}
}