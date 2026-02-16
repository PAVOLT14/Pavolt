export default defineAppConfig({
  icon: {
    customize: (content: string): string => content.replace(/stroke-width="[^"]*"/g, `stroke-width="1.5"`),
  },
})
