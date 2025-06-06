# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "landing-page-gem"
  spec.version       = "1.3.1"
  spec.authors       = ["wdzajicek"]
  spec.email         = ["wdzajicek@gmail.com"]

  spec.summary       = "A Jekyll Gem theme for KCC lading page/micro-sites."
  spec.homepage      = "https://github.com/KankakeeCommunityCollege/landing-page-gem"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4"
end
