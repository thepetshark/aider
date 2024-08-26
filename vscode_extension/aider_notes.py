import json
import subprocess
import sys


def get_ai_notes():
    try:
        # Get the current file
        result = subprocess.run(
            ["git", "rev-parse", "--show-toplevel"], capture_output=True, text=True, check=True
        )
        repo_root = result.stdout.strip()

        # Get the latest commit hash
        result = subprocess.run(
            ["git", "log", "-n", "1", "--pretty=format:%H"],
            capture_output=True,
            text=True,
            check=True,
        )
        commit_hash = result.stdout.strip()

        # Get the AI notes for this commit
        result = subprocess.run(
            ["git", "notes", "--ref=ai-context", "show", commit_hash],
            capture_output=True,
            text=True,
            check=True,
        )
        notes = json.loads(result.stdout)

        print(json.dumps(notes, indent=2))
    except subprocess.CalledProcessError as e:
        print(f"Error executing Git command: {e}", file=sys.stderr)
    except json.JSONDecodeError as e:
        print(f"Error parsing Git notes: {e}", file=sys.stderr)
    except Exception as e:
        print(f"An unexpected error occurred: {e}", file=sys.stderr)


if __name__ == "__main__":
    get_ai_notes()
