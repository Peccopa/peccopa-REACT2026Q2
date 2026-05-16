import type { MouseEventHandler } from 'react';

import { Button } from '@/shared';

import { TEXTS } from '../config/texts';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function ErrorButton({ onClick }: Props) {
  return <Button onClick={onClick}>{TEXTS.error}</Button>;
}
