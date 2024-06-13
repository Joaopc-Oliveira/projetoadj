<?php

use Drupal\Core\Routing\RouteMatchInterface;

/**
 * Implements hook_theme_suggestions_HOOK_alter() to add a template suggestion.
 */
function dynamic_menu_theme_suggestions_page_alter(array &$suggestions, array $variables) {
  $route_name = \Drupal::routeMatch()->getRouteName();
  if ($route_name == 'dynamic_menu.content') {
    $suggestions[] = 'page__dynamic_menu';
  }
}
