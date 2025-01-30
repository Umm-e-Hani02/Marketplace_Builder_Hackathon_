import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default function LeftContainer() {
  return (
    <section className="w-full max-w-screen h-[2840px] md:h-[2240px] overflow-x-hidden md:mx-auto">
      <div className=" h-[2276px] md:h-[2176px] mx-6 md:mx-auto">
        <div className="md:w-[570px] xl:w-[852px] h-[500px] md:h-[336px] bg-[#FFFFFF] rounded-lg lg:m-6 flex flex-col px-6 text-nowrap md:mx-24 mt-6">
          {/* Billing */}
          <div className="flex items-center">
            <div className="w-full">
              <h2 className="text-xl md:text-2xl font-bold text-[#1A202C] pt-5">
                Billing Info
              </h2>
              <p className="xl:text-[16px] text-[#90A3BF] text-[12px] flex justify-between">
                <span>Please enter your billing info</span>
                <span>Step 1 of 4</span>
              </p>
            </div>
          </div>

          <div className="my-7">
            <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
              <div>
                <legend className="font-semibold text-[#1A202C]">Name</legend>
                <Input
                  className="my-2 h-14 bg-gray-100 md:w-[230px] xl:w-[390px]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <legend className="font-semibold text-[#1A202C]">
                  Phone Number
                </legend>
                <Input
                  className="my-2 h-14 bg-gray-100 md:w-[230px] xl:w-[390px]"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <legend className="font-semibold text-[#1A202C]">
                  Address
                </legend>
                <Input
                  className="my-2 h-14 bg-gray-100 md:w-[230px] xl:w-[390px]"
                  placeholder="Address"
                />
              </div>
              <div>
                <legend className="font-semibold text-[#1A202C]">
                  Town/City
                </legend>
                <Input
                  className="my-2 h-14 bg-gray-100 md:w-[230px] xl:w-[390px]"
                  placeholder="Town or city"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Rental Info */}
        <div className="md:w-[570px] xl:w-[852px] h-[885px] md:h-[664px] bg-[#FFFFFF] rounded-lg lg:m-6 px-6 md:mx-24 mt-6">
          <div className="flex items-center">
            <div className="w-full">
              <h2 className="text-xl md:text-2xl font-bold text-[#1A202C] pt-5">
                Rental Info
              </h2>
              <p className="xl:text-[16px] text-[#90A3BF] text-[12px] flex justify-between">
                <span>Please select your rental date</span>
                <span>Step 2 of 4</span>
              </p>
            </div>
          </div>

          <div>
            <form action="">
              <div className="mt-6">
                <input type="radio" name="selectanyone" />
                <label className="font-semibold ml-3">Pick-Up</label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                <div className="">
                  <legend className="text-[#1A202C] font-semibold">
                    Locations
                  </legend>
                  <Input
                    className="md:w-[230px] xl:w-[390px] h-14 text-[#90A3BF] bg-gray-100 my-4 focus:border-none active:border-none"
                    placeholder="Select Location"
                  />
                </div>
                <div>
                  <legend className="text-[#1A202C] font-semibold">Date</legend>
                  <Input
                    type="date"
                    className="md:w-[230px] xl:w-[390px] h-14 text-[#90A3BF] bg-gray-100 my-4 focus:border-none active:border-none"
                  />
                </div>
                <div>
                  <legend className="text-[#1A202C] font-semibold">Time</legend>
                  <Select>
                    <SelectTrigger className="md:w-[230px] xl:w-[390px] h-14 text-[#90A3BF] bg-gray-100 my-4 focus:border-none active:border-none">
                      <SelectValue placeholder="Select your time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1:00</SelectItem>
                      <SelectItem value="2">2:00</SelectItem>
                      <SelectItem value="3">3:00</SelectItem>
                      <SelectItem value="4">4:00</SelectItem>
                      <SelectItem value="5">5:00</SelectItem>
                      <SelectItem value="6">6:00</SelectItem>
                      <SelectItem value="7">7:00</SelectItem>
                      <SelectItem value="8">8:00</SelectItem>
                      <SelectItem value="9">9:00</SelectItem>
                      <SelectItem value="10">10:00</SelectItem>
                      <SelectItem value="11">11:00</SelectItem>
                      <SelectItem value="12">12:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </div>

          <div className="">
            <form action="">
              <div className="mt-6">
                <input type="radio" name="selectanyone" />
                <label className="font-semibold ml-3">Drop-Off</label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                <div className="">
                  <legend className="text-[#1A202C] font-semibold">
                    Locations
                  </legend>
                  <Input
                    className="md:w-[230px] xl:w-[390px] h-14 text-[#90A3BF] bg-gray-100 my-4 focus:border-none active:border-none"
                    placeholder="Select Location"
                  />
                </div>
                <div>
                  <legend className="text-[#1A202C] font-semibold">Date</legend>
                  <Input
                    type="date"
                    className="md:w-[230px] xl:w-[390px] h-14 text-[#90A3BF] bg-gray-100 my-4 focus:border-none active:border-none"
                  />
                </div>
                <div>
                  <legend className="text-[#1A202C] font-semibold">Time</legend>
                  <Select>
                    <SelectTrigger className="md:w-[230px] xl:w-[390px] h-14 text-[#90A3BF] bg-gray-100 my-4 focus:border-none active:border-none">
                      <SelectValue placeholder="Select your time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1:00</SelectItem>
                      <SelectItem value="2">2:00</SelectItem>
                      <SelectItem value="3">3:00</SelectItem>
                      <SelectItem value="4">4:00</SelectItem>
                      <SelectItem value="5">5:00</SelectItem>
                      <SelectItem value="6">6:00</SelectItem>
                      <SelectItem value="7">7:00</SelectItem>
                      <SelectItem value="8">8:00</SelectItem>
                      <SelectItem value="9">9:00</SelectItem>
                      <SelectItem value="10">10:00</SelectItem>
                      <SelectItem value="11">11:00</SelectItem>
                      <SelectItem value="12">12:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Payment */}
        <div className="md:w-[570px] xl:w-[852px] h-[840px] md:h-[596px] bg-[#FFFFFF] rounded-lg px-6 text-nowrap lg:m-6 md:mx-24 mt-6">
          <div className="flex items-center">
            <div className="w-full">
              <h2 className="text-xl md:text-2xl font-bold text-[#1A202C] pt-5">
                Payment Method
              </h2>
              <p className="xl:text-[16px] text-[#90A3BF] text-[12px] flex justify-between">
                <span className="text-wrap">
                  Please enter your payment method
                </span>
                <span>Step 3 of 4</span>
              </p>
            </div>
          </div>

          {/* Payment via credit card */}
          <div className="xl:w-[804px] md:w-[530px] h-[560px] md:h-[308px] bg-[#F6F7F9] flex flex-col p-6 rounded-lg m-auto mt-5">
            <div className="flex justify-between items-center">
              <div>
                <input type="radio" name="select" />
                <label className="font-semibold ml-2 md:ml-3">
                  Credit Card
                </label>
              </div>
              <div className="ml-3 md:ml-0">
                <Image src="/assets/visa.png" alt="" width={90} height={90} />
              </div>
            </div>

            <div>
              <form action="" className="grid grid-cols-1 md:grid-cols-2">
                <div className="mt-6">
                  <legend className="font-semibold">Card Number</legend>
                  <Input
                    placeholder="Card number"
                    className="h-14 my-4 md:w-[230px] xl:w-[350px]"
                  />
                </div>
                <div className="mt-6">
                  <legend className="font-semibold">Expiration Date</legend>
                  <Input
                    type="date"
                    className="h-14 my-4 md:w-[230px] xl:w-[350px]"
                  />
                </div>
                <div>
                  <legend className="font-semibold">Card Holder</legend>
                  <Input
                    placeholder="Card holder"
                    className="h-14 my-4 md:w-[230px] xl:w-[350px]"
                  />
                </div>
                <div>
                  <legend className="font-semibold">CVC</legend>
                  <Input
                    placeholder="CVC"
                    className="h-14 my-4 md:w-[230px] xl:w-[350px]"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Payment via PayPal */}
          <div className="md:w-[530px] xl:w-[804px] h-14 bg-[#F6F7F9] flex items-center justify-between px-5 rounded-lg mt-6">
            <div className="flex gap-2 md:gap-5">
              <input type="radio" name="select" />
              <p className="text-[#1A202C] font-semibold">PayPal</p>
            </div>
            <div>
              <Image
                src="/assets/paypal.png"
                alt="PayPal"
                width={100}
                height={100}
              />
            </div>
          </div>

          {/* Payment via Bitcoin */}
          <div className="md:w-[530px] xl:w-[804px] h-14 bg-[#F6F7F9] flex items-center justify-between px-5 rounded-lg mt-6">
            <div className="flex gap-2 md:gap-5">
              <input type="radio" name="select" />
              <p className="text-[#1A202C] font-semibold">Bitcoin</p>
            </div>
            <div>
              <Image
                src="/assets/bitcoin.png"
                alt="Bitcoin"
                width={90}
                height={90}
              />
            </div>
          </div>
        </div>

        {/* Confirmation */}

        <div className="md:w-[570px] xl:w-[852px] h-[484px] bg-[#FFFFFF] rounded-lg px-6 lg:m-6 md:mx-24 mt-6">
          <div className="w-full">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A202C] pt-5">
              Confirmation
            </h2>
            <p className="xl:text-[16px] text-[#90A3BF] text-[10px] flex justify-between">
              <span className="">
                We are getting to the end. Just few clicks and your rental is
                ready!
              </span>
              <span className="text-nowrap">Step 4 of 4</span>
            </p>
          </div>

          <div className="w-[804px] h-[136px] items-center">
            <p className="w-[220px] md:w-[530px] xl:w-[804px] h-16 md:h-15 rounded-lg bg-gray-100 text-[#1F2544] font-semibold my-5 xl:p-4 px-1 flex items-center text-[13px] xl:text-[17px] text-wrap">
              <input type="checkbox" className="mr-2" />I agree with sending
              Marketing and newsletter emails. No spam, promised!
            </p>
            <p className="w-[220px] md:w-[530px] xl:w-[804px] h-16 md:h-15 rounded-lg bg-gray-100 text-[#1F2544] font-semibold xl:p-4 px-1 flex items-center text-[13px] xl:text-[17px]">
              <input type="checkbox" className="mr-2" />I agree with our terms
              and conditions and privacy policy.
            </p>
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white w-[140px] h-14 rounded-xl mt-5">
            Rent Now
          </Button>

          <Image
            src="/assets/layer.png"
            alt="datasafe"
            width={30}
            height={30}
            className="mt-5"
          />

          <div className="w-[548px] h-[52px] mt-3">
            <h3 className="text-[#1A202C] font-semibold">
              All your data are safe
            </h3>
            <p className="w-[220px] md:w-[530px] xl:w-[804px] text-[#90A3BF] text-[12px] md:text-[14px] overflow-hidden text-wrap">
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
