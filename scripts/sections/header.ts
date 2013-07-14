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
				%cart_counter_text = strip_non_digits(fetch(xpath_from_body("li[@class='CartLink']/a/span/text()"))) # CHANGE THIS
				insert_cart_button_with_counter("cart.php", %cart_counter_text) # CHANGE THIS
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
			$("./div[@id='SearchHolder']") {
				add_class("mw_search_bar")

				$("./div[@class='clearfloats']") {
					add_class("mw_display_none")
				}

				$(".//input[@class='searchSubmitButton']") {
					add_class("mw_search_btn")
				}

				$(".//input[@class='SearchField']") {
					add_class("mw_search_field")

					wrap("div") {
						add_class("mw_search_field_container")
					}
				}
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
			}  	

			$("li[contains(@class,'Industries')]/div/ul/li[@class='parent']") {
				add_class("mw_nav_sub_content")
				attribute("data-ur-set","toggler")

				$("a") {
					name("div")
					add_class("mw_nav_sub_btn_inner")
				}
				inner_wrap("div") {
					add_class("mw_nav_sub_btn")
					attribute("data-ur-toggler-component","button")
					attribute("data-ur-state","disabled")
				}
				insert("div") {
					add_class("mw_nav_sub_content_inner")
					attribute("data-ur-toggler-component","content")
					attribute("data-ur-state","disabled")
				}
				move_to("//div[@class='mw_nav_item'][1]//ul[@class='mw_nav_content']")
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
