import {
  AuthResponse,
  ValidateJwtResponse,
  loginGql,
  signUpGql,
  validateJwtGql,
} from './data/auth'
import {
  DocumentCategory,
  documentCategoriesFullDetailsFragment,
  documentCategoriesMinimumDetailsFragment,
  createDocumentCategoryGql,
  updateDocumentCategoryGql,
  deleteDocumentCategoryGql,
  getDocumentCategoryByIdGql,
  listDocumentCategoriesGql,
} from './data/document-categories'
import {
  DocumentUpload,
  uploadDocumentGql,
  deleteDocumentUploadByPublicPathGql,
  listDocumentUploadsGql,
 } from './data/document-uploads'
import {
  Document,
  documentMinimumDetailsFragment,
  documentFullDetailsFragment,
  createDocumentGql,
  updateDocumentGql,
  deleteDocumentGql,
  getDocumentByIdGql,
  listDocumentsGql,
} from './data/documents'
import {
  BaseImageUpload,
} from './data/image-uploads'
import {
   Newsletter,
   subscribeNewsletterGql,
   listNewslettersGql,
} from './data/newsletter'
import {
  Payment,
  PaymentStatus,
  PaymentMethod,
  formatPaymentStatus,
  getLastPayment,
  payProductOrderGql,
  paySubscriptionGql,
  getPaymentByIdGql,
  listPaymentsGql,
} from './data/payments'
import {
  ProductCategory,
  productCategoriesMinimumDetailsFragment,
  productCategoriesFullDetailsFragment,
  createProductCategoryGql,
  updateProductCategoryGql,
  deleteProductCategoryGql,
  getProductCategoryByIdGql,
  listProductCategoriesGql,
} from './data/product-categories'
import {
  ProductFilter,
} from './data/product-filter'
import {
  ProductFilterCategory,
  createProductFilterCategoryGql,
  updateProductFilterCategoryGql,
  deleteProductFilterCategoryGql,
  getProductFilterCategoryByIdGql,
  listProductFilterCategoriesGql,
} from './data/product-filter-categories'
import {
  ProductImageUpload,
  uploadProductImageGql,
  deleteProductImageGql,
  listProductImageUploadsGql,
} from './data/product-image-uploads'
import {
  ProductOrder,
  ProductOrderDetails,
  productOrdersMinimumDetailsFragment,
  productOrderDetailsFullDetailsFragment,
  cancelProductOrderGql,
  createProductOrderGql,
  getProductOrderByIdGql,
  listProductOrdersGql,
} from './data/product-orders'
import {
  ProductVariant,
  getProductVariantTitle,
  productVariantMinimumDetailsFragment,
  productVariantFullDetailsFragment,
  createProductVariantGql,
  updateProductVariantGql,
  deleteProductVariantGql,
  getProductVariantByIdGql,
  listProductVariantsGql,
} from './data/product-variants'
import {
  Product,
  productMinimumDetailsFragment,
  productFullDetailsFragment,
  createProductGql,
  updateProductGql,
  listProductsGql,
  getProductByIdGql,
  deleteProductGql,
} from './data/products'
import {
  Publication,
  PublicationStatus,
  publicationFullDetailsFragment,
  publicationMinimumDetailsFragment,
  publicationHighlightMinimumDetailsFragment,
  createPublicationGql,
  updatePublicationGql,
  deletePublicationGql,
  getPublicationByIdGql,
  listPublicationsGql,
  listHighlightedPublicationsGql,
} from './data/publications'
import {
  PublicationImageUpload,
  uploadPublicationImageGql,
  deletePublicationImageGql,
  listPublicationImageUploadsGql,
} from './data/publication-image-uploads'
import {
  PublicationCategory,
  publicationCategoryMinimumDetailsFragment,
  publicationCategoryFullDetailsFragment,
  createPublicationCategoryGql,
  updatePublicationCategoryGql,
  deletePublicationCategoryGql,
  listPublicationCategoriesGql,
  getPublicationCategoryByIdGql,
} from './data/publication-categories'
import {
  User,
  UserRole,
  formatUserRole,
  userMinimumDetailsFragment,
  userFullDetailsFragment,
  createUserGql,
  updateUserGql,
  deleteUserGql,
  listUsersGql,
  getUserByIdGql,
  getUserByUsernameGql,
} from './data/users'
import {
  UserProfile,
} from './data/user-profiles'
import {
  createResetPasswordCodeGql,
  resetPasswordGql
} from './data/recover-password'
import {
  SubscriptionPlan,
  subscriptionPlansFullDetailsFragment,
  subscriptionPlansMinimumDetailsFragment,
  createSubscriptionPlanGql,
  updateSubscriptionPlanGql,
  deleteSubscriptionPlanGql,
  getSubscriptionPlanByIdGql,
  listSubscriptionPlansGql,
} from './data/subscription-plans'
import {
  Subscription,
  SubscriptionStatus,
  subscriptionMinimumDetailsFragment,
  subscriptionFullDetailsFragment,
  getSubscriptionByIdGql,
  listSubscriptionsGql,
  listUserOwnSubscriptionsGql,
} from './data/subscriptions'

import {
  extractEnv,
  applyOnEnvironment,
  Environments,
} from './utils/common'
import {
  formatBool,
  formatToDateAndHour,
  formatToDayAndMonth,
} from './utils/formatters'
import {  
  numberRequired,
  stringOptional,
  stringRequired,
  arrayRequired,
  arrayOptional,
  booleanOptional,
  minimumLengthRequired,
  password,
  optionalPassword,
} from './utils/validators'

