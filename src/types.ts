type ENUM_0_ENUM =
  | 'basic'
  | 'business'
  | 'custom'
  | 'enterprise'
  | 'free'
  | 'starter'
  | 'team'
type ENUM_api_selector_type =
  | 'blandai_voice_selector'
  | 'd_id_avatar_selector'
  | 'd_id_voice_selector'
  | 'elevenlabs_model_selector'
  | 'elevenlabs_voice_selector'
  | 'finetuning_model_select'
  | 'heygen_avatar_selector'
  | 'heygen_voice_selector'
  | 'llm_model_selector'
  | 'vapi_custom_assistant_selector'
  | 'vapi_custom_phone_number_selector'
  | 'webflow_collections'
type ENUM_selected_format = 'embed' | 'shareable-link' | 'template'
type ENUM_frequency = 'daily' | 'every-2-minutes' | 'hourly'
type ENUM_render_mode =
  | 'auto'
  | 'hide'
  | 'html'
  | 'image'
  | 'json'
  | 'markdown'
  | 'raw'
  | 'table'
type ENUM_content_type =
  | 'agent_id'
  | 'api_key'
  | 'api_selector'
  | 'chain_id'
  | 'chain_params'
  | 'code'
  | 'colour_picker'
  | 'componentized_json_array'
  | 'conditional'
  | 'dataset_id'
  | 'datetime'
  | 'external_field'
  | 'file_to_text'
  | 'file_to_text_llm_friendly'
  | 'file_url'
  | 'file_urls'
  | 'json'
  | 'json_list'
  | 'key_value_input'
  | 'knowledge_editor'
  | 'knowledge_set'
  | 'llm_model_selector'
  | 'llm_prompt'
  | 'long_text'
  | 'markdown'
  | 'memory'
  | 'memory_optimizer'
  | 'oauth_account'
  | 'short_text'
  | 'speech'
  | 'table'
  | 'tool_approval'
type ENUM_bulk_run_input_source = '' | '$DOCUMENT' | '$FIELD_PARAM_MAPPING'
type ENUM_agent_input_source = 'agent_id' | 'conversation_id'
type ENUM_language = 'html' | 'javascript' | 'python'
type ENUM_type2 = 'dynamic' | 'static'
type ENUM_status2 = 'completed' | 'failed' | 'in-progress'
type ENUM_status3 = 'cancelled' | 'complete' | 'failed' | 'inprogress'

