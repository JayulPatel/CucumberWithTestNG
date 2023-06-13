package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LogInPageStepDefinition {
	
WebDriver driver;
	
	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page(){
		
        System.setProperty("webdriver.gecko.driver", "C:\\SeleniumJars\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get("https://demo.guru99.com/v3/index.php");
			
	}   

	
	@When("^title of Login Page is Guru99 Bank Home Page$")
	public void title_of_Login_Page_is_Guru99_Bank_Home_Page() {
	    
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Guru99 Bank Home Page", title);
		
	}
	
	
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password){
		
		driver.findElement(By.name("uid")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
		    
	}
	

	@Then("^user clicks on Login button$")
	public void user_clicks_on_Login_button(){
	    WebElement LoginBtn = driver.findElement(By.name("btnLogin"));
	    JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", LoginBtn);
		
	}
	
	
	@Then("^user is on Home Page$")
	public void user_is_on_Home_Page() throws InterruptedException {
		
		String title = driver.getTitle();
		System.out.println("Home Page Title::"+ title);
		Assert.assertEquals("Guru99 Bank Home Page", title);
			    
	}

	 @Then("^Close the browser$")
	 public void close_the_browser(){
		 driver.quit();
	 }
}
