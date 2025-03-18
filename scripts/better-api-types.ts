import { writeFile } from "fs/promises";
import path from "path";


type LooseAutoComplete<T> = T | (string & {});

type JSONSchemaBitsWeCareAbout = {
  required?: string[] | boolean;
};

export interface validation_schemas {
  input_body_schema?: JSONSchemaBitsWeCareAbout;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  input_default_values?: { [id: string]: any };
  output_body_schema?: JSONSchemaBitsWeCareAbout;
  query_string_schema?: JSONSchemaBitsWeCareAbout;
  remove_additional_properties?: {
    input?: boolean;
  };
}
interface restApiRoute {
  http_payload_routing_pattern: {
    method: "GET" | "PUT" | "HEAD" | "POST" | "DELETE" | "OPTIONS";
    path_parts: LooseAutoComplete<`:${string}`>[];
  };
  validation_schemas: validation_schemas;
  output_redirect_field?: string;
  handler_name: string;
  typescript_name?: string;
  dont_generate_typescript_definitions?: boolean;
  summary?: string;
  description: string;
  tags: string[];
  private?: boolean;
  dont_log_request_body?: true;
  authorization?: {
    auth_header_optional?: boolean;
    dont_auto_validate_project?: boolean;
  };
}

const outputFile = path.join(
  import.meta.dirname,
  "..",
  "src",
  "codegen",
  "better-api.ts",
);

const USE_LOCAL_API =
  !!process.env.USE_LOCAL_API || process.argv[2] === "--local";

const getDefinition = async (): Promise<{
  api_definition: restApiRoute[];
  types: string;
}> => {
  const baseUrl = USE_LOCAL_API
    ? "http://localhost:8000/latest"
    : "https://api-1e3042.stack.tryrelevance.com/latest";

  const response = await fetch(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `${baseUrl}/api_definition?${new URLSearchParams({
      password: "super secret password",
      include_types: "true",
    })}`,
  );
  const json = await response.json();
  return json;
};

const inputTypes = ["input", "query"] as const;
type SchemaType = (typeof inputTypes)[number] | "output";
const schemaTypeToValidationSchema: Record<
  SchemaType,
  keyof validation_schemas & `${string}_schema`
> = {
  input: "input_body_schema",
  query: "query_string_schema",
  output: "output_body_schema",
};
const schemaTypeToCodegenedTypeSuffix = {
  input: "Input",
  query: "QueryInput",
  output: "Output",
};

const main = async () => {
  const { types } = await getDefinition();

  let output = `/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-explicit-any */\n`;

  output += types;

  await writeFile(outputFile, output, "utf-8");
};

void main()
  .catch((error: unknown) => {
    console.error(error);
    process.exit(1);
  })
  .then(() => {
    process.exit(0);
  });
