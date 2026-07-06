import type { ChallengeMeta } from '../../types';

export const meta: ChallengeMeta = {
  id: '09-lifting-state',
  baseId: '09-lifting-state',
  difficulty: 'intermediate',
  progressKey: 'intermediate:09-lifting-state',
  moduleNumber: 9,
  title: 'The Shared Pick Board',
  topic: 'Lifting State Up',
  narrative:
    'Analysts need one parent-owned pick board where the form adds picks and each list row can remove itself through callbacks from shared state.',
  flagString: 'FLAG{SHARED_PICK_BOARD_INT}',
  estimatedMinutes: 18,
  hints: [
    'Keep picks state in PickBoard, not in PickForm or PickList.',
    'Pass onAddPick to the form and onRemovePick to the list rows.',
    'Use functional state updates when adding or removing picks so updates always use the latest state.',
  ],
};
