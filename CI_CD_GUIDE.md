# CI/CD Pipeline Guide

This document outlines the comprehensive CI/CD pipeline implementation following the "shift-left" philosophy for the Smart CV Builder project.

## Pipeline Overview

### Shift-Left Philosophy Implementation

Our pipeline catches issues as early as possible in the development cycle:

1. **Pre-commit hooks** (recommended to add)
2. **PR validation** - Comprehensive quality gates
3. **Main branch protection** - Automated releases
4. **Container security** - Multi-layer scanning
5. **Deployment automation** - Staged rollouts

## Workflows

### 1. PR Validation (`pr-validation.yml`)

**Triggers:** Pull requests to `main` or `develop` branches

**Quality Gates:**
- ✅ Code formatting (Prettier)
- ✅ Linting (ESLint with accessibility rules)
- ✅ Type checking (TypeScript)
- ✅ Unit tests with coverage
- ✅ Build verification
- ✅ End-to-end tests (Playwright)
- ✅ Security scanning (Trivy)
- ✅ Dependency audit

**Concurrency:** Cancels previous runs for the same PR

### 2. Release Pipeline (`release.yml`)

**Triggers:** Pushes to `main` branch

**Process:**
1. **Quality Gates** - Same as PR validation
2. **Semantic Release** - Automated versioning
3. **Container Build** - Multi-architecture Docker images
4. **Staging Deployment** - Automatic deployment
5. **Production Approval** - Manual gate
6. **Production Deployment** - After approval

### 3. Security Monitoring (`security-monitoring.yml`)

**Triggers:** Daily schedule + manual dispatch

**Scans:**
- Dependency vulnerabilities
- Container security (Trivy)
- Code analysis (CodeQL)
- Outdated package detection

## Semantic Release Configuration

### Commit Message Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Release Types

| Commit Type | Release Type | Example |
|-------------|--------------|---------|
| `feat:` | Minor | `feat: add CV template selection` |
| `fix:` | Patch | `fix: resolve PDF export issue` |
| `perf:` | Patch | `perf: optimize image loading` |
| `BREAKING CHANGE:` | Major | `feat!: redesign user interface` |

### Branch Strategy

- `main` - Production releases
- `develop` - Beta pre-releases
- Feature branches - No releases

## Container Strategy

### Multi-stage Build

1. **Dependencies** - Install packages
2. **Builder** - Build application
3. **Runner** - Minimal production image

### Image Tags

- `latest` - Latest stable release
- `v1.2.3` - Specific version
- `v1.2` - Minor version
- `v1` - Major version

### Registry

Images are pushed to GitHub Container Registry (`ghcr.io`)

## Environment Setup

### Required Secrets

Add these to your GitHub repository secrets:

```bash
# Optional: For enhanced coverage reporting
CODECOV_TOKEN=your_codecov_token
```

### Repository Settings

1. **Branch Protection Rules** for `main`:
   - Require PR reviews
   - Require status checks
   <!-- - Require branches to be up to date
   - Include administrators -->

2. **Environments**:
   - `staging` - Auto-deployment
   - `production-approval` - Manual approval required
   - `production` - Protected deployment

## Local Development

### Prerequisites

```bash
# Install dependencies
pnpm install

# Install Playwright browsers
pnpm dlx playwright install --with-deps
```

### Available Scripts

```bash
# Development
pnpm dev                 # Start development server
pnpm build              # Build for production
pnpm start              # Start production server

# Quality Assurance
pnpm lint               # Run ESLint
pnpm lint:fix           # Fix ESLint issues
pnpm format             # Format code with Prettier
pnpm format:check       # Check code formatting

# Testing
pnpm test               # Run unit tests
pnpm test:watch         # Run tests in watch mode
pnpm test:e2e           # Run E2E tests
pnpm test:e2e:ui        # Run E2E tests with UI
pnpm test:e2e:headed    # Run E2E tests in headed mode
```

## Docker Usage

### Build Image

```bash
docker build -t smart-cv-builder .
```

### Run Container

```bash
docker run -p 3000:3000 smart-cv-builder
```

### Health Check

```bash
curl http://localhost:3000/api/health
```

## Monitoring and Observability

### Health Endpoint

- **URL:** `/api/health`
- **Method:** GET
- **Response:** JSON with status, timestamp, uptime, environment, version

### Coverage Reports

- Unit test coverage uploaded to Codecov
- E2E test results stored as artifacts
- Security scan results in GitHub Security tab

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (requires 20+)
   - Verify pnpm lock file is up to date
   - Ensure all dependencies are installed

2. **Test Failures**
   - E2E tests require application to be running
   - Check Playwright browser installation
   - Verify test environment variables

3. **Docker Issues**
   - Ensure standalone output is enabled in Next.js config
   - Check .dockerignore for excluded files
   - Verify multi-stage build dependencies

### Getting Help

1. Check GitHub Actions logs
2. Review test reports in artifacts
3. Check security scan results
4. Verify environment configurations

## Best Practices

### Commit Messages

- Use conventional commit format
- Be descriptive but concise
- Include breaking change notes
- Reference issue numbers when applicable

### Pull Requests

- Keep PRs focused and small
- Ensure all quality gates pass
- Add meaningful descriptions
- Include tests for new features

### Security

- Regularly update dependencies
- Monitor security scan results
- Follow principle of least privilege
- Use environment-specific configurations

## Future Enhancements

- [ ] Add performance testing
- [ ] Implement blue-green deployments
- [ ] Add infrastructure as code
- [ ] Enhance monitoring and alerting
- [ ] Add automated rollback capabilities