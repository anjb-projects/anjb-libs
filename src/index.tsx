import {
  AuthResponse,
  ValidateJwtResponse,
  loginGql,
  signUpGql,
  validateJwtGql,
} from './data/auth'
import {
  DocumentCategory,
  createDocumentCategoryGql,
  updateDocumentCategoryGql,
  deleteDocumentCategoryGql,
  getDocumentCategoryByIdGql,
  listDocumentCategoriesGql,
} from './data/document-categories'
import {
  DocumentUpload
 } from './data/document-uploads'
import {
  Document,
  createDocumentGql,
  updateDocumentGql,
  deleteDocumentGql,
  getDocumentByIdGql,
  listDocumentsGql,
} from './data/documents'
import { BaseImageUpload} from './data/image-uploads'
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
  cancelProductOrderGql,
  createProductOrderGql,
  getProductOrderByIdGql,
  listProductOrdersGql,
} from './data/product-orders'
import {
  ProductVariant,
  getProductVariantTitle,
  createProductVariantGql,
  updateProductVariantGql,
  deleteProductVariantGql,
  getProductVariantByIdGql,
  listProductVariantsGql,
} from './data/product-variants'
import {
  Product,
  createProductGql,
  updateProductGql,
  listProductsGql,
  getProductByIdGql,
  deleteProductGql,
} from './data/products'
import {
  Publication,
  PublicationStatus,
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
  createSubscriptionPlanGql,
  updateSubscriptionPlanGql,
  deleteSubscriptionPlanGql,
  getSubscriptionPlanByIdGql,
  listSubscriptionPlansGql,
} from './data/subscription-plans'
import {
  Subscription,
  SubscriptionStatus,
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
  createDocumentCategoryGql,
  updateDocumentCategoryGql,
  deleteDocumentCategoryGql,
  getDocumentCategoryByIdGql,
  listDocumentCategoriesGql,

  // Document Uploads
  DocumentUpload,

  // Documents
  Document,
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
  cancelProductOrderGql,
  createProductOrderGql,
  getProductOrderByIdGql,
  listProductOrdersGql,

  // Product Variants
  ProductVariant,
  getProductVariantTitle,
  createProductVariantGql,
  updateProductVariantGql,
  deleteProductVariantGql,
  getProductVariantByIdGql,
  listProductVariantsGql,

  // Products
  Product,
  createProductGql,
  updateProductGql,
  listProductsGql,
  getProductByIdGql,
  deleteProductGql,

  // Publications
  Publication,
  PublicationStatus,
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
  createPublicationCategoryGql,
  updatePublicationCategoryGql,
  deletePublicationCategoryGql,
  listPublicationCategoriesGql,
  getPublicationCategoryByIdGql,

  // Users
  UserRole,
  User,
  formatUserRole,
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
  createSubscriptionPlanGql,
  updateSubscriptionPlanGql,
  deleteSubscriptionPlanGql,
  getSubscriptionPlanByIdGql,
  listSubscriptionPlansGql,

  // Subscriptions
  SubscriptionStatus,
  Subscription,
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
