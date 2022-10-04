import { css } from '@emotion/css';
import { AlertState } from 'app/plugins/datasource/alertmanager/types';
import { RadioButtonGroup, Label, useStyles2 } from 'packages/grafana-ui/src';
import React from 'react';

import { GrafanaTheme2, SelectableValue } from '@grafana/data';

interface Props {
  stateFilter?: AlertState;
  onStateFilterChange: (value: AlertState) => void;
}

export const AlertStateFilter = ({ onStateFilterChange, stateFilter }: Props) => {
  const styles = useStyles2(getStyles);
  const alertStateOptions: SelectableValue[] = Object.entries(AlertState)
    .sort(([labelA], [labelB]) => (labelA < labelB ? -1 : 1))
    .map(([label, state]) => ({
      label,
      value: state,
    }));

  return (
    <div className={styles.wrapper}>
      <Label>State</Label>
      <RadioButtonGroup options={alertStateOptions} value={stateFilter} onChange={onStateFilterChange} />
    </div>
  );
};

const getStyles = (theme: GrafanaTheme2) => ({
  wrapper: css`
    margin-left: ${theme.spacing(1)};
  `,
});