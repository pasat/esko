$("./body") {
  $(".//footer[@id='mw_footer']") {
    add_class("mw_footer_bars")
    attribute("data-ur-set","toggler")
		attribute("data-role","content")
		    
    insert_footer_accordions()
    insert_footer_bottom() {
      insert_footer_copyright("© Esko-Graphics bvba 2013 - Packaging and printing pre-production solutions") # CHANGE THIS
      insert_moovweb_callout("sprites/moovweb.png")
    }
    
    #inject_top("<h3 data-ur-toggler-component='button' data-ur-state='disabled'>Show</h3>")
    
    $("./div[@id='mw_footer_accordions_container']") {
		  attribute("data-ur-toggler-component","content")
			attribute("data-ur-state","disabled")
	  }
  }
  
  #### Move content to the footer
  #### EVERYTHING BELOW THIS LINE SHOULD BE MODIFIED FOR YOUR SITE ####
  $(xpath_from_body("div[@id='nav-footer']")) {
    $("div[contains(@class, 'col')]") {
      $("h3") {
        insert_footer_nav_item(fetch("text()"), "")
      }
      $("ul/li/a") {
        insert_footer_nav_item_link(fetch("text()"), fetch("@href"))
      }
    }
  }
}