export type Studio = {
  version?: string
  project?: string
  _id?: string
  studio_id: string
  /**
   * This tool is listed on the tool marketplace
   */
  in_marketplace?: boolean
  insert_date_?: string
  update_date_?: string
  is_hidden?: boolean
  tags?: {
    type?: 'transformation'
    categories?: {
      [k: string]: true
    }
    /**
     * The source of the integration. For example, 'Knowledge: Linear', which imports data from Linear, this would be 'linear'.
     */
    integration_source?: string
    integrations?: {
      [k: string]: true
    }
    use_cases?: {
      [k: string]: true
    }
    [k: string]: any /* this makes soorria sad */
  }
  machine_user_id?: string
  creator_user_id?: string
  creator_first_name?: string
  creator_last_name?: string
  creator_display_picture?: string
  /**
   * Anyone can run this tool
   */
  publicly_triggerable?: boolean
  /**
   * Anyone can view or clone this tool
   */
  public?: boolean
  metadata?: {
    source_studio_id?: string
    source_region?: string
    source_project?: string
    clone_count?: number
    last_run_date?: any /* this makes soorria sad */
    [k: string]: any /* this makes soorria sad */
  }
  share_styles?: {
    selected_format?: ENUM_selected_format
    primary_color?: string
    hide_guidance_tip?: boolean
    guidance_tip_text?: string
    cta_text?: string
    cta_icon?: string
    hide_logo?: boolean
  }
  schedule?: {
    frequency?: ENUM_frequency
    [k: string]: any /* this makes soorria sad */
  }
  active_version_id?: string
  draft_version_id?: string
  title?: string
  description?: string
  title_description_embedding?: null | Array<number>
  prompt_description?: string
  cover_image?: string
  emoji?: string
  transformations?: {
    steps: Array<{
      name: string
      transformation: string
      params: {
        [k: string]: any /* this makes soorria sad */
      }
      saved_params?: {
        [k: string]: any /* this makes soorria sad */
      }
      output?: {
        [k: string]: any /* this makes soorria sad */
      }
      /**
       * A jsonschema superset object to provide metadata for tool output fields.
       */
      output_schema?: {
        metadata?: {
          /**
           * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
           */
          field_order?: Array<string>
          [k: string]: any /* this makes soorria sad */
        }
        properties?: {
          [k: string]: {
            metadata?: {
              content_type?: 'external_field'
              /**
               * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
               */
              external_name?: string
              render_mode?: ENUM_render_mode
            }
            [k: string]: any /* this makes soorria sad */
          }
        }
        [k: string]: any /* this makes soorria sad */
      }
      default_output_values?: Array<{
        original_key: string
        updated_key?: string
        value: any /* this makes soorria sad */
      }>
      continue_on_error?: boolean
      use_fallback_on_skip?: boolean
      foreach?: string | Array<any /* this makes soorria sad */>
      if?: string | boolean | null
      display_name?: string
      /**
       * If present, the tool step invent will be activated with the specified instructions in the tool builder.
       */
      invent_instructions?: string
    }>
    output?: {
      [k: string]: string
    } | null
  }
  /**
   * A jsonschema superset object that users parameters will be validated against upon execution.
   */
  params_schema?: {
    metadata?: {
      field_order?: Array<string>
      [k: string]: any /* this makes soorria sad */
    }
    properties?: {
      [k: string]: {
        metadata?: {
          content_type?: ENUM_content_type
          allow_one_of_variable_mode?: boolean
          possible_options_from?: {
            type?: 'object_keys'
            source?: {
              variable?: string
            }
          }
          default_to_variable_selector?: boolean
          api_selector_type?: ENUM_api_selector_type
          api_selector_placeholder?: string
          variable_search_field?: string
          accepted_file_types?: Array<string>
          hidden?: boolean
          relevance_only?: boolean
          minimum_plan?: ENUM_0_ENUM
          advanced?: boolean
          placeholder?: any /* this makes soorria sad */
          title?: string
          description?: string
          icon_url?: string
          require_toggle?: boolean
          dont_substitute?: boolean
          min?: number
          max?: number
          value_suggestion_chain?: {
            url: string
            project_id: string
            output_key?: string
            [k: string]: any /* this makes soorria sad */
          }
          enum?: Array<{
            description: string
            label?: string
            credits_per_token?: number
            value: string
            group_name?: string
            data_collection_model?: boolean
            importance?: number
          }>
          bulk_run_input_source?: ENUM_bulk_run_input_source
          agent_input_source?: ENUM_agent_input_source
          headers?: Array<string>
          rows?: number
          can_add_or_remove_columns?: boolean
          placeholders?: {
            [k: string]: string
          }
          language?: ENUM_language
          /**
           * Props to pass to the KeyValueInput component.
           */
          key_value_input_opts?: {
            /**
             * Set headers to display above the key and/or value columns.
             */
            header?: {
              /**
               * Whether to hide all headers.
               */
              hide?: boolean
              /**
               * The header displayed above the key column.
               */
              key?: string
              /**
               * The header displayed above the value column.
               */
              value?: string
              [k: string]: any /* this makes soorria sad */
            }
            /**
             * Set placeholder values to display in the key and/or value columns.
             */
            placeholder?: {
              /**
               * Whether to hide all placeholders.
               */
              hide?: boolean
              /**
               * The placeholder to display in each cell of the key column.
               */
              key?: string
              /**
               * The placeholder to display in each cell of the value column.
               */
              value?: string
              [k: string]: any /* this makes soorria sad */
            }
            /**
             * The text displayed in the 'Add' button that inserts a new pair.
             */
            addButtonText?: string
            [k: string]: any /* this makes soorria sad */
          }
          /**
           * [KnowledgeEditor] The name of the field in the transformation's param schema containing the knowledge set ID.
           */
          knowledge_set_field_name?: string
          /**
           * (Optional) OAuth permissions required for a step. Only applicable for content_type `oauth_token`
           */
          oauth_permissions?: Array<{
            provider: string
            types: Array<string>
          }>
          is_fixed_param?: boolean
          is_history_excluded?: boolean
          auto_stringify?: boolean
          /**
           * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
           */
          external_name?: string
          /**
           * Filters the OAuth account selector based on the selected provider
           */
          oauth_account_provider?: string
          /**
           * Filters the OAuth account selector based on the selected permission type
           */
          oauth_account_permission_type?: string
          scratchpad?: {
            type: ENUM_type2
          }
        }
        order?: number
        items?: {
          type?: string
          [k: string]: any /* this makes soorria sad */
        }
        [k: string]: any /* this makes soorria sad */
      }
    }
    [k: string]: any /* this makes soorria sad */
  }
  /**
   * A jsonschema superset object to provide metadata for tool output fields.
   */
  output_schema?: {
    metadata?: {
      /**
       * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
       */
      field_order?: Array<string>
      [k: string]: any /* this makes soorria sad */
    }
    properties?: {
      [k: string]: {
        metadata?: {
          content_type?: 'external_field'
          /**
           * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
           */
          external_name?: string
          render_mode?: ENUM_render_mode
        }
        [k: string]: any /* this makes soorria sad */
      }
    }
    [k: string]: any /* this makes soorria sad */
  }
  /**
   * Mapping from alias -> real variable path
   */
  state_mapping?: {
    [k: string]: string
  }
  /**
   * Override the starting state of the studio
   */
  state?: {
    params?: {
      [k: string]: any /* this makes soorria sad */
    }
    steps?: {
      [k: string]: {
        output?: {
          [k: string]: any /* this makes soorria sad */
        }
        executionTime?: number
        results?: Array<any /* this makes soorria sad */>
        skipped?: boolean
        skippedItems?: Array<any /* this makes soorria sad */>
        status?: ENUM_status2
        /**
         * Status of each item in the foreach, key should be the foreach index
         */
        foreach_statuses?: {
          [k: string]: any /* this makes soorria sad */
        }
        /**
         * Internal only object for storing results of step callbacks
         */
        _callback_results?: Array<
          | {
              status: 'success'
              output: {
                [k: string]: any /* this makes soorria sad */
              }
              foreach_index?: number
            }
          | {
              status: 'error'
              error: {
                message: string
              }
              foreach_index?: number
            }
        >
        [k: string]: any /* this makes soorria sad */
      }
    }
    [k: string]: any /* this makes soorria sad */
  }
  predicted_output?: Array<{
    title?: string
    slug?: string
    type?: string
    [k: string]: any /* this makes soorria sad */
  }>
  metrics?: {
    views?: number
    executions?: number
    [k: string]: any /* this makes soorria sad */
  }
  share_id?: string
}

export type TriggerStudioOutput = {
  output: {
    [k: string]: any /* this makes soorria sad */
  }
  status: ENUM_status3
  errors: Array<{
    body?: string
    [k: string]: any /* this makes soorria sad */
  }>
  cost?: number
  credits_used?: Array<{
    credits: number
    name: string
    num_units?: number
    multiplier?: number | null
    tool_id?: string
    tool_name?: string
    tool_run_id?: string
  }>
  executionTime: number
}
