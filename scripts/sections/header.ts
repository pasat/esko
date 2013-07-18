%menu_uranium_id = "navigation_menu"

$('./body') {
	$(".//header[@id='mw_header']") {
		add_class("mw_logo_center")
		attribute("data-role","content")
    
	    #### Insert a colored bar at the top of the header
	    insert_colored_bar()
	    
	    #### Insert the top row of the site header, including buttons and logo
	    insert_header_top_row() {
			insert_header_buttons("left") {
				insert_menu_button(%menu_uranium_id)
			}
			insert_header_buttons("right") {
				insert("li") {
					attribute("id","mw_search_btn")
					attribute("data-ur-toggler-component","button")
					attribute("data-ur-id","navigation_search")
					attribute("data-ur-state","disabled")
				}
			}
			grab_site_logo("/html/body//div[@id='Logo']") # CHANGE THIS

			$("./div[@id='mw_site_logo']") {
				$("./div[@id='Logo']") {
					$("./a") {
						$(".//img[contains(@id,'EskoLogoImage')]") {
							add_class("mw_display_none")
						}
						inject_top("Esko - packaging and printing pre-media solutions")
					}
				}
			}
	  }
    
	  #### Insert a search form under the site header
	  #insert_search_bar("get", "search.php", "return check_small_search_form()") # CHANGE THIS
	    
		move_here("//div[@id='Searchbar']") {
			attribute("data-ur-toggler-component","content")
			attribute("data-ur-id","navigation_search")
			attribute("data-ur-state","disabled")

			$("./div[@id='SearchHolder']") {
				add_class("mw_search_bar")

				move_here(".//input[@class='searchSubmitButton']","top") {
					add_class("mw_search_btn")
				}

				$("./div[@class='clearfloats']") {
					add_class("mw_display_none")
				}

				$(".//input[@class='SearchField']") {
					add_class("mw_search_field")

					wrap("div") {
						add_class("mw_search_field_container")
					}
				}
			}

			$("./div[@class='clearfloats']") {
				add_class("mw_display_none")
			}

			$("./div[@id='ContactHolder']") {
				add_class("mw_display_none")
			}
		}
	}
  
	##### Insert the navigation menu
	insert_menu_content(%menu_uranium_id)

	#### Traverse the original site's navigation and send the menu links to the constructed header
	#### EVERYTHING BELOW THIS LINE SHOULD BE MODIFIED FOR YOUR SITE ####

	$(xpath_from_body("div[@id='NavHolder']")) {
		$("div") {
			$("ul[@id='nav']") {
				$("li/a") {
					insert_menu_item(fetch("text()"), fetch("@href"))
				}

				$("li[1]/ul") {
					add_class("mw_nav_sub_content")
					move_to("//div[@class='mw_nav_item'][1]//ul[@class='mw_nav_content']")
				}

				$("li[2]/ul") {
					add_class("mw_nav_sub_content")
					move_to("//div[@class='mw_nav_item'][2]//ul[@class='mw_nav_content']")
				}

				$("li[3]/ul") {
					add_class("mw_nav_sub_content")
					move_to("//div[@class='mw_nav_item'][3]//ul[@class='mw_nav_content']")
				}

				$("li[4]/ul") {
					add_class("mw_nav_sub_content")
					move_to("//div[@class='mw_nav_item'][4]//ul[@class='mw_nav_content']")
				}

				$("li[5]/ul") {
					add_class("mw_nav_sub_content")
					move_to("//div[@class='mw_nav_item'][5]//ul[@class='mw_nav_content']")
				}
			} 
		}
	}
  
	## To insert a visual separator in the navigation menu
	/*insert_menu_item_separator("") {
		move_to("../*[1]", "after")
	}
	insert_menu_item_separator("") {
		move_to("../*[8]", "after")
	}*/
	## To insert a link at the same level as the navigation menu accordions
	# insert_menu_top_level_link("Example Top Level Link", "www.example.com") 
}
