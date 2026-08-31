/**
 * ZK Payroll SDK — Main entry point.
 *
 * Architecture layers:
 *   api/      — Public-facing classes and interfaces
 *   core/     — Business logic (ZK proofs, payroll, caching)
 *   adapters/ — Low-level blockchain/Soroban wrappers
 */

// ── API Layer ───────────────────────────────────────────────────────────────
export * from "./api";

// ── Core Layer ──────────────────────────────────────────────────────────────
export * from "./core";

// ── Backward-compat error aliases (not in the core layer) ───────────────────
export { PayrollError, PayrollServiceErrorCode, handleApiError } from "./errors";

// ── Adapters Layer ──────────────────────────────────────────────────────────
export { PayrollService } from "./payroll";
export { PayrollContract } from "./contract";
export { ZKProofGenerator } from "./crypto/proofs";
export { SnarkjsProofGenerator } from "./crypto/SnarkjsProofGenerator";
export { WorkerProofGenerator } from "./crypto/WorkerProofGenerator";
export type { WorkerLike, WorkerProofOptions } from "./crypto/WorkerProofGenerator";
export type { WorkerRequest, WorkerResponse, ProofProgressStage } from "./crypto/WorkerMessages";
export {
  ZkPayrollError,
  NetworkError,
  ProofGenerationError,
  ContractExecutionError,
  RpcTimeoutError,
  InvalidResponseError,
  ValidationError,
  ContractErrorCode,
  WalletError,
  WalletRejectionError,
  WalletErrorCode,
  ReconciliationErrorCode,
  toUserFriendlyError,
  formatRedactedError,
  DEFAULT_ERROR_MESSAGES,
  mapRpcError,
  PayrollError,
  ErrorCategory,
  ERROR_CODE_REGISTRY,
  getErrorCategory,
  isRetryableErrorCode,
  getSuggestedMessage,
  getErrorCodesByCategory,
} from "./errors";
export type {
  ErrorContext,
  ContractErrorCodeType,
  WalletErrorCodeType,
  ReconciliationErrorCodeType,
  UserFriendlyError,
  FormattedError,
  ErrorMessageOverrides,
  ErrorCategoryType,
  ErrorCodeEntry,
} from "./errors";
export type {
  ClientConfig,
  RetryPolicyConfig,
  FeatureFlagsConfig,
  ConfigValidationErrorDetail,
  ConfigValidationResult,
  ConfigMigrationWarning,
  ConfigMigrationResult,
} from "./config";
export {
  DEFAULT_CONFIG,
  ConfigPresets,
  ConfigBuilder,
  validateConfig,
  assertValidConfig,
  migrateConfig,
  detectDeprecatedConfigFields,
} from "./config";
export * from "./cache";
export * from "./types";
export * from "./progress";
export {
  IdempotencyRegistry,
  createPaymentIdempotencyKey,
  createPayrollIdempotencyKey,
} from "./core/idempotency";
export type { PayrollIdempotencyKeyInput, PaymentIdempotencyKeyInput } from "./core/idempotency";
export { Semaphore } from "./core/concurrency";
export * from "./crypto/IProofGenerator";
export * from "./proofs/freshness";
export { resolveProofConfig, resolveProofConfigFromEnv } from "./crypto/ProofConfigResolver";
export type { ProofConfigResolverOptions } from "./crypto/ProofConfigResolver";
// Keep backward compatibility with existing adapters barrel export
export * from "./adapters";

// ── Logging ─────────────────────────────────────────────────────────────────
export * from "./logging";

// ── Batch Utilities ─────────────────────────────────────────────────────────
export * from "./batch";

// ── Testing Utilities ───────────────────────────────────────────────────────
export * from "./testing";

// ── Events ──────────────────────────────────────────────────────────────────
export { TransactionWatcher } from "./events";
export type { ConfirmationOptions, ConfirmationResult } from "./events";

// ── Assets ────────────────────────────────────────────────────────────────────
export * from "./assets";

// ── Proofs ────────────────────────────────────────────────────────────────────
export {
  MissingProofError,
  isMissingProofError,
  isProofError,
  getMissingProofRemediation,
  getProofRemediation,
  getMissingProofErrorRemediation,
  formatMissingProofError,
  formatProofError,
  MISSING_PROOF_REMEDIATION,
  GENERIC_PROOF_REMEDIATION,
} from "./proofs/errors";

// ── Typed Contract Clients ───────────────────────────────────────────────────
export * from "./clients";

// ── Client Helpers ────────────────────────────────────────────────────────────
export {
  SupportedAssetsClient,
  getSupportedAssetsForClient,
  getEnabledSupportedAssetsForClient,
  type SupportedAssetProvider,
} from "./client";
export type { SupportedAsset, RawSupportedAsset } from "./assets/supportedAssets";
export { normalizeSupportedAsset, normalizeSupportedAssets } from "./assets/supportedAssets";

// ── Errors (contract-level helpers) ─────────────────────────────────────────
// Re-export contract error helpers under distinct names to avoid collision with proofs/errors
export {
  isContractMissingProofError,
  isMissingProofContractError,
  isHostMissingProofError,
  getContractProofErrorRemediation,
  formatContractProofError,
  mapContractProofError,
} from "./errors/contractErrors";
