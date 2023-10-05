export default {
  logo_url: "m_w.png",
  backend: {
    name: "proxy",
    proxy_url: "http://localhost:8081/api/v1",
  },
  local_backend: true,
  media_folder: "src/assets",
  public_folder: "assets",
  media_library: {
    max_file_size: 512000,
    folder_support: true,
  },
  collections: [
    {
      name: "project",
      label: "Projects",
      label_singular: "Project",
      folder: "src/content/projects/",
      format: "frontmatter",
      create: true,
      identifier_field: "title",
      summary: "{{title}} ({{date | date('MMM DD, YYYY')}})",
      summary_fields: ["title", "date", "tag"],
      sortable_fields: {
        fields: ["title", "date"],
        default: {
          field: "date",
          direction: "Descending",
        },
      },
      editor: {
        preview: false,
        frame: false,
      },
      fields: [
        {
          name: "tag",
          label: "Tags",
          multiple: true,
          widget: "relation",
          collection: "settings",
          max: 2,
          file: "project",
          search_fields: ["project_tags.*"],
          display_fields: ["project_tags.*"],
          value_field: "project_tags.*",
        },
        {
          name: "title",
          label: "Title",
          widget: "string",
        },
        {
          name: "image",
          label: "Image",
          widget: "image",
          required: false,
        },
        {
          name: "date",
          label: "Publish Date",
          widget: "datetime",
          format: "yyyy-MM-dd",
          date_format: "yyyy-MM-dd",
          time_format: false,
        },
        {
          name: "body",
          label: "Body",
          widget: "markdown",
        },
      ],
    },
    {
      name: "settings",
      label: "Settings",
      delete: false,
      editor: {
        preview: false,
        frame: false,
      },
      files: [
        {
          name: "general",
          label: "General Site Settings",
          file: "src/content/settings/general.json",
          description: "General site settings",
          fields: [
            {
              name: "url",
              label: "URL",
              widget: "string",
              hint: "Do not enter the trailing slash of the URL",
            },
            {
              name: "title",
              label: "Site title",
              widget: "string",
            },
            {
              name: "description",
              label: "Site description",
              widget: "string",
            },
            {
              name: "logo",
              label: "Site Logo",
              widget: "image",
            },
            {
              name: "keywords",
              label: "Site keywords",
              widget: "list",
              summary: "{{fields.keyword}}",
              fields: [
                {
                  name: "keyword",
                  label: "Keyword",
                  widget: "string",
                },
              ],
            },
          ],
        },
        {
          name: "project",
          label: "Project",
          file: "src/content/settings/project.json",
          fields: [
            {
              name: "project_tags",
              label: "Tags",
              label_singular: "Tag",
              widget: "list",
              fields: [
                {
                  name: "name",
                  label: "Name",
                  widget: "string",
                },
              ],
            },
          ],
        },
        {
          name: "footer",
          label: "Footer",
          file: "src/content/settings/footer.json",
          fields: [
            {
              name: "socials",
              label: "Socials",
              label_singular: "Social",
              widget: "list",
              fields: [
                {
                  name: "name",
                  label: "Name",
                  widget: "string",
                },
                {
                  name: "link",
                  label: "Link",
                  widget: "string",
                },
                {
                  name: "target",
                  label: "Target",
                  widget: "select",
                  options: [
                    {
                      label: "Same window",
                      value: "",
                    },
                    {
                      label: "New tab",
                      value: "_blank",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
