Create a single markdown file (e.g., "project_context.md") that contains:
High-level architecture overview
Key design decisions and rationales
Coding style preferences
Important dependencies and their versions
Brief glossary of domain-specific terms
Update this file manually as you work on the project

Maintain a simple "todo.md" file where you jot down future plans and upcoming tasks

Add specially formatted comments in your code for important design decisions or complex logic
Example: "# AI-NOTE: This pattern is used because..."
Create a simple script to extract these comments into a "code_notes.md" file

AI Prompt Template:
Create a text file with a template for your AI prompts, including placeholders for:
Task description
Relevant parts of the context
Specific questions or requirements

Metadata-Rich File Structure:
Implement a standardized metadata header in each code file, containing:
File purpose
Key functions/classes
Dependencies
Last modified date
Related files

Hierarchical Context Database:
Create a SQLite database to store structured information about the codebase:
File information (path, metadata, last modified)
Function/class definitions
Dependencies between files and functions
Design decisions (linked to specific code sections)
TODO items and future plans
