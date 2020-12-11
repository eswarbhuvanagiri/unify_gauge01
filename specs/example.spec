# Unify_UAT Testcases

This specification covers user interaction categories from domain creation to bill generation functionalities in unify.

version : 3.8

 



 ## Unify quick 
 This test ascertains that the login page is served whenever the user opens the login page URL. 
* Unify quick Login to "http://35.154.247.136/unifyadmin" as 

  |Label |value|
  |---|-------|
  |Username|admin|
  |Password|admin|
  |Domain|admin|



// * Unify Login page validations
//* Navigate to CRM Customers
//* Click Add organisation
//* Unify Login as "admin" into "http://testing.inventum.net/unifyadmin"

## Unify CRM customer flow
* Unify Login as "admin" into "http://35.154.38.31/unifyadmin"
* Navigate to CRM Customers
* Add organisation "Test_A_org14" under "Shaildhar_Meghalaya(MGH-STSPL)"
* Organisation Link to Ledger

## Unify Add Domain 
This test ascertains that different domain can be created as per the user requirement. 

* Unify Login as "admin" into "http://testing.inventum.net/unifyadmin"
* Add Domain "Test1" under "Inventum"

## Unify COA Creation From Master 
* Unify Login as "admin" into "http://testing.inventum.net/unifyadmin"
* COA "Test_COA01" Creation From Master
* COA currency as "Indian Rupee"
* Add FY start date
* Add externalID
 * Add Instruments Types
 * Add decimal accuracy
 * Add RoundOff
 * Add TimeZone
* Tax jurisdiction
 * Enable FY Enforce and Skip zero value invoice
 //* Save COA

## Unify Add COA Groups
* Unify Login as "admin" into "http://testing.inventum.net/unifyadmin"
* Navigate to COA groups
// * Add COA group as Assets
// * Add COA group as Expenditure
// * Add COA group as Liabilities
 * Add COA group as Revenue

## Ledger Book Creation 
* Unify Login as "admin" into "http://testing.inventum.net/unifyadmin"
* navigate to ledgerbook
* Add ledgerbook

## Fiscal Year Creation 
* Unify Login as "admin" into "http://testing.inventum.net/unifyadmin"
* navigate to Fiscal year
* Add Fiscal year

## CSLNo Config
* Unify Login as "admin" into "http://testing.inventum.net/unifyadmin"
* Navigate to CSL Config
* Add CSLNO config

## CSLNO Config Voucher Type Map List
* Unify Login as "admin" into "http://testing.inventum.net/unifyadmin"
* Navigate to CSLNO Config Voucher Type Map
* Add CSLNO Config Voucher Type Map
 
 ## Network ID
 * Unify Login as "admin" into "http://testing.inventum.net/unifyadmin"
 * Navigate to networkID
 * Add NetworkID

 ## Device Type
 * Unify Login as "admin" into "http://testing.inventum.net/unifyadmin"
 * Navigate to Device Type
 * Add Device Type
## Device Type NetworkId Type Map 
* Unify Login as "admin" into "http://testing.inventum.net/unifyadmin"
* Navigate to Device Type NetworkId Type Map
* Mapping  Device Type NetworkId Type

## FY Control GL Map
* Unify Login as "admin" into "http://testing.inventum.net/unifyadmin"
* Navigate FY Control GL Map
* Mapping FY Control GL Map

## BillProfile
* Unify Login as "admin" into "http://testing.inventum.net/unifyadmin"
* Navigate to Bill RunProfile
* Add BillProfile
## Add Voucher Template
* Unify Login as "admin" into "http://testing.inventum.net/unifyadmin"
* Navigate to Voucher Template
* Add Voucher Template
## Different Ledgers Creation in COA 
* Unify Login as "admin" into "http://testing.inventum.net/unifyadmin"
* Navigate to COA in finance
//* Create ledger for assets"Test_Ledger1"
//* Create ledger for Expenditure"Test_ExpLedger1"
//* Create ledger for Liabilities"Test_LiaLedger"
//* Create ledger for Revenue"Test_RevLedger"

## Add Tax class and components
* Unify Login as "admin" into "http://testing.inventum.net/unifyadmin"
* Navigate to Billing > Taxes
* Add Tax Class as"GST-FaizabadDemo" under "faizabad"

## scalability test
* Unify Login as "admin" into "http://testing.inventum.net/unifyadmin"
* Navigate to CRM Customers

 * Creating multi organisation under"Railtel(railtel)"
Here the organisation testdata sequence is "Test_AA_org"+i

// * Adding Service groups to organisations under"Railtel(railtel)"
Here the ServiceGroup testdata sequence is "Test_SG_org"+i

// * Add Bill setup for the created Service Groups
Here the testdata in fields bill data,billTemplate,billProfile are selected according to Domain

// * Adding subscriptions"1Gbps@AP" to Servicegroups for the organisations under"Railtel(railtel)"
Here the subscription plan by default is "Test_plan@1rs"

 //  * Add Communication details to organisation


// * Recharge subscription from Reseller ledger for the organisations under"inventum"

## Create Rc & NRC Charges
* Unify Login as "admin" into "http://testing.inventum.net/unifyadmin"
* Navigate to Charges in Billing
// * Add NRC charge with custom price range for domain:"Railtel",COA:"Railtel",TAXCLASS:"GST - RAILTEL"
// * Add RC charge with custom price range for domain:"Railtel",COA:"Railtel",TAXCLASS:"GST - RAILTEL"
// * Add "Test_Contract_01" to "Railtel"
* Mapping "Test_RC_charge1","NRCcharges" to "Test_Contract_01"