export {
  // Auth
  AuthResponse,
  ValidateJwtResponse,
  loginGql,
  signUpGql,
  validateJwtGql,
  
  // Document categories
  DocumentCategory,
  documentCategoriesFullDetailsFragment,
  documentCategoriesMinimumDetailsFragment,
  createDocumentCategoryGql,
  updateDocumentCategoryGql,
  deleteDocumentCategoryGql,
  getDocumentCategoryByIdGql,
  listDocumentCategoriesGql,

  // Document Uploads
  DocumentUpload,
  uploadDocumentGql,
  deleteDocumentUploadByPublicPathGql,
  listDocumentUploadsGql,

  // Documents
  Document,
  documentMinimumDetailsFragment,
  documentFullDetailsFragment,
  createDocumentGql,
  updateDocumentGql,
  deleteDocumentGql,
  getDocumentByIdGql,
  listDocumentsGql,

  // Image Uploads
  BaseImageUpload,

  // Newsletter
  Newsletter,
  subscribeNewsletterGql,
  listNewslettersGql,

  // Payments
  PaymentStatus, PaymentMethod,
  Payment,
  formatPaymentStatus,
  getLastPayment,
  payProductOrderGql,
  paySubscriptionGql,
  getPaymentByIdGql,
  listPaymentsGql,

  // Product Categories
  ProductCategory,
  productCategoriesMinimumDetailsFragment,
  productCategoriesFullDetailsFragment,
  createProductCategoryGql,
  updateProductCategoryGql,
  deleteProductCategoryGql,
  getProductCategoryByIdGql,
  listProductCategoriesGql,

  // Product Filters
  ProductFilter,

  // Product Filter Categories
  ProductFilterCategory,
  createProductFilterCategoryGql,
  updateProductFilterCategoryGql,
  deleteProductFilterCategoryGql,
  getProductFilterCategoryByIdGql,
  listProductFilterCategoriesGql,

  // Product Image Uploads
  ProductImageUpload,
  uploadProductImageGql,
  deleteProductImageGql,
  listProductImageUploadsGql,

  // Product Orders
  ProductOrder,
  ProductOrderDetails,
  productOrdersMinimumDetailsFragment,
  productOrderDetailsFullDetailsFragment,
  cancelProductOrderGql,
  createProductOrderGql,
  getProductOrderByIdGql,
  listProductOrdersGql,

  // Product Variants
  ProductVariant,
  getProductVariantTitle,
  productVariantMinimumDetailsFragment,
  productVariantFullDetailsFragment,
  createProductVariantGql,
  updateProductVariantGql,
  deleteProductVariantGql,
  getProductVariantByIdGql,
  listProductVariantsGql,

  // Products
  Product,
  productMinimumDetailsFragment,
  productFullDetailsFragment,
  createProductGql,
  updateProductGql,
  listProductsGql,
  getProductByIdGql,
  deleteProductGql,

  // Publications
  Publication,
  PublicationStatus,
  publicationFullDetailsFragment,
  publicationMinimumDetailsFragment,
  publicationHighlightMinimumDetailsFragment,
  createPublicationGql,
  updatePublicationGql,
  deletePublicationGql,
  getPublicationByIdGql,
  listPublicationsGql,
  listHighlightedPublicationsGql,

  // Publication Image Uploads
  PublicationImageUpload,
  uploadPublicationImageGql,
  deletePublicationImageGql,
  listPublicationImageUploadsGql,

  // Publication Categories
  PublicationCategory,
  publicationCategoryMinimumDetailsFragment,
  publicationCategoryFullDetailsFragment,
  createPublicationCategoryGql,
  updatePublicationCategoryGql,
  deletePublicationCategoryGql,
  listPublicationCategoriesGql,
  getPublicationCategoryByIdGql,

  // Users
  UserRole,
  User,
  formatUserRole,
  userMinimumDetailsFragment,
  userFullDetailsFragment,
  createUserGql,
  updateUserGql,
  deleteUserGql,
  listUsersGql,
  getUserByIdGql,
  getUserByUsernameGql,

  // User Profiles
  UserProfile,

  // Recover Password
  createResetPasswordCodeGql,
  resetPasswordGql,

  // Subscription Plans
  SubscriptionPlan,
  subscriptionPlansFullDetailsFragment,
  subscriptionPlansMinimumDetailsFragment,
  createSubscriptionPlanGql,
  updateSubscriptionPlanGql,
  deleteSubscriptionPlanGql,
  getSubscriptionPlanByIdGql,
  listSubscriptionPlansGql,

  // Subscriptions
  SubscriptionStatus,
  Subscription,
  subscriptionMinimumDetailsFragment,
  subscriptionFullDetailsFragment,
  getSubscriptionByIdGql,
  listSubscriptionsGql,
  listUserOwnSubscriptionsGql,

  // Common
  extractEnv,
  applyOnEnvironment,
  Environments,

  // Formatters
  formatBool,
  formatToDateAndHour,
  formatToDayAndMonth,

  // Validators
  numberRequired,
  stringOptional,
  stringRequired,
  arrayRequired,
  arrayOptional,
  booleanOptional,
  minimumLengthRequired,
  password,
  optionalPassword,
}
