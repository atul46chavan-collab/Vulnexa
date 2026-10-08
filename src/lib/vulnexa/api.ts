import { queryOptions } from '@tanstack/react-query';

export type Session = { id: string; name: string; language: string; date: string; files: number; functions: number; findings: number; status: string; duration: string };
export type Finding = { id: string; name: string; file: string; line: number; cwe: string; severity: string; confidence: number; verdict: string; summary: string };
export type Rule = { cwe: string; name: string; category: string; rules: number };
export type Stage = { number: number; name: string; description: string; status: string; time: string };
export type WorkspaceData = { demo: boolean; sessions: Session[]; findings: Finding[]; rules: Rule[]; stages: Stage[]; code: string; patch: string; steps: { name: string; description: string; time: string }[]; activity: number[][] };
export interface ApiClient { getWorkspace(): Promise<WorkspaceData> }
const sample: WorkspaceData = {
  demo: true,
  sessions: [
    { id: 'juice-shop', name: 'OWASP Juice Shop', language: 'C/C++ sample', date: '2 hours ago', files: 142, functions: 183, findings: 6, status: 'Completed', duration: '4m 12s' },
    { id: 'test-project', name: 'Test Project (C++)', language: 'C++', date: '1 day ago', files: 28, functions: 64, findings: 2, status: 'Completed', duration: '1m 38s' },
    { id: 'linux-kernel', name: 'Linux Kernel (sample)', language: 'C', date: '3 days ago', files: 310, functions: 421, findings: 18, status: 'Completed', duration: '8m 24s' },
    { id: 'vulnerable-samples', name: 'Vulnerable C Samples', language: 'C', date: '5 days ago', files: 12, functions: 37, findings: 4, status: 'Completed', duration: '52s' },
    { id: 'network-utils', name: 'Network Utilities', language: 'C++', date: '6 days ago', files: 34, functions: 89, findings: 3, status: 'Completed', duration: '2m 06s' },
  ],
  findings: [
    { id: 'copy-input', name: 'copyUserInput', file: 'src/utils/input.cpp', line: 18, cwe: 'CWE-120', severity: 'Critical', confidence: 92, verdict: 'Violated', summary: 'Unbounded input is copied into a fixed-size buffer without validating its length.' },
    { id: 'validate-path', name: 'validateFilePath', file: 'src/utils/fileHandler.cpp', line: 42, cwe: 'CWE-22', severity: 'Medium', confidence: 48, verdict: 'Needs human review', summary: 'Path validation uses complex normalization logic. Additional context is needed to verify directory containment.' },
    { id: 'parse-input', name: 'parseUserInput', file: 'src/core/parser.cpp', line: 88, cwe: 'CWE-269', severity: 'Medium', confidence: 52, verdict: 'Needs human review', summary: 'The privilege boundary cannot be resolved from the extracted function context.' },
    { id: 'execute-command', name: 'executeCommand', file: 'src/system/exec.cpp', line: 121, cwe: 'CWE-284', severity: 'High', confidence: 55, verdict: 'Needs human review', summary: 'Access-control validation depends on a caller outside the current analysis context.' },
    { id: 'release-buffer', name: 'releaseBuffer', file: 'src/memory/buffer.c', line: 64, cwe: 'CWE-415', severity: 'High', confidence: 87, verdict: 'Violated', summary: 'The same allocation can reach two deallocation paths.' },
    { id: 'divide-values', name: 'divideValues', file: 'src/math/operations.c', line: 29, cwe: 'CWE-369', severity: 'Low', confidence: 95, verdict: 'Fix verified', summary: 'The submitted patch satisfies the same non-zero divisor contract in this sample.' },
  ],
  rules: [
    { cwe: 'CWE-120', name: 'Buffer Copy without Checking Size', category: 'Memory safety', rules: 10 },
    { cwe: 'CWE-415', name: 'Double Free', category: 'Memory safety', rules: 10 },
    { cwe: 'CWE-269', name: 'Improper Privilege Management', category: 'Authorization', rules: 10 },
    { cwe: 'CWE-22', name: 'Path Traversal', category: 'Input validation', rules: 10 },
    { cwe: 'CWE-284', name: 'Improper Access Control', category: 'Authorization', rules: 10 },
    { cwe: 'CWE-835', name: 'Loop with Unreachable Exit', category: 'Control flow', rules: 10 },
    { cwe: 'CWE-617', name: 'Reachable Assertion', category: 'Control flow', rules: 10 },
    { cwe: 'CWE-362', name: 'Concurrent Execution with Shared Resource', category: 'Concurrency', rules: 10 },
    { cwe: 'CWE-369', name: 'Divide by Zero', category: 'Numeric safety', rules: 10 },
    { cwe: 'CWE-401', name: 'Missing Release of Memory', category: 'Memory safety', rules: 10 },
  ],
  stages: [
    { number: 1, name: 'Developer Input', description: 'C/C++ project source', status: 'Completed', time: '0.2s' },
    { number: 2, name: 'Input Validation', description: 'File type, size, structure', status: 'Completed', time: '0.3s' },
    { number: 3, name: 'Function Extraction', description: 'Parse source into records', status: 'Completed', time: '1.2s' },
    { number: 4, name: 'Router Agent', description: 'Broad category + CWE routing', status: 'Completed', time: '2.1s' },
    { number: 5, name: 'Spec Retriever', description: 'Top-k rules from ChromaDB', status: 'Completed', time: '1.8s' },
    { number: 6, name: 'Contractor Agent', description: 'Generate behavioral contract', status: 'Completed', time: '3.4s' },
    { number: 7, name: 'Auditor Agent', description: 'Contract compliance + evidence', status: 'Completed', time: '4.2s' },
    { number: 8, name: 'Feedback Loop', description: 'Refine if uncertain', status: 'Skipped', time: '—' },
    { number: 9, name: 'Explanation Builder', description: 'Cause, location, remedy', status: 'Completed', time: '2.6s' },
    { number: 10, name: 'Fix Verification', description: 'Re-audit patched code', status: 'Pending', time: '—' },
    { number: 11, name: 'Dashboard & Report', description: 'UI display + report', status: 'Pending', time: '—' },
  ],
  code: '// src/utils/input.cpp\n#include <cstring>\n\nvoid copyUserInput(const char* input) {\n    char buffer[64];\n\n    // Copy user-provided input\n    if (input == nullptr) {\n        return;\n    }\n\n    strcpy(buffer, input);\n    processInput(buffer);\n}',
  patch: '// src/utils/input.cpp\n#include <cstring>\n\nvoid copyUserInput(const char* input) {\n    char buffer[64];\n\n    if (input == nullptr) {\n        return;\n    }\n\n    strncpy(buffer, input, sizeof(buffer) - 1);\n    buffer[sizeof(buffer) - 1] = \'\\0\';\n    processInput(buffer);\n}',
  steps: [
    { name: 'Function Context Analysis', description: 'Analyze function signature, body, and data-flow patterns.', time: '0.4s' },
    { name: 'Pattern Matching', description: 'Match against predefined vulnerability patterns.', time: '0.6s' },
    { name: 'Category Classification', description: 'Classify the unbounded buffer copy as memory safety.', time: '0.5s' },
    { name: 'CWE Candidate Selection', description: 'Identify CWE-120 as the primary candidate.', time: '0.4s' },
    { name: 'Confidence Scoring', description: 'Calculate routing confidence from sample pattern matches.', time: '0.2s' },
  ],
  activity: [[3,2,1],[5,3,2],[2,1,1],[4,2,1],[6,3,2],[3,2,1],[7,4,2],[4,3,1],[5,2,2],[8,4,2],[4,2,1],[6,3,2]],
};
export class MockApiClient implements ApiClient { async getWorkspace() { return sample } }
export class RealApiClient implements ApiClient {
  constructor(readonly baseUrl: string) {}
  async getWorkspace(): Promise<WorkspaceData> { throw new Error('The FastAPI service schema has not been connected. Demo data remains available.'); }
}
// No undocumented production endpoints are guessed. Replace this adapter after the FastAPI schema is supplied.
export const apiClient: ApiClient = new MockApiClient();
export const workspaceQuery = queryOptions({ queryKey: ['vulnexa-workspace'], queryFn: () => apiClient.getWorkspace(), staleTime: Infinity });
export const vulnexaHead = (title: string, description = 'Contract-guided C/C++ vulnerability analysis with traceable evidence, security contracts, and fix verification.') => ({ meta: [{ title: `${title} | Vulnexa` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Vulnexa` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] });
