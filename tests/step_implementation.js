/* globals gauge*/
"use strict";
const path = require('path');
const { openBrowser,
    write,
    closeBrowser,
    checkBox,
    exists,
    clear,
    mouseAction,
    tap,
    goto,
    title,
    into,
    evaluate,
    press,
    scrollDown,
    scrollRight,
    screenshot,
    text,
    focus,
    textBox,
    toRightOf,
    click,
    hover,
    button,
    waitFor,
    $,
    dropDown,
    doubleClick,
    rightClick,
    below,
    toLeftOf,
    above,
    reload,
   
    } = require('taiko');
const assert = require("assert");

const { table } = require('console');
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless, args: ['--window-size=1440,900'] })
});

afterSuite(async () => {await closeBrowser()});

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
  const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'], 
    `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({ path: screenshotFilePath });
    return path.basename(screenshotFilePath);
};

step("Unify quick Login to <url> as <table>", async function(url,table)  {
    //diagnostics.startCssTracing()
        await goto(url);
        await waitFor(2000)
        assert.ok(await title(), "Unify Login");
        assert.ok(await text('Admin Portal').exists(0, 0));
        assert.ok(!await text('© 2019 Inventum Technologies Pvt Ltd. Version 3.8').exists(0, 0))

        await focus(textBox({
            name: "username"
        }))
        await write(table.rows[0].cells[1])
        await focus(textBox({
            name: "password"
        }))
        await write(table.rows[1].cells[1])
        await focus(textBox({
            name: "domain"
        }))
        await write(table.rows[2].cells[1])
        await click('Login');
       assert.ok(await title(), "Desktop")
        
    
      
    
    });
    step("Unify Login as <arg> into <ip>",async(arg,ip)=>{
        await goto(ip)
        await waitFor(2000)
        assert.ok(await title(), "Unify Login")
        assert.ok(await text('Admin Portal').exists(0, 0))
        assert.ok(!await text('© 2019 Inventum Technologies Pvt Ltd. Version 3.8').exists(0, 0))

        await focus(textBox({
            name: "username"
        }))
        await write(arg)
        await focus(textBox({
            name: "password"
        }))
        await write(arg);
        await focus(textBox({
            name: "domain"
        }))
        await write(arg)
        await click('Login')
       assert.ok(await title(), "Desktop")
       await gauge.screenshot()
    });
    step("Unify Login page validations", async () => {
        await goto('http://testing.inventum.net/unifyadmin');
        assert.ok(await text('Admin Portal').exists(0, 0));
        assert.ok(!await text('© 2019 Inventum Technologies Pvt Ltd. Version 3.8').exists(0, 0))
        await focus(textBox({
            name: "username"
        }))
        await write('a')
        await click('Login')
        assert.ok(await text('Please enter the Password').exists(0, 0))
        await click('OK')
        await focus(textBox({
            name: "username"
        }))
        await write('a')
        await focus(textBox({
            name: "password"
        }))
        await write('a');
        await click('Login')
        assert.ok(await text('Please enter a Domain').exists(0, 0))
        await click('OK')
        await checkBox({
            id: "rememberme"
        }).exists()
        await click(checkBox({
            id: "rememberme"
        }))
        await checkBox({
            id: "rememberme"
        }).uncheck()
        waitFor(3000)
        await write('a', textBox({
            name: 'username'
        }))
        await write('a', textBox({
            name: 'password'
        }))
        await write('a', textBox({
            name: 'domain'
        }))
        await click('Login');
        assert.ok(await text('Invalid Credentials Provided.').isVisible(0, 0));
    
    });
    
    step("Add Domain <query1> under <query2>", async (query1, query2) => {
        await waitFor(2000)
        await hover('Domains')
        await click('Domains Manager');
        await click(query2);
        await click($("#addDomainBtn"))
        await write(query1, into(textBox({
            id: "adddomainid-inputEl"
        })))
        await write(query1, into(textBox({id:"textfield-1230-inputEl"})))
        await waitFor(2000)
        await click($('#tool-1267'))
        await click($('#button-1006-btnWrap'))
        await write("Bill",into(textBox({name:"contactTypeNo"})))
       // await write("Bill", $("//td[@id='combobox-1256-inputCell']/input[@id='combobox-1256-inputEl']"))
        await click('Bill To')
        await click($("//td[@class='x-grid-cell x-grid-td x-grid-cell-gridcolumn-1383 x-unselectable ']/div"))
        await write("Test1",into(textBox({name:"firstName"})))
       // await write("Test1", into($("//tr[@id='textfield-1260-inputRow']//td[@id='textfield-1260-bodyEl']/input[@name='firstName']")))
    //    await click($("#ext-gen1660"))
        await write("Test01", into(textBox({
            name: "lastName"
        })))
        await click($("#ext-gen1661"))
        //  await listItem({id:'boundlist-1466-listEl'}).select("India")
        await write("ind", into(textBox({
            name: "countryNo"
        })))
        await waitFor(2000)
        await click("India")
        await click($("#ext-gen1662"))
        await write("Del", into(textBox({
            name: "cityNo"
        })))
        await waitFor(2000)
        await click("Delhi")
        await press('Enter')
        await waitFor(2000)
        await click($("//a[@title='Save' and @id='button-1248']"))
        await click($("//span[@id='button-1006-btnInnerEl']"))
        // await click("Cancel")
        console.log("Reached");
    
    
    });
    step("COA <arg> Creation From Master", async (arg) => {
        await waitFor(2000)
        await hover('Settings')
        await hover('Master Settings')
        await click('Master Data')
        await click('Finance')
        await waitFor(2000)
        await click('Charts Of Accounts (COA)')
        await click($('#button-1157'))
        await waitFor(2000)
        // await click($('#ext-gen1473'))
        await write("Shaildhar", into(textBox(toRightOf("Domain"))))
        await waitFor(2000)
        //await press(['ArrowDown'])
        await press('Enter')
        //await click('Shaildhar Telecom Services Private Limited {SHAILDHAR}')
        await write(arg, into(textBox({
            id: "textfield-1160-inputEl"
        })))
        //  await waitFor(3000)
        // await click("Meghalaya")
        // await click($("#ext-gen1464"))
        //  await waitFor(1000)
        //  await click(button("//div[@id='datepicker-1175']//div[@id='datepicker-1175-middleBtnEl']/a[@id='splitbutton-1176']"))
        //   await focus(button("//*[@id='splitbutton-1176' and @role='button']"))
    
    
    });
    step("Add FY start date", async () => {
        await click(textBox(toRightOf("FY Starts On:")))
        await waitFor(3000)
        // await click(button({id:"splitbutton-1218"}))
        await click($("//*[@class='x-btn-wrap x-btn-split x-btn-split-right']/span[1]/span[2]"))
        await waitFor(3000)
        await click($("//*[@class='x-monthpicker-months']/div[7]/a"))
        await click($("//*[@class='x-monthpicker-years']/div[10]/a"))
        await click($("//*[@class='x-btn x-unselectable x-btn-default-small x-noicon x-btn-noicon x-btn-default-small-noicon']"))
        await click("1")
        // await click($("//a[@id='splitbutton-1176']"))
    });
    step("COA currency as <Indian Rupee>", async () => {
        await focus($("#combobox-1161-inputEl"))
        await write("Ind")
        await waitFor(1000)
        await press('Enter')
        // await click("INDIAN RUPEE")
    });
    step("Add externalID", async () => {
        await write('DemoExternalID', into(textBox({
            id: "textfield-1163-inputEl"
        })))
    });
    step("Add Instruments Types", async () => {
        await click(textBox(toRightOf("Instrument Types:")))
        await click('Cash')
        await click('Cheques')
        await click('Credit Card')
        await click('Debit Card')
    
    });
    step("Add decimal accuracy", async () => {
        await click("Decimal Accuracy:")
        // await click($('#ext-gen1554'))
        await click("2 Decimal")
    });
    step("Add RoundOff", async () => {
        await click("Rounding Off:")
        await click("2nd Decimal Place")
    });
    step("Add TimeZone", async () => {
    
        await write("Kol", into(textBox({
            id: 'timeZoneId-inputEl'
        })))
        await waitFor(3000)
        await click("Asia/Kolkata")
    });
    step("Tax jurisdiction", async () => {
    
        await write("Meghalaya", into(textBox({
            id: 'taxJurisdictionID-inputEl'
        })))
        await press('Enter')
    });
    step("Enable FY Enforce and Skip zero value invoice", async () => {
        await click(button({
            id: "financialYear-inputEl"
        }))
        await click($("#skipZeroValue-inputEl"))
    });
    
    step("Save COA", async () => {
        await waitFor(3000)
        await click($("#button-1267-btnEl"))
    });
    //for COA grp 
    step("Navigate to COA groups", async () => {
        await waitFor(2000)
        await hover('Settings')
        await hover('Master Settings')
        await click('Master Data')
        await waitFor(2000)
        await click('Finance', below('Electronic Wallet'))
        await waitFor(2000)
        await click('Charts Of Accounts Groups (COAGroups)')
    });
    step("Add COA group as Assets", async () => {
    
        await click("Add")
        await write('Assets', into(textBox({
            id: "coaGroupNameId-inputEl"
        })))
        await click($("//td[@id= 'coaNameId-inputCell']/following-sibling::td[1]"))
        await click("Test_COA01")
        await click("Ledger Account Type:")
        await click("Asset")
        await click("Bank")
        await click("Debtors")
        await click("Cash")
        await click($("#textareafield-1148-labelEl"))
        await waitFor(3000)
        //await click($("#button-1151"))
        await click($("#button-1152"))
    
        console.log("Clicked")
    });
    
    step("Add COA group as Expenditure", async () => {
        await waitFor(3000)
        await click("Add")
        await write('Expenditure', into(textBox({
            id: "coaGroupNameId-inputEl"
        })))
        await click($("//td[@id= 'coaNameId-inputCell']/following-sibling::td[1]"))
        await click("Test_COA01")
        await click("Ledger Account Type:")
        await click("Expenses")
        await click($("#textareafield-1163-labelEl"))
        await waitFor(3000)
        await click($("#button-1151"))
        //await click($("#button-1167"))
    
        console.log("Clicked")
    });
    
    step("Add COA group as Liabilities", async () => {
        await waitFor(3000)
        await click("Add")
        await write('Liabilities', into(textBox({
            id: "coaGroupNameId-inputEl"
        })))
        await click($("//td[@id= 'coaNameId-inputCell']/following-sibling::td[1]"))
        await click("Test_COA01")
        await click("Ledger Account Type:")
        await click("Liability")
        await click(text("Description"))
        await click($("#button-1180"))
        // await click($('#button-1173'))
        await waitFor(3000)
        console.log("Clicked")
    
    });
    step("Add COA group as Revenue", async () => {
        await click("Add")
        await write('Revenue', into(textBox({
            id: "coaGroupNameId-inputEl"
        })))
        await click($("//td[@id= 'coaNameId-inputCell']/following-sibling::td[1]"))
        await click("Test_COA01")
        await click("Ledger Account Type:")
        await click("Income")
        await click($("#textareafield-1148-labelEl"))
        await click($("#button-1151"))
        // await click($("#button-1152"))
        //  assert.ok($("#msg-div").exists(0,0));
        await waitFor(3000)
        console.log("Clicked")
    
    });
    
    
    step("navigate to ledgerbook", async () => {
        await waitFor(2000)
        await hover('Settings')
        await hover('Master Settings')
        await click('Master Data')
        await waitFor(2000)
        await click('Finance', below('Electronic Wallet'))
        await scrollDown('Ledger Book')
        await waitFor(2000)
        await click('Ledger Book')
    
    });
    step("Add ledgerbook", async () => {
    
        await click('Add', below('Ledger Book List'))
        await clear(textBox(), below('Name'))
        await waitFor(1000)
        await write("Test_COA_LB", below('Name'))
        await waitFor(1000)
        await write("Test_COA_LB", textBox({
            id: "textfield-1152-inputEl"
        }))
        await write("Test", textBox({
            placeholder: 'select Coa Name'
        }))
        await click('Test_COA01')
        await click(button({
            id: "checkboxfield-1154-inputEl"
        }))
        await click($("#button-1149"))
        // await waitFor(3000)
        // await evaluate(text("Update"),elem => elem.click())
        // await click('Update',below('Test_COA01'))
        await waitFor(4000)
    });
    step("navigate to Fiscal year", async () => {
        await waitFor(2000)
        await hover('Settings')
        await hover('Master Settings')
        await click('Master Data')
        await waitFor(2000)
        await click('Finance', below('Electronic Wallet'))
        await scrollDown('Fiscal Year')
        //await waitFor(2000)
        await click('Fiscal Year')
    
    });
    
    step("Add Fiscal year", async () => {
        await click('Add', below('Fiscal Year List'))
        await write('Shail', textBox({
            placeholder: "Select Domain"
        }))
        await click('Shaildhar Telecom Services Private Limited {SHAILDHAR}')
        await write('FY_2020-21', into($("//tr[@id='textfield-1153-inputRow']//td[@id='textfield-1153-bodyEl']/input[@name='name']")))
        await click($("#ext-gen1374"))
        await waitFor(2000)
        await click($("//*[@class='x-btn-wrap x-btn-split x-btn-split-right']/span[1]/span[2]"))
        await waitFor(2000)
        await click($("//*[@class='x-monthpicker-months']/div[7]/a"))
        await click($("//*[@class='x-monthpicker-years']/div[10]/a"))
        await click($("//*[@class='x-btn x-unselectable x-btn-default-small x-noicon x-btn-noicon x-btn-default-small-noicon']"))
        await click("1")
        await waitFor(2000)
        await click($("#ext-gen1375"))
        await click($("//*[@class='x-btn-wrap x-btn-split x-btn-split-right']/span[1]/span[2]"))
        await waitFor(2000)
        await click($("//*[@class='x-monthpicker-months']/div[5]/a"))
        await click($("//*[@class='x-monthpicker-years']/div[3]/a"))
        await click($("//*[@class='x-btn x-unselectable x-btn-default-small x-noicon x-btn-noicon x-btn-default-small-noicon']"))
        await click("31")
        await click($("#closedID-inputEl"))
        await click($("#button-1151-btnIconEl"))
        console.log("Fiscal year created")
    });
    
    step("Navigate to CSL Config", async () => {
    
        await waitFor(2000)
        await hover('Settings')
        await hover('Master Settings')
        await click('Master Data')
        await waitFor(2000)
        await click('Finance', below('Electronic Wallet'))
        await scrollDown('CSLNO Config')
        //await waitFor(2000)
        await click('CSLNO Config')
        await waitFor(2000)
    });
    step("Add CSLNO config", async () => {
        await click("Add", below("Custome Serial Config"))
        await click($("#ext-gen1425"))
        await click("Fiscal Year")
        await waitFor(2000)
        await focus(textBox({
            id: 'seriesStartCmp-inputEl'
        }))
        await write("1")
        await click(button({
            id: "checkboxfield-1165-inputEl"
        }))
        await write("INV", into(textBox(toRightOf("Perfix:"))))
        await write("/$cs.fy", into(textBox(toRightOf("Suffix:"))))
        await click(button(toRightOf("Resuable Pool:")))
        //  await click($("#saveCslnoConfigBtn-btnWrap"))
        await waitFor(2000)
    });
    step("Navigate to CSLNO Config Voucher Type Map", async () => {
    
        await waitFor(2000)
        await hover('Settings')
        await hover('Master Settings')
        await click('Master Data')
        await waitFor(2000)
        await click('Finance', below('Electronic Wallet'))
        await scrollDown('CSLNO Config Voucher Type Map')
        //await waitFor(2000)
        await click('CSLNO Config Voucher Type Map')
        await waitFor(2000)
    });
    step("Add CSLNO Config Voucher Type Map", async () => {
        await click("Add", below("CSLNO Config Voucher Type Map List"))
        await write("test", into(textBox(toRightOf("COA:"))))
        await click("Test_COA01")
        await waitFor(4000)
        await write("test", into($("//input[@id='ledgerbookId-inputEl' and @name='cslnovtypeMap.lbook.ledgerBookNo']")))
        await click("Test_COA_LB")
        await write("Test", into(textBox(toRightOf("Domain:"))))
        await press('Enter')
        await waitFor(2000)
        await write("Sale", into($("//input[@id='cslnovtypeId-inputEl' and @name='cslnovtypeMap.vtype.voucherTypeNo']")))
    
        await click("Sale / Invoice Voucher")
        await write("test", into(textBox(toRightOf("CSLNO Config :"))))
        await click("INV000001/XX-YY")
        await click($("//a[@title='Save Mapping' and @id='savecslnoConfigVtypeMapBtn']"))
        await waitFor(2000)
    });
    
    step("Navigate to networkID", async () => {
        await waitFor(2000)
        await hover('Settings')
        await hover('Master Settings')
        await click('Master Data')
        await waitFor(2000)
        await click('Global', above("Inventory"))
        //  await scrollDown('CSLNO Config Voucher Type Map')
        //await waitFor(2000)
        await click('NetworkId Type')
        await waitFor(2000)
    
    });
    
    step("Add NetworkID", async () => {
        await click("Add", below("NetworkID Type List"))
        await write("DemoID", into(textBox({
            name: "nitName"
        })))
        await write("DemoID", into(textBox({
            name: "nitDescription"
        })))
        await write("DEMOID", into(textBox({
            name: "nitShortName"
        })))
        await write("DID", into(textBox({
            name: "nitValueType"
        })))
        await press('Enter')
        await waitFor(2000)
        //  await click($("//a[@id='button-1181' and @role='button']"))
    });
    
    step("Navigate to Device Type", async () => {
        await waitFor(2000)
        await hover('Settings')
        await hover('Master Settings')
        await click('Master Data')
        await waitFor(2000)
        await click('Global', above("Inventory"))
        //  await scrollDown('CSLNO Config Voucher Type Map')
        //await waitFor(2000)
        await click('Device Type')
        await waitFor(2000)
    });
    step("Add Device Type", async () => {
        await click("Add", below("Device Type List"))
        await write("DemoID", into(textBox({
            name: "ndtName"
        })))
        await write("DemoID", into(textBox({
            name: "ndtDescription"
        })))
        await write("int", into(textBox({
            name: "ndtSvccatId"
        })))
        await waitFor(2000)
        await click("Internet Access")
        await write("Demokey", into(textBox({
            name: "ndtI18nKey"
        })))
        await click($("//tr[@id='checkboxfield-1156-inputRow']//td[2]/input[1]"))
        // 
        await press('Enter')
        await waitFor(2000)
    });
    
    step("Navigate to Device Type NetworkId Type Map", async () => {
        await waitFor(2000)
        await hover('Settings')
        await hover('Master Settings')
        await click('Master Data')
        await waitFor(2000)
        await click('Global', above("Inventory"))
        await click('DeviceType NetworkIdType Map')
        await waitFor(2000)
    });
    
    step("Mapping  Device Type NetworkId Type", async () => {
        await click("Add", below("DeviceType NetworkIdType Map"))
        await write("Demo", into(textBox({
            name: "networkDeviceTypeId"
        })))
        await click("DemoID")
        await click(textBox({
            placeholder: "Select NetworkId Type"
        }))
        await click("Circuit-Id")
        await click($("#ext-gen1362"))
        await click($("//a[@role='button' and @id='button-1148']//span[1]"))
    
    });
    
    step("Navigate FY Control GL Map", async () => {
        await waitFor(2000)
        await hover('Settings')
        await hover('Master Settings')
        await click('Master Data')
        await waitFor(2000)
        await click('Finance', below('Electronic Wallet'))
        await scrollDown('FY Control GL Map')
        //await waitFor(2000)
        await click('FY Control GL Map')
        await waitFor(2000)
    
    });
    step("Mapping FY Control GL Map", async () => {
        await click("Add", below("FY Control GL Map List"))
        await write("Megha", into(textBox({
            name: "fyControlGlMap.coa.coaNo"
        })))
        await click("Meghalaya", below("Megha"))
    
        await write("FY_2020", into(textBox({
            name: "fyControlGlMap.fiscalYear.id"
        })))
        await click("FY_2020-21")
        await write("Reve", into(textBox({
            name: "fyControlGlMap.ledgerAccount.ledgerActNo"
        })))
        await click("REVENUE - RC")
        await write("Demokey", into(textBox({
            name: "fyControlGlMap.i18nKey"
        })))
        await press('Enter')
        await waitFor(2000)
    });
    step("Navigate to Bill RunProfile", async () => {
        await waitFor(2000)
        await hover('Billing')
        // await hover('Bill Run Profile')
        await click('Bill Run Profile')
        await waitFor(2000)
    
    });
    step("Add BillProfile", async () => {
        await click($("//a[@role='button' and @id='billProfileAddBtnId']"))
        await write("TestProfile", into(textBox({
            placeholder: "Enter Descriptive Name"
        })))
        await write("Test", into(textBox({
            placeholder: "Select Domain"
        })))
        await press('Enter')
        await waitFor(2000)
        await click("Apply Late Payment Fee:")
        await write("200", into(textBox({
            name: "billProfiles.lateFineMin"
        })))
        await scrollRight('Payment Grace Days (Pay By):')
        await write("5", into(textBox(toRightOf("Payment Grace Days (Pay By):"))))
    
        await click($("//a[@role='button' and @id='button-1083']"))
        await waitFor(2000)
    });
    
    step("Navigate to Voucher Template", async () => {
        await waitFor(2000)
        await hover('Billing')
        await click('Voucher Templates')
        await waitFor(2000)
    });
    step("Add Voucher Template", async () => {
        await click("Add", below("Invoice Templates"))
        await write("TestVoucherForTesting", into(textBox({
            placeholder: "Enter Template ID"
        })))
        await write("Test", into(textBox({
            name: "voucherTemplate.domno"
        })))
        await press('Enter')
        await waitFor(2000)
        await write('Indi', into(textBox({
            name: "voucherTemplate.currencyId"
        })))
        await click(textBox({
            placeholder: "Select Voucher Txn Type"
        }))
        await click("Auto Bill Run")
        await waitFor(2000)
        await click($("//a[@role='button' and @id='saveVoucherTemplateActionID']"))
    });
    
    step("Navigate to COA in finance", async () => {
        await waitFor(2000)
        await hover('Finance')
        await click('Chart of Accounts')
    
    });
    step("Create ledger for assets<Lname>", async (Lname) => {
        await waitFor(2000)
        await click($("#ext-gen1302"))
        await click("FY-2020-2021")
        await click($("#ext-gen1305"))
        await click("Test_COA01")
        await click(textBox({
            placeholder: "Select COA Groups"
        }))
        await click("Assets")
        await click($("#addLedgerID"))
        await write(Lname,into(textBox({name:"ledgerAccount.name"})))
        await press('Enter')
        await waitFor(2000)
    
    });
    step("Create ledger for Expenditure<Lname>", async (Lname) => {
        await waitFor(2000)
        await click($("#ext-gen1302"))
        await click("FY-2020-2021")
        await click($("#ext-gen1305"))
        await click("Test_COA01")
        await click(textBox({
            placeholder: "Select COA Groups"
        }))
        await click("Expenditure")
        await click($("#addLedgerID"))
        await write(Lname,into(textBox({name:"ledgerAccount.name"})))
        await write("exp",into(textBox({placeholder:"Select Account Type"})))
        await click("Expenses")
        await press('Enter')
        
        await click($("#saveLedgerBtn"))
        await waitFor(2000)
    
    });
    step("Create ledger for Liabilities<Lname>", async (Lname) => {
        await waitFor(2000)
        await click($("#ext-gen1302"))
        await click("FY-2020-2021")
        await click($("#ext-gen1305"))
        await click("Test_COA01")
        await click(textBox({
            placeholder: "Select COA Groups"
        }))
        await click("Liabilities")
        await click($("#addLedgerID"))
        await write(Lname,into(textBox({name:"ledgerAccount.name"})))
        await write("lia",into(textBox({placeholder:"Select Account Type"})))
        await click("Liability")
        await press('Enter')
        await click($("#saveLedgerBtn"))
        await waitFor(2000)
    
    });
    step("Create ledger for Revenue<R_Lname>", async (R_Lname) => {
        await waitFor(2000)
        await click($("#ext-gen1302"))
        await click("FY-2020-2021")
        await click($("#ext-gen1305"))
        await click("Test_COA01")
        await click(textBox({
            placeholder: "Select COA Groups"
        }))
        await click("Revenue")
        await click($("#addLedgerID"))
        await write(R_Lname,into(textBox({name:"ledgerAccount.name"})))
        await write("Inc",into(textBox({placeholder:"Select Account Type"})))
        await click("Income")
        await press('Enter')
        await click($("#saveLedgerBtn"))
        await waitFor(2000)
    
    });
    
    step("Enter password as <query>", async (query) => {
        await focus(textBox({
            name: "password"
        }))
        await write(query);
    });
    step("Enter domain as <query>", async (query) => {
        await focus(textBox({
            name: "domain"
        }))
        await write(query);
    });
    step("Click Login button", async () => {
    
        await click('Login');
    });
    
    step("Navigate to CRM Customers", async () => {
        await waitFor(3000)
        await hover('CRM')
        await click('Customers');
    
    
    });
    
    step("Add organisation <org-name> under <domain>", async (o_name,dom) => {
        await waitFor(2000)
        await click($('#orgAddBtnId'))
        await write(dom,into(textBox(toRightOf("Domain"))))
        await press('ArrowDown')
        await waitFor(1000)
        await press('Enter')
        await write(o_name,into(textBox(toRightOf("Organisation Name"))))
        await write(o_name,into(textBox(above("Parent Organisation",toRightOf("Short Name")))))
        await clear(textBox({name:"contact.contactTypeNo"}))
        await write("Bill",into(textBox({name:"contact.contactTypeNo"})))
        await click("Bill To")
       // await waitFor(2000)
    
       // await click("Link to ledger",toLeftOf("Finish"))
        
    });
    step("Organisation Link to Ledger",async()=>{
  //  await click(text('Link to ledger', { selectHiddenElements: true }))
        await click($("#move-next"))
        await click(button(toLeftOf("Add new ledger account")))
        await waitFor(2000)
        await click($("#finish"))
        await waitFor(2000)
        await click($("#button-1006"))
        await waitFor(2000)
        await gauge.screenshot($("#msg-div"))
        assert.ok($("#msg-div").text(), 'Organisation was saved successfully.');
     
        
    });
    step("Select Organisation", async () => {
    
        //await click($('#ext-gen2261'))
        //  await listItem('Shaildhar_Meghalaya(MGH-STSPL)').click()
        //  await listItem({class:'x-list-plain'},below('Shaildhar_Meghalaya(MGH-STSPL)')).click()
        //  await waitFor(3000)
        //  await click($('#combobox-1313-inputEl'))
        await focus($('#combobox-1313-inputEl'))
        await write('meghalaya')
        click('Shaildhar_Meghalaya(MGH-STSPL)')
        await waitFor(3000)
        //  await press('down')
    });

    //Adding multi organisation for scalability testing
    //Test_AA_org is the organisation testdata prefix
    step("Creating multi organisation under<domain>",async(domain)=>{
var i;
for (i = 0; i < 5; i++) {
    await waitFor(2000)
    await click($('#orgAddBtnId'))
    await write(domain,into(textBox(toRightOf("Domain"))))
    await press('ArrowDown')
    await waitFor(1000)
    await press('Enter')
    await write("Test_AA_org"+i,into(textBox(toRightOf("Organisation Name"))))
    await write("Test_AA_org"+i,into(textBox(above("Parent Organisation",toRightOf("Short Name")))))
    await clear(textBox({name:"contact.contactTypeNo"}))
    await write("Bill",into(textBox({name:"contact.contactTypeNo"})))
    await click("Bill To")
    await click($("#move-next"))
        await click(button(toLeftOf("Add new ledger account")))
        await waitFor(2000)
        await click($("#finish"))
        await waitFor(2000)
        await click($("#button-1006"))
        await waitFor(2000)
        await gauge.screenshot($("#msg-div"))
        assert.ok($("#msg-div").text(), 'Organisation was saved successfully.')
        console.log("created org:Test_AA_org"+i)
}
console.log("Iterated")
    });
//Adding multiple service groups for scalability testing
// Bill to/Ship to be maintained
// plan type to be maintained 

step("Adding Service groups to organisations under<domain>",async(dom)=>{
    var i;
    for(i=4;i<10;i++){
        await waitFor(2000)
        await clear(textBox({placeholder:"Search here"}))
        await write("Test_AA_org"+i,into(textBox({placeholder:"Search here"})))
        await waitFor(1000)
        await press('Enter')
        await click("Services",toLeftOf("Ledger"))
        await click($("#addButton"))
        await click("Service Group",below("Add"))
        await write("Test_SG_org"+i,into(textBox({name:"account.actid"})))
        await write("Test_SG_org"+i,into(textBox({name:"account.actname"})))
        await click(textBox({name:"account.actcat"}))
       // await click("Pre Pay")
        await click("Post Pay")
        await write(dom,into(textBox({name:"account.domno"})))
        await waitFor(1000)
        await press('Enter')
        await write("Test_AA_org"+i,into(textBox({name:"account.billToContact"})))
        await click("Test_AA_org"+i+"  ,,Delhi {Ship To}")
        await click($("#saveServiceGroupId"))
        await waitFor(2000)
        await gauge.screenshot($("#msg-div"))
        console.log("created SG:Test_SG_org"+i)
       
    }
    console.log("Iterated")
});
//Adding subscriptions to the  servicegroups
//Subscription by default set to Test_plan@1rs - (Test_plan@1rs)
step("Adding subscriptions<plan> to Servicegroups for the organisations under<domain>",async(plan)=>{
    var i;
    for(i=4;i<10;i++){
        await waitFor(2000)
        await clear(textBox({placeholder:"Search here"}))
        await write("Test_AA_org"+i,into(textBox({placeholder:"Search here"})))
        await waitFor(1000)
        await press('Enter')
        await click("Services",toLeftOf("Ledger"))
        await click("Test_SG_org"+i)
        await click($("#subsAddMenu"))
        await click("Subscription",below("Add"))
        await write(plan,into(textBox({name:"subs.pkgNo"})))
        await waitFor(1000)
        await press('Enter')
        await click($("#saveSubsBtn"))
        await waitFor(2000)
        await gauge.screenshot($("#msg-div"))
       
        console.log("Added subscription for ServiceGroup:Test_SG_org"+i)
     
    }
    console.log("Iterated")
});

step("Add Bill setup for the created Service Groups",async()=>{
  var i;
  for(i=4;i<10;i++){
    await waitFor(2000)
    await clear(textBox({placeholder:"Search here"}))
    await write("Test_AA_org"+i,into(textBox({placeholder:"Search here"})))
    await waitFor(1000)
    await press('Enter')
    await click("Services",toLeftOf("Ledger"))
    await rightClick("Test_SG_org"+i)
    await rightClick("Test_SG_org"+i)
    await click("Bill Setup")
    await write("1",into(textBox({name:"billSetUp.cycle"})))
    await click(textBox({name:"billSetUp.cycleDuration"}))
    await click("Months")
    await click(textBox({name:"billSetUp.billCycleNo"}))
    await write("Monthly 01st of Month")
    await waitFor(1000)
    await click("Monthly 01st of Month",below("Monthly 01st of Month"))
    await click($("//td[@id='firstInvoiceDate-bodyEl']//td[2]"))
    await click($("//a[@title='Previous Month (Control+Left)']"))
    await waitFor(1000)
    await click("1",above("8"))
    await write("post",into(textBox({name:"billSetUp.invoiceTemplateNo"})))
    await click("Invoice-Postpay")
    await write("bill",into(textBox({name:"billSetUp.billProfileNo"})))
    await click("billprofile")
    await click($("//a[@role='button' and @title='Save']"))
    await waitFor(2000)
    await gauge.screenshot($("#msg-div"))
    console.log("Added BillSetup for ServiceGroup:Test_SG_org"+i)
  }  
});
//Recharge Subscription
step("Recharge subscription from Reseller ledger for the organisations under<domain>",async()=>{
    var i;
    for(i=0;i<1;i++){
        await waitFor(2000)
        await clear(textBox({placeholder:"Search here"}))
        await write("Test_AA_org"+i,into(textBox({placeholder:"Search here"})))
        await waitFor(1000)
        await press('Enter')
        await click("Services",toLeftOf("Ledger"))
        await click("Test_SG_org"+i)
        await waitFor(2000)
        await click($("//tbody[@id='gridview-1162-body']/tr/td/div"))
     // await click($("#ext-gen2555"))
        await click($(`#subsActionMenu`, { selectHiddenElements: true },toRightOf("Add")))
        await click("Recharge via Coupon Type")
        await click($("//table[@id='rechargeSubsCouponId-triggerWrap']//td[2]/div"))
    // select coupon card is hardcoded here ::
       await click("Test_Card@1rs")
       await click($("//a[@role='button' and @title='save']"))
        
        await waitFor(5000)
    }
});
    step("Add Communication details to organisation", async () => {
        var i;
        for(i=8;i<10;i++){
            await waitFor(2000)
            await clear(textBox({placeholder:"Search here"}))
            await write("Test_AA_org"+i,into(textBox({placeholder:"Search here"})))
            await waitFor(1000)
            await press('Enter')
            await click('Organisation',toLeftOf("Services"))
            await click("Contact Type")
            await click("Bill To",below("Contact Type"))
            await click($("//div[@id='commTypeGridEdit_header-targetEl']//div[2]"))
            await write("mobi"),into({name:"commTypeNo"})
            await waitFor(1000)
            await click("Mobile",below("Google+"))
            await press('Tab')
           // await click($("//input[@name='commTypeValue']"),below("Value"))
            await write("921921921"+i,into(textBox({name:"commTypeValue"})))
            await click("Update")
            await waitFor(2000)
            await gauge.screenshot($("#msg-div"))
            await reload()

        }
    
    });

    // Create Charges from Billing Module
    step("Navigate to Charges in Billing",async()=>{
        await waitFor(3000)
        await hover('Billing')
        await click('Charges')

    });
    step("Add NRC charge with custom price range for domain:<domain>,COA:<coa>,TAXCLASS:<Taxclass>",async(domain,coa,tc)=>{
        await click("Non-Recurring Charges",above("Recurring Charges"))
        await click($("#nrcAddBtnId-btnEl"))
        await write("Test_NRC_Charge1",into(textBox({name:"nonRecCharges.bnrcId"})))
        await write("Test_NRC_Charge1",into(textBox({name:"nonRecCharges.bnrcDesc"})))
        await write(domain,into(textBox({name:"nonRecCharges.domno"})))
        await press('Enter')
        await click($("//table[@id='coaNonRecChargeId-triggerWrap']//td[2]/div"))
        await click(coa,toRightOf("Revenue Ledger Account:"))
        await write("REVENUE - RAILTEL",into(textBox({name:"nonRecCharges.ledger_account_id"})))
        await press('Enter')
        await clear(textBox({name:"nonRecCharges.rate"}))
        await write("10",into(textBox({name:"nonRecCharges.rate"})))
        await write(tc,into(textBox({name:"nonRecCharges.taxNo"})))
        await click(tc)
        await press('Enter')
        await waitFor(4000)
        await clear(textBox({name:"nonRecCharges.level"}))
        await write("Subs",into(textBox({name:"nonRecCharges.level"})))
     //   await click('Subscription',below("Subscription"))
        await waitFor(2000)
        await press('Enter')
        await write("Internet Access",into(textBox({name:"nonRecCharges.svccat"})))
        await press('Enter')
        await click("Custom Value:")
        await write("0",into(textBox({name:"nonRecCharges.nrcMinCustomVal"})))
        await write("99999",into(textBox({name:"nonRecCharges.nrcMaxCustomVal"})))
        await click($("//a[@title='Save Non-Recurring Charge']/span/span"))
        await waitFor(2000)
        await gauge.screenshot($("#msg-div"))
        await waitFor(2000)

    });

    step("Add RC charge with custom price range for domain:<domain>,COA:<coa>,TAXCLASS:<Taxclass>",async(domain,coa,tc)=>{
        await click("Recurring Charges",below("Non-Recurring Charges")) 
        await click($("#rcAddBtnId"))
        await write("Test_RC_charge1",into(textBox({name:"billRecCharges.brcid"})))
        await write("Test_RC_charge1",into(textBox({name:"billRecCharges.brcdesc"})))
        await write(domain,into(textBox({name:"billRecCharges.domno"})))
        await press('Enter')
        await click("Level:")
        await click("Subscription",below("Account"))
        await write("inte",into(textBox({name:"billRecCharges.svccat"})))
        await waitFor(2000)
        await press('Enter')
        await write("10",into(textBox({name:"rcRate"})))
        await write("0",into(textBox({name:"billRecCharges.iterations"})))
        await click($("//table[@id='coaRecChargeId-triggerWrap']//td[2]/div"))
        await press('ArrowDown')
        await press('Enter')
        await click("Revenue/Income")
        await write("REVENUE - RAILTEL",into(textBox({name:"billRecCharges.ledger_account_id"})))
        await press('Enter')
        await click("Charge in Advance?:",above("Rebate Charge?:"))
        await click("Rebate Charge?:",below("Charge in Advance?:"))
        await click("Custom Value:")
        await write("0",into(textBox({name:"billRecCharges.rcmincustomval"})))
        await write("99999",into(textBox({name:"billRecCharges.rcmaxcustomval"})))
        await click($("#saveRCBtn"))
        await waitFor(2000)
        await gauge.screenshot($("#msg-div"))
        await waitFor(2000)

    });
    step("Add <contract> to <domain>",async(con,dom)=>{
        await click("Contracts",below("Discounts"))
        await click($("#contractAddBtnId"))
        await write(con,into(textBox({name:"billContract.cid"})))
        await write(con,into(textBox({name:"billContract.cdesc"})))
        await write(dom,into(textBox({name:"billContract.domno"})))
        await waitFor(2000)
        await press('Enter')
        await clear(textBox({name:"billContract.level"}))
        await write("Subs",into(textBox({name:"billContract.level"})))
        await waitFor(2000)
        await press('Enter')
        await click($("#saveContractBtn"))
        await waitFor(1000)
        await gauge.screenshot($("#msg-div"))
        await waitFor(2000)

    });
    step("Mapping <RCcharges>,<NRCcharges> to <contract>",async(rc,nrc,con)=>{
        await click("Contracts",below("Discounts"))
        assert.ok(await text(con).exists(0, 0));
        await click(con,toLeftOf(con))
        await click("Contract Charges",toLeftOf("Contract Discounts"))
        await click($("#contractChargeAddBtnId"))
        await write("Rec",into(textBox({name:"billContractCharge.chargetype"})))
        await click("Recurring Charge")
        await write(rc,into(textBox({name:"billContractCharge.brcno"})))
        await press('Enter')


    });
    step("Navigate to Billing > Taxes",async()=>{
        await waitFor(3000)
        await hover('Billing')
        await click('Taxes')
    });
   
    step("Add Tax Class as<TaxClassId> under <domainID>",async(taxId,dID)=>{
        await click($("#taxAddBtnId"),below("Tax Classes"))
        await write(taxId,into(textBox({name:"tax.taxId"})))
        await write(taxId,into(textBox({name:"tax.descr"})))
        await write("18",into(textBox({name:"tax.tax"})))
        await write(dID,into(textBox({name:"tax.domno"})))
        await waitFor(2000)
        await press('Enter')
        await focus(textBox({name:"tax.coaId"}))
        await press('ArrowDown')
        await waitFor(2000)
        await click("Demo_faizabad")
        await focus(textBox({name:"tax.ledgerActNo"}))
        await press('ArrowDown')
        await waitFor(2000)
        await press('Enter')
        await click($("#saveTaxBtn"))
        await waitFor(1000)
        await gauge.screenshot($("#msg-div"))

    });
step("Page contains <content>", async (content) => {
    assert.ok(await text(content).exists());
});
