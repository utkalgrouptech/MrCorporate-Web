import Image from "next/image";
import { Settings, Cloud, Smartphone, Monitor } from "@mui/icons-material";
import { mobile } from "@/src/assets/home"; 

export default function FeaturesSection() {
  return (
    <section className="bg-gradient-to-br from-[#ee7623] to-[#282461] text-white py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold">Our App</h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Features */}
          <div className="space-y-16 text-right">
            <div>
              <div className="flex items-center justify-end gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Unlimited Features</h3>
                  <p className="text-white/80">
                    Effortlessly manage your payroll processes with a comprehensive suite of features that streamline salary calculations, automate tax deductions, and ensure compliance with labor laws. Our intuitive interface empowers you to handle payroll tasks efficiently, no matter the size of your team.
                  </p>
                </div>
                <div className="bg-white rounded-full p-4">
                  <Settings className="w-6 h-6 text-[#FF5722]" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-end gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cloud Storage</h3>
                  <p className="text-white/80">
                    Access your payroll data anytime, anywhere with secure cloud storage. Say goodbye to manual record-keeping and hello to a centralized, accessible system that ensures data protection and easy collaboration across departments.
                  </p>
                </div>
                <div className="bg-white rounded-full p-4">
                  <Cloud className="w-6 h-6 text-[#FF5722]" />
                </div>
              </div>
            </div>
          </div>

          {/* Center Phone */}
          <div className="relative mx-auto w-full max-w-[300px] my-12 md:my-0">
            <Image
              src={mobile.src}
              alt="App Interface"
              width={300}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Right Features */}
          <div className="space-y-16 text-left">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white rounded-full p-4">
                  <Smartphone className="w-6 h-6 text-[#FF5722]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Android Platform</h3>
                  <p className="text-white/80">
                    Take your payroll management on the go with our dedicated Android platform. Manage employee details, approve leave requests, and run payroll processes from the convenience of your smartphone.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-full p-4">
                  <Monitor className="w-6 h-6 text-[#FF5722]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strategy Solutions</h3>
                  <p className="text-white/80">
                    Stay ahead with strategic payroll insights. Leverage advanced reporting tools to analyze payroll trends, optimize resources, and make informed decisions that align with your business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Heading and Paragraph */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold mb-4">Best Features</h2>
          <p className="text-white/80 text-2xl max-w-full mx-auto">
            Streamline payroll processes with automated calculations, ensuring error-free operations and saving valuable time. Our software guarantees compliance with tax regulations, reducing the risk of penalties. Enjoy secure, cloud-based storage for payroll data, accessible anytime, anywhere. Empower your workforce with an intuitive self-service portal for payslips, leave requests, and personal updates. Customizable features allow seamless adaptation to your organizations needs, while robust analytics provide actionable insights into payroll trends and costs. Simplify employee management with integrated solutions designed to enhance productivity. Experience reliable and efficient payroll software tailored to make complex payroll operations hassle-free and accurate for your business.
          </p>
        </div>
      </div>
    </section>
  );
}
