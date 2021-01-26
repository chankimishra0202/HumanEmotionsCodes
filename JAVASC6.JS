<script>

/////////////////////////// HUMAN EMOTIONS CODES ////////////////////////////

function DrivingLicence(Licencestate,DLNO)
{
	Name="Chanki Mishra"
	if(Licencestate=="UTTAR PRADESH"){
	return "valid licence"
	}
    else{
    document.writeln('<br>',Licencestate,DLNO)
    }
}

function calling(callback){
callback("KARNATAKA"," K-41230120012921")
}
calling(DrivingLicence)

//////////////////////////////// HUMAN EMOTIONS CODES //////////////////////////////////////

function TVdetails(tvmodel,ledlightining,sizez,type,wirelessHDMI)
{
  document.write("<br>"+"TV Model :"+tvmodel)
  return
}
function Laptopdetails(callback)
{
  callback("LG55LHX","Backlight","55 inches","scanning backlight","yes")
  laptopmodel = "LGp430"
  os = "Window 7 homebase"
  Processor = "second generation intel core i3,i5 or i7 processor"
  screen = "14.0 inch"
  Resolution = "1366*768"
  storage = "320 GB"
  cost = "Rs. 50,000"
  document.write("<br> Laptop Model : "+laptopmodel)
}
Laptopdetails(TVdetails)

////////////////////////////////// HUMAN EMOTIONS CODES ///////////////////////////////////

function Orderdetails(brand,productcode,colour,size,material,occassion,pattern,sleeve,gender)
{
  document.write("<br>"+brand+"<br>"+productcode)
  return
}
function shippingdetails(callback)
{
  callback("Scott International","APPSCOTT-INTERNSWIT610835D77A4441","Black","s","cotton","casual","solid","full sleeves","Male")
  EstimatedArrival = "9 days"
  ReturnPolicy = "Seller will accept return within a 15 days from date of delivery of the item"
  Address = "BTM Layout ,Bangalore,Karnataka"
  email = "chankimishra0202@gmail.com"
  contactnumber = 834026758789
  document.write("<br>"+"EstimatedArrival : "+EstimatedArrival)
}
shippingdetails(Orderdetails)

//////////////////////////////////// HUMAN EMOTIONS CODES /////////////////////////////////////////////

function Outstanding(totaloutstanding,unbilled)
{
  document.write("<br><br>",totaloutstanding,unbilled)
}
function lastpaymentmade(lastamount,date)
{
  document.write("<br>",lastamount,date)
}
function creditlimit(totalcredit,available)
{
  document.write("<br>",totalcredit,available)
}
function cashlimit(totalcash,availablecash)
{
  document.write("<br>",totalcash,availablecash)
}
function utilization(callback,callback,callback,callback)
{
 callback("Rs. 571.36","Rs. 0 ")
 callback("Rs. 0","11-01-21")
 callback("Rs.18000","Rs. 17428.64")
 callback("Rs. 3600","Rs. 3600")
}
utilization(Outstanding,lastpaymentmade,creditlimit,cashlimit)

/////////////////////////////// HUMAN EMOTIONS CODES ///////////////////////////////////

function Driverdetails(lastname,firstname,middlename,employee,birthcity,dateofbirth)
{
  document.writeln("<br><br>",lastname,middlename,employee,birthcity,dateofbirth)
  return(firstname)
}
function Licensedetails(callbackdriverdetails,callbackvehicledetails)
{
 var n = callbackdriverdetails("Kumar","Pavan","Bijjavaram","Software Engineer","Rajampet","12-7-1992")
 LicenseNumber = "ka50201500006939"
 LicenseState = "Karnataka"
 LicenseCountry = "India"
 document.write("<br>Name:"+ n +"LicenseNumber : "+LicenseNumber+" LicenseState : "+LicenseState)
 callbackvehicledetails("Light motor","car","red","Kp98gtyihh457797","tc5678898335r45","BMW")
}
function vehicledetails(vehicletype,vehicle,colour,enginenumber,chassisnumber,company)
{
  document.writeln("<br>"+ vehicletype+" "+colour)
}
Licensedetails(Driverdetails,vehicledetails)

/////////////////////////////////// HUMAN EMOTIONS CODES ///////////////////////////////////////////

function EmployeeDetails(organisationname,age,gender,idcardnumber,name)
{
  document.write("<br><br>",organisationname + age +gender +idcardnumber +name)
  return
}
function employeecontact(callback)
{
  callback("jvt ",5,"Male","ASUPB590F","Mr. Venkatesh") 
  emailid = "venkatesh@gmail.com"
  address = "BEML Main Road"
  city = "Bangalore"
  state = "Karnataka"
  zip = 560075
  country = "India"
  MobileNumber = 9900367097
  document.write(emailid)
}
employeecontact(EmployeeDetails)

//////////////////////////////////////// HUMAN EMOTIONS CODES ////////////////////////////////

function Systemproperties(rate,processor,ram,systemtype)
{
  document.write("<br><br>",rate,processor,ram,systemtype)
}
function upsspecification(model,ipvoltage,frequency,opvoltage,batterytype,batterycapacity,batterybackup,rechargetime,weight)
{
  document.write("<br>",model,ipvoltage,frequency,opvoltage)
}
function hardwaredetails(callback,callback)
{
  callback(4.5,"Intel core i5-2450 cpu","4.00Gb","64 bit operating system")
  callback("digital 600","230v ac","50 hz","230 v ac","sealed maintenance free","12 volt7 Ah","12 to 20 mints","5 to 6 hrs","6.1 kg")
}
hardwaredetails(Systemproperties,upsspecification)

///////////////////////////////// HUMAN EMOTIONS CODES ///////////////////////////////////////////////

function AccountInfo(firstname,lastname,username,password,confirmpassword,birthday,gender,mobile,email)
{
  if(password == confirmpassword)
  {
    return "<br><br>Account Created Successfully!!"
  }
  else
  {
    return "<br>Password and Confirm Password does not match"
  }
}
function createaccount(callback)
{
var res = callback("venkatesh","db","jvt","balu","balu","2-6-1986","Male",9900367097,"venkatesh.db@gmail.com")
document.write(res)
}
createaccount(AccountInfo)

//////////////////////////////// HUMAN EMOTIONS CODES //////////////////////////////////////////

function Gadgetinfo(chipset,cpu,gpu,model,manufacturer,os,processor)
{
  return model
}
function Platform(platformos,platformchipset,platformcpu,platformgpu)
{
  return platformos
}
function Battery(nonremovable,standby,talktime,musicplay)
{
   return nonremovable
}
function Body(dimensions,weight,sim)
{
  return sim
}
function calleveryone(callbackgadgetinfo,callbackplatform,callbackbattery,callbackbody)
{
var gadgetmodel = callbackgadgetinfo("Apple A9","Dual core 1.84 GHz Twister","PowerVR GT7600","iphone","Apple","ios 4.0","1 GHZ")
var gadgetplatform =  callbackplatform("iOS 9","Apple A9","Dualcore 1.84 GHz Twister","PowerVRGT7600")
var gadgetbattery = callbackbattery("Li-Po 1715 mAh battery","upto 240 h(3G)","upto 14 h(3G)","upto 50 h")
var gadgetbody = callbackbody("138*67.1*7.1 mm","143 g","Nano sim")
  NetworkTechnology= "GSM/CDMA/HSPA/EVDO/LTE"
  document.write("<br><br>",gadgetmodel,gadgetplatform,gadgetbattery,gadgetbody,NetworkTechnology)
}
calleveryone(Gadgetinfo,Platform,Battery,Body)

</script>
