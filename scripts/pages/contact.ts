$("./body") {	
	$(".//div[@id='SiteFrame']") {
		attribute("data-role","page")
	}
	$(".//div[@id='mw_body']") {
		add_class("mw_contact")
		attribute("data-role","content")
		
		move_here("//div[@id='ContentFrame']") {
			$("./br") {
				remove()
			}

			$("./div[@id='MainContentHolder']") {
				move_here("./div[@id='RightColumn']","bottom")

				$("./div[@class='MainContent']") {
					$("./div[@class='scfForm']") {
						$(".//div[@class='scfSectionContent']") {
							$("./div[contains(@class,'scfSingleLineTextBorder')]") {
								move_here("./span[@class='scfRequired']","top")
								move_here("./label[@class='scfSingleLineTextLabel']","top")
							}
							$("./div[contains(@class,'scfMultipleLineTextBorder')]") {
								move_here("./span[@class='scfRequired']","top")
								move_here("./label[@class='scfMultipleLineTextLabel']","top")
							}

							$("./div[contains(@class,'scfDropListBorder')]") {
								move_here("./span[@class='scfRequired']","top")
								move_here("./label[@class='scfDropListLabel']","top")
							}
						}

						$(".//select[@class='scfDropList']") {
							wrap("div") {
								add_class("mw_select")
							}
						}
					}
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