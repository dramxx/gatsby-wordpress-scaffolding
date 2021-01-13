# ENV
- install wordpress locally
- install gatsby-source-wordpress
- install gatsby-plugin-styled-components


# WP 
- install null theme

# GATSBY
- update gatsby-config.js with plugins and wp url

## CUSTOM POST TYPE

```php
function create_custom_portfolio_post_type(){
	register_post_type('portfolio', array(
		'labels' => array(
			'name' => __('Portfolio'),
			'singular_name' => __('Portfolio'),
		), 
		'public' => true,
		'show_in_admin_bar' => true,
		'show_in_rest' => true
	));
		
	add_post_type_support('portfolio', array('thumbnail'));
}

add_action('init', 'create_custom_portfolio_post_type');
```

include portfolio in gatsby-config/includedRoutes[]

## ADVANCED CUSTOM FIELDS

install in /wordpress/wp-admin 
- Advanced Custom Fields by Elliot Condon
- ACF to REST API by Aires Gonçalves



