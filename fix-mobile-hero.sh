#!/bin/bash
# fix-mobile-hero.sh
# Fixes the hidden md:flex bug across all case study hero sections.
# Run from your portfolio root: ~/Documents/portfolio

set -e

WORK_DIR="src/pages/work"

if [ ! -d "$WORK_DIR" ]; then
  echo "Error: Run this from your portfolio root (~/Documents/portfolio)"
  exit 1
fi

FILES=(
  "pdlc-redesign.astro"
  "linear-migration.astro"
  "inner-circle.astro"
  "auxin-design-system.astro"
  "px-org-strategy.astro"
)

OLD='<div class="md:col-span-5 hidden md:flex justify-end items-start">'
NEW='<div class="md:col-span-5 flex justify-center md:justify-end items-start mt-8 md:mt-0">'

OLD_INNER='<div class="case-hero-artifact">'
NEW_INNER='<div class="case-hero-artifact w-full max-w-sm md:max-w-none">'

for f in "${FILES[@]}"; do
  FILE_PATH="$WORK_DIR/$f"
  if [ ! -f "$FILE_PATH" ]; then
    echo "Skipping $f (not found)"
    continue
  fi

  # Use sed with a temp file (macOS compatible)
  sed -i.bak "s|$OLD|$NEW|g" "$FILE_PATH"
  sed -i.bak "s|$OLD_INNER|$NEW_INNER|g" "$FILE_PATH"
  rm "$FILE_PATH.bak"

  # Verify the fix landed
  if grep -q "hidden md:flex" "$FILE_PATH"; then
    echo "⚠️  $f: still has hidden md:flex"
  else
    echo "✅ $f: fixed"
  fi
done

echo ""
echo "Done. Review changes with: git diff src/pages/work/"
echo "Then: git add . && git commit -m 'Fix mobile hero visibility on case studies' && git push"
