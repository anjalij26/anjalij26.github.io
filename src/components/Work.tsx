
"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";

const projects = [
  {
    title: "CI/CD Pipeline Automation",
    description:
      "Designed and implemented automated CI/CD pipelines using GitHub Actions, enabling seamless build, test, and deployment workflows. Integrated with Docker and Helm for consistent delivery across environments.",
    tech: ["GitHub Actions", "Docker", "Helm", "ArgoCD"],
    links: { github: "#", external: "#" },
  },
  {
    title: "GitOps Deployment System",
    description:
      "Implemented GitOps-based deployments using ArgoCD to manage applications across Dev, UAT, and Production environments, ensuring synchronization, version control, and rapid rollbacks.",
    tech: ["ArgoCD", "Kubernetes", "GitOps", "YAML"],
    links: { github: "#", external: "#" },
  },
  {
    title: "Cloud Infrastructure Management",
    description:
      "Managed AWS infrastructure including EC2, VPC, IAM, and Route53. Configured auto-scaling, load balancers, and monitoring with CloudWatch, Prometheus, and Grafana for high availability.",
    tech: ["AWS", "Terraform", "Prometheus", "Grafana"],
    links: { github: "#", external: "#" },
  },
];

const Work = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-24 px-6 md:px-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate whitespace-nowrap">
            <span className="text-green font-mono text-xl mr-2">03.</span>
            Some Things I’ve Built
          </h2>
          <div className="h-[1px] w-full max-w-xs bg-lightest-navy/50"></div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <li key={i} className="bg-light-navy hover:-translate-y-2 transition-transform duration-300 rounded shadow-xl">
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-green text-4xl">
                      <FiFolder />
                    </div>
                    <div className="flex gap-4 text-light-slate">
                      <a href={project.links.github} className="hover:text-green">
                        <FiGithub size={20} />
                      </a>
                      <a href={project.links.external} className="hover:text-green">
                        <FiExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-lightest-slate mb-2 hover:text-green transition-colors">
                    <a href={project.links.external}>{project.title}</a>
                  </h3>
                  <p className="text-slate mb-6 text-sm">{project.description}</p>
                </div>
                <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate opacity-70">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Work;
