$("./body") {	
	$(".//div[@id='SiteFrame']") {
		attribute("data-role","page")
	}
	$(".//div[@id='mw_body']") {
		add_class("mw_home")
		attribute("data-role","content")
		
		move_here("//div[@id='ContentFrame']") {
			$("./br") {
				remove()
			}

			$("./div[@id='slider-wrapper']") {
				move_here("./div[@id='slider']","top")
			}
		}
	}

	$(".//div[@id='TopBar']") {
		add_class("mw_display_none")
	}

	$(".//div[@id='NavBar']") {
		add_class("mw_display_none")
	}

	$(".//div[@id='FooterBlocks']") {
		add_class("mw_display_none")
	}

	$(".//div[@id='SiteMapbar']") {
		add_class("mw_display_none")
	}

	$(".//div[@id='FooterBar']") {
		add_class("mw_display_none")
	}
}