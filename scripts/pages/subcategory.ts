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

			$("./div[@id='SubNavBar']") {
				inner_wrap("div") {
			 		attribute("id","scroller")
			 	}

			 	inject_after("<script type='text/javascript'>var myScroll = new iScroll('SubNavBar', { hScrollbar: false, vScrollbar: false, vScroll: false, onBeforeScrollStart: function ( e ) { if ( this.absDistX > (this.absDistY + 5 ) ) { e.preventDefault();}} });</script>")
			}

			$("./div[@id='MainContentHolder']") {
				$(".//img[contains(@src,'8FA5EBC4B16A4F58923BC451E9106450.jpg')]") {
					add_class("mw_display_none")
				}
				move_here("./div[@id='RightColumn']","bottom") {
					$("./div[@class='RightColumn_Block']") {
						$("./div[@class='txt']") {
							$("./ul[@id='PI_UL_Right']") {
								$("./li") {
									$("./a") {
										$("./img[contains(@alt,'Contact Us')]") {
											inject_before("Contact Us")
											add_class("mw_display_none")
										}
									}
								}

								$("./li[1]") {
									attribute("data-ur-set","toggler")

									$("./a") {
										name("span")
										attribute("data-ur-toggler-component","button")
											attribute("data-ur-state","disabled")
									}

									$("./ul") {
										attribute("data-ur-toggler-component","content")
										attribute("data-ur-state","disabled")
									}
								}
							}
						}
					}
				}

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