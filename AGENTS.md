<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## CGVA frontend architecture
- Use shared CGVA workspace components and individual TanStack route files for every required URL; this keeps deep links and visual consistency intact.
- Keep security results in a clearly labeled fixture adapter until an existing FastAPI service is connected; the frontend must not perform security analysis or fabricate live outcomes.
- Define all visual roles in src/styles.css and reuse the shared Button component; this preserves the reference design across screens.
