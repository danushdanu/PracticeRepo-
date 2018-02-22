describe('manufacton login page', function() {
   // var webdriver = require('selenium-webdriver');
    it('login', function (done) {


        //Login
        browser.get("https://dev.manufacton.com/#/login");
         element(by.model("user.email")).sendKeys("test@ads.comp");
         element(by.model("user.password")).sendKeys("12345678");
         element(by.css("[value='Login']")).click();
         browser.sleep(2000);
         console.log("PASS: Login sucessfull");

        //Going to app and project
         element(by.id("menu-trigger")).click();
         browser.sleep(6000);
         console.log("PASS: App & Project clicked in Hamber Menu");
         browser.actions().mouseMove( element(by.xpath('//a[@ng-click="projectSettings()"]'))).click().perform();
         browser.sleep(2000);
		 
		 
         //click Member Tab
         element(by.xpath('//html//div[2]/a[1]')).click();
         browser.sleep(2000);
         console.log("PASS: Member Tab Clicked");
		 
		 
		 
		 
          // Add new Member
         element(by.xpath('//button[@class=\'btn btn-primary btn-sm pull-right waves-effect\']')).click();
         browser.sleep(2000);
         var xp =  element(by.xpath(" //*[@id=\"autoscroll\"]/table/tbody/tr[35]/td[2]/edit-format/div/div[2]/input"));
         browser.actions().
         mouseMove(xp).sendKeys("New Email1").perform();
         element(by.xpath(" //*[@id=\"autoscroll\"]/table/tbody/tr[35]/td[3]/edit-format/div/div[3]/div/div/input")).sendKeys("new12@ads.cpmp");
         element(by.xpath(" //*[@id=\"autoscroll\"]/table/tbody/tr[35]/td[4]/edit-format/div/div[1]/div/label/input")).click();
         element(by.xpath("  //*[@id=\"autoscroll\"]/table/tbody/tr[35]/td[5]/edit-format/div/div[2]/input")).sendKeys("9898764646");
         element(by.xpath(" //*[@id=\"autoscroll\"]/table/tbody/tr[35]/td[8]/button[1]")).click();
         browser.actions().mouseMove( element(by.xpath(" //a[@class='chosen-single']//span"))).click().perform();
         element(by.xpath(" //button[@class='confirm']")).click();

         browser.sleep(2000);
         console.log("PASS: Added Member success");



         //Edit new Member


         element(by.xpath("//div[@class='pull-left']//input[@type='text']")).sendKeys("new12@ads.cpmp");
         browser.sleep(2000);
         element(by.xpath("//button[@id='editrow']")).click();
         element(by.xpath("//div[@ng-switch-when='name']//input[@ng-model='row[cellVal]']")).clear();
         element(by.xpath("//div[@ng-switch-when='name']//input[@ng-model='row[cellVal]']")).sendKeys("updates Name1");
         element(by.xpath("//div[@ng-switch-when='admin']//label//input[@ng-model='row[cellVal]']")).click();
         element(by.xpath("//html//tr[@ng-show='(isEditing(row) || !row._id) && allowEdit']//button[1]")).click();

         browser.sleep(10000);
         console.log("PASS: Edit Member success");

        //click on Company
        browser.sleep(2000);
        element(by.className("list-group-item")).click();
        $$('[ng-click="addRow($event)"]').click();
        browser.sleep(2000);

        //Add company
        var xp =  element(by.xpath("(//table[@class='table table-condensed']//tr/td[@class='dcell']|//div[@class='form-group p-0 m-0 display-inline-block'])[10]"));
        browser.actions().
        mouseMove(xp).sendKeys("ads").perform();
        element(by.xpath("//*[@id='autoscroll']/table/tbody/tr[35]/td[4]/edit-format/div/div[1]/div/div/input")).sendKeys("lakshmi10");
        element(by.xpath("//*[@id='autoscroll']/table/tbody/tr[35]/td[5]/edit-format/div/div[1]/div/div/input")).sendKeys("lakshmi10@manufacton.com");
        element(by.xpath("//html//tr[35]/td[8]/button[1]")).click();

        //Edit company

        browser.sleep(3000);
        element(by.xpath("//div[@class='pull-left']//input[@type='text']")).sendKeys("lakshmi10@manufacton.com");
        browser.sleep(2000);
        element(by.xpath("//button[@id='editrow']")).click();
        element(by.xpath("//*[@id='autoscroll']/table/tbody/tr[5]/td[2]/edit-format/div/div[1]/div/div/input")).clear();
        element(by.xpath('//*[@id="autoscroll"]/table/tbody/tr[5]/td[2]/edit-format/div/div[1]/div/div/input')).sendKeys("updates Name");
        browser.sleep(2000);
        element(by.xpath("//i[@class='zmdi zmdi-check']")).click();

        browser.sleep(10000);
        browser.close();

        //Logout

        element(by.xpath(" //span[@ng-if='!user.imageUrl']")).click();
        element(by.xpath("  //a[@ng-click='logout()']")).click();

        browser.sleep(10000);

        done();


    });
});
 