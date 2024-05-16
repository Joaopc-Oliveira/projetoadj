<?php

namespace Drupal\workflow_weight\Plugin\views\sort;

use Drupal\views\Plugin\views\sort\SortPluginBase;

/**
 * Classifica por peso dos estados de workflow.
 *
 * @ViewsSort("workflow_state_weight")
 */
class WorkflowStateWeight extends SortPluginBase {

  /**
   * {@inheritdoc}
   */
  public function query() {
    // Assegura que a tabela principal está incluída.
    $this->ensureMyTable();

    // Adiciona a ordenação baseada no campo 'weight'.
    // Certifique-se de que o campo 'weight' existe na tabela associada ao workflow.
    $this->query->addOrderBy($this->tableAlias, 'weight', $this->options['order']);
  }

}
