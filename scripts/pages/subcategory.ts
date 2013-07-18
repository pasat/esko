$("./body") {	
	$(".//div[@id='SiteFrame']") {
		attribute("data-role","page")
	}
	$(".//div[@id='mw_body']") {
		add_class("mw_subcategory")
		attribute("data-role","content")
		
		move_here("//div[@id='ContentFrame']") {
			$("./br") {
				remove()
			}

			move_here("./div[@id='SubNavBar']","top") {
				inner_wrap("div") {
					attribute("id","scroller")
				}
				inject_after("<script type='text/javascript'>var myScroll = new iScroll('SubNavBar', { hScrollbar: false, vScrollbar: false, vScroll: false, onBeforeScrollStart: function ( e ) {
        if ( this.absDistX > (this.absDistY + 5 ) ) {
            e.preventDefault();
        }
    } });</script>")
			}

			$("./div[@id='MainContentHolder']") {
				move_here("./div[@id='RightColumn']","bottom")

				$(".//img") {
					remove("@style")
					attributes(width:"",height:"")
				}
				$(".//a[@class='eskobutton']") {
					remove("@style")
				}

				$(".//h2") {
					remove("@style")
				}
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