
"use client";

import { motion } from "framer-motion";
import { FiTarget } from "react-icons/fi";

const About = () => {
  const skills = [
    "Linux / Windows Server",
    "Nginx / Apache / Tomcat",
    "AWS / GCP / DigitalOcean",
    "Docker / Kubernetes",
    "Jenkins / GitHub Actions",
    "Ansible",
    "MySQL / MongoDB / MSSQL",
    "Nagios / Zabbix",
  ];

  return (
    <section id="about" className="max-w-4xl mx-auto py-24 px-6 md:px-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate whitespace-nowrap">
            <span className="text-green font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-[1px] w-full max-w-xs bg-lightest-navy/50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-slate text-lg leading-relaxed space-y-4">
            <p>
              Hello! My name is Anjali Jadhav. I am a DevOps Engineer with hands-on experience in GitHub Actions and ArgoCD for CI/CD automation and GitOps-based deployments.
            </p>
            <p>
              I am experienced in Docker, Kubernetes (K8s/K3s), Helm, and monitoring using Grafana and Prometheus across Linux and AWS environments. I am skilled in supporting production systems, troubleshooting deployments, and improving DevOps workflows.
            </p>
            <p>
              I hold a B.Tech in CSE (08/2019 – 08/2023).
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
              {[
                "GitHub Actions & Jenkins",
                "ArgoCD & Helm",
                "Docker & Kubernetes",
                "AWS (EC2, VPC, IAM)",
                "Prometheus & Grafana",
                "Ansible & Terraform",
                "Linux Administration",
                "Python & Shell Scripting",
              ].map((skill, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green text-xs">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group mx-auto md:mx-0 w-64 h-64 md:w-full md:h-fit max-w-[300px]">
            <div className="absolute inset-0 border-2 border-green rounded translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative z-10 bg-green/20 rounded overflow-hidden aspect-square group-hover:bg-transparent transition-colors">
              <img
                src="/photo.jpg"
                alt="Anjali Jadhav"
                className="w-full h-full object-cover mix-blend-multiply grayscale hover:mix-blend-normal hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
