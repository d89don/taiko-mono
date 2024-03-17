export const enum ClaimSteps {
  CHECK,
  REVIEW,
  CONFIRM,
}

export const INITIAL_STEP = ClaimSteps.CHECK;

export const enum ClaimTypes {
  CLAIM,
  RETRY,
  RELEASE,
}

export const enum ClaimStatus {
  PENDING,
  DONE,
}
