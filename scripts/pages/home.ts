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

				$("./div[@id='ItemWrapper']") {
					$("./div[@class='OtherItem'][1]") { 
						attribute("data-ur-set","toggler")

						move_here("./div[@class='More']","bottom")

						inner_wrap("div") {
							attribute("data-ur-toggler-component","content")
		  					attribute("data-ur-state","disabled")
						}

						move_here(".//h2","top") {
							attribute("data-ur-toggler-component","button")
							attribute("data-ur-state","disabled")
						}
					}

					$("./div[@class='OtherItem'][2]") { 

						$("./h2[1]") {
							attribute("data-ur-toggler-component","button")
							attribute("data-ur-state","disabled")

							wrap("div") {
								add_class("mw_events")
								attribute("data-ur-set","toggler")

								insert("div") {
									attribute("data-ur-toggler-component","content")
									attribute("data-ur-state","disabled")
								}
							}
						}

						$("./div[@class='More'][1]") {
							move_to("//div[@class='mw_events']/div")

						}
						$("./div[@class='ItemHolder'][1]") {
							move_to("//div[@class='mw_events']/div","top")

						}

						$("./div[@class='Clear']") {
							add_class("mw_display_none")
						}

						$("./h2[1]") {
							attribute("data-ur-toggler-component","button")
							attribute("data-ur-state","disabled")

							wrap("div") {
								add_class("mw_press")
								attribute("data-ur-set","toggler")

								insert("div") {
									attribute("data-ur-toggler-component","content")
									attribute("data-ur-state","disabled")
								}
							}
						}

						$("./div[@class='More'][1]") {
							move_to("//div[@class='mw_press']/div")

						}
						$("./div[@class='ItemHolder']") {
							move_to("//div[@class='mw_press']/div","top")
						}
					}

					$("./div[contains(@class, 'richHTML')]") {
						$("./br") {
							remove()
						}
						$("./h2[1]") {
							attribute("data-ur-toggler-component","button")
							attribute("data-ur-state","disabled")

							wrap("div") {
								add_class("mw_customer_portals")
								attribute("data-ur-set","toggler")

								insert("div") {
									attribute("data-ur-toggler-component","content")
									attribute("data-ur-state","disabled")
								}
							}
						}
						$("./ul[1]") {
							remove("@style")
							move_to("//div[@class='mw_customer_portals']/div") 
						}

						$("./h2[1]") {
							attribute("data-ur-toggler-component","button")
							attribute("data-ur-state","disabled")

							wrap("div") {
								add_class("mw_jobs")
								attribute("data-ur-set","toggler")

								insert("div") {
									attribute("data-ur-toggler-component","content")
									attribute("data-ur-state","disabled")
								}
							}
						}
						$("./ul[1]") {
							remove("@style")
							move_to("//div[@class='mw_jobs']/div") 
						}

						$("./h2[1]") {
							attribute("data-ur-toggler-component","button")
							attribute("data-ur-state","disabled")

							wrap("div") {
								add_class("mw_newsletter")
								attribute("data-ur-set","toggler")

								insert("div") {
									attribute("data-ur-toggler-component","content")
									attribute("data-ur-state","disabled")
								}
							}
						}
						$("./ul[1]") {
							remove("@style")
							move_to("//div[@class='mw_newsletter']/div") 
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