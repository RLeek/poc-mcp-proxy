/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-explicit-any */
type ENUM_0_ENUM =
  | "basic"
  | "business"
  | "custom"
  | "enterprise"
  | "free"
  | "starter"
  | "team";
type ENUM_feedback = "" | "helpful" | "unhelpful";
type ENUM_3_ENUM =
  | "cancelled"
  | "completed"
  | "errored-pending-approval"
  | "escalated"
  | "idle"
  | "paused"
  | "pending-approval"
  | "queued-for-approval"
  | "queued-for-rerun"
  | "running"
  | "starting-up"
  | "timed-out"
  | "unrecoverable"
  | "waiting-for-capacity";
type ENUM_split_chunk = "sentence" | "token";
type ENUM_type = "dataset_field" | "value";
type ENUM_state = "idle" | "running";
type ENUM_status = "failed" | "unvectorized" | "vectorized" | "vectorizing";
type ENUM_type1 = "agent-embed" | "machine" | "user";
type ENUM_status1 = "error" | "success";
type ENUM_13_ENUM = "monthly" | "yearly";
type ENUM_operation = "!=" | "<" | "<=" | "==" | ">" | ">=" | "stringEquals";
type ENUM_agg =
  | "array"
  | "bool"
  | "boolean_filter"
  | "categories"
  | "category"
  | "class"
  | "classes"
  | "histogram"
  | "number"
  | "numeric"
  | "terms"
  | "text"
  | "texts"
  | "wordcloud";
type ENUM_date_interval =
  | "daily"
  | "hourly"
  | "minutely"
  | "monthly"
  | "weekly"
  | "yearly";
type ENUM_date_type = "date" | "string";
type ENUM_date_format = "formatted_date_string" | "iso_date";
type ENUM_agg1 =
  | "average"
  | "avg"
  | "cardinality"
  | "character_count"
  | "correlation"
  | "count"
  | "covariance"
  | "kurtosis"
  | "max"
  | "mean"
  | "min"
  | "missing"
  | "percentiles"
  | "skewness"
  | "std_deviation"
  | "std_deviation_bounds"
  | "sum"
  | "sum_of_squares"
  | "variance";
type ENUM_21_ENUM = "asc" | "desc";
type ENUM_api_selector_type =
  | "blandai_voice_selector"
  | "d_id_avatar_selector"
  | "d_id_voice_selector"
  | "elevenlabs_model_selector"
  | "elevenlabs_voice_selector"
  | "finetuning_model_select"
  | "heygen_avatar_selector"
  | "heygen_voice_selector"
  | "llm_model_selector"
  | "vapi_custom_assistant_selector"
  | "vapi_custom_phone_number_selector"
  | "webflow_collections";
type ENUM_selected_format = "embed" | "shareable-link" | "template";
type ENUM_frequency = "daily" | "every-2-minutes" | "hourly";
type ENUM_render_mode =
  | "auto"
  | "hide"
  | "html"
  | "image"
  | "json"
  | "markdown"
  | "raw"
  | "table";
type ENUM_status2 = "completed" | "failed" | "in-progress";
type ENUM_max_job_duration =
  | "background_seconds"
  | "hours"
  | "minutes"
  | "synchronous_seconds";
type ENUM_region = "1e3042" | "bcbe5a" | "d7b62b" | "f1db6c";
type ENUM_selected_format1 =
  | "chat-bubble"
  | "chat-embed"
  | "embed"
  | "shareable-link"
  | "template";
type ENUM_bubble_style = "agent" | "icon";
type ENUM_importance_level = "normal" | "short-term-memory";
type ENUM_type2 = "agent" | "tool" | "trigger";
type ENUM_region1 = "" | "1e3042" | "bcbe5a" | "d7b62b" | "f1db6c";
type ENUM_after_retries_behaviour =
  | "ask-for-approval"
  | "terminate-conversation";
type ENUM_type3 =
  | "boolean"
  | "multiple_option"
  | "number"
  | "single_option"
  | "string";
type ENUM_type4 =
  | "agent"
  | "bulk_run"
  | "cron"
  | "custom_gpt"
  | "email"
  | "notebook"
  | "run_chain"
  | "sync"
  | "trigger_limited";
type ENUM_status3 = "cancelled" | "complete" | "failed" | "inprogress";
type ENUM_43_ENUM = "agent" | "tool";
type ENUM_event_type =
  | "conversations_continued_by_trigger"
  | "conversations_created_by_trigger"
  | "tool_runs_failed"
  | "tool_runs_succeeded";
type ENUM_comparison_type = "between" | "gte" | "lte";
type ENUM_event_type1 =
  | "conversations_continued_by_trigger"
  | "conversations_created_by_trigger"
  | "input-tokens-used"
  | "label-added"
  | "output-tokens-used"
  | "state-updated"
  | "tool_runs_failed"
  | "tool_runs_succeeded";
type ENUM_bucket = "daily" | "monthly" | "weekly";
type ENUM_interval = "daily" | "hourly";
type ENUM_state1 = "errored" | "idle" | "queued" | "running";
type ENUM_type5 = "agent" | "chain";
type ENUM_type6 =
  | "agent-input"
  | "agent-output"
  | "agent-param"
  | "tool-input"
  | "tool-output"
  | "trigger-type";
type ENUM_source = "input" | "output" | "setting";
type ENUM_status4 = "unused" | "used";
type ENUM_type7 = "exec" | "list" | "read" | "write";
type ENUM_type8 =
  | "agent_message"
  | "error"
  | "finish"
  | "record_tool_use"
  | "run_one_step"
  | "run_until_end"
  | "use_tool"
  | "user_message";
type ENUM_content_type = "documentation" | "loom" | "youtube";
type ENUM_70_ENUM =
  | "batch_schedule_agent_tasks"
  | "bulk_approve"
  | "bulk_rerun"
  | "custom_webhook"
  | "freshdesk"
  | "gmail"
  | "google_calendar"
  | "hubspot"
  | "outlook"
  | "recurring"
  | "relevance_meeting_bot"
  | "salesforce"
  | "todo_group"
  | "unipile_linkedin"
  | "unipile_telegram"
  | "unipile_whatsapp"
  | "webhook"
  | "whatsapp"
  | "zoominfo";
type ENUM_status5 =
  | "cancelled"
  | "complete"
  | "creating"
  | "in_progress"
  | "paused";
type ENUM_type9 = "dateString" | "number";
type ENUM_status6 =
  | "abandoned"
  | "cancelled"
  | "errored"
  | "paused"
  | "processed"
  | "processing"
  | "todo";
type ENUM_run_method = "automatic" | "manual";
type ENUM_error_type =
  | "agent_not_found"
  | "no_credits"
  | "stale_action_request"
  | "unexpected_error";
type ENUM_direction = "after" | "before";
type ENUM_type10 = "always-create-new" | "always-same";

export type CreateProjectInput = {
  /**
   * The name of the project
   */
  name?: string;
  /**
   * The description of the project
   */
  description?: string;
  organization_id: string;
  /**
   * If set to redis, it expects a redis connection string set using project keys under the name "redis".
   */
  datastore?: "redis";
  /**
   * The language to convert cluster labels output to.
   */
  language?: string;
};

export type CreateProjectOutput = {
  project_id: string;
};

export type CreateProjectQueryInput = unknown;

export type UpdateProjectInput = {
  /**
   * The name of the project
   */
  name?: string;
  /**
   * The description of the project
   */
  description?: string;
  /**
   * If set to redis, it expects a redis connection string set using project keys under the name "redis".
   */
  datastore?: "redis";
  /**
   * The language to convert cluster labels output to.
   */
  language?: string;
};

export type UpdateProjectOutput = {
  status: string;
  message: string;
};

export type UpdateProjectQueryInput = unknown;

export type TransferProjectToOrganizationInput = {
  /**
   * The ID of the organization.
   */
  organization_id: string;
};

export type TransferProjectToOrganizationOutput = unknown;

export type TransferProjectToOrganizationQueryInput = unknown;

export type ListProjectsInput = unknown;

export type ListProjectsOutput = {
  projects: Array<{
    project_id?: string;
    name?: string;
    description?: string;
    permissions?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    updated_at?: string;
    keys?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * If set to redis, it expects a redis connection string set using project keys under the name "redis".
     */
    datastore?: "redis";
    /**
     * The language to convert cluster labels output to.
     */
    language?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  count: number;
};

export type ListProjectsQueryInput = {
  page?: number;
  page_size?: number;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetProjectsOrgInfoInput = unknown;

export type GetProjectsOrgInfoOutput = {
  credits: number;
  entitlement_plan?: ENUM_0_ENUM;
};

export type GetProjectsOrgInfoQueryInput = unknown;

export type ListProjectKeysInput = unknown;

export type ListProjectKeysOutput = {
  keys: Array<string>;
};

export type ListProjectKeysQueryInput = unknown;

export type ListProjectKeyTypesInput = unknown;

export type ListProjectKeyTypesOutput = {
  results: Array<{
    label: string;
    value: string;
    type?: "datastore" | "llm";
    logo_key?: string;
  }>;
};

export type ListProjectKeyTypesQueryInput = unknown;

export type SetProjectKeyInput = {
  key: string;
  value: string;
};

export type SetProjectKeyOutput = {
  status: string;
  message: string;
};

export type SetProjectKeyQueryInput = unknown;

export type DeleteProjectKeyInput = {
  key: string;
};

export type DeleteProjectKeyOutput = {
  status: string;
  message: string;
};

export type DeleteProjectKeyQueryInput = unknown;

export type ListProjectScheduledTriggersInput = unknown;

export type ListProjectScheduledTriggersOutput = {
  results: Array<{
    _id?: string;
    conversation_id?: string;
    message?: string;
    expression?: string;
    type?: number;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  conversations?: {
    [k: string]:
      | {
          knowledge_set: string;
          knowledge_count?: number;
          knowledge_chunked_count?: number;
          knowledge_vectorized_count?: number;
          metadata?: {
            _id: string;
            project: string;
            knowledge_set: string;
            insert_date?: string;
            update_date?: string;
            expiry_date_?: any /* this makes soorria sad */;
            insert_datetime?: any /* this makes soorria sad */;
            update_datetime?: any /* this makes soorria sad */;
            model?: string;
            external_id?: string;
            source_dataset_id?: string;
            conversation?: {
              tags?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              user_id?: string;
              agent_id?: string;
              agent_region?: string | null;
              agent_project?: string | null;
              bookmark?: boolean;
              /**
               * Time from which we can ignore the "state" field, and trigger the agent anyway. Prevents conversations from being permanently locked if an agent job stalls.
               */
              ignore_state_at?: string;
              title?: string;
              message_feedback?: Array<{
                feedback: ENUM_feedback;
                message_id: string;
              }>;
              debug?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              has_errored?: boolean;
              params_from_previous_trigger?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              caller_agent?: {
                agent_id?: string;
                conversation_id?: string;
                project?: string;
                region?: string;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              /**
               * Sum total number of times all emails in this conversation have been opened
               */
              email_open_count?: number;
              is_debug_mode_task?: boolean;
              debug_mode_config_id?: string;
              custom_params?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              enable_custom_params?: boolean;
              state_metadata?: {
                unrecoverable_error_type?: "max-tool-retries";
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              state?: ENUM_3_ENUM;
              workforce_context?: {
                node_id: string;
                workforce_task_id?: string;
              };
              custom_metadata?: Array<{
                title: string;
                value?: number | string | boolean | Array<string>;
                [k: string]: any /* this makes soorria sad */ | undefined;
              }>;
              workforce_node_started_event_id?: number;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            hidden?: boolean;
            type?: string;
            split_method?: {
              type: "num_tokens";
              /**
               * Maximum number of tokens per chunk
               */
              num_tokens: number;
              split_chunk?: ENUM_split_chunk;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            field_metadata?: {
              [k: string]:
                | {
                    alias?: string;
                    should_vectorize?: boolean;
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  }
                | undefined;
            };
            /**
             * Metadata for knowledge sets in the table view.
             */
            table_metadata?: {
              /**
               * A map of tool column UUIDs to their corresponding column metadata.
               */
              tool_columns?: {
                [k: string]:
                  | {
                      /**
                       * Metadata for the chain (tool) used in the column.
                       */
                      chain?: {
                        project: string;
                        region: string;
                        studio_id: string;
                        version?: string;
                        [k: string]:
                          | any /* this makes soorria sad */
                          | undefined;
                      };
                      /**
                       * A map of tool params to their values. Params can be inferred from table fields or by entering values manually.
                       */
                      paramMapping?: {
                        [k: string]:
                          | {
                              type?: ENUM_type;
                              value?: any /* this makes soorria sad */;
                              [k: string]:
                                | any /* this makes soorria sad */
                                | undefined;
                            }
                          | undefined;
                      };
                      /**
                       * A map of tool output keys to column names to overwrite. Tools can overwrite existing columns.
                       */
                      outputMapping?: {
                        [k: string]: string | boolean | undefined;
                      };
                      /**
                       * The UUID for the column.
                       */
                      uid?: string;
                      [k: string]: any /* this makes soorria sad */ | undefined;
                    }
                  | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            bulk_run?: {
              /**
               * Bulk run state of table
               */
              state?: ENUM_state;
              /**
               * The column currently being processed.
               */
              column?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            vectorizing_info?: {
              last_job_info?: {
                job_id: string;
                studio_id: string;
              } | null;
              status?: ENUM_status;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
        }
      | undefined;
  };
};

export type ListProjectScheduledTriggersQueryInput = {
  filters?: Array<FlatFilterItem>;
  page?: number;
  page_size?: number;
  include_task_details?: boolean;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type UpsertProjectSnippetInput = {
  _id?: string;
  name: string;
  content: string;
  title?: string;
  description?: string;
  order: number;
};

export type UpsertProjectSnippetOutput = boolean;

export type UpsertProjectSnippetQueryInput = unknown;

export type ListProjectSnippetsInput = unknown;

export type ListProjectSnippetsOutput = Array<ProjectSnippet>;

export type ListProjectSnippetsQueryInput = {
  /**
   * Whether to fetch the references of the snippets as part of the response
   */
  include_references?: boolean;
  page_size?: number;
  page_number?: number;
};

export type DeleteProjectSnippetInput = {
  id: string;
};

export type DeleteProjectSnippetOutput = boolean;

export type DeleteProjectSnippetQueryInput = unknown;

export type CreateUserInput = {
  profile_picture_url?: string;
  onboarded?: boolean;
  first_name?: string;
  last_name?: string;
  role?: string;
  company?: string;
  label?: string;
  notes?: string;
  tags?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  permissions?: Permissions;
  organization_permissions?: {
    [k: string]: Permissions | undefined;
  };
  referral_code?: string;
  organization_name?: string;
  project_name?: string;
  /**
   * The name of the project. This will contain all your datasets.
   */
  project?: string;
  /**
   * The id token for a signed in account. This attaches the sign in account to the user.
   */
  id_token?: string;
  invite_code?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type CreateUserOutput = {
  user_id: string;
  api_key: string;
  project: string;
  organization_id?: string;
};

export type CreateUserQueryInput = unknown;

export type ListUsersInput = {
  page?: number;
  page_size?: number;
  required_permissions?: {
    items: {
      [k: string]:
        | {
            resources?: {
              datasets?: {
                [k: string]: boolean | undefined;
              };
              deployables?: {
                [k: string]: boolean | undefined;
              };
              users?: {
                [k: string]: boolean | undefined;
              };
              agents?: {
                [k: string]: boolean | undefined;
              };
              knowledge_sets?: {
                [k: string]: boolean | undefined;
              };
              chains?: {
                [k: string]: boolean | undefined;
              };
              syncs?: {
                [k: string]: boolean | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            actions?: {
              [k: string]: boolean | undefined;
            };
          }
        | undefined;
    };
  };
  /**
   * Currently limited to exact_match, ids, exists, regexp filter_type
   */
  filters?: Array<FlatFilterItem>;
};

export type ListUsersOutput = {
  results: Array<{
    profile_picture_url?: string;
    onboarded?: boolean;
    first_name?: string;
    last_name?: string;
    role?: string;
    company?: string;
    label?: string;
    notes?: string;
    tags?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    permissions: {
      projects: {
        [k: string]:
          | {
              items: {
                [k: string]:
                  | {
                      resources?: {
                        datasets?: {
                          [k: string]: boolean | undefined;
                        };
                        deployables?: {
                          [k: string]: boolean | undefined;
                        };
                        users?: {
                          [k: string]: boolean | undefined;
                        };
                        agents?: {
                          [k: string]: boolean | undefined;
                        };
                        knowledge_sets?: {
                          [k: string]: boolean | undefined;
                        };
                        chains?: {
                          [k: string]: boolean | undefined;
                        };
                        syncs?: {
                          [k: string]: boolean | undefined;
                        };
                        [k: string]:
                          | any /* this makes soorria sad */
                          | undefined;
                      };
                      actions?: {
                        [k: string]: boolean | undefined;
                      };
                    }
                  | undefined;
              };
            }
          | undefined;
      };
      organizations?: {
        [k: string]:
          | {
              items: {
                [k: string]:
                  | {
                      resources?: {
                        datasets?: {
                          [k: string]: boolean | undefined;
                        };
                        deployables?: {
                          [k: string]: boolean | undefined;
                        };
                        users?: {
                          [k: string]: boolean | undefined;
                        };
                        agents?: {
                          [k: string]: boolean | undefined;
                        };
                        knowledge_sets?: {
                          [k: string]: boolean | undefined;
                        };
                        chains?: {
                          [k: string]: boolean | undefined;
                        };
                        syncs?: {
                          [k: string]: boolean | undefined;
                        };
                        [k: string]:
                          | any /* this makes soorria sad */
                          | undefined;
                      };
                      actions?: {
                        [k: string]: boolean | undefined;
                      };
                    }
                  | undefined;
              };
            }
          | undefined;
      };
      administrator?: {
        items: {
          [k: string]:
            | {
                resources?: {
                  datasets?: {
                    [k: string]: boolean | undefined;
                  };
                  deployables?: {
                    [k: string]: boolean | undefined;
                  };
                  users?: {
                    [k: string]: boolean | undefined;
                  };
                  agents?: {
                    [k: string]: boolean | undefined;
                  };
                  knowledge_sets?: {
                    [k: string]: boolean | undefined;
                  };
                  chains?: {
                    [k: string]: boolean | undefined;
                  };
                  syncs?: {
                    [k: string]: boolean | undefined;
                  };
                  [k: string]: any /* this makes soorria sad */ | undefined;
                };
                actions?: {
                  [k: string]: boolean | undefined;
                };
              }
            | undefined;
        };
      };
    };
    type: ENUM_type1;
    _id: string;
    email?: string;
    creator_user_id?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type ListUsersQueryInput = unknown;

export type IsUserAuthorizedInput = {
  permissions?: Permissions;
  organization_permissions?: {
    [k: string]: Permissions | undefined;
  };
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type IsUserAuthorizedOutput = {
  valid: boolean;
  message: string;
};

export type IsUserAuthorizedQueryInput = unknown;

export type GetAuthHeaderInfoInput = unknown;

export type GetAuthHeaderInfoOutput = {
  profile_picture_url?: string;
  onboarded?: boolean;
  first_name?: string;
  last_name?: string;
  role?: string;
  company?: string;
  label?: string;
  notes?: string;
  tags?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  user_id: string;
  key_id: string;
  permissions: FullUserPermissions;
  email?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetAuthHeaderInfoQueryInput = unknown;

export type CreateProjectInviteInput = {
  permissions?: Permissions;
  organization_permissions?: {
    [k: string]: Permissions | undefined;
  };
  email?: string;
  user_id?: string;
  type?: "deployable" | "project";
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type CreateProjectInviteOutput = {
  invite_code: string;
};

export type CreateProjectInviteQueryInput = unknown;

export type ListProjectInvitesInput = unknown;

export type ListProjectInvitesOutput = {
  results: Array<{
    _id: string;
    user_id?: string;
    permissions?: {
      items: {
        [k: string]:
          | {
              resources?: {
                datasets?: {
                  [k: string]: boolean | undefined;
                };
                deployables?: {
                  [k: string]: boolean | undefined;
                };
                users?: {
                  [k: string]: boolean | undefined;
                };
                agents?: {
                  [k: string]: boolean | undefined;
                };
                knowledge_sets?: {
                  [k: string]: boolean | undefined;
                };
                chains?: {
                  [k: string]: boolean | undefined;
                };
                syncs?: {
                  [k: string]: boolean | undefined;
                };
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              actions?: {
                [k: string]: boolean | undefined;
              };
            }
          | undefined;
      };
    };
    email?: string;
    project?: string;
  }>;
};

export type ListProjectInvitesQueryInput = unknown;

export type AcceptProjectInviteInput = {
  invite_code: string;
};

export type AcceptProjectInviteOutput = {
  project_id: string;
};

export type AcceptProjectInviteQueryInput = unknown;

export type DeleteProjectInviteInput = {
  invite_code: string;
};

export type DeleteProjectInviteOutput = unknown;

export type DeleteProjectInviteQueryInput = unknown;

export type ResendProjectInviteInput = {
  permissions?: {
    items: {
      [k: string]:
        | {
            resources?: {
              datasets?: {
                [k: string]: boolean | undefined;
              };
              deployables?: {
                [k: string]: boolean | undefined;
              };
              users?: {
                [k: string]: boolean | undefined;
              };
              agents?: {
                [k: string]: boolean | undefined;
              };
              knowledge_sets?: {
                [k: string]: boolean | undefined;
              };
              chains?: {
                [k: string]: boolean | undefined;
              };
              syncs?: {
                [k: string]: boolean | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            actions?: {
              [k: string]: boolean | undefined;
            };
          }
        | undefined;
    };
  };
  organization_permissions?: {
    [k: string]: Permissions | undefined;
  };
  invite_code: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type ResendProjectInviteOutput = {
  invite_code: string;
};

export type ResendProjectInviteQueryInput = unknown;

export type GetUserInput = {};

export type GetUserOutput = {
  profile_picture_url?: string;
  onboarded?: boolean;
  first_name?: string;
  last_name?: string;
  role?: string;
  company?: string;
  label?: string;
  notes?: string;
  tags?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  permissions: {
    projects: {
      [k: string]:
        | {
            items: {
              [k: string]:
                | {
                    resources?: {
                      datasets?: {
                        [k: string]: boolean | undefined;
                      };
                      deployables?: {
                        [k: string]: boolean | undefined;
                      };
                      users?: {
                        [k: string]: boolean | undefined;
                      };
                      agents?: {
                        [k: string]: boolean | undefined;
                      };
                      knowledge_sets?: {
                        [k: string]: boolean | undefined;
                      };
                      chains?: {
                        [k: string]: boolean | undefined;
                      };
                      syncs?: {
                        [k: string]: boolean | undefined;
                      };
                      [k: string]: any /* this makes soorria sad */ | undefined;
                    };
                    actions?: {
                      [k: string]: boolean | undefined;
                    };
                  }
                | undefined;
            };
          }
        | undefined;
    };
    organizations?: {
      [k: string]:
        | {
            items: {
              [k: string]:
                | {
                    resources?: {
                      datasets?: {
                        [k: string]: boolean | undefined;
                      };
                      deployables?: {
                        [k: string]: boolean | undefined;
                      };
                      users?: {
                        [k: string]: boolean | undefined;
                      };
                      agents?: {
                        [k: string]: boolean | undefined;
                      };
                      knowledge_sets?: {
                        [k: string]: boolean | undefined;
                      };
                      chains?: {
                        [k: string]: boolean | undefined;
                      };
                      syncs?: {
                        [k: string]: boolean | undefined;
                      };
                      [k: string]: any /* this makes soorria sad */ | undefined;
                    };
                    actions?: {
                      [k: string]: boolean | undefined;
                    };
                  }
                | undefined;
            };
          }
        | undefined;
    };
    administrator?: {
      items: {
        [k: string]:
          | {
              resources?: {
                datasets?: {
                  [k: string]: boolean | undefined;
                };
                deployables?: {
                  [k: string]: boolean | undefined;
                };
                users?: {
                  [k: string]: boolean | undefined;
                };
                agents?: {
                  [k: string]: boolean | undefined;
                };
                knowledge_sets?: {
                  [k: string]: boolean | undefined;
                };
                chains?: {
                  [k: string]: boolean | undefined;
                };
                syncs?: {
                  [k: string]: boolean | undefined;
                };
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              actions?: {
                [k: string]: boolean | undefined;
              };
            }
          | undefined;
      };
    };
  };
  type: ENUM_type1;
  _id: string;
  email?: string;
  creator_user_id?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetUserQueryInput = unknown;

export type UpdateUserInput = {
  profile_picture_url?: string;
  onboarded?: boolean;
  first_name?: string;
  last_name?: string;
  role?: string;
  company?: string;
  label?: string;
  notes?: string;
  tags?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  permissions?: Permissions;
  organization_permissions?: {
    [k: string]: Permissions | undefined;
  };
  /**
   * The id token for a signed in account. This attaches the sign in account to the user.
   */
  id_token?: string;
  /**
   * Set this to true to replace users permissions for project, rather than upserting
   */
  overwrite?: boolean;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type UpdateUserOutput = unknown;

export type UpdateUserQueryInput = unknown;

export type DeleteUserInput = {};

export type DeleteUserOutput = unknown;

export type DeleteUserQueryInput = unknown;

export type CreateUserKeyInput = {
  label?: string;
  notes?: string;
  ttl_hours?: number;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type CreateUserKeyOutput = {
  api_key: string;
  id: string;
};

export type CreateUserKeyQueryInput = unknown;

export type ListUserKeysInput = unknown;

export type ListUserKeysOutput = {
  results: Array<{
    _id: string;
    label?: string;
    notes?: string;
    ttl_hours?: number;
  }>;
};

export type ListUserKeysQueryInput = unknown;

export type DeleteUserKeyInput = {
  id: string;
};

export type DeleteUserKeyOutput = unknown;

export type DeleteUserKeyQueryInput = unknown;

export type ListOAuthOptionsInput = unknown;

export type ListOAuthOptionsOutput = {
  providers: Array<{
    label: string;
    value: string;
    img_src?: string;
  }>;
  permission_types: Array<{
    label: string;
    value: string;
  }>;
  provider_to_permission_types: {
    [k: string]:
      | {
          permission_types?: Array<{
            label: string;
            value: string;
          }>;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }
      | undefined;
  };
};

export type ListOAuthOptionsQueryInput = unknown;

export type GetOAuthUrlInput = {
  provider: string;
  types: Array<string>;
  redirect_url: string;
  extra_state?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
};

export type GetOAuthUrlOutput = {
  auth_url: string;
  scopes?: Array<string>;
};

export type GetOAuthUrlQueryInput = unknown;

export type OAuthCallbackInput = unknown;

export type OAuthCallbackOutput = {
  redirect_url: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type OAuthCallbackQueryInput = {
  code?: string;
  state?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type ListOAuthTokenDataInput = {
  /**
   * Currently limited to exact_match, ids, exists, regexp filter_type
   */
  filters?: Array<FlatFilterItem>;
  page?: number;
  page_size?: number;
};

export type ListOAuthTokenDataOutput = {
  results: Array<{
    _id: string;
    project: string;
    provider: string;
    account_id: string;
    /**
     * The id of the user from the OAuth provider.
     */
    provider_user_id: string;
    label: string;
    tokens: Array<{
      token_id: string;
      permission_types: Array<string>;
      scopes: Array<string>;
      metadata?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      refresh_token?: string;
      access_token?: string;
      access_token_expiry_date_time_utc?: string;
      refresh_token_invalid?: boolean;
      insert_date_?: string;
      update_date_?: string;
    }>;
    metadata: {
      email?: string;
      pipedream?: {
        external_user_id: string;
        account_id: string;
      };
      arcade_x?: {
        user_id: string;
        account_id: string;
      };
    };
    insert_date_: string;
    update_date_: string;
  }>;
};

export type ListOAuthTokenDataQueryInput = unknown;

export type ListProviderAccountsDataInput = {
  query?: string;
  sort_by: "alphabetical" | "usage";
  page_size: number;
  page: number;
};

export type ListProviderAccountsDataOutput = Array<{
  label: string;
  value: string;
  img_src?: string;
  accounts: Array<{
    account_id: string;
    contains_invalid_refresh_token: boolean;
  }>;
}>;

export type ListProviderAccountsDataQueryInput = unknown;

export type DeleteOAuthTokenDataInput = {
  account_id: string;
};

export type DeleteOAuthTokenDataOutput = unknown;

export type DeleteOAuthTokenDataQueryInput = unknown;

export type GetPipedreamConnectTokenInput = unknown;

export type GetPipedreamConnectTokenOutput = {
  token: string;
  expires_at: string;
  external_user_id: string;
};

export type GetPipedreamConnectTokenQueryInput = unknown;

export type GetPipedreamAppInput = unknown;

export type GetPipedreamAppOutput = {
  app_data: {
    slug_name: string;
    label: string;
    img_src?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
};

export type GetPipedreamAppQueryInput = unknown;

export type ConnectPipedreamAccountSuccessCallbackInput = {
  account_id: string;
  external_user_id: string;
};

export type ConnectPipedreamAccountSuccessCallbackOutput = {
  oauth_account_id?: string;
  status: ENUM_status1;
};

export type ConnectPipedreamAccountSuccessCallbackQueryInput = unknown;

export type ConnectPipedreamAccountFailedInput = {
  name: string;
  message: string;
  provider: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type ConnectPipedreamAccountFailedOutput = {
  status: ENUM_status1;
};

export type ConnectPipedreamAccountFailedQueryInput = unknown;

export type GetTwitterURLInput = unknown;

export type GetTwitterURLOutput = {
  url: string;
  arcade_id_key: string;
};

export type GetTwitterURLQueryInput = unknown;

export type TwitterOauthCallbackInput = {
  arcade_id_key: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type TwitterOauthCallbackOutput = {
  oauth_account_id?: string;
  status: "error" | "pending" | "success";
};

export type TwitterOauthCallbackQueryInput = unknown;

export type CreateOrganizationInput = {
  name?: string;
};

export type CreateOrganizationOutput = {
  organization_id: string;
};

export type CreateOrganizationQueryInput = unknown;

export type UpdateOrganizationInput = {
  name?: string;
};

export type UpdateOrganizationOutput = unknown;

export type UpdateOrganizationQueryInput = unknown;

export type ListOrganizationsInput = unknown;

export type ListOrganizationsOutput = {
  results: Array<{
    organization_id?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type ListOrganizationsQueryInput = unknown;

export type DeleteOrganizationInput = unknown;

export type DeleteOrganizationOutput = unknown;

export type DeleteOrganizationQueryInput = unknown;

export type GetOrganizationInput = unknown;

export type GetOrganizationOutput = {
  organization_id: string;
  _id: string;
  name?: string;
  entitlements?: {
    users?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    workflows_gpu?: {
      enabled?: boolean;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    negative_credits?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    workflows_seconds_per_year?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    documents?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    documents_per_dataset?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    premium_llm_generation?: {
      limit?: boolean;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    sandbox_gpu_usage?: {
      limit?: boolean;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    max_rows_at_once?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    knowledge_bytes?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    file_storage_bytes?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  };
  entitlement_plan?: ENUM_0_ENUM;
  credits?: number;
  external_billing_id?: string;
  billing_period_start_date?: string;
  billing_period_end_date?: any /* this makes soorria sad */;
  /**
   * The billing cycle manually set for users who wanted an annual subscription (legacy)
   */
  billing_period?: ENUM_13_ENUM;
  /**
   * The billing cycle of a Stripe subscription plan
   */
  billing_cycle?: ENUM_13_ENUM;
  /**
   * The plan the organization is downgrading to at the end of the current billing cycle (legacy)
   */
  downgrading_to?: ENUM_0_ENUM;
  /**
   * The plan and billing cycle the organization is downgrading to at the end of the current billing cycle. Replaces `downgrading_to`.
   */
  scheduled_downgrade?: {
    plan?: ENUM_0_ENUM;
    /**
     * The billing cycle of a Stripe subscription plan
     */
    billing_cycle?: ENUM_13_ENUM;
  };
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetOrganizationQueryInput = unknown;

export type GetOrganizationUsageInput = unknown;

export type GetOrganizationUsageOutput = {
  usage: {
    users?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    workflows_gpu?: {
      enabled?: boolean;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    negative_credits?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    workflows_seconds_per_year?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    documents?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    documents_per_dataset?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    premium_llm_generation?: {
      limit?: boolean;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    sandbox_gpu_usage?: {
      limit?: boolean;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    max_rows_at_once?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    knowledge_bytes?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    file_storage_bytes?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  };
  limit: {
    users?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    workflows_gpu?: {
      enabled?: boolean;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    negative_credits?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    workflows_seconds_per_year?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    documents?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    documents_per_dataset?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    premium_llm_generation?: {
      limit?: boolean;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    sandbox_gpu_usage?: {
      limit?: boolean;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    max_rows_at_once?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    knowledge_bytes?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    file_storage_bytes?: {
      limit?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  };
};

export type GetOrganizationUsageQueryInput = unknown;

export type ListOrganizationPlansInput = unknown;

export type ListOrganizationPlansOutput = {
  plans: Array<{
    id: ENUM_0_ENUM;
    name: string;
    description: string;
    custom_price?: true;
    credits: number;
    refill_interval: "day" | "month";
    price_usd: number;
    entitlements: Array<{
      name: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type ListOrganizationPlansQueryInput = unknown;

export type ListUsersInOrganizationInput = {
  /**
   * Currently limited to exact_match, ids, exists, regexp filter_type
   */
  filters?: Array<FlatFilterItem>;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type ListUsersInOrganizationOutput = {
  results: Array<{
    _id?: string;
    profile_picture_url?: string;
    onboarded?: boolean;
    first_name?: string;
    last_name?: string;
    role?: string;
    company?: string;
    label?: string;
    notes?: string;
    tags?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type ListUsersInOrganizationQueryInput = unknown;

export type ListProjectsInOrganizationInput = unknown;

export type ListProjectsInOrganizationOutput = {
  results: Array<{
    _id?: string;
    project_id?: string;
    name?: string;
    description?: string;
    permissions?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    updated_at?: string;
    keys?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * If set to redis, it expects a redis connection string set using project keys under the name "redis".
     */
    datastore?: "redis";
    /**
     * The language to convert cluster labels output to.
     */
    language?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type ListProjectsInOrganizationQueryInput = unknown;

export type AggregateOrganizationMetricsInput = {
  filters?: Array<
    | {
        /**
         * Match where document[field] is in value list.
         */
        match?: {
          /**
           * If matching on text, match even if there are extra words / case insensitivity
           */
          fuzzy?: boolean;
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        matchArray?: {
          field: string;
          value: Array<string | number>;
        };
        random?: {
          size: number;
        };
        /**
         * Match where document._id is in value list.
         */
        matchIds?: {
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        /**
         * Match documents where greaterThan < document[field] < lessThan. Supports numbers and date strings.
         */
        range?: {
          /**
           * Field to match on.
           */
          field?: string;
          greaterThan?: any /* this makes soorria sad */;
          lessThan?: any /* this makes soorria sad */;
          greaterThanOrEqualTo?: any /* this makes soorria sad */;
          lessThanOrEqualTo?: any /* this makes soorria sad */;
        };
        wildcard?: {
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * single string or array of valid wildcard strings to match on, for example ['tele*']
           */
          value: string | Array<string>;
        };
        /**
         * Match documents where field specified by 'field' exists in the document. for nested fields, use syntax: a.b.c
         */
        fieldExists?: {
          /**
           * Field that must exist.
           */
          field?: string;
        };
        /**
         * Match documents where doc[field] % module == value
         */
        matchModulo?: {
          field?: string;
          modulo: number;
          value: number;
        };
        /**
         * Filter down to one document for each value of selected field.
         */
        dedupeByValue?: {
          /**
           * Field to filter on.
           */
          field: string;
        };
        /**
         * Match documents where document[a] <=/>=/</>/==/!=/stringEquals document[b]. Use stringEquals to compare strings.
         */
        selfreference?: {
          /**
           * First field in comparison.
           */
          a: string;
          /**
           * Second field in comparison.
           */
          b: string;
          /**
           * Operator used to compare a and b.
           */
          operation: ENUM_operation;
        };
        /**
         * Match documents where greaterThan < wordCount(document[field]) < lessThan.
         */
        wordCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum word count.
           */
          greaterThan?: number;
          /**
           * Maximum word count.
           */
          lessThan?: number;
        };
        /**
         * Match documents where greaterThan < characterCount(document[field]) < lessThan.
         */
        characterCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum character count.
           */
          greaterThan?: number;
          /**
           * Maximum character count.
           */
          lessThan?: number;
        };
        /**
         * Used to perform a logical OR of filters. each element of the OR list can itself be a list  to perform a nested AND. {or:[[A,B],C]} is equivalent to (A AND B) OR C
         */
        or?: Array<
          Array<SimpleSearchAndFlatFilterItem> | SimpleSearchAndFlatFilterItem
        >;
        /**
         * Used to perform NOT filter. Can be a single filter or a list of filters to perform a !(AND). {not:[A,B]} is equivalent to !(A AND B)
         */
        not?:
          | Array<SimpleSearchAndFlatFilterItem>
          | SimpleSearchAndFlatFilterItem;
        /**
         * Filter based on data within a _chunk_ field.
         */
        chunk?: {
          /**
           * The path of the chunk field to filter on. For example: description_sentences_chunk_
           */
          path: string;
          filters: Array<SimpleSearchAndFlatFilterItem>;
        };
      }
    | FlatFilterItem
  >;
  /**
   * Aggregation query to aggregate data
   */
  aggregation_query?: {
    groupby?: Array<{
      agg?: ENUM_agg;
      size?: number;
      field?: string;
      name?: string;
      boolean_filter?:
        | {
            /**
             * Match where document[field] is in value list.
             */
            match?: {
              /**
               * If matching on text, match even if there are extra words / case insensitivity
               */
              fuzzy?: boolean;
              /**
               * Field to match on.
               */
              field?: string;
              /**
               * Can be either a single item or a list of items to match on.
               */
              value:
                | string
                | boolean
                | number
                | Array<any /* this makes soorria sad */>;
            };
            matchArray?: {
              field: string;
              value: Array<string | number>;
            };
            random?: {
              size: number;
            };
            /**
             * Match where document._id is in value list.
             */
            matchIds?: {
              /**
               * Can be either a single item or a list of items to match on.
               */
              value:
                | string
                | boolean
                | number
                | Array<any /* this makes soorria sad */>;
            };
            /**
             * Match documents where greaterThan < document[field] < lessThan. Supports numbers and date strings.
             */
            range?: {
              /**
               * Field to match on.
               */
              field?: string;
              greaterThan?: any /* this makes soorria sad */;
              lessThan?: any /* this makes soorria sad */;
              greaterThanOrEqualTo?: any /* this makes soorria sad */;
              lessThanOrEqualTo?: any /* this makes soorria sad */;
            };
            wildcard?: {
              /**
               * Field to match on.
               */
              field?: string;
              /**
               * single string or array of valid wildcard strings to match on, for example ['tele*']
               */
              value: string | Array<string>;
            };
            /**
             * Match documents where field specified by 'field' exists in the document. for nested fields, use syntax: a.b.c
             */
            fieldExists?: {
              /**
               * Field that must exist.
               */
              field?: string;
            };
            /**
             * Match documents where doc[field] % module == value
             */
            matchModulo?: {
              field?: string;
              modulo: number;
              value: number;
            };
            /**
             * Filter down to one document for each value of selected field.
             */
            dedupeByValue?: {
              /**
               * Field to filter on.
               */
              field: string;
            };
            /**
             * Match documents where document[a] <=/>=/</>/==/!=/stringEquals document[b]. Use stringEquals to compare strings.
             */
            selfreference?: {
              /**
               * First field in comparison.
               */
              a: string;
              /**
               * Second field in comparison.
               */
              b: string;
              /**
               * Operator used to compare a and b.
               */
              operation: ENUM_operation;
            };
            /**
             * Match documents where greaterThan < wordCount(document[field]) < lessThan.
             */
            wordCount?: {
              /**
               * Field to match on.
               */
              field: string;
              /**
               * Minimum word count.
               */
              greaterThan?: number;
              /**
               * Maximum word count.
               */
              lessThan?: number;
            };
            /**
             * Match documents where greaterThan < characterCount(document[field]) < lessThan.
             */
            characterCount?: {
              /**
               * Field to match on.
               */
              field: string;
              /**
               * Minimum character count.
               */
              greaterThan?: number;
              /**
               * Maximum character count.
               */
              lessThan?: number;
            };
            /**
             * Used to perform a logical OR of filters. each element of the OR list can itself be a list  to perform a nested AND. {or:[[A,B],C]} is equivalent to (A AND B) OR C
             */
            or?: Array<
              | Array<SimpleSearchAndFlatFilterItem>
              | SimpleSearchAndFlatFilterItem
            >;
            /**
             * Used to perform NOT filter. Can be a single filter or a list of filters to perform a !(AND). {not:[A,B]} is equivalent to !(A AND B)
             */
            not?:
              | Array<SimpleSearchAndFlatFilterItem>
              | SimpleSearchAndFlatFilterItem;
            /**
             * Filter based on data within a _chunk_ field.
             */
            chunk?: {
              /**
               * The path of the chunk field to filter on. For example: description_sentences_chunk_
               */
              path: string;
              filters: Array<SimpleSearchAndFlatFilterItem>;
            };
          }
        | FlatFilterItem;
      /**
       * Control the number of results for this aggregation level. This will default to the page_size provided in the root body if not provided.
       */
      page_size?: number;
      group_size?: number;
      select_fields?: Array<string>;
      remove_words?: Array<string>;
      include_words?: Array<string>;
      date_interval?: ENUM_date_interval;
      /**
       * If provided, group by field into n buckets in date range.
       */
      n_date_buckets?: number;
      buckets?:
        | {
            histogram?: {
              interval?: number;
              min_doc_count?: number;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | Array<{
            from?: number;
            to?: number;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }>;
      date_type?: ENUM_date_type;
      date_format?: ENUM_date_format;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    metrics?: Array<{
      field?: string;
      fields?: Array<string>;
      agg?: ENUM_agg1;
      name?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    sort?: Array<
      | string
      | {
          [k: string]: ENUM_21_ENUM | undefined;
        }
    >;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  /**
   * Size of each page of results
   */
  page_size?: number;
  /**
   * Page of the results
   */
  page?: number;
  /**
   * Whether to sort results by ascending or descending order.
   */
  asc?: boolean;
  dataset_ids?: Array<string>;
  dataset_id?: string;
  date_interval?: ENUM_date_interval;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type AggregateOrganizationMetricsOutput = {
  results?: Array<any /* this makes soorria sad */>;
};

export type AggregateOrganizationMetricsQueryInput = unknown;

/**
 *
 * Generated from a shared definition.
 */
export type ListBillingEventsInput = GetWhereInput;

export type ListBillingEventsOutput = {
  results?: Array<any /* this makes soorria sad */>;
};

export type ListBillingEventsQueryInput = unknown;

export type GetBillingFrontendLinkInput = unknown;

export type GetBillingFrontendLinkOutput = {
  link: string;
};

export type GetBillingFrontendLinkQueryInput = {
  referral?: string;
  flow?: "update-payment-method";
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetBillingCheckoutSessionInput = unknown;

export type GetBillingCheckoutSessionOutput = {
  link: string;
};

export type GetBillingCheckoutSessionQueryInput = {
  type: "credit_top_up";
};

export type UpdateOrganizationBillingInput = {
  plan: ENUM_0_ENUM;
  /**
   * The billing cycle of a Stripe subscription plan
   */
  billing_cycle: ENUM_13_ENUM;
  idempotency_key?: string;
};

export type UpdateOrganizationBillingOutput = {
  next_action?: {
    type: "confirm-card-payment";
    data: {
      payment_intent_id: string;
      client_secret: string;
    };
  };
};

export type UpdateOrganizationBillingQueryInput = unknown;

export type SyncSubscriptionInput = unknown;

export type SyncSubscriptionOutput = unknown;

export type SyncSubscriptionQueryInput = unknown;

export type GetCreditCostInput = {
  plan?: ENUM_0_ENUM;
  units: number;
  type:
    | "accounts/fireworks/models/firefunction-v1"
    | "accounts/fireworks/models/mistral-7b"
    | "anthropic-claude-3-7-sonnet"
    | "anthropic-claude-instant-v1"
    | "anthropic-claude-v2"
    | "anthropic-claude-v3-haiku"
    | "anthropic-claude-v3-opus"
    | "anthropic-claude-v3-sonnet"
    | "anthropic-claude-v35-haiku"
    | "anthropic-claude-v35-sonnet"
    | "apify-scraper"
    | "apollo-export"
    | "chain-run-and-row-cost"
    | "claude-v3-vision"
    | "cohere-command"
    | "cohere-command-light"
    | "cohere-command-light-nightly"
    | "cohere-command-nightly"
    | "cohere-command-r"
    | "cohere-command-r-plus"
    | "dspy"
    | "firecrawl"
    | "gemini-1.5-flash"
    | "gemini-1.5-pro-latest"
    | "gemini-pro"
    | "gemini-vision"
    | "gemma-7b-it"
    | "google-gemini-2.0-flash"
    | "google-gemini-2.0-flash-lite"
    | "llama2-70b-4096"
    | "llama3-70b-8192"
    | "llama3-8b-8192"
    | "meta-llama2-70b"
    | "mixtral-8x7b-32768"
    | "modal-cpu"
    | "openai-gpt-4.5-preview"
    | "openai-gpt-4o"
    | "openai-gpt-4o-mini"
    | "openai-gpt35"
    | "openai-gpt35-1106"
    | "openai-gpt35-16k"
    | "openai-gpt4"
    | "openai-gpt4-turbo"
    | "openai-gpt4-turbo-2024-04-09"
    | "openai-gpt4v"
    | "openai-o1-2024-12-17"
    | "openai-o1-latest"
    | "openai-o1-mini"
    | "openai-o3-mini"
    | "openai-o3-mini-2025-01-31"
    | "openrouter-models"
    | "pplx-70b-chat"
    | "pplx-llama-3-70b-instruct"
    | "pplx-llama-3-8b-instruct"
    | "pplx-llama-3-sonar-large-32k-chat"
    | "pplx-llama-3-sonar-large-32k-online"
    | "pplx-llama-3-sonar-small-32k-chat"
    | "pplx-llama-3-sonar-small-32k-online"
    | "pplx-llama-3.1-70b-instruct"
    | "pplx-llama-3.1-8b-instruct"
    | "pplx-llama-3.1-sonar-huge-128k-online"
    | "pplx-llama-3.1-sonar-large-128k-chat"
    | "pplx-llama-3.1-sonar-large-128k-online"
    | "pplx-llama-3.1-sonar-small-128k-chat"
    | "pplx-llama-3.1-sonar-small-128k-online"
    | "pplx-mixtral-8x7b-instruct"
    | "pplx-r1-1776"
    | "pplx-sonar"
    | "pplx-sonar-pro"
    | "pplx-sonar-reasoning"
    | "pplx-sonar-reasoning-pro"
    | "rapidapi-linkedin"
    | "recallai"
    | "replicate-llava13b"
    | "replicate-qwen";
};

export type GetCreditCostOutput = {
  credits: number;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetCreditCostQueryInput = unknown;

export type DowngradeSubscriptionInput = {
  plan: ENUM_0_ENUM;
  /**
   * The billing cycle of a Stripe subscription plan
   */
  billing_cycle?: ENUM_13_ENUM;
  idempotency_key?: string;
};

export type DowngradeSubscriptionOutput = unknown;

export type DowngradeSubscriptionQueryInput = unknown;

export type ChangeBillingSubscriptionInput = {
  new_plan_name: ENUM_0_ENUM;
  /**
   * The billing cycle of a Stripe subscription plan
   */
  billing_cycle: ENUM_13_ENUM;
  idempotency_key?: string;
};

export type ChangeBillingSubscriptionOutput = unknown;

export type ChangeBillingSubscriptionQueryInput = unknown;

export type CancelDowngradeInput = {
  idempotency_key?: string;
};

export type CancelDowngradeOutput = unknown;

export type CancelDowngradeQueryInput = unknown;

export type CancelSubscriptionInput = unknown;

export type CancelSubscriptionOutput = unknown;

export type CancelSubscriptionQueryInput = unknown;

export type BuyCreditsInput = {
  quantity: number;
  idempotency_key?: string;
};

export type BuyCreditsOutput = unknown;

export type BuyCreditsQueryInput = unknown;

export type TriggerOrganizationPlanTrialInput = {
  idempotency_key?: string;
};

export type TriggerOrganizationPlanTrialOutput = {
  next_action?: {
    type: "confirm-card-payment";
    data: {
      payment_intent_id: string;
      client_secret: string;
    };
  };
};

export type TriggerOrganizationPlanTrialQueryInput = unknown;

export type PopulateApiSelectorInput = {
  api_selector_type?: ENUM_api_selector_type;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type PopulateApiSelectorOutput = {
  results: Array<{
    label: string;
    description?: string;
    value: number | string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  error?: {
    status?: number;
    body?: string;
    error_type?: string;
    attributes?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  };
};

export type PopulateApiSelectorQueryInput = unknown;

export type ListStudiosInput = unknown;

// We could add a shared config for studio
export type ListStudiosOutput = {
  results: Array<{
    version?: string;
    project?: string;
    _id?: string;
    studio_id: string;
    /**
     * This tool is listed on the tool marketplace
     */
    in_marketplace?: boolean;
    insert_date_?: string;
    update_date_?: string;
    is_hidden?: boolean;
    tags?: {
      type?: "transformation";
      categories?: {
        [k: string]: true | undefined;
      };
      /**
       * The source of the integration. For example, 'Knowledge: Linear', which imports data from Linear, this would be 'linear'.
       */
      integration_source?: string;
      integrations?: {
        [k: string]: true | undefined;
      };
      use_cases?: {
        [k: string]: true | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    machine_user_id?: string;
    creator_user_id?: string;
    creator_first_name?: string;
    creator_last_name?: string;
    creator_display_picture?: string;
    /**
     * Anyone can run this tool
     */
    publicly_triggerable?: boolean;
    /**
     * Anyone can view or clone this tool
     */
    public?: boolean;
    metadata?: {
      source_studio_id?: string;
      source_region?: string;
      source_project?: string;
      clone_count?: number;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    share_styles?: {
      selected_format?: ENUM_selected_format;
      primary_color?: string;
      hide_guidance_tip?: boolean;
      guidance_tip_text?: string;
      cta_text?: string;
      cta_icon?: string;
      hide_logo?: boolean;
    };
    schedule?: {
      frequency?: ENUM_frequency;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    active_version_id?: string;
    draft_version_id?: string;
    title?: string;
    description?: string;
    prompt_description?: string;
    cover_image?: string;
    emoji?: string;
    transformations?: {
      steps: Array<{
        name: string;
        transformation: string;
        params: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        saved_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        output?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        /**
         * A jsonschema superset object to provide metadata for tool output fields.
         */
        output_schema?: {
          metadata?: {
            /**
             * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
             */
            field_order?: Array<string>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          properties?: {
            [k: string]:
              | {
                  metadata?: {
                    content_type?: "external_field";
                    /**
                     * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                     */
                    external_name?: string;
                    render_mode?: ENUM_render_mode;
                  };
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        default_output_values?: Array<{
          original_key: string;
          updated_key?: string;
          value: any /* this makes soorria sad */;
        }>;
        continue_on_error?: boolean;
        use_fallback_on_skip?: boolean;
        foreach?: string | Array<any /* this makes soorria sad */>;
        if?: string | boolean | null;
        display_name?: string;
        /**
         * If present, the tool step invent will be activated with the specified instructions in the tool builder.
         */
        invent_instructions?: string;
      }>;
      output?: {
        [k: string]: string | undefined;
      } | null;
    };
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    /**
     * A jsonschema superset object to provide metadata for tool output fields.
     */
    output_schema?: {
      metadata?: {
        /**
         * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
         */
        field_order?: Array<string>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      properties?: {
        [k: string]:
          | {
              metadata?: {
                content_type?: "external_field";
                /**
                 * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                 */
                external_name?: string;
                render_mode?: ENUM_render_mode;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Mapping from alias -> real variable path
     */
    state_mapping?: {
      [k: string]: string | undefined;
    };
    /**
     * Override the starting state of the studio
     */
    state?: {
      params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      steps?: {
        [k: string]:
          | {
              output?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              executionTime?: number;
              results?: Array<any /* this makes soorria sad */>;
              skipped?: boolean;
              skippedItems?: Array<any /* this makes soorria sad */>;
              status?: ENUM_status2;
              /**
               * Status of each item in the foreach, key should be the foreach index
               */
              foreach_statuses?: {
                status?: ENUM_status2;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    predicted_output?: Array<{
      title?: string;
      slug?: string;
      type?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
    metrics?: {
      views?: number;
      executions?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    share_id?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  openapi_schema?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
};

export type ListStudiosQueryInput = {
  filters?: Array<
    | {
        /**
         * Match where document[field] is in value list.
         */
        match?: {
          /**
           * If matching on text, match even if there are extra words / case insensitivity
           */
          fuzzy?: boolean;
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        matchArray?: {
          field: string;
          value: Array<string | number>;
        };
        random?: {
          size: number;
        };
        /**
         * Match where document._id is in value list.
         */
        matchIds?: {
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        /**
         * Match documents where greaterThan < document[field] < lessThan. Supports numbers and date strings.
         */
        range?: {
          /**
           * Field to match on.
           */
          field?: string;
          greaterThan?: any /* this makes soorria sad */;
          lessThan?: any /* this makes soorria sad */;
          greaterThanOrEqualTo?: any /* this makes soorria sad */;
          lessThanOrEqualTo?: any /* this makes soorria sad */;
        };
        wildcard?: {
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * single string or array of valid wildcard strings to match on, for example ['tele*']
           */
          value: string | Array<string>;
        };
        /**
         * Match documents where field specified by 'field' exists in the document. for nested fields, use syntax: a.b.c
         */
        fieldExists?: {
          /**
           * Field that must exist.
           */
          field?: string;
        };
        /**
         * Match documents where doc[field] % module == value
         */
        matchModulo?: {
          field?: string;
          modulo: number;
          value: number;
        };
        /**
         * Filter down to one document for each value of selected field.
         */
        dedupeByValue?: {
          /**
           * Field to filter on.
           */
          field: string;
        };
        /**
         * Match documents where document[a] <=/>=/</>/==/!=/stringEquals document[b]. Use stringEquals to compare strings.
         */
        selfreference?: {
          /**
           * First field in comparison.
           */
          a: string;
          /**
           * Second field in comparison.
           */
          b: string;
          /**
           * Operator used to compare a and b.
           */
          operation: ENUM_operation;
        };
        /**
         * Match documents where greaterThan < wordCount(document[field]) < lessThan.
         */
        wordCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum word count.
           */
          greaterThan?: number;
          /**
           * Maximum word count.
           */
          lessThan?: number;
        };
        /**
         * Match documents where greaterThan < characterCount(document[field]) < lessThan.
         */
        characterCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum character count.
           */
          greaterThan?: number;
          /**
           * Maximum character count.
           */
          lessThan?: number;
        };
        /**
         * Used to perform a logical OR of filters. each element of the OR list can itself be a list  to perform a nested AND. {or:[[A,B],C]} is equivalent to (A AND B) OR C
         */
        or?: Array<
          Array<SimpleSearchAndFlatFilterItem> | SimpleSearchAndFlatFilterItem
        >;
        /**
         * Used to perform NOT filter. Can be a single filter or a list of filters to perform a !(AND). {not:[A,B]} is equivalent to !(A AND B)
         */
        not?:
          | Array<SimpleSearchAndFlatFilterItem>
          | SimpleSearchAndFlatFilterItem;
        /**
         * Filter based on data within a _chunk_ field.
         */
        chunk?: {
          /**
           * The path of the chunk field to filter on. For example: description_sentences_chunk_
           */
          path: string;
          filters: Array<SimpleSearchAndFlatFilterItem>;
        };
      }
    | FlatFilterItem
  >;
  /**
   * Fields to include in the search results, empty array/list means all fields.
   */
  select_fields?: Array<string>;
  /**
   * Size of each page of results
   */
  page_size?: number;
  /**
   * Page of the results
   */
  page?: number;
  /**
   * Fields to sort by. For each field, sort by descending or ascending. If you are using descending by datetime, it will get the most recent ones. Can be provided in format ["sortfield","subsortfield"] or in format [{"sortfield":"desc"}, {"subsortfield":"asc"}]. If provided as a query parameter, use: sort=${JSON.stringify([{"sortfield":"desc"}])}
   */
  sort?: SortConfig;
  /**
   * Include vectors in the search results.
   */
  include_vector?: boolean;
  /**
   * Retrieve items after these sort values in the sort order.
   */
  after_id?: Array<any /* this makes soorria sad */>;
  query?: string;
  version?: string;
  /**
   * The version of the tool, can be 'active', 'draft' or a specific version_id
   */
  tool_version?: string;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
  /**
   * Can be used to control the job id.
   */
  job_id?: string;
  return_openapi_schema?: boolean;
  include_metrics?: boolean;
  include_share_links?: boolean;
  tool_versions?: Array<any /* this makes soorria sad */>;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type ListStudiosViewInput = {
  sort?: {
    field:
      | "description"
      | "generated_metadata.last_month_run_count"
      | "insert_date_"
      | "metadata.last_run_date"
      | "title"
      | "update_date_";
    direction: ENUM_21_ENUM;
  };
  page_size?: number;
  page?: number;
  query?: string;
};

export type ListStudiosViewOutput = {
  results: Array<{
    version?: string;
    project?: string;
    _id?: string;
    studio_id: string;
    /**
     * This tool is listed on the tool marketplace
     */
    in_marketplace?: boolean;
    insert_date_?: string;
    update_date_?: string;
    is_hidden?: boolean;
    tags?: {
      type?: "transformation";
      categories?: {
        [k: string]: true | undefined;
      };
      /**
       * The source of the integration. For example, 'Knowledge: Linear', which imports data from Linear, this would be 'linear'.
       */
      integration_source?: string;
      integrations?: {
        [k: string]: true | undefined;
      };
      use_cases?: {
        [k: string]: true | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    machine_user_id?: string;
    creator_user_id?: string;
    creator_first_name?: string;
    creator_last_name?: string;
    creator_display_picture?: string;
    /**
     * Anyone can run this tool
     */
    publicly_triggerable?: boolean;
    /**
     * Anyone can view or clone this tool
     */
    public?: boolean;
    metadata?: {
      source_studio_id?: string;
      source_region?: string;
      source_project?: string;
      clone_count?: number;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    share_styles?: {
      selected_format?: ENUM_selected_format;
      primary_color?: string;
      hide_guidance_tip?: boolean;
      guidance_tip_text?: string;
      cta_text?: string;
      cta_icon?: string;
      hide_logo?: boolean;
    };
    schedule?: {
      frequency?: ENUM_frequency;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    active_version_id?: string;
    draft_version_id?: string;
    title?: string;
    description?: string;
    prompt_description?: string;
    cover_image?: string;
    emoji?: string;
    transformations?: {
      steps: Array<{
        name: string;
        transformation: string;
        params: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        saved_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        output?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        /**
         * A jsonschema superset object to provide metadata for tool output fields.
         */
        output_schema?: {
          metadata?: {
            /**
             * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
             */
            field_order?: Array<string>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          properties?: {
            [k: string]:
              | {
                  metadata?: {
                    content_type?: "external_field";
                    /**
                     * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                     */
                    external_name?: string;
                    render_mode?: ENUM_render_mode;
                  };
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        default_output_values?: Array<{
          original_key: string;
          updated_key?: string;
          value: any /* this makes soorria sad */;
        }>;
        continue_on_error?: boolean;
        use_fallback_on_skip?: boolean;
        foreach?: string | Array<any /* this makes soorria sad */>;
        if?: string | boolean | null;
        display_name?: string;
        /**
         * If present, the tool step invent will be activated with the specified instructions in the tool builder.
         */
        invent_instructions?: string;
      }>;
      output?: {
        [k: string]: string | undefined;
      } | null;
    };
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    /**
     * A jsonschema superset object to provide metadata for tool output fields.
     */
    output_schema?: {
      metadata?: {
        /**
         * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
         */
        field_order?: Array<string>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      properties?: {
        [k: string]:
          | {
              metadata?: {
                content_type?: "external_field";
                /**
                 * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                 */
                external_name?: string;
                render_mode?: ENUM_render_mode;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Mapping from alias -> real variable path
     */
    state_mapping?: {
      [k: string]: string | undefined;
    };
    /**
     * Override the starting state of the studio
     */
    state?: {
      params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      steps?: {
        [k: string]:
          | {
              output?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              executionTime?: number;
              results?: Array<any /* this makes soorria sad */>;
              skipped?: boolean;
              skippedItems?: Array<any /* this makes soorria sad */>;
              status?: ENUM_status2;
              /**
               * Status of each item in the foreach, key should be the foreach index
               */
              foreach_statuses?: {
                status?: ENUM_status2;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    predicted_output?: Array<{
      title?: string;
      slug?: string;
      type?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
    metrics?: {
      views?: number;
      executions?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    share_id?: string;
    generated_metadata: {
      last_month_run_count?: number;
    };
  }>;
};

export type ListStudiosViewQueryInput = unknown;

export type ListStudiosRunHistoryInput = unknown;

export type ListStudiosRunHistoryOutput = {
  results: Array<StudioRunHistory>;
  studios?: {
    [k: string]:
      | {
          version?: string;
          project?: string;
          _id?: string;
          studio_id: string;
          /**
           * This tool is listed on the tool marketplace
           */
          in_marketplace?: boolean;
          insert_date_?: string;
          update_date_?: string;
          is_hidden?: boolean;
          tags?: {
            type?: "transformation";
            categories?: {
              [k: string]: true | undefined;
            };
            /**
             * The source of the integration. For example, 'Knowledge: Linear', which imports data from Linear, this would be 'linear'.
             */
            integration_source?: string;
            integrations?: {
              [k: string]: true | undefined;
            };
            use_cases?: {
              [k: string]: true | undefined;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          machine_user_id?: string;
          creator_user_id?: string;
          creator_first_name?: string;
          creator_last_name?: string;
          creator_display_picture?: string;
          /**
           * Anyone can run this tool
           */
          publicly_triggerable?: boolean;
          /**
           * Anyone can view or clone this tool
           */
          public?: boolean;
          metadata?: {
            source_studio_id?: string;
            source_region?: string;
            source_project?: string;
            clone_count?: number;
            last_run_date?: any /* this makes soorria sad */;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          share_styles?: {
            selected_format?: ENUM_selected_format;
            primary_color?: string;
            hide_guidance_tip?: boolean;
            guidance_tip_text?: string;
            cta_text?: string;
            cta_icon?: string;
            hide_logo?: boolean;
          };
          schedule?: {
            frequency?: ENUM_frequency;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          active_version_id?: string;
          draft_version_id?: string;
          title?: string;
          description?: string;
          prompt_description?: string;
          cover_image?: string;
          emoji?: string;
          transformations?: {
            steps: Array<{
              name: string;
              transformation: string;
              params: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              saved_params?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              output?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              /**
               * A jsonschema superset object to provide metadata for tool output fields.
               */
              output_schema?: {
                metadata?: {
                  /**
                   * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
                   */
                  field_order?: Array<string>;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                };
                properties?: {
                  [k: string]:
                    | {
                        metadata?: {
                          content_type?: "external_field";
                          /**
                           * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                           */
                          external_name?: string;
                          render_mode?: ENUM_render_mode;
                        };
                        [k: string]:
                          | any /* this makes soorria sad */
                          | undefined;
                      }
                    | undefined;
                };
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              default_output_values?: Array<{
                original_key: string;
                updated_key?: string;
                value: any /* this makes soorria sad */;
              }>;
              continue_on_error?: boolean;
              use_fallback_on_skip?: boolean;
              foreach?: string | Array<any /* this makes soorria sad */>;
              if?: string | boolean | null;
              display_name?: string;
              /**
               * If present, the tool step invent will be activated with the specified instructions in the tool builder.
               */
              invent_instructions?: string;
            }>;
            output?: {
              [k: string]: string | undefined;
            } | null;
          };
          /**
           * A jsonschema superset object that users parameters will be validated against upon execution.
           */
          params_schema?: ParamsSchema;
          /**
           * A jsonschema superset object to provide metadata for tool output fields.
           */
          output_schema?: {
            metadata?: {
              /**
               * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
               */
              field_order?: Array<string>;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            properties?: {
              [k: string]:
                | {
                    metadata?: {
                      content_type?: "external_field";
                      /**
                       * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                       */
                      external_name?: string;
                      render_mode?: ENUM_render_mode;
                    };
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  }
                | undefined;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          /**
           * Mapping from alias -> real variable path
           */
          state_mapping?: {
            [k: string]: string | undefined;
          };
          /**
           * Override the starting state of the studio
           */
          state?: {
            params?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            steps?: {
              [k: string]:
                | {
                    output?: {
                      [k: string]: any /* this makes soorria sad */ | undefined;
                    };
                    executionTime?: number;
                    results?: Array<any /* this makes soorria sad */>;
                    skipped?: boolean;
                    skippedItems?: Array<any /* this makes soorria sad */>;
                    status?: ENUM_status2;
                    /**
                     * Status of each item in the foreach, key should be the foreach index
                     */
                    foreach_statuses?: {
                      status?: ENUM_status2;
                      [k: string]: any /* this makes soorria sad */ | undefined;
                    };
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  }
                | undefined;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          predicted_output?: Array<{
            title?: string;
            slug?: string;
            type?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }>;
          /**
           * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
           */
          max_job_duration?: ENUM_max_job_duration;
          metrics?: {
            views?: number;
            executions?: number;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          share_id?: string;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }
      | undefined;
  };
  agentDetails?: {
    [k: string]:
      | {
          _id: string;
          agent_id: string;
          /**
           * If set, records where the agent was cloned from.
           */
          origin?: {
            root_agent_id: string;
            region?: ENUM_region;
            project?: string;
          };
          views?: number;
          public?: boolean;
          in_marketplace?: boolean;
          project: string;
          update_date_?: string;
          insert_date_?: any /* this makes soorria sad */;
          version?: string;
          embed_config?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          embeddable?: boolean;
          share_styles?: {
            selected_format?: ENUM_selected_format1;
            primary_color?: string;
            bubble_style?: ENUM_bubble_style;
            bubble_icon?: string;
            input_placeholder_text?: string;
            hide_file_uploads?: boolean;
            hide_conversation_list?: boolean;
            hide_tool_steps?: boolean;
            starting_message_prompts?: Array<string>;
            hide_logo?: boolean;
          };
          machine_user_id?: string;
          starting_messages?: Array<{
            message:
              | {
                  role: "user";
                  content: string;
                  importance_level?: ENUM_importance_level;
                }
              | {
                  role: "agent";
                  content: string;
                };
            /**
             * Any additional metadata to be stored with the message. This is not sent to the agent.
             */
            metadata?: {
              sync_item_id?: string;
              sync_id?: string;
              sync_type?: string;
              regenerate_metadata?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
          }>;
          runner?:
            | {
                type: "default";
              }
            | {
                type: "multiagent";
                multiagent?: {
                  max_rounds?: number;
                  /**
                   * Agents that the Admin agent will run.
                   */
                  child_agents?: Array<{
                    agent_id?: string;
                    system_prompt?: string;
                    name?: string;
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  }>;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                };
              };
          params?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          expiry_date_?: any /* this makes soorria sad */;
          /**
           * Can be used to force a given mas id for every run with this agent.
           */
          mas_id?: string;
          categories?: Array<string>;
          last_updated_by?: {
            user_name?: string;
            user_id?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          metadata?: {
            clone_count?: number;
            custom_task_views?: Array<{
              id: string;
              title: string;
              filters: Array<{
                type: ENUM_type2;
                id: string;
              }>;
            }>;
            last_run_date?: any /* this makes soorria sad */;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          active_version_id?: string;
          draft_version_id?: string;
          name?: string;
          description?: string;
          prompt_description?: string;
          /**
           * Used to provide instructions on how to use or set up the agent.
           */
          user_instructions?: string;
          /**
           * If set, the agents config will be completely replaced with the templates config.
           */
          template?: {
            agent_id: string;
            region?: ENUM_region1;
            project?: string;
          };
          emoji?: string;
          /**
           * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
           */
          max_job_duration?: ENUM_max_job_duration;
          title_prompt?: string;
          system_prompt?: string;
          /**
           * If true, suggested replies will appear for each agent message in the front-end.
           */
          suggest_replies?: boolean;
          /**
           * The prompt to inject into the LLM step in the tool used to generate suggested replies.
           */
          suggest_replies_prompt?: string;
          /**
           * If true, this agent can plan and schedule future actions
           */
          is_scheduled_triggers_enabled?: boolean;
          model?: string;
          /**
           * Maximum number of actions an agent can autonomously take before the user needs to confirm again.
           */
          autonomy_limit?: number;
          /**
           * Temperature of the selected model. Typically, higher temperature means more random output.
           */
          temperature?: number;
          knowledge?: Array<{
            knowledge_set: string;
          }>;
          actions?: Array<{
            chain_id?: string;
            agent_id?: string;
            /**
             * A jsonschema superset object that users parameters will be validated against upon execution.
             */
            params_schema?: ParamsSchema;
            agent?: {
              message_template?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            action_behaviour?: string;
            action_retry_config?: {
              max_retries?: number;
              force_retry?: boolean;
              after_retries_behaviour?: ENUM_after_retries_behaviour;
            };
            title?: string;
            name?: string;
            description?: string;
            emoji?: string;
            /**
             * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
             */
            agent_decide_prompt?: string;
            conditional_approval_rules?: {
              max_auto_approvals?: number;
              max_approvals_asked?: number;
            };
            /**
             * Useful for external systems to track which tools have been added programatically.
             */
            metadata?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Defaults to project agent is being ran from. Tools must be public to use tools in other projects.
             */
            project?: string;
            /**
             * Defaults to region agent is being ran from. Tools must be public to use tools in other regions.
             */
            region?: string;
            /**
             * DEPRECATED: Version of the tool or subagent to run. Defaults to 'latest'.
             */
            version?: string;
            /**
             * Version of the tool or subagent to run. Can be 'active', 'draft', or a specific version id.
             */
            tool_version?: string;
            /**
             * Default values the agent will use as inputs when running the tool.
             */
            default_values?: {
              /**
               * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
               */
              _subagent_params?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Auth account values to update in the chains. Will not be saved to the agent config.
             */
            auth_values?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            prompt_description?: string;
            /**
             * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
             */
            prompt_for_when_to_use?: string;
            wait_for_completion?: boolean;
            strict?: boolean;
          }>;
          action_behaviour?: string;
          action_retry_config?: {
            max_retries?: number;
            force_retry?: boolean;
            after_retries_behaviour?: ENUM_after_retries_behaviour;
          };
          /**
           * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
           */
          agent_decide_prompt?: string;
          conditional_approval_rules?: {
            max_auto_approvals?: number;
            max_approvals_asked?: number;
          };
          /**
           * Triggers are used to start / continue a conversation with an agent via an external service (e.g. email).
           */
          triggers?: Array<{
            type: string;
            enabled?: boolean;
            config?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            studios?: Array<{
              studio_id: string;
              label?: string;
            }>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }>;
          /**
           * A jsonschema superset object that users parameters will be validated against upon execution.
           */
          params_schema?: ParamsSchema;
          escalations?: {
            email?: {
              emails?: any /* this makes soorria sad */;
            };
            slack?: {
              channels?: Array<{
                oauth_account_id?: any /* this makes soorria sad */;
              }>;
            };
          };
          /**
           * If true, the agent's progress will be streamed in real-time-ish to the frontend.
           */
          use_streaming?: boolean;
          model_options?: {
            /**
             * The maximum length of the agent's response. Note that too low a value can completely break agent behaviour.
             */
            max_output_tokens?: number;
            parallel_tool_calls?: boolean;
            /**
             * Cost reduction technique due to models performing better with more context
             */
            switch_model_after_n_tokens?: {
              model: string | null;
              n_tokens: number | null;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Some model providers support 'strict':true to force function calling to be more accurate. This activates this when supported.
             */
            strict_mode?: boolean;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          /**
           * Options for controlling of the agent runtime layer.
           */
          runtime?: {
            code?: string;
            enabled?: boolean;
            /**
             * If a non empty string, will not use code runtime, and instead fire a webhook, expecting the webhook to manage all further work.
             */
            webhook?: string;
          };
          tags?: {
            [k: string]:
              | boolean
              | {
                  description?: string;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          custom_metadata?: {
            options?: Array<{
              title: string;
              description?: string;
              type: ENUM_type3;
              valid_options?: Array<{
                label: string;
                [k: string]: any /* this makes soorria sad */ | undefined;
              }>;
              is_rule_based?: boolean;
              rules?: Array<{
                conditions?: Array<FlatFilterItem>;
                action?:
                  | {
                      type: "increment";
                      value: number;
                    }
                  | {
                      type: "set";
                      value: number | string | boolean | Array<string>;
                    };
                [k: string]: any /* this makes soorria sad */ | undefined;
              }>;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>;
            system_prompt?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
        }
      | undefined;
  };
};

export type ListStudiosRunHistoryQueryInput = {
  filters?: Array<
    | {
        /**
         * Match where document[field] is in value list.
         */
        match?: {
          /**
           * If matching on text, match even if there are extra words / case insensitivity
           */
          fuzzy?: boolean;
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        matchArray?: {
          field: string;
          value: Array<string | number>;
        };
        random?: {
          size: number;
        };
        /**
         * Match where document._id is in value list.
         */
        matchIds?: {
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        /**
         * Match documents where greaterThan < document[field] < lessThan. Supports numbers and date strings.
         */
        range?: {
          /**
           * Field to match on.
           */
          field?: string;
          greaterThan?: any /* this makes soorria sad */;
          lessThan?: any /* this makes soorria sad */;
          greaterThanOrEqualTo?: any /* this makes soorria sad */;
          lessThanOrEqualTo?: any /* this makes soorria sad */;
        };
        wildcard?: {
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * single string or array of valid wildcard strings to match on, for example ['tele*']
           */
          value: string | Array<string>;
        };
        /**
         * Match documents where field specified by 'field' exists in the document. for nested fields, use syntax: a.b.c
         */
        fieldExists?: {
          /**
           * Field that must exist.
           */
          field?: string;
        };
        /**
         * Match documents where doc[field] % module == value
         */
        matchModulo?: {
          field?: string;
          modulo: number;
          value: number;
        };
        /**
         * Filter down to one document for each value of selected field.
         */
        dedupeByValue?: {
          /**
           * Field to filter on.
           */
          field: string;
        };
        /**
         * Match documents where document[a] <=/>=/</>/==/!=/stringEquals document[b]. Use stringEquals to compare strings.
         */
        selfreference?: {
          /**
           * First field in comparison.
           */
          a: string;
          /**
           * Second field in comparison.
           */
          b: string;
          /**
           * Operator used to compare a and b.
           */
          operation: ENUM_operation;
        };
        /**
         * Match documents where greaterThan < wordCount(document[field]) < lessThan.
         */
        wordCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum word count.
           */
          greaterThan?: number;
          /**
           * Maximum word count.
           */
          lessThan?: number;
        };
        /**
         * Match documents where greaterThan < characterCount(document[field]) < lessThan.
         */
        characterCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum character count.
           */
          greaterThan?: number;
          /**
           * Maximum character count.
           */
          lessThan?: number;
        };
        /**
         * Used to perform a logical OR of filters. each element of the OR list can itself be a list  to perform a nested AND. {or:[[A,B],C]} is equivalent to (A AND B) OR C
         */
        or?: Array<
          Array<SimpleSearchAndFlatFilterItem> | SimpleSearchAndFlatFilterItem
        >;
        /**
         * Used to perform NOT filter. Can be a single filter or a list of filters to perform a !(AND). {not:[A,B]} is equivalent to !(A AND B)
         */
        not?:
          | Array<SimpleSearchAndFlatFilterItem>
          | SimpleSearchAndFlatFilterItem;
        /**
         * Filter based on data within a _chunk_ field.
         */
        chunk?: {
          /**
           * The path of the chunk field to filter on. For example: description_sentences_chunk_
           */
          path: string;
          filters: Array<SimpleSearchAndFlatFilterItem>;
        };
      }
    | FlatFilterItem
  >;
  /**
   * Fields to include in the search results, empty array/list means all fields.
   */
  select_fields?: Array<string>;
  /**
   * Size of each page of results
   */
  page_size?: number;
  /**
   * Page of the results
   */
  page?: number;
  /**
   * Fields to sort by. For each field, sort by descending or ascending. If you are using descending by datetime, it will get the most recent ones. Can be provided in format ["sortfield","subsortfield"] or in format [{"sortfield":"desc"}, {"subsortfield":"asc"}]. If provided as a query parameter, use: sort=${JSON.stringify([{"sortfield":"desc"}])}
   */
  sort?: SortConfig;
  /**
   * Include vectors in the search results.
   */
  include_vector?: boolean;
  /**
   * Retrieve items after these sort values in the sort order.
   */
  after_id?: Array<any /* this makes soorria sad */>;
  query?: string;
  with_studio_details?: boolean;
  with_agent_details?: boolean;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type ListBulkInProgressStudiosInput = unknown;

export type ListBulkInProgressStudiosOutput = {
  results: Array<StudioRunHistory>;
  studios?: {
    [k: string]:
      | {
          version?: string;
          project?: string;
          _id?: string;
          studio_id: string;
          /**
           * This tool is listed on the tool marketplace
           */
          in_marketplace?: boolean;
          insert_date_?: string;
          update_date_?: string;
          is_hidden?: boolean;
          tags?: {
            type?: "transformation";
            categories?: {
              [k: string]: true | undefined;
            };
            /**
             * The source of the integration. For example, 'Knowledge: Linear', which imports data from Linear, this would be 'linear'.
             */
            integration_source?: string;
            integrations?: {
              [k: string]: true | undefined;
            };
            use_cases?: {
              [k: string]: true | undefined;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          machine_user_id?: string;
          creator_user_id?: string;
          creator_first_name?: string;
          creator_last_name?: string;
          creator_display_picture?: string;
          /**
           * Anyone can run this tool
           */
          publicly_triggerable?: boolean;
          /**
           * Anyone can view or clone this tool
           */
          public?: boolean;
          metadata?: {
            source_studio_id?: string;
            source_region?: string;
            source_project?: string;
            clone_count?: number;
            last_run_date?: any /* this makes soorria sad */;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          share_styles?: {
            selected_format?: ENUM_selected_format;
            primary_color?: string;
            hide_guidance_tip?: boolean;
            guidance_tip_text?: string;
            cta_text?: string;
            cta_icon?: string;
            hide_logo?: boolean;
          };
          schedule?: {
            frequency?: ENUM_frequency;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          active_version_id?: string;
          draft_version_id?: string;
          title?: string;
          description?: string;
          prompt_description?: string;
          cover_image?: string;
          emoji?: string;
          transformations?: {
            steps: Array<{
              name: string;
              transformation: string;
              params: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              saved_params?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              output?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              /**
               * A jsonschema superset object to provide metadata for tool output fields.
               */
              output_schema?: {
                metadata?: {
                  /**
                   * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
                   */
                  field_order?: Array<string>;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                };
                properties?: {
                  [k: string]:
                    | {
                        metadata?: {
                          content_type?: "external_field";
                          /**
                           * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                           */
                          external_name?: string;
                          render_mode?: ENUM_render_mode;
                        };
                        [k: string]:
                          | any /* this makes soorria sad */
                          | undefined;
                      }
                    | undefined;
                };
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              default_output_values?: Array<{
                original_key: string;
                updated_key?: string;
                value: any /* this makes soorria sad */;
              }>;
              continue_on_error?: boolean;
              use_fallback_on_skip?: boolean;
              foreach?: string | Array<any /* this makes soorria sad */>;
              if?: string | boolean | null;
              display_name?: string;
              /**
               * If present, the tool step invent will be activated with the specified instructions in the tool builder.
               */
              invent_instructions?: string;
            }>;
            output?: {
              [k: string]: string | undefined;
            } | null;
          };
          /**
           * A jsonschema superset object that users parameters will be validated against upon execution.
           */
          params_schema?: ParamsSchema;
          /**
           * A jsonschema superset object to provide metadata for tool output fields.
           */
          output_schema?: {
            metadata?: {
              /**
               * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
               */
              field_order?: Array<string>;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            properties?: {
              [k: string]:
                | {
                    metadata?: {
                      content_type?: "external_field";
                      /**
                       * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                       */
                      external_name?: string;
                      render_mode?: ENUM_render_mode;
                    };
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  }
                | undefined;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          /**
           * Mapping from alias -> real variable path
           */
          state_mapping?: {
            [k: string]: string | undefined;
          };
          /**
           * Override the starting state of the studio
           */
          state?: {
            params?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            steps?: {
              [k: string]:
                | {
                    output?: {
                      [k: string]: any /* this makes soorria sad */ | undefined;
                    };
                    executionTime?: number;
                    results?: Array<any /* this makes soorria sad */>;
                    skipped?: boolean;
                    skippedItems?: Array<any /* this makes soorria sad */>;
                    status?: ENUM_status2;
                    /**
                     * Status of each item in the foreach, key should be the foreach index
                     */
                    foreach_statuses?: {
                      status?: ENUM_status2;
                      [k: string]: any /* this makes soorria sad */ | undefined;
                    };
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  }
                | undefined;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          predicted_output?: Array<{
            title?: string;
            slug?: string;
            type?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }>;
          /**
           * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
           */
          max_job_duration?: ENUM_max_job_duration;
          metrics?: {
            views?: number;
            executions?: number;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          share_id?: string;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }
      | undefined;
  };
  agentDetails?: {
    [k: string]:
      | {
          _id: string;
          agent_id: string;
          /**
           * If set, records where the agent was cloned from.
           */
          origin?: {
            root_agent_id: string;
            region?: ENUM_region;
            project?: string;
          };
          views?: number;
          public?: boolean;
          in_marketplace?: boolean;
          project: string;
          update_date_?: string;
          insert_date_?: any /* this makes soorria sad */;
          version?: string;
          embed_config?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          embeddable?: boolean;
          share_styles?: {
            selected_format?: ENUM_selected_format1;
            primary_color?: string;
            bubble_style?: ENUM_bubble_style;
            bubble_icon?: string;
            input_placeholder_text?: string;
            hide_file_uploads?: boolean;
            hide_conversation_list?: boolean;
            hide_tool_steps?: boolean;
            starting_message_prompts?: Array<string>;
            hide_logo?: boolean;
          };
          machine_user_id?: string;
          starting_messages?: Array<{
            message:
              | {
                  role: "user";
                  content: string;
                  importance_level?: ENUM_importance_level;
                }
              | {
                  role: "agent";
                  content: string;
                };
            /**
             * Any additional metadata to be stored with the message. This is not sent to the agent.
             */
            metadata?: {
              sync_item_id?: string;
              sync_id?: string;
              sync_type?: string;
              regenerate_metadata?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
          }>;
          runner?:
            | {
                type: "default";
              }
            | {
                type: "multiagent";
                multiagent?: {
                  max_rounds?: number;
                  /**
                   * Agents that the Admin agent will run.
                   */
                  child_agents?: Array<{
                    agent_id?: string;
                    system_prompt?: string;
                    name?: string;
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  }>;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                };
              };
          params?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          expiry_date_?: any /* this makes soorria sad */;
          /**
           * Can be used to force a given mas id for every run with this agent.
           */
          mas_id?: string;
          categories?: Array<string>;
          last_updated_by?: {
            user_name?: string;
            user_id?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          metadata?: {
            clone_count?: number;
            custom_task_views?: Array<{
              id: string;
              title: string;
              filters: Array<{
                type: ENUM_type2;
                id: string;
              }>;
            }>;
            last_run_date?: any /* this makes soorria sad */;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          active_version_id?: string;
          draft_version_id?: string;
          name?: string;
          description?: string;
          prompt_description?: string;
          /**
           * Used to provide instructions on how to use or set up the agent.
           */
          user_instructions?: string;
          /**
           * If set, the agents config will be completely replaced with the templates config.
           */
          template?: {
            agent_id: string;
            region?: ENUM_region1;
            project?: string;
          };
          emoji?: string;
          /**
           * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
           */
          max_job_duration?: ENUM_max_job_duration;
          title_prompt?: string;
          system_prompt?: string;
          /**
           * If true, suggested replies will appear for each agent message in the front-end.
           */
          suggest_replies?: boolean;
          /**
           * The prompt to inject into the LLM step in the tool used to generate suggested replies.
           */
          suggest_replies_prompt?: string;
          /**
           * If true, this agent can plan and schedule future actions
           */
          is_scheduled_triggers_enabled?: boolean;
          model?: string;
          /**
           * Maximum number of actions an agent can autonomously take before the user needs to confirm again.
           */
          autonomy_limit?: number;
          /**
           * Temperature of the selected model. Typically, higher temperature means more random output.
           */
          temperature?: number;
          knowledge?: Array<{
            knowledge_set: string;
          }>;
          actions?: Array<{
            chain_id?: string;
            agent_id?: string;
            /**
             * A jsonschema superset object that users parameters will be validated against upon execution.
             */
            params_schema?: ParamsSchema;
            agent?: {
              message_template?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            action_behaviour?: string;
            action_retry_config?: {
              max_retries?: number;
              force_retry?: boolean;
              after_retries_behaviour?: ENUM_after_retries_behaviour;
            };
            title?: string;
            name?: string;
            description?: string;
            emoji?: string;
            /**
             * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
             */
            agent_decide_prompt?: string;
            conditional_approval_rules?: {
              max_auto_approvals?: number;
              max_approvals_asked?: number;
            };
            /**
             * Useful for external systems to track which tools have been added programatically.
             */
            metadata?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Defaults to project agent is being ran from. Tools must be public to use tools in other projects.
             */
            project?: string;
            /**
             * Defaults to region agent is being ran from. Tools must be public to use tools in other regions.
             */
            region?: string;
            /**
             * DEPRECATED: Version of the tool or subagent to run. Defaults to 'latest'.
             */
            version?: string;
            /**
             * Version of the tool or subagent to run. Can be 'active', 'draft', or a specific version id.
             */
            tool_version?: string;
            /**
             * Default values the agent will use as inputs when running the tool.
             */
            default_values?: {
              /**
               * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
               */
              _subagent_params?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Auth account values to update in the chains. Will not be saved to the agent config.
             */
            auth_values?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            prompt_description?: string;
            /**
             * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
             */
            prompt_for_when_to_use?: string;
            wait_for_completion?: boolean;
            strict?: boolean;
          }>;
          action_behaviour?: string;
          action_retry_config?: {
            max_retries?: number;
            force_retry?: boolean;
            after_retries_behaviour?: ENUM_after_retries_behaviour;
          };
          /**
           * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
           */
          agent_decide_prompt?: string;
          conditional_approval_rules?: {
            max_auto_approvals?: number;
            max_approvals_asked?: number;
          };
          /**
           * Triggers are used to start / continue a conversation with an agent via an external service (e.g. email).
           */
          triggers?: Array<{
            type: string;
            enabled?: boolean;
            config?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            studios?: Array<{
              studio_id: string;
              label?: string;
            }>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }>;
          /**
           * A jsonschema superset object that users parameters will be validated against upon execution.
           */
          params_schema?: ParamsSchema;
          escalations?: {
            email?: {
              emails?: any /* this makes soorria sad */;
            };
            slack?: {
              channels?: Array<{
                oauth_account_id?: any /* this makes soorria sad */;
              }>;
            };
          };
          /**
           * If true, the agent's progress will be streamed in real-time-ish to the frontend.
           */
          use_streaming?: boolean;
          model_options?: {
            /**
             * The maximum length of the agent's response. Note that too low a value can completely break agent behaviour.
             */
            max_output_tokens?: number;
            parallel_tool_calls?: boolean;
            /**
             * Cost reduction technique due to models performing better with more context
             */
            switch_model_after_n_tokens?: {
              model: string | null;
              n_tokens: number | null;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Some model providers support 'strict':true to force function calling to be more accurate. This activates this when supported.
             */
            strict_mode?: boolean;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          /**
           * Options for controlling of the agent runtime layer.
           */
          runtime?: {
            code?: string;
            enabled?: boolean;
            /**
             * If a non empty string, will not use code runtime, and instead fire a webhook, expecting the webhook to manage all further work.
             */
            webhook?: string;
          };
          tags?: {
            [k: string]:
              | boolean
              | {
                  description?: string;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          custom_metadata?: {
            options?: Array<{
              title: string;
              description?: string;
              type: ENUM_type3;
              valid_options?: Array<{
                label: string;
                [k: string]: any /* this makes soorria sad */ | undefined;
              }>;
              is_rule_based?: boolean;
              rules?: Array<{
                conditions?: Array<FlatFilterItem>;
                action?:
                  | {
                      type: "increment";
                      value: number;
                    }
                  | {
                      type: "set";
                      value: number | string | boolean | Array<string>;
                    };
                [k: string]: any /* this makes soorria sad */ | undefined;
              }>;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>;
            system_prompt?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
        }
      | undefined;
  };
};

export type ListBulkInProgressStudiosQueryInput = {
  filters?: Array<
    | {
        /**
         * Match where document[field] is in value list.
         */
        match?: {
          /**
           * If matching on text, match even if there are extra words / case insensitivity
           */
          fuzzy?: boolean;
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        matchArray?: {
          field: string;
          value: Array<string | number>;
        };
        random?: {
          size: number;
        };
        /**
         * Match where document._id is in value list.
         */
        matchIds?: {
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        /**
         * Match documents where greaterThan < document[field] < lessThan. Supports numbers and date strings.
         */
        range?: {
          /**
           * Field to match on.
           */
          field?: string;
          greaterThan?: any /* this makes soorria sad */;
          lessThan?: any /* this makes soorria sad */;
          greaterThanOrEqualTo?: any /* this makes soorria sad */;
          lessThanOrEqualTo?: any /* this makes soorria sad */;
        };
        wildcard?: {
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * single string or array of valid wildcard strings to match on, for example ['tele*']
           */
          value: string | Array<string>;
        };
        /**
         * Match documents where field specified by 'field' exists in the document. for nested fields, use syntax: a.b.c
         */
        fieldExists?: {
          /**
           * Field that must exist.
           */
          field?: string;
        };
        /**
         * Match documents where doc[field] % module == value
         */
        matchModulo?: {
          field?: string;
          modulo: number;
          value: number;
        };
        /**
         * Filter down to one document for each value of selected field.
         */
        dedupeByValue?: {
          /**
           * Field to filter on.
           */
          field: string;
        };
        /**
         * Match documents where document[a] <=/>=/</>/==/!=/stringEquals document[b]. Use stringEquals to compare strings.
         */
        selfreference?: {
          /**
           * First field in comparison.
           */
          a: string;
          /**
           * Second field in comparison.
           */
          b: string;
          /**
           * Operator used to compare a and b.
           */
          operation: ENUM_operation;
        };
        /**
         * Match documents where greaterThan < wordCount(document[field]) < lessThan.
         */
        wordCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum word count.
           */
          greaterThan?: number;
          /**
           * Maximum word count.
           */
          lessThan?: number;
        };
        /**
         * Match documents where greaterThan < characterCount(document[field]) < lessThan.
         */
        characterCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum character count.
           */
          greaterThan?: number;
          /**
           * Maximum character count.
           */
          lessThan?: number;
        };
        /**
         * Used to perform a logical OR of filters. each element of the OR list can itself be a list  to perform a nested AND. {or:[[A,B],C]} is equivalent to (A AND B) OR C
         */
        or?: Array<
          Array<SimpleSearchAndFlatFilterItem> | SimpleSearchAndFlatFilterItem
        >;
        /**
         * Used to perform NOT filter. Can be a single filter or a list of filters to perform a !(AND). {not:[A,B]} is equivalent to !(A AND B)
         */
        not?:
          | Array<SimpleSearchAndFlatFilterItem>
          | SimpleSearchAndFlatFilterItem;
        /**
         * Filter based on data within a _chunk_ field.
         */
        chunk?: {
          /**
           * The path of the chunk field to filter on. For example: description_sentences_chunk_
           */
          path: string;
          filters: Array<SimpleSearchAndFlatFilterItem>;
        };
      }
    | FlatFilterItem
  >;
  /**
   * Fields to include in the search results, empty array/list means all fields.
   */
  select_fields?: Array<string>;
  /**
   * Size of each page of results
   */
  page_size?: number;
  /**
   * Page of the results
   */
  page?: number;
  /**
   * Fields to sort by. For each field, sort by descending or ascending. If you are using descending by datetime, it will get the most recent ones. Can be provided in format ["sortfield","subsortfield"] or in format [{"sortfield":"desc"}, {"subsortfield":"asc"}]. If provided as a query parameter, use: sort=${JSON.stringify([{"sortfield":"desc"}])}
   */
  sort?: SortConfig;
  /**
   * Include vectors in the search results.
   */
  include_vector?: boolean;
  /**
   * Retrieve items after these sort values in the sort order.
   */
  after_id?: Array<any /* this makes soorria sad */>;
  query?: string;
  with_studio_details?: boolean;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

/**
 *
 * Generated from a shared definition.
 */
export type AggregateChainHistoryInput = AggregateInput;

export type AggregateChainHistoryOutput = {
  results: Array<any /* this makes soorria sad */>;
};

export type AggregateChainHistoryQueryInput = unknown;

export type ListPublicStudiosInput = unknown;

export type ListPublicStudiosOutput = {
  results: Array<{
    version?: string;
    project?: string;
    _id?: string;
    studio_id: string;
    /**
     * This tool is listed on the tool marketplace
     */
    in_marketplace?: boolean;
    insert_date_?: string;
    update_date_?: string;
    is_hidden?: boolean;
    tags?: {
      type?: "transformation";
      categories?: {
        [k: string]: true | undefined;
      };
      /**
       * The source of the integration. For example, 'Knowledge: Linear', which imports data from Linear, this would be 'linear'.
       */
      integration_source?: string;
      integrations?: {
        [k: string]: true | undefined;
      };
      use_cases?: {
        [k: string]: true | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    machine_user_id?: string;
    creator_user_id?: string;
    creator_first_name?: string;
    creator_last_name?: string;
    creator_display_picture?: string;
    /**
     * Anyone can run this tool
     */
    publicly_triggerable?: boolean;
    /**
     * Anyone can view or clone this tool
     */
    public?: boolean;
    metadata?: {
      source_studio_id?: string;
      source_region?: string;
      source_project?: string;
      clone_count?: number;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    share_styles?: {
      selected_format?: ENUM_selected_format;
      primary_color?: string;
      hide_guidance_tip?: boolean;
      guidance_tip_text?: string;
      cta_text?: string;
      cta_icon?: string;
      hide_logo?: boolean;
    };
    schedule?: {
      frequency?: ENUM_frequency;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    active_version_id?: string;
    draft_version_id?: string;
    title?: string;
    description?: string;
    prompt_description?: string;
    cover_image?: string;
    emoji?: string;
    transformations?: {
      steps: Array<{
        name: string;
        transformation: string;
        params: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        saved_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        output?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        /**
         * A jsonschema superset object to provide metadata for tool output fields.
         */
        output_schema?: {
          metadata?: {
            /**
             * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
             */
            field_order?: Array<string>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          properties?: {
            [k: string]:
              | {
                  metadata?: {
                    content_type?: "external_field";
                    /**
                     * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                     */
                    external_name?: string;
                    render_mode?: ENUM_render_mode;
                  };
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        default_output_values?: Array<{
          original_key: string;
          updated_key?: string;
          value: any /* this makes soorria sad */;
        }>;
        continue_on_error?: boolean;
        use_fallback_on_skip?: boolean;
        foreach?: string | Array<any /* this makes soorria sad */>;
        if?: string | boolean | null;
        display_name?: string;
        /**
         * If present, the tool step invent will be activated with the specified instructions in the tool builder.
         */
        invent_instructions?: string;
      }>;
      output?: {
        [k: string]: string | undefined;
      } | null;
    };
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    /**
     * A jsonschema superset object to provide metadata for tool output fields.
     */
    output_schema?: {
      metadata?: {
        /**
         * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
         */
        field_order?: Array<string>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      properties?: {
        [k: string]:
          | {
              metadata?: {
                content_type?: "external_field";
                /**
                 * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                 */
                external_name?: string;
                render_mode?: ENUM_render_mode;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Mapping from alias -> real variable path
     */
    state_mapping?: {
      [k: string]: string | undefined;
    };
    /**
     * Override the starting state of the studio
     */
    state?: {
      params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      steps?: {
        [k: string]:
          | {
              output?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              executionTime?: number;
              results?: Array<any /* this makes soorria sad */>;
              skipped?: boolean;
              skippedItems?: Array<any /* this makes soorria sad */>;
              status?: ENUM_status2;
              /**
               * Status of each item in the foreach, key should be the foreach index
               */
              foreach_statuses?: {
                status?: ENUM_status2;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    predicted_output?: Array<{
      title?: string;
      slug?: string;
      type?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
    metrics?: {
      views?: number;
      executions?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    share_id?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type ListPublicStudiosQueryInput = {
  mode?: "all" | "hot";
  filters?: Array<
    | {
        /**
         * Match where document[field] is in value list.
         */
        match?: {
          /**
           * If matching on text, match even if there are extra words / case insensitivity
           */
          fuzzy?: boolean;
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        matchArray?: {
          field: string;
          value: Array<string | number>;
        };
        random?: {
          size: number;
        };
        /**
         * Match where document._id is in value list.
         */
        matchIds?: {
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        /**
         * Match documents where greaterThan < document[field] < lessThan. Supports numbers and date strings.
         */
        range?: {
          /**
           * Field to match on.
           */
          field?: string;
          greaterThan?: any /* this makes soorria sad */;
          lessThan?: any /* this makes soorria sad */;
          greaterThanOrEqualTo?: any /* this makes soorria sad */;
          lessThanOrEqualTo?: any /* this makes soorria sad */;
        };
        wildcard?: {
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * single string or array of valid wildcard strings to match on, for example ['tele*']
           */
          value: string | Array<string>;
        };
        /**
         * Match documents where field specified by 'field' exists in the document. for nested fields, use syntax: a.b.c
         */
        fieldExists?: {
          /**
           * Field that must exist.
           */
          field?: string;
        };
        /**
         * Match documents where doc[field] % module == value
         */
        matchModulo?: {
          field?: string;
          modulo: number;
          value: number;
        };
        /**
         * Filter down to one document for each value of selected field.
         */
        dedupeByValue?: {
          /**
           * Field to filter on.
           */
          field: string;
        };
        /**
         * Match documents where document[a] <=/>=/</>/==/!=/stringEquals document[b]. Use stringEquals to compare strings.
         */
        selfreference?: {
          /**
           * First field in comparison.
           */
          a: string;
          /**
           * Second field in comparison.
           */
          b: string;
          /**
           * Operator used to compare a and b.
           */
          operation: ENUM_operation;
        };
        /**
         * Match documents where greaterThan < wordCount(document[field]) < lessThan.
         */
        wordCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum word count.
           */
          greaterThan?: number;
          /**
           * Maximum word count.
           */
          lessThan?: number;
        };
        /**
         * Match documents where greaterThan < characterCount(document[field]) < lessThan.
         */
        characterCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum character count.
           */
          greaterThan?: number;
          /**
           * Maximum character count.
           */
          lessThan?: number;
        };
        /**
         * Used to perform a logical OR of filters. each element of the OR list can itself be a list  to perform a nested AND. {or:[[A,B],C]} is equivalent to (A AND B) OR C
         */
        or?: Array<
          Array<SimpleSearchAndFlatFilterItem> | SimpleSearchAndFlatFilterItem
        >;
        /**
         * Used to perform NOT filter. Can be a single filter or a list of filters to perform a !(AND). {not:[A,B]} is equivalent to !(A AND B)
         */
        not?:
          | Array<SimpleSearchAndFlatFilterItem>
          | SimpleSearchAndFlatFilterItem;
        /**
         * Filter based on data within a _chunk_ field.
         */
        chunk?: {
          /**
           * The path of the chunk field to filter on. For example: description_sentences_chunk_
           */
          path: string;
          filters: Array<SimpleSearchAndFlatFilterItem>;
        };
      }
    | FlatFilterItem
  >;
  /**
   * Fields to include in the search results, empty array/list means all fields.
   */
  select_fields?: Array<string>;
  /**
   * Size of each page of results
   */
  page_size?: number;
  /**
   * Page of the results
   */
  page?: number;
  /**
   * Fields to sort by. For each field, sort by descending or ascending. If you are using descending by datetime, it will get the most recent ones. Can be provided in format ["sortfield","subsortfield"] or in format [{"sortfield":"desc"}, {"subsortfield":"asc"}]. If provided as a query parameter, use: sort=${JSON.stringify([{"sortfield":"desc"}])}
   */
  sort?: SortConfig;
  /**
   * Include vectors in the search results.
   */
  include_vector?: boolean;
  /**
   * Retrieve items after these sort values in the sort order.
   */
  after_id?: Array<any /* this makes soorria sad */>;
  query?: string;
  version?: string;
  /**
   * The version of the tool, can be 'active', 'draft' or a specific version_id
   */
  tool_version?: string;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
  /**
   * Can be used to control the job id.
   */
  job_id?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetPublicStudioInput = unknown;

export type GetPublicStudioOutput = {
  studio: {
    version?: string;
    project?: string;
    _id?: string;
    studio_id: string;
    /**
     * This tool is listed on the tool marketplace
     */
    in_marketplace?: boolean;
    insert_date_?: string;
    update_date_?: string;
    is_hidden?: boolean;
    tags?: {
      type?: "transformation";
      categories?: {
        [k: string]: true | undefined;
      };
      /**
       * The source of the integration. For example, 'Knowledge: Linear', which imports data from Linear, this would be 'linear'.
       */
      integration_source?: string;
      integrations?: {
        [k: string]: true | undefined;
      };
      use_cases?: {
        [k: string]: true | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    machine_user_id?: string;
    creator_user_id?: string;
    creator_first_name?: string;
    creator_last_name?: string;
    creator_display_picture?: string;
    /**
     * Anyone can run this tool
     */
    publicly_triggerable?: boolean;
    /**
     * Anyone can view or clone this tool
     */
    public?: boolean;
    metadata?: {
      source_studio_id?: string;
      source_region?: string;
      source_project?: string;
      clone_count?: number;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    share_styles?: {
      selected_format?: ENUM_selected_format;
      primary_color?: string;
      hide_guidance_tip?: boolean;
      guidance_tip_text?: string;
      cta_text?: string;
      cta_icon?: string;
      hide_logo?: boolean;
    };
    schedule?: {
      frequency?: ENUM_frequency;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    active_version_id?: string;
    draft_version_id?: string;
    title?: string;
    description?: string;
    prompt_description?: string;
    cover_image?: string;
    emoji?: string;
    transformations?: {
      steps: Array<{
        name: string;
        transformation: string;
        params: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        saved_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        output?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        /**
         * A jsonschema superset object to provide metadata for tool output fields.
         */
        output_schema?: {
          metadata?: {
            /**
             * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
             */
            field_order?: Array<string>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          properties?: {
            [k: string]:
              | {
                  metadata?: {
                    content_type?: "external_field";
                    /**
                     * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                     */
                    external_name?: string;
                    render_mode?: ENUM_render_mode;
                  };
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        default_output_values?: Array<{
          original_key: string;
          updated_key?: string;
          value: any /* this makes soorria sad */;
        }>;
        continue_on_error?: boolean;
        use_fallback_on_skip?: boolean;
        foreach?: string | Array<any /* this makes soorria sad */>;
        if?: string | boolean | null;
        display_name?: string;
        /**
         * If present, the tool step invent will be activated with the specified instructions in the tool builder.
         */
        invent_instructions?: string;
      }>;
      output?: {
        [k: string]: string | undefined;
      } | null;
    };
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    /**
     * A jsonschema superset object to provide metadata for tool output fields.
     */
    output_schema?: {
      metadata?: {
        /**
         * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
         */
        field_order?: Array<string>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      properties?: {
        [k: string]:
          | {
              metadata?: {
                content_type?: "external_field";
                /**
                 * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                 */
                external_name?: string;
                render_mode?: ENUM_render_mode;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Mapping from alias -> real variable path
     */
    state_mapping?: {
      [k: string]: string | undefined;
    };
    /**
     * Override the starting state of the studio
     */
    state?: {
      params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      steps?: {
        [k: string]:
          | {
              output?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              executionTime?: number;
              results?: Array<any /* this makes soorria sad */>;
              skipped?: boolean;
              skippedItems?: Array<any /* this makes soorria sad */>;
              status?: ENUM_status2;
              /**
               * Status of each item in the foreach, key should be the foreach index
               */
              foreach_statuses?: {
                status?: ENUM_status2;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    predicted_output?: Array<{
      title?: string;
      slug?: string;
      type?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
    metrics?: {
      views?: number;
      executions?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    share_id?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetPublicStudioQueryInput = {
  version?: string;
  /**
   * The version of the tool, can be 'active', 'draft' or a specific version_id
   */
  tool_version?: string;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
  /**
   * Can be used to control the job id.
   */
  job_id?: string;
  project: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetStudioInput = unknown;

export type GetStudioOutput = {
  studio: {
    version?: string;
    project?: string;
    _id?: string;
    studio_id: string;
    /**
     * This tool is listed on the tool marketplace
     */
    in_marketplace?: boolean;
    insert_date_?: string;
    update_date_?: string;
    is_hidden?: boolean;
    tags?: {
      type?: "transformation";
      categories?: {
        [k: string]: true | undefined;
      };
      /**
       * The source of the integration. For example, 'Knowledge: Linear', which imports data from Linear, this would be 'linear'.
       */
      integration_source?: string;
      integrations?: {
        [k: string]: true | undefined;
      };
      use_cases?: {
        [k: string]: true | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    machine_user_id?: string;
    creator_user_id?: string;
    creator_first_name?: string;
    creator_last_name?: string;
    creator_display_picture?: string;
    /**
     * Anyone can run this tool
     */
    publicly_triggerable?: boolean;
    /**
     * Anyone can view or clone this tool
     */
    public?: boolean;
    metadata?: {
      source_studio_id?: string;
      source_region?: string;
      source_project?: string;
      clone_count?: number;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    share_styles?: {
      selected_format?: ENUM_selected_format;
      primary_color?: string;
      hide_guidance_tip?: boolean;
      guidance_tip_text?: string;
      cta_text?: string;
      cta_icon?: string;
      hide_logo?: boolean;
    };
    schedule?: {
      frequency?: ENUM_frequency;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    active_version_id?: string;
    draft_version_id?: string;
    title?: string;
    description?: string;
    prompt_description?: string;
    cover_image?: string;
    emoji?: string;
    transformations?: {
      steps: Array<{
        name: string;
        transformation: string;
        params: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        saved_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        output?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        /**
         * A jsonschema superset object to provide metadata for tool output fields.
         */
        output_schema?: {
          metadata?: {
            /**
             * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
             */
            field_order?: Array<string>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          properties?: {
            [k: string]:
              | {
                  metadata?: {
                    content_type?: "external_field";
                    /**
                     * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                     */
                    external_name?: string;
                    render_mode?: ENUM_render_mode;
                  };
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        default_output_values?: Array<{
          original_key: string;
          updated_key?: string;
          value: any /* this makes soorria sad */;
        }>;
        continue_on_error?: boolean;
        use_fallback_on_skip?: boolean;
        foreach?: string | Array<any /* this makes soorria sad */>;
        if?: string | boolean | null;
        display_name?: string;
        /**
         * If present, the tool step invent will be activated with the specified instructions in the tool builder.
         */
        invent_instructions?: string;
      }>;
      output?: {
        [k: string]: string | undefined;
      } | null;
    };
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    /**
     * A jsonschema superset object to provide metadata for tool output fields.
     */
    output_schema?: {
      metadata?: {
        /**
         * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
         */
        field_order?: Array<string>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      properties?: {
        [k: string]:
          | {
              metadata?: {
                content_type?: "external_field";
                /**
                 * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                 */
                external_name?: string;
                render_mode?: ENUM_render_mode;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Mapping from alias -> real variable path
     */
    state_mapping?: {
      [k: string]: string | undefined;
    };
    /**
     * Override the starting state of the studio
     */
    state?: {
      params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      steps?: {
        [k: string]:
          | {
              output?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              executionTime?: number;
              results?: Array<any /* this makes soorria sad */>;
              skipped?: boolean;
              skippedItems?: Array<any /* this makes soorria sad */>;
              status?: ENUM_status2;
              /**
               * Status of each item in the foreach, key should be the foreach index
               */
              foreach_statuses?: {
                status?: ENUM_status2;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    predicted_output?: Array<{
      title?: string;
      slug?: string;
      type?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
    metrics?: {
      views?: number;
      executions?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    share_id?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetStudioQueryInput = {
  version?: string;
  /**
   * The version of the tool, can be 'active', 'draft' or a specific version_id
   */
  tool_version?: string;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
  /**
   * Can be used to control the job id.
   */
  job_id?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type BulkUpdateStudiosInput = {
  updates: Array<{
    version?: string;
    project?: string;
    _id?: string;
    studio_id: string;
    /**
     * This tool is listed on the tool marketplace
     */
    in_marketplace?: boolean;
    insert_date_?: string;
    update_date_?: string;
    is_hidden?: boolean;
    tags?: {
      type?: "transformation";
      categories?: {
        [k: string]: true | undefined;
      };
      /**
       * The source of the integration. For example, 'Knowledge: Linear', which imports data from Linear, this would be 'linear'.
       */
      integration_source?: string;
      integrations?: {
        [k: string]: true | undefined;
      };
      use_cases?: {
        [k: string]: true | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    machine_user_id?: string;
    creator_user_id?: string;
    creator_first_name?: string;
    creator_last_name?: string;
    creator_display_picture?: string;
    /**
     * Anyone can run this tool
     */
    publicly_triggerable?: boolean;
    /**
     * Anyone can view or clone this tool
     */
    public?: boolean;
    metadata?: {
      source_studio_id?: string;
      source_region?: string;
      source_project?: string;
      clone_count?: number;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    share_styles?: {
      selected_format?: ENUM_selected_format;
      primary_color?: string;
      hide_guidance_tip?: boolean;
      guidance_tip_text?: string;
      cta_text?: string;
      cta_icon?: string;
      hide_logo?: boolean;
    };
    schedule?: {
      frequency?: ENUM_frequency;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    active_version_id?: string;
    draft_version_id?: string;
    title?: string;
    description?: string;
    prompt_description?: string;
    cover_image?: string;
    emoji?: string;
    transformations?: {
      steps: Array<{
        name: string;
        transformation: string;
        params: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        saved_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        output?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        /**
         * A jsonschema superset object to provide metadata for tool output fields.
         */
        output_schema?: {
          metadata?: {
            /**
             * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
             */
            field_order?: Array<string>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          properties?: {
            [k: string]:
              | {
                  metadata?: {
                    content_type?: "external_field";
                    /**
                     * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                     */
                    external_name?: string;
                    render_mode?: ENUM_render_mode;
                  };
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        default_output_values?: Array<{
          original_key: string;
          updated_key?: string;
          value: any /* this makes soorria sad */;
        }>;
        continue_on_error?: boolean;
        use_fallback_on_skip?: boolean;
        foreach?: string | Array<any /* this makes soorria sad */>;
        if?: string | boolean | null;
        display_name?: string;
        /**
         * If present, the tool step invent will be activated with the specified instructions in the tool builder.
         */
        invent_instructions?: string;
      }>;
      output?: {
        [k: string]: string | undefined;
      } | null;
    };
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    /**
     * A jsonschema superset object to provide metadata for tool output fields.
     */
    output_schema?: {
      metadata?: {
        /**
         * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
         */
        field_order?: Array<string>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      properties?: {
        [k: string]:
          | {
              metadata?: {
                content_type?: "external_field";
                /**
                 * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                 */
                external_name?: string;
                render_mode?: ENUM_render_mode;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Mapping from alias -> real variable path
     */
    state_mapping?: {
      [k: string]: string | undefined;
    };
    /**
     * Override the starting state of the studio
     */
    state?: {
      params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      steps?: {
        [k: string]:
          | {
              output?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              executionTime?: number;
              results?: Array<any /* this makes soorria sad */>;
              skipped?: boolean;
              skippedItems?: Array<any /* this makes soorria sad */>;
              status?: ENUM_status2;
              /**
               * Status of each item in the foreach, key should be the foreach index
               */
              foreach_statuses?: {
                status?: ENUM_status2;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    predicted_output?: Array<{
      title?: string;
      slug?: string;
      type?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
  }>;
  /**
   * Whether the studio should be overwritten or merged with an existing studio if it exists
   */
  partial_update?: boolean;
  /**
   * If true, will keep the creator fields from the update documents, and not set them to the current user on insert
   */
  maintain_creator_fields_from_update?: boolean;
  version?: string;
  /**
   * The version of the tool, can be 'active', 'draft' or a specific version_id
   */
  tool_version?: string;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
  /**
   * Can be used to control the job id.
   */
  job_id?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type BulkUpdateStudiosOutput = {
  /**
   * Number of successfully processed documents.
   */
  inserted: number;
  /**
   * Information about documents that were not processed successfully.
   */
  failed_documents: Array<{
    /**
     * _id field of unprocessed document.
     */
    _id?: any /* this makes soorria sad */;
    error?: {
      /**
       * http status code of individual document insertion operation.
       */
      status?: number;
      /**
       * body response of individual document insertion operation.
       */
      body?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type BulkUpdateStudiosQueryInput = unknown;

export type BulkDeleteStudiosInput = {
  version?: string;
  /**
   * The version of the tool, can be 'active', 'draft' or a specific version_id
   */
  tool_version?: string;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
  /**
   * Can be used to control the job id.
   */
  job_id?: string;
  /**
   * IDs of studios to delete
   */
  ids: Array<string>;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type BulkDeleteStudiosOutput = unknown;

export type BulkDeleteStudiosQueryInput = unknown;

export type TriggerStudioInput = {
  version?: string;
  /**
   * The version of the tool, can be 'active', 'draft' or a specific version_id
   */
  tool_version?: string;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
  /**
   * Can be used to control the job id.
   */
  job_id?: string;
  params?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  executor?: {
    type: ENUM_type4;
    api_key_id?: string;
    workflow_id?: string;
    document_id?: string;
    sync_id?: string;
    job_id?: string;
    agent_id?: string;
    conversation_id?: string;
    email_message_id?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  studio_context?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  studio_override?: {
    version?: string;
    project?: string;
    _id?: string;
    studio_id: string;
    /**
     * This tool is listed on the tool marketplace
     */
    in_marketplace?: boolean;
    insert_date_?: string;
    update_date_?: string;
    is_hidden?: boolean;
    tags?: {
      type?: "transformation";
      categories?: {
        [k: string]: true | undefined;
      };
      /**
       * The source of the integration. For example, 'Knowledge: Linear', which imports data from Linear, this would be 'linear'.
       */
      integration_source?: string;
      integrations?: {
        [k: string]: true | undefined;
      };
      use_cases?: {
        [k: string]: true | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    machine_user_id?: string;
    creator_user_id?: string;
    creator_first_name?: string;
    creator_last_name?: string;
    creator_display_picture?: string;
    /**
     * Anyone can run this tool
     */
    publicly_triggerable?: boolean;
    /**
     * Anyone can view or clone this tool
     */
    public?: boolean;
    metadata?: {
      source_studio_id?: string;
      source_region?: string;
      source_project?: string;
      clone_count?: number;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    share_styles?: {
      selected_format?: ENUM_selected_format;
      primary_color?: string;
      hide_guidance_tip?: boolean;
      guidance_tip_text?: string;
      cta_text?: string;
      cta_icon?: string;
      hide_logo?: boolean;
    };
    schedule?: {
      frequency?: ENUM_frequency;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    active_version_id?: string;
    draft_version_id?: string;
    title?: string;
    description?: string;
    prompt_description?: string;
    cover_image?: string;
    emoji?: string;
    transformations?: {
      steps: Array<{
        name: string;
        transformation: string;
        params: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        saved_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        output?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        /**
         * A jsonschema superset object to provide metadata for tool output fields.
         */
        output_schema?: {
          metadata?: {
            /**
             * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
             */
            field_order?: Array<string>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          properties?: {
            [k: string]:
              | {
                  metadata?: {
                    content_type?: "external_field";
                    /**
                     * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                     */
                    external_name?: string;
                    render_mode?: ENUM_render_mode;
                  };
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        default_output_values?: Array<{
          original_key: string;
          updated_key?: string;
          value: any /* this makes soorria sad */;
        }>;
        continue_on_error?: boolean;
        use_fallback_on_skip?: boolean;
        foreach?: string | Array<any /* this makes soorria sad */>;
        if?: string | boolean | null;
        display_name?: string;
        /**
         * If present, the tool step invent will be activated with the specified instructions in the tool builder.
         */
        invent_instructions?: string;
      }>;
      output?: {
        [k: string]: string | undefined;
      } | null;
    };
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    /**
     * A jsonschema superset object to provide metadata for tool output fields.
     */
    output_schema?: {
      metadata?: {
        /**
         * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
         */
        field_order?: Array<string>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      properties?: {
        [k: string]:
          | {
              metadata?: {
                content_type?: "external_field";
                /**
                 * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                 */
                external_name?: string;
                render_mode?: ENUM_render_mode;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Mapping from alias -> real variable path
     */
    state_mapping?: {
      [k: string]: string | undefined;
    };
    /**
     * Override the starting state of the studio
     */
    state?: {
      params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      steps?: {
        [k: string]:
          | {
              output?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              executionTime?: number;
              results?: Array<any /* this makes soorria sad */>;
              skipped?: boolean;
              skippedItems?: Array<any /* this makes soorria sad */>;
              status?: ENUM_status2;
              /**
               * Status of each item in the foreach, key should be the foreach index
               */
              foreach_statuses?: {
                status?: ENUM_status2;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    predicted_output?: Array<{
      title?: string;
      slug?: string;
      type?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
  };
  orchestrator?:
    | {
        type: "run_chain";
      }
    | {
        type: "bulk_run";
        bulk_run?: {
          dataset_id: string;
          params?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          document_field_param_mapping?: {
            [k: string]: string | undefined;
          };
          chunk_and_vectorize_on_upload?: boolean;
          filters?: Array<FlatFilterItem>;
          /**
           * Fields to sort by. For each field, sort by descending or ascending. If you are using descending by datetime, it will get the most recent ones. Can be provided in format ["sortfield","subsortfield"] or in format [{"sortfield":"desc"}, {"subsortfield":"asc"}]. If provided as a query parameter, use: sort=${JSON.stringify([{"sortfield":"desc"}])}
           */
          sort?: SortConfig;
          update_frequency_ms?: number;
          /**
           * Can be used to apply an artifically low timeout for bulk run jobs
           */
          max_duration_ms?: number;
          /**
           * Passes all documents in a batch into a single tool run. Allows the bulk runner to be used for efficient batch processing.
           */
          one_run_per_batch?: boolean;
          /**
           * Controls how many rows run at once on the same instance. Running more rows increases chance of rate limits and out of memory issues, and makes runs go faster
           */
          max_rows_at_once?: number;
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
      }
    | {
        type: "agent";
        agent: {
          _id: string;
          agent_id: string;
          /**
           * If set, records where the agent was cloned from.
           */
          origin?: {
            root_agent_id: string;
            region?: ENUM_region;
            project?: string;
          };
          views?: number;
          public?: boolean;
          in_marketplace?: boolean;
          project: string;
          update_date_?: string;
          insert_date_?: any /* this makes soorria sad */;
          version?: string;
          embed_config?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          embeddable?: boolean;
          share_styles?: {
            selected_format?: ENUM_selected_format1;
            primary_color?: string;
            bubble_style?: ENUM_bubble_style;
            bubble_icon?: string;
            input_placeholder_text?: string;
            hide_file_uploads?: boolean;
            hide_conversation_list?: boolean;
            hide_tool_steps?: boolean;
            starting_message_prompts?: Array<string>;
            hide_logo?: boolean;
          };
          machine_user_id?: string;
          starting_messages?: Array<{
            message:
              | {
                  role: "user";
                  content: string;
                  importance_level?: ENUM_importance_level;
                }
              | {
                  role: "agent";
                  content: string;
                };
            /**
             * Any additional metadata to be stored with the message. This is not sent to the agent.
             */
            metadata?: {
              sync_item_id?: string;
              sync_id?: string;
              sync_type?: string;
              regenerate_metadata?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
          }>;
          runner?:
            | {
                type: "default";
              }
            | {
                type: "multiagent";
                multiagent?: {
                  max_rounds?: number;
                  /**
                   * Agents that the Admin agent will run.
                   */
                  child_agents?: Array<{
                    agent_id?: string;
                    system_prompt?: string;
                    name?: string;
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  }>;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                };
              };
          params?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          expiry_date_?: any /* this makes soorria sad */;
          /**
           * Can be used to force a given mas id for every run with this agent.
           */
          mas_id?: string;
          categories?: Array<string>;
          last_updated_by?: {
            user_name?: string;
            user_id?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          metadata?: {
            clone_count?: number;
            custom_task_views?: Array<{
              id: string;
              title: string;
              filters: Array<{
                type: ENUM_type2;
                id: string;
              }>;
            }>;
            last_run_date?: any /* this makes soorria sad */;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          active_version_id?: string;
          draft_version_id?: string;
          name?: string;
          description?: string;
          prompt_description?: string;
          /**
           * Used to provide instructions on how to use or set up the agent.
           */
          user_instructions?: string;
          /**
           * If set, the agents config will be completely replaced with the templates config.
           */
          template?: {
            agent_id: string;
            region?: ENUM_region1;
            project?: string;
          };
          emoji?: string;
          /**
           * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
           */
          max_job_duration?: ENUM_max_job_duration;
          title_prompt?: string;
          system_prompt?: string;
          /**
           * If true, suggested replies will appear for each agent message in the front-end.
           */
          suggest_replies?: boolean;
          /**
           * The prompt to inject into the LLM step in the tool used to generate suggested replies.
           */
          suggest_replies_prompt?: string;
          /**
           * If true, this agent can plan and schedule future actions
           */
          is_scheduled_triggers_enabled?: boolean;
          model?: string;
          /**
           * Maximum number of actions an agent can autonomously take before the user needs to confirm again.
           */
          autonomy_limit?: number;
          /**
           * Temperature of the selected model. Typically, higher temperature means more random output.
           */
          temperature?: number;
          knowledge?: Array<{
            knowledge_set: string;
          }>;
          actions?: Array<{
            chain_id?: string;
            agent_id?: string;
            /**
             * A jsonschema superset object that users parameters will be validated against upon execution.
             */
            params_schema?: ParamsSchema;
            agent?: {
              message_template?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            action_behaviour?: string;
            action_retry_config?: {
              max_retries?: number;
              force_retry?: boolean;
              after_retries_behaviour?: ENUM_after_retries_behaviour;
            };
            title?: string;
            name?: string;
            description?: string;
            emoji?: string;
            /**
             * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
             */
            agent_decide_prompt?: string;
            conditional_approval_rules?: {
              max_auto_approvals?: number;
              max_approvals_asked?: number;
            };
            /**
             * Useful for external systems to track which tools have been added programatically.
             */
            metadata?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Defaults to project agent is being ran from. Tools must be public to use tools in other projects.
             */
            project?: string;
            /**
             * Defaults to region agent is being ran from. Tools must be public to use tools in other regions.
             */
            region?: string;
            /**
             * DEPRECATED: Version of the tool or subagent to run. Defaults to 'latest'.
             */
            version?: string;
            /**
             * Version of the tool or subagent to run. Can be 'active', 'draft', or a specific version id.
             */
            tool_version?: string;
            /**
             * Default values the agent will use as inputs when running the tool.
             */
            default_values?: {
              /**
               * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
               */
              _subagent_params?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Auth account values to update in the chains. Will not be saved to the agent config.
             */
            auth_values?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            prompt_description?: string;
            /**
             * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
             */
            prompt_for_when_to_use?: string;
            wait_for_completion?: boolean;
            strict?: boolean;
          }>;
          action_behaviour?: string;
          action_retry_config?: {
            max_retries?: number;
            force_retry?: boolean;
            after_retries_behaviour?: ENUM_after_retries_behaviour;
          };
          /**
           * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
           */
          agent_decide_prompt?: string;
          conditional_approval_rules?: {
            max_auto_approvals?: number;
            max_approvals_asked?: number;
          };
          /**
           * Triggers are used to start / continue a conversation with an agent via an external service (e.g. email).
           */
          triggers?: Array<{
            type: string;
            enabled?: boolean;
            config?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            studios?: Array<{
              studio_id: string;
              label?: string;
            }>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }>;
          /**
           * A jsonschema superset object that users parameters will be validated against upon execution.
           */
          params_schema?: ParamsSchema;
          escalations?: {
            email?: {
              emails?: any /* this makes soorria sad */;
            };
            slack?: {
              channels?: Array<{
                oauth_account_id?: any /* this makes soorria sad */;
              }>;
            };
          };
          /**
           * If true, the agent's progress will be streamed in real-time-ish to the frontend.
           */
          use_streaming?: boolean;
          model_options?: {
            /**
             * The maximum length of the agent's response. Note that too low a value can completely break agent behaviour.
             */
            max_output_tokens?: number;
            parallel_tool_calls?: boolean;
            /**
             * Cost reduction technique due to models performing better with more context
             */
            switch_model_after_n_tokens?: {
              model: string | null;
              n_tokens: number | null;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Some model providers support 'strict':true to force function calling to be more accurate. This activates this when supported.
             */
            strict_mode?: boolean;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          /**
           * Options for controlling of the agent runtime layer.
           */
          runtime?: {
            code?: string;
            enabled?: boolean;
            /**
             * If a non empty string, will not use code runtime, and instead fire a webhook, expecting the webhook to manage all further work.
             */
            webhook?: string;
          };
          tags?: {
            [k: string]:
              | boolean
              | {
                  description?: string;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          custom_metadata?: {
            options?: Array<{
              title: string;
              description?: string;
              type: ENUM_type3;
              valid_options?: Array<{
                label: string;
                [k: string]: any /* this makes soorria sad */ | undefined;
              }>;
              is_rule_based?: boolean;
              rules?: Array<{
                conditions?: Array<FlatFilterItem>;
                action?:
                  | {
                      type: "increment";
                      value: number;
                    }
                  | {
                      type: "set";
                      value: number | string | boolean | Array<string>;
                    };
                [k: string]: any /* this makes soorria sad */ | undefined;
              }>;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>;
            system_prompt?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
        };
      };
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type TriggerStudioOutput = {
  output: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  status: ENUM_status3;
  errors: Array<{
    body?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  cost?: number;
  credits_used?: Array<{
    credits: number;
    name: string;
    num_units?: number;
    multiplier?: number | null;
    tool_id?: string;
    tool_name?: string;
    tool_run_id?: string;
  }>;
  executionTime: number;
};

export type TriggerStudioQueryInput = {
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type TriggerStudioLLMFriendlyInput = {
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type TriggerStudioLLMFriendlyOutput = {
  output?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  errors?: Array<{
    body?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type TriggerStudioLLMFriendlyQueryInput = unknown;

export type CancelStudioInput = unknown;

export type CancelStudioOutput = unknown;

export type CancelStudioQueryInput = unknown;

export type TriggerStudioAsyncInput = {
  version?: string;
  /**
   * The version of the tool, can be 'active', 'draft' or a specific version_id
   */
  tool_version?: string;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
  /**
   * Can be used to control the job id.
   */
  job_id?: string;
  params?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  executor?: {
    type: ENUM_type4;
    api_key_id?: string;
    workflow_id?: string;
    document_id?: string;
    sync_id?: string;
    job_id?: string;
    agent_id?: string;
    conversation_id?: string;
    email_message_id?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  studio_context?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  studio_override?: {
    version?: string;
    project?: string;
    _id?: string;
    studio_id: string;
    /**
     * This tool is listed on the tool marketplace
     */
    in_marketplace?: boolean;
    insert_date_?: string;
    update_date_?: string;
    is_hidden?: boolean;
    tags?: {
      type?: "transformation";
      categories?: {
        [k: string]: true | undefined;
      };
      /**
       * The source of the integration. For example, 'Knowledge: Linear', which imports data from Linear, this would be 'linear'.
       */
      integration_source?: string;
      integrations?: {
        [k: string]: true | undefined;
      };
      use_cases?: {
        [k: string]: true | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    machine_user_id?: string;
    creator_user_id?: string;
    creator_first_name?: string;
    creator_last_name?: string;
    creator_display_picture?: string;
    /**
     * Anyone can run this tool
     */
    publicly_triggerable?: boolean;
    /**
     * Anyone can view or clone this tool
     */
    public?: boolean;
    metadata?: {
      source_studio_id?: string;
      source_region?: string;
      source_project?: string;
      clone_count?: number;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    share_styles?: {
      selected_format?: ENUM_selected_format;
      primary_color?: string;
      hide_guidance_tip?: boolean;
      guidance_tip_text?: string;
      cta_text?: string;
      cta_icon?: string;
      hide_logo?: boolean;
    };
    schedule?: {
      frequency?: ENUM_frequency;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    active_version_id?: string;
    draft_version_id?: string;
    title?: string;
    description?: string;
    prompt_description?: string;
    cover_image?: string;
    emoji?: string;
    transformations?: {
      steps: Array<{
        name: string;
        transformation: string;
        params: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        saved_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        output?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        /**
         * A jsonschema superset object to provide metadata for tool output fields.
         */
        output_schema?: {
          metadata?: {
            /**
             * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
             */
            field_order?: Array<string>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          properties?: {
            [k: string]:
              | {
                  metadata?: {
                    content_type?: "external_field";
                    /**
                     * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                     */
                    external_name?: string;
                    render_mode?: ENUM_render_mode;
                  };
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        default_output_values?: Array<{
          original_key: string;
          updated_key?: string;
          value: any /* this makes soorria sad */;
        }>;
        continue_on_error?: boolean;
        use_fallback_on_skip?: boolean;
        foreach?: string | Array<any /* this makes soorria sad */>;
        if?: string | boolean | null;
        display_name?: string;
        /**
         * If present, the tool step invent will be activated with the specified instructions in the tool builder.
         */
        invent_instructions?: string;
      }>;
      output?: {
        [k: string]: string | undefined;
      } | null;
    };
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    /**
     * A jsonschema superset object to provide metadata for tool output fields.
     */
    output_schema?: {
      metadata?: {
        /**
         * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
         */
        field_order?: Array<string>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      properties?: {
        [k: string]:
          | {
              metadata?: {
                content_type?: "external_field";
                /**
                 * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                 */
                external_name?: string;
                render_mode?: ENUM_render_mode;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Mapping from alias -> real variable path
     */
    state_mapping?: {
      [k: string]: string | undefined;
    };
    /**
     * Override the starting state of the studio
     */
    state?: {
      params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      steps?: {
        [k: string]:
          | {
              output?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              executionTime?: number;
              results?: Array<any /* this makes soorria sad */>;
              skipped?: boolean;
              skippedItems?: Array<any /* this makes soorria sad */>;
              status?: ENUM_status2;
              /**
               * Status of each item in the foreach, key should be the foreach index
               */
              foreach_statuses?: {
                status?: ENUM_status2;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    predicted_output?: Array<{
      title?: string;
      slug?: string;
      type?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
  };
  orchestrator?:
    | {
        type: "run_chain";
      }
    | {
        type: "bulk_run";
        bulk_run?: {
          dataset_id: string;
          params?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          document_field_param_mapping?: {
            [k: string]: string | undefined;
          };
          chunk_and_vectorize_on_upload?: boolean;
          filters?: Array<FlatFilterItem>;
          /**
           * Fields to sort by. For each field, sort by descending or ascending. If you are using descending by datetime, it will get the most recent ones. Can be provided in format ["sortfield","subsortfield"] or in format [{"sortfield":"desc"}, {"subsortfield":"asc"}]. If provided as a query parameter, use: sort=${JSON.stringify([{"sortfield":"desc"}])}
           */
          sort?: SortConfig;
          update_frequency_ms?: number;
          /**
           * Can be used to apply an artifically low timeout for bulk run jobs
           */
          max_duration_ms?: number;
          /**
           * Passes all documents in a batch into a single tool run. Allows the bulk runner to be used for efficient batch processing.
           */
          one_run_per_batch?: boolean;
          /**
           * Controls how many rows run at once on the same instance. Running more rows increases chance of rate limits and out of memory issues, and makes runs go faster
           */
          max_rows_at_once?: number;
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
      }
    | {
        type: "agent";
        agent: {
          _id: string;
          agent_id: string;
          /**
           * If set, records where the agent was cloned from.
           */
          origin?: {
            root_agent_id: string;
            region?: ENUM_region;
            project?: string;
          };
          views?: number;
          public?: boolean;
          in_marketplace?: boolean;
          project: string;
          update_date_?: string;
          insert_date_?: any /* this makes soorria sad */;
          version?: string;
          embed_config?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          embeddable?: boolean;
          share_styles?: {
            selected_format?: ENUM_selected_format1;
            primary_color?: string;
            bubble_style?: ENUM_bubble_style;
            bubble_icon?: string;
            input_placeholder_text?: string;
            hide_file_uploads?: boolean;
            hide_conversation_list?: boolean;
            hide_tool_steps?: boolean;
            starting_message_prompts?: Array<string>;
            hide_logo?: boolean;
          };
          machine_user_id?: string;
          starting_messages?: Array<{
            message:
              | {
                  role: "user";
                  content: string;
                  importance_level?: ENUM_importance_level;
                }
              | {
                  role: "agent";
                  content: string;
                };
            /**
             * Any additional metadata to be stored with the message. This is not sent to the agent.
             */
            metadata?: {
              sync_item_id?: string;
              sync_id?: string;
              sync_type?: string;
              regenerate_metadata?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
          }>;
          runner?:
            | {
                type: "default";
              }
            | {
                type: "multiagent";
                multiagent?: {
                  max_rounds?: number;
                  /**
                   * Agents that the Admin agent will run.
                   */
                  child_agents?: Array<{
                    agent_id?: string;
                    system_prompt?: string;
                    name?: string;
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  }>;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                };
              };
          params?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          expiry_date_?: any /* this makes soorria sad */;
          /**
           * Can be used to force a given mas id for every run with this agent.
           */
          mas_id?: string;
          categories?: Array<string>;
          last_updated_by?: {
            user_name?: string;
            user_id?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          metadata?: {
            clone_count?: number;
            custom_task_views?: Array<{
              id: string;
              title: string;
              filters: Array<{
                type: ENUM_type2;
                id: string;
              }>;
            }>;
            last_run_date?: any /* this makes soorria sad */;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          active_version_id?: string;
          draft_version_id?: string;
          name?: string;
          description?: string;
          prompt_description?: string;
          /**
           * Used to provide instructions on how to use or set up the agent.
           */
          user_instructions?: string;
          /**
           * If set, the agents config will be completely replaced with the templates config.
           */
          template?: {
            agent_id: string;
            region?: ENUM_region1;
            project?: string;
          };
          emoji?: string;
          /**
           * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
           */
          max_job_duration?: ENUM_max_job_duration;
          title_prompt?: string;
          system_prompt?: string;
          /**
           * If true, suggested replies will appear for each agent message in the front-end.
           */
          suggest_replies?: boolean;
          /**
           * The prompt to inject into the LLM step in the tool used to generate suggested replies.
           */
          suggest_replies_prompt?: string;
          /**
           * If true, this agent can plan and schedule future actions
           */
          is_scheduled_triggers_enabled?: boolean;
          model?: string;
          /**
           * Maximum number of actions an agent can autonomously take before the user needs to confirm again.
           */
          autonomy_limit?: number;
          /**
           * Temperature of the selected model. Typically, higher temperature means more random output.
           */
          temperature?: number;
          knowledge?: Array<{
            knowledge_set: string;
          }>;
          actions?: Array<{
            chain_id?: string;
            agent_id?: string;
            /**
             * A jsonschema superset object that users parameters will be validated against upon execution.
             */
            params_schema?: ParamsSchema;
            agent?: {
              message_template?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            action_behaviour?: string;
            action_retry_config?: {
              max_retries?: number;
              force_retry?: boolean;
              after_retries_behaviour?: ENUM_after_retries_behaviour;
            };
            title?: string;
            name?: string;
            description?: string;
            emoji?: string;
            /**
             * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
             */
            agent_decide_prompt?: string;
            conditional_approval_rules?: {
              max_auto_approvals?: number;
              max_approvals_asked?: number;
            };
            /**
             * Useful for external systems to track which tools have been added programatically.
             */
            metadata?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Defaults to project agent is being ran from. Tools must be public to use tools in other projects.
             */
            project?: string;
            /**
             * Defaults to region agent is being ran from. Tools must be public to use tools in other regions.
             */
            region?: string;
            /**
             * DEPRECATED: Version of the tool or subagent to run. Defaults to 'latest'.
             */
            version?: string;
            /**
             * Version of the tool or subagent to run. Can be 'active', 'draft', or a specific version id.
             */
            tool_version?: string;
            /**
             * Default values the agent will use as inputs when running the tool.
             */
            default_values?: {
              /**
               * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
               */
              _subagent_params?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Auth account values to update in the chains. Will not be saved to the agent config.
             */
            auth_values?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            prompt_description?: string;
            /**
             * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
             */
            prompt_for_when_to_use?: string;
            wait_for_completion?: boolean;
            strict?: boolean;
          }>;
          action_behaviour?: string;
          action_retry_config?: {
            max_retries?: number;
            force_retry?: boolean;
            after_retries_behaviour?: ENUM_after_retries_behaviour;
          };
          /**
           * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
           */
          agent_decide_prompt?: string;
          conditional_approval_rules?: {
            max_auto_approvals?: number;
            max_approvals_asked?: number;
          };
          /**
           * Triggers are used to start / continue a conversation with an agent via an external service (e.g. email).
           */
          triggers?: Array<{
            type: string;
            enabled?: boolean;
            config?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            studios?: Array<{
              studio_id: string;
              label?: string;
            }>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }>;
          /**
           * A jsonschema superset object that users parameters will be validated against upon execution.
           */
          params_schema?: ParamsSchema;
          escalations?: {
            email?: {
              emails?: any /* this makes soorria sad */;
            };
            slack?: {
              channels?: Array<{
                oauth_account_id?: any /* this makes soorria sad */;
              }>;
            };
          };
          /**
           * If true, the agent's progress will be streamed in real-time-ish to the frontend.
           */
          use_streaming?: boolean;
          model_options?: {
            /**
             * The maximum length of the agent's response. Note that too low a value can completely break agent behaviour.
             */
            max_output_tokens?: number;
            parallel_tool_calls?: boolean;
            /**
             * Cost reduction technique due to models performing better with more context
             */
            switch_model_after_n_tokens?: {
              model: string | null;
              n_tokens: number | null;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Some model providers support 'strict':true to force function calling to be more accurate. This activates this when supported.
             */
            strict_mode?: boolean;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          /**
           * Options for controlling of the agent runtime layer.
           */
          runtime?: {
            code?: string;
            enabled?: boolean;
            /**
             * If a non empty string, will not use code runtime, and instead fire a webhook, expecting the webhook to manage all further work.
             */
            webhook?: string;
          };
          tags?: {
            [k: string]:
              | boolean
              | {
                  description?: string;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          custom_metadata?: {
            options?: Array<{
              title: string;
              description?: string;
              type: ENUM_type3;
              valid_options?: Array<{
                label: string;
                [k: string]: any /* this makes soorria sad */ | undefined;
              }>;
              is_rule_based?: boolean;
              rules?: Array<{
                conditions?: Array<FlatFilterItem>;
                action?:
                  | {
                      type: "increment";
                      value: number;
                    }
                  | {
                      type: "set";
                      value: number | string | boolean | Array<string>;
                    };
                [k: string]: any /* this makes soorria sad */ | undefined;
              }>;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>;
            system_prompt?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
        };
      };
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type TriggerStudioAsyncOutput = {
  job_id: string;
  project: string;
  studio_id: string;
};

export type TriggerStudioAsyncQueryInput = unknown;

export type StudioAsyncPollInput = unknown;

export type StudioAsyncPollOutput = {
  type: "complete" | "failed" | "inprogress" | "timeout";
  updates: Array<{
    type?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  last_message_id: number;
};

export type StudioAsyncPollQueryInput = {
  after_message_id?: number;
  filters?: Array<FlatFilterItem>;
  /**
   * Fields to sort by. For each field, sort by descending or ascending. If you are using descending by datetime, it will get the most recent ones. Can be provided in format ["sortfield","subsortfield"] or in format [{"sortfield":"desc"}, {"subsortfield":"asc"}]. If provided as a query parameter, use: sort=${JSON.stringify([{"sortfield":"desc"}])}
   */
  sort?: SortConfig;
  page_size?: number;
  ending_update_only?: boolean;
  project?: string;
};

export type TriggerStudioLimitedInput = {
  /**
   * This can be provided to execute a studio in a project different to the one specified in the auth header.
   */
  project: string;
  params: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  version?: string;
  /**
   * The version of the tool, can be 'active', 'draft' or a specific version_id
   */
  tool_version?: string;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
  /**
   * Can be used to control the job id.
   */
  job_id?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type TriggerStudioLimitedOutput = {
  output: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  status: ENUM_status3;
  errors: Array<{
    body?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  cost?: number;
  credits_used?: Array<{
    credits: number;
    name: string;
    num_units?: number;
    multiplier?: number | null;
    tool_id?: string;
    tool_name?: string;
    tool_run_id?: string;
  }>;
  executionTime: number;
};

export type TriggerStudioLimitedQueryInput = unknown;

export type TriggerStudioLimitedAsyncInput = {
  /**
   * This can be provided to execute a studio in a project different to the one specified in the auth header.
   */
  project: string;
  params: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  version?: string;
  /**
   * The version of the tool, can be 'active', 'draft' or a specific version_id
   */
  tool_version?: string;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
  /**
   * Can be used to control the job id.
   */
  job_id?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type TriggerStudioLimitedAsyncOutput = {
  job_id: string;
  project: string;
  studio_id: string;
};

export type TriggerStudioLimitedAsyncQueryInput = unknown;

export type TriggerStudioFromWebhookInput = {
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type TriggerStudioFromWebhookOutput = {
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type TriggerStudioFromWebhookQueryInput = {
  /**
   * This can be provided to execute a studio in a project different to the one specified in the auth header.
   */
  project: string;
  version?: string;
  /**
   * The version of the tool, can be 'active', 'draft' or a specific version_id
   */
  tool_version?: string;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
  /**
   * Can be used to control the job id.
   */
  job_id?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type ListStudioTransformationsInput = unknown;

export type ListStudioTransformationsOutput = {
  results: Array<{
    transformation_id: string;
    default_variable?: string;
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    input_schema: ParamsSchema;
    output_schema: {
      type: "object";
      properties: {
        [k: string]:
          | {
              metadata?: {
                default?: boolean;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    agent_info?: {
      primary_field: string;
      how_to_use: string;
    };
    permissions?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    requirements?: Array<
      | {
          type: "project_key";
          key: string;
        }
      | {
          type: "oauth_permissions";
          key: string;
          step_name: string;
          provider: string;
          types: Array<string>;
        }
      | {
          type: "relevance_permissions";
          permissions?: {
            items: {
              [k: string]:
                | {
                    resources?: {
                      datasets?: {
                        [k: string]: boolean | undefined;
                      };
                      deployables?: {
                        [k: string]: boolean | undefined;
                      };
                      users?: {
                        [k: string]: boolean | undefined;
                      };
                      agents?: {
                        [k: string]: boolean | undefined;
                      };
                      knowledge_sets?: {
                        [k: string]: boolean | undefined;
                      };
                      chains?: {
                        [k: string]: boolean | undefined;
                      };
                      syncs?: {
                        [k: string]: boolean | undefined;
                      };
                      [k: string]: any /* this makes soorria sad */ | undefined;
                    };
                    actions?: {
                      [k: string]: boolean | undefined;
                    };
                  }
                | undefined;
            };
          };
        }
    >;
    name: string;
    description: string;
    documentation_url?: string;
    execution_type: "inline";
    studio_api_path?: string;
    /**
     * Controls ranking of transformations in list.
     */
    rank_score?: number;
    tags?: {
      categories?: {
        _core_?: boolean;
        "AI Tools"?: boolean;
        Data?: boolean;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      integrations?: {
        [k: string]: true | undefined;
      };
      use_cases?: {
        [k: string]: true | undefined;
      };
    };
    hidden?: boolean;
    relevance_only?: boolean;
    minimum_plan?: ENUM_0_ENUM;
    threading_rules?: Array<ThreadingRule>;
    examples?: Array<{
      input: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      output: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    }>;
    /**
     * The key to use when fetching logo for the transformation. Docs for adding: https://www.notion.so/relevance/Adding-a-logo-for-a-transformation-d230722fec934baf8cf146b8edc50da1
     */
    logo_key?: string;
    /**
     * The param to use when fetching logo for the transformation
     */
    param_for_logo?: string;
    /**
     * The rules for how the credit pricing of the transformation should be calculated.
     */
    pricing_rules?: Array<{
      credits?: number;
      multiplier?: number;
      unit_field?: string;
      field?: string;
      condition_value?: any /* this makes soorria sad */;
      filter_type?: "and" | "exact_match" | "key_exists";
      condition?: "!=";
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    authorization_config?:
      | {
          _oneof_type_: "api_key";
          api_key_provider: string;
        }
      | {
          _oneof_type_: "oauth";
          oauth_provider: string;
          oauth_permission_types?: Array<string>;
        }
      | {
          _oneof_type_: "custom_auth";
        };
    base_url_config?:
      | {
          _oneof_type_: "single_url";
          url: string;
        }
      | {
          _oneof_type_: "multiple_urls";
          urls: Array<string>;
        }
      | {
          _oneof_type_: "custom_url";
        };
    /**
     * Whether this transformation is in beta or not
     */
    is_beta?: boolean;
  }>;
};

export type ListStudioTransformationsQueryInput = {
  show_all_api_studios?: boolean;
  show_hidden?: boolean;
  page_size?: number;
  page?: number;
  integration?: string;
  use_case?: string;
  category?: string;
  query?: string;
  transformation_id?: string;
};

export type ListToolStepsInput = unknown;

export type ListToolStepsOutput = {
  results: Array<ListToolStepsResultItem>;
};

export type ListToolStepsQueryInput = {
  show_all_api_studios?: boolean;
  show_hidden?: boolean;
  query?: string;
  category?: string;
  page_size?: number;
  page?: number;
};

export type GetStudioByShareIdInput = unknown;

export type GetStudioByShareIdOutput = {
  studio: {
    version?: string;
    project?: string;
    _id?: string;
    studio_id: string;
    /**
     * This tool is listed on the tool marketplace
     */
    in_marketplace?: boolean;
    insert_date_?: string;
    update_date_?: string;
    is_hidden?: boolean;
    tags?: {
      type?: "transformation";
      categories?: {
        [k: string]: true | undefined;
      };
      /**
       * The source of the integration. For example, 'Knowledge: Linear', which imports data from Linear, this would be 'linear'.
       */
      integration_source?: string;
      integrations?: {
        [k: string]: true | undefined;
      };
      use_cases?: {
        [k: string]: true | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    machine_user_id?: string;
    creator_user_id?: string;
    creator_first_name?: string;
    creator_last_name?: string;
    creator_display_picture?: string;
    /**
     * Anyone can run this tool
     */
    publicly_triggerable?: boolean;
    /**
     * Anyone can view or clone this tool
     */
    public?: boolean;
    metadata?: {
      source_studio_id?: string;
      source_region?: string;
      source_project?: string;
      clone_count?: number;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    share_styles?: {
      selected_format?: ENUM_selected_format;
      primary_color?: string;
      hide_guidance_tip?: boolean;
      guidance_tip_text?: string;
      cta_text?: string;
      cta_icon?: string;
      hide_logo?: boolean;
    };
    schedule?: {
      frequency?: ENUM_frequency;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    active_version_id?: string;
    draft_version_id?: string;
    title?: string;
    description?: string;
    prompt_description?: string;
    cover_image?: string;
    emoji?: string;
    transformations?: {
      steps: Array<{
        name: string;
        transformation: string;
        params: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        saved_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        output?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        /**
         * A jsonschema superset object to provide metadata for tool output fields.
         */
        output_schema?: {
          metadata?: {
            /**
             * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
             */
            field_order?: Array<string>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          properties?: {
            [k: string]:
              | {
                  metadata?: {
                    content_type?: "external_field";
                    /**
                     * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                     */
                    external_name?: string;
                    render_mode?: ENUM_render_mode;
                  };
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        default_output_values?: Array<{
          original_key: string;
          updated_key?: string;
          value: any /* this makes soorria sad */;
        }>;
        continue_on_error?: boolean;
        use_fallback_on_skip?: boolean;
        foreach?: string | Array<any /* this makes soorria sad */>;
        if?: string | boolean | null;
        display_name?: string;
        /**
         * If present, the tool step invent will be activated with the specified instructions in the tool builder.
         */
        invent_instructions?: string;
      }>;
      output?: {
        [k: string]: string | undefined;
      } | null;
    };
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    /**
     * A jsonschema superset object to provide metadata for tool output fields.
     */
    output_schema?: {
      metadata?: {
        /**
         * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
         */
        field_order?: Array<string>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      properties?: {
        [k: string]:
          | {
              metadata?: {
                content_type?: "external_field";
                /**
                 * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                 */
                external_name?: string;
                render_mode?: ENUM_render_mode;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Mapping from alias -> real variable path
     */
    state_mapping?: {
      [k: string]: string | undefined;
    };
    /**
     * Override the starting state of the studio
     */
    state?: {
      params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      steps?: {
        [k: string]:
          | {
              output?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              executionTime?: number;
              results?: Array<any /* this makes soorria sad */>;
              skipped?: boolean;
              skippedItems?: Array<any /* this makes soorria sad */>;
              status?: ENUM_status2;
              /**
               * Status of each item in the foreach, key should be the foreach index
               */
              foreach_statuses?: {
                status?: ENUM_status2;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    predicted_output?: Array<{
      title?: string;
      slug?: string;
      type?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
    metrics?: {
      views?: number;
      executions?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    share_id?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetStudioByShareIdQueryInput = {
  version?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetStudioShareLinkInput = {
  share_id?: string;
  version?: string;
  /**
   * The version of the tool, can be 'active', 'draft' or a specific version_id
   */
  tool_version?: string;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
  /**
   * Can be used to control the job id.
   */
  job_id?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetStudioShareLinkOutput = {
  share_link: string;
  share_id: string;
  region: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetStudioShareLinkQueryInput = unknown;

export type DeleteStudioShareLinkInput = {
  share_id: string;
  version?: string;
  /**
   * The version of the tool, can be 'active', 'draft' or a specific version_id
   */
  tool_version?: string;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
  /**
   * Can be used to control the job id.
   */
  job_id?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type DeleteStudioShareLinkOutput = unknown;

export type DeleteStudioShareLinkQueryInput = unknown;

export type GenerateStudioRequirementsInput =
  | {
      studio_override: {
        version?: string;
        project?: string;
        _id?: string;
        studio_id: string;
        /**
         * This tool is listed on the tool marketplace
         */
        in_marketplace?: boolean;
        insert_date_?: string;
        update_date_?: string;
        is_hidden?: boolean;
        tags?: {
          type?: "transformation";
          categories?: {
            [k: string]: true | undefined;
          };
          /**
           * The source of the integration. For example, 'Knowledge: Linear', which imports data from Linear, this would be 'linear'.
           */
          integration_source?: string;
          integrations?: {
            [k: string]: true | undefined;
          };
          use_cases?: {
            [k: string]: true | undefined;
          };
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        machine_user_id?: string;
        creator_user_id?: string;
        creator_first_name?: string;
        creator_last_name?: string;
        creator_display_picture?: string;
        /**
         * Anyone can run this tool
         */
        publicly_triggerable?: boolean;
        /**
         * Anyone can view or clone this tool
         */
        public?: boolean;
        metadata?: {
          source_studio_id?: string;
          source_region?: string;
          source_project?: string;
          clone_count?: number;
          last_run_date?: any /* this makes soorria sad */;
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        share_styles?: {
          selected_format?: ENUM_selected_format;
          primary_color?: string;
          hide_guidance_tip?: boolean;
          guidance_tip_text?: string;
          cta_text?: string;
          cta_icon?: string;
          hide_logo?: boolean;
        };
        schedule?: {
          frequency?: ENUM_frequency;
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        active_version_id?: string;
        draft_version_id?: string;
        title?: string;
        description?: string;
        prompt_description?: string;
        cover_image?: string;
        emoji?: string;
        transformations?: {
          steps: Array<{
            name: string;
            transformation: string;
            params: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            saved_params?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            output?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * A jsonschema superset object to provide metadata for tool output fields.
             */
            output_schema?: {
              metadata?: {
                /**
                 * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
                 */
                field_order?: Array<string>;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              properties?: {
                [k: string]:
                  | {
                      metadata?: {
                        content_type?: "external_field";
                        /**
                         * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                         */
                        external_name?: string;
                        render_mode?: ENUM_render_mode;
                      };
                      [k: string]: any /* this makes soorria sad */ | undefined;
                    }
                  | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            default_output_values?: Array<{
              original_key: string;
              updated_key?: string;
              value: any /* this makes soorria sad */;
            }>;
            continue_on_error?: boolean;
            use_fallback_on_skip?: boolean;
            foreach?: string | Array<any /* this makes soorria sad */>;
            if?: string | boolean | null;
            display_name?: string;
            /**
             * If present, the tool step invent will be activated with the specified instructions in the tool builder.
             */
            invent_instructions?: string;
          }>;
          output?: {
            [k: string]: string | undefined;
          } | null;
        };
        /**
         * A jsonschema superset object that users parameters will be validated against upon execution.
         */
        params_schema?: ParamsSchema;
        /**
         * A jsonschema superset object to provide metadata for tool output fields.
         */
        output_schema?: {
          metadata?: {
            /**
             * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
             */
            field_order?: Array<string>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          properties?: {
            [k: string]:
              | {
                  metadata?: {
                    content_type?: "external_field";
                    /**
                     * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                     */
                    external_name?: string;
                    render_mode?: ENUM_render_mode;
                  };
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        /**
         * Mapping from alias -> real variable path
         */
        state_mapping?: {
          [k: string]: string | undefined;
        };
        /**
         * Override the starting state of the studio
         */
        state?: {
          params?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          steps?: {
            [k: string]:
              | {
                  output?: {
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  };
                  executionTime?: number;
                  results?: Array<any /* this makes soorria sad */>;
                  skipped?: boolean;
                  skippedItems?: Array<any /* this makes soorria sad */>;
                  status?: ENUM_status2;
                  /**
                   * Status of each item in the foreach, key should be the foreach index
                   */
                  foreach_statuses?: {
                    status?: ENUM_status2;
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  };
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        predicted_output?: Array<{
          title?: string;
          slug?: string;
          type?: string;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        /**
         * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
         */
        max_job_duration?: ENUM_max_job_duration;
      };
    }
  | {
      studio_id: string;
      project?: string;
      region?: string;
    };

export type GenerateStudioRequirementsOutput = {
  results: Array<
    | {
        satisfied: boolean;
        type: "project_key";
        key: string;
      }
    | {
        satisfied: boolean;
        type: "oauth_permissions";
        key: string;
        step_name: string;
        oauth_url?: string;
        provider: string;
        types: Array<string>;
      }
    | {
        satisfied: boolean;
        type: "relevance_permissions";
        permissions?: {
          items: {
            [k: string]:
              | {
                  resources?: {
                    datasets?: {
                      [k: string]: boolean | undefined;
                    };
                    deployables?: {
                      [k: string]: boolean | undefined;
                    };
                    users?: {
                      [k: string]: boolean | undefined;
                    };
                    agents?: {
                      [k: string]: boolean | undefined;
                    };
                    knowledge_sets?: {
                      [k: string]: boolean | undefined;
                    };
                    chains?: {
                      [k: string]: boolean | undefined;
                    };
                    syncs?: {
                      [k: string]: boolean | undefined;
                    };
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  };
                  actions?: {
                    [k: string]: boolean | undefined;
                  };
                }
              | undefined;
          };
        };
      }
  >;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GenerateStudioRequirementsQueryInput = unknown;

export type CloneStudioInput = {
  studio_id: string;
  project?: string;
  region?: string;
  /**
   * If true, the creator's details will be maintained from the original tool.
   */
  maintain_creator_details?: boolean;
};

export type CloneStudioOutput = {
  studio_id: string;
};

export type CloneStudioQueryInput = unknown;

export type SearchTemplateStudiosInput = unknown;

export type SearchTemplateStudiosOutput = {
  results: Array<{
    version?: string;
    project?: string;
    _id?: string;
    studio_id: string;
    /**
     * This tool is listed on the tool marketplace
     */
    in_marketplace?: boolean;
    insert_date_?: string;
    update_date_?: string;
    is_hidden?: boolean;
    tags?: {
      type?: "transformation";
      categories?: {
        [k: string]: true | undefined;
      };
      /**
       * The source of the integration. For example, 'Knowledge: Linear', which imports data from Linear, this would be 'linear'.
       */
      integration_source?: string;
      integrations?: {
        [k: string]: true | undefined;
      };
      use_cases?: {
        [k: string]: true | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    machine_user_id?: string;
    creator_user_id?: string;
    creator_first_name?: string;
    creator_last_name?: string;
    creator_display_picture?: string;
    /**
     * Anyone can run this tool
     */
    publicly_triggerable?: boolean;
    /**
     * Anyone can view or clone this tool
     */
    public?: boolean;
    metadata?: {
      source_studio_id?: string;
      source_region?: string;
      source_project?: string;
      clone_count?: number;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    share_styles?: {
      selected_format?: ENUM_selected_format;
      primary_color?: string;
      hide_guidance_tip?: boolean;
      guidance_tip_text?: string;
      cta_text?: string;
      cta_icon?: string;
      hide_logo?: boolean;
    };
    schedule?: {
      frequency?: ENUM_frequency;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    active_version_id?: string;
    draft_version_id?: string;
    title?: string;
    description?: string;
    prompt_description?: string;
    cover_image?: string;
    emoji?: string;
    transformations?: {
      steps: Array<{
        name: string;
        transformation: string;
        params: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        saved_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        output?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        /**
         * A jsonschema superset object to provide metadata for tool output fields.
         */
        output_schema?: {
          metadata?: {
            /**
             * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
             */
            field_order?: Array<string>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          properties?: {
            [k: string]:
              | {
                  metadata?: {
                    content_type?: "external_field";
                    /**
                     * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                     */
                    external_name?: string;
                    render_mode?: ENUM_render_mode;
                  };
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        default_output_values?: Array<{
          original_key: string;
          updated_key?: string;
          value: any /* this makes soorria sad */;
        }>;
        continue_on_error?: boolean;
        use_fallback_on_skip?: boolean;
        foreach?: string | Array<any /* this makes soorria sad */>;
        if?: string | boolean | null;
        display_name?: string;
        /**
         * If present, the tool step invent will be activated with the specified instructions in the tool builder.
         */
        invent_instructions?: string;
      }>;
      output?: {
        [k: string]: string | undefined;
      } | null;
    };
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    /**
     * A jsonschema superset object to provide metadata for tool output fields.
     */
    output_schema?: {
      metadata?: {
        /**
         * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
         */
        field_order?: Array<string>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      properties?: {
        [k: string]:
          | {
              metadata?: {
                content_type?: "external_field";
                /**
                 * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                 */
                external_name?: string;
                render_mode?: ENUM_render_mode;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Mapping from alias -> real variable path
     */
    state_mapping?: {
      [k: string]: string | undefined;
    };
    /**
     * Override the starting state of the studio
     */
    state?: {
      params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      steps?: {
        [k: string]:
          | {
              output?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              executionTime?: number;
              results?: Array<any /* this makes soorria sad */>;
              skipped?: boolean;
              skippedItems?: Array<any /* this makes soorria sad */>;
              status?: ENUM_status2;
              /**
               * Status of each item in the foreach, key should be the foreach index
               */
              foreach_statuses?: {
                status?: ENUM_status2;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    predicted_output?: Array<{
      title?: string;
      slug?: string;
      type?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
    score?: number;
  }>;
};

export type SearchTemplateStudiosQueryInput = {
  /**
   * Query to transform to a vector and then search with.
   */
  vector_search_query: string;
  page?: number;
  pageSize?: number;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type TriggerInventInput = {
  messages: Array<{
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  /**
   * Just a key value store. Flexible for any agent parameter that needs to be passed in
   */
  context: {
    tool_config?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    step_id?: string;
    model?: string;
    error_message?: string;
    previous_tool_step_outputs?: Array<{
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  inventor_id: "tool_step";
  mode?: {
    type: string;
    max_iter: number;
  };
  tools?: Array<{
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type TriggerInventOutput = {
  /**
   * The conversation history in openai format
   */
  messages: Array<{
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  /**
   * Any additional context from the tool. A key value store that can return anything from the agent
   */
  additional_context: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
};

export type TriggerInventQueryInput = unknown;

export type InventToolStepInput = {
  tool_config: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  step_id: string;
  conversation_history?: Array<{
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  error_message?: string;
  stringified_results?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type InventToolStepOutput = {
  /**
   * The time it took to run the tool
   */
  duration?: number;
  /**
   * The reasoning of the LLM for these inputs
   */
  reasoning?: string;
  /**
   * The updated step
   */
  updated_step?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  /**
   * The updated tool state
   */
  updated_tool_config?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  /**
   * A very short message back to the user to indicate what you have done. This is for the user to see.
   */
  message_from_agent?: string;
};

export type InventToolStepQueryInput = unknown;

export type GetToolVersionInput = unknown;

export type GetToolVersionOutput = {
  version?: {
    _id: string;
    version_id?: string;
    project: string;
    name?: string;
    description?: string;
    created_by: {
      user_id: string;
      user_name?: string;
    };
    created_at: string;
    updated_at: string;
    tool_id: string;
    config?: {
      title?: string;
      description?: string;
      prompt_description?: string;
      cover_image?: string;
      emoji?: string;
      transformations?: {
        steps: Array<{
          name: string;
          transformation: string;
          params: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          saved_params?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          output?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          /**
           * A jsonschema superset object to provide metadata for tool output fields.
           */
          output_schema?: {
            metadata?: {
              /**
               * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
               */
              field_order?: Array<string>;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            properties?: {
              [k: string]:
                | {
                    metadata?: {
                      content_type?: "external_field";
                      /**
                       * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                       */
                      external_name?: string;
                      render_mode?: ENUM_render_mode;
                    };
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  }
                | undefined;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          default_output_values?: Array<{
            original_key: string;
            updated_key?: string;
            value: any /* this makes soorria sad */;
          }>;
          continue_on_error?: boolean;
          use_fallback_on_skip?: boolean;
          foreach?: string | Array<any /* this makes soorria sad */>;
          if?: string | boolean | null;
          display_name?: string;
          /**
           * If present, the tool step invent will be activated with the specified instructions in the tool builder.
           */
          invent_instructions?: string;
        }>;
        output?: {
          [k: string]: string | undefined;
        } | null;
      };
      /**
       * A jsonschema superset object that users parameters will be validated against upon execution.
       */
      params_schema?: ParamsSchema;
      /**
       * A jsonschema superset object to provide metadata for tool output fields.
       */
      output_schema?: {
        metadata?: {
          /**
           * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
           */
          field_order?: Array<string>;
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        properties?: {
          [k: string]:
            | {
                metadata?: {
                  content_type?: "external_field";
                  /**
                   * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                   */
                  external_name?: string;
                  render_mode?: ENUM_render_mode;
                };
                [k: string]: any /* this makes soorria sad */ | undefined;
              }
            | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Mapping from alias -> real variable path
       */
      state_mapping?: {
        [k: string]: string | undefined;
      };
      /**
       * Override the starting state of the studio
       */
      state?: {
        params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        steps?: {
          [k: string]:
            | {
                output?: {
                  [k: string]: any /* this makes soorria sad */ | undefined;
                };
                executionTime?: number;
                results?: Array<any /* this makes soorria sad */>;
                skipped?: boolean;
                skippedItems?: Array<any /* this makes soorria sad */>;
                status?: ENUM_status2;
                /**
                 * Status of each item in the foreach, key should be the foreach index
                 */
                foreach_statuses?: {
                  status?: ENUM_status2;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                };
                [k: string]: any /* this makes soorria sad */ | undefined;
              }
            | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      predicted_output?: Array<{
        title?: string;
        slug?: string;
        type?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      /**
       * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
       */
      max_job_duration?: ENUM_max_job_duration;
    };
  };
};

export type GetToolVersionQueryInput = unknown;

export type ListToolVersionsInput = {
  tool_id: string;
  page_size?: number;
  page?: number;
  /**
   * Fields to include in the search results, empty array/list means all fields.
   */
  include_fields?: Array<string>;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type ListToolVersionsOutput = {
  results: Array<{
    _id: string;
    version_id?: string;
    project: string;
    name?: string;
    description?: string;
    created_by: {
      user_id: string;
      user_name?: string;
    };
    created_at: string;
    updated_at: string;
    tool_id: string;
    config?: {
      title?: string;
      description?: string;
      prompt_description?: string;
      cover_image?: string;
      emoji?: string;
      transformations?: {
        steps: Array<{
          name: string;
          transformation: string;
          params: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          saved_params?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          output?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          /**
           * A jsonschema superset object to provide metadata for tool output fields.
           */
          output_schema?: {
            metadata?: {
              /**
               * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
               */
              field_order?: Array<string>;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            properties?: {
              [k: string]:
                | {
                    metadata?: {
                      content_type?: "external_field";
                      /**
                       * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                       */
                      external_name?: string;
                      render_mode?: ENUM_render_mode;
                    };
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  }
                | undefined;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          default_output_values?: Array<{
            original_key: string;
            updated_key?: string;
            value: any /* this makes soorria sad */;
          }>;
          continue_on_error?: boolean;
          use_fallback_on_skip?: boolean;
          foreach?: string | Array<any /* this makes soorria sad */>;
          if?: string | boolean | null;
          display_name?: string;
          /**
           * If present, the tool step invent will be activated with the specified instructions in the tool builder.
           */
          invent_instructions?: string;
        }>;
        output?: {
          [k: string]: string | undefined;
        } | null;
      };
      /**
       * A jsonschema superset object that users parameters will be validated against upon execution.
       */
      params_schema?: ParamsSchema;
      /**
       * A jsonschema superset object to provide metadata for tool output fields.
       */
      output_schema?: {
        metadata?: {
          /**
           * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
           */
          field_order?: Array<string>;
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        properties?: {
          [k: string]:
            | {
                metadata?: {
                  content_type?: "external_field";
                  /**
                   * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                   */
                  external_name?: string;
                  render_mode?: ENUM_render_mode;
                };
                [k: string]: any /* this makes soorria sad */ | undefined;
              }
            | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Mapping from alias -> real variable path
       */
      state_mapping?: {
        [k: string]: string | undefined;
      };
      /**
       * Override the starting state of the studio
       */
      state?: {
        params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        steps?: {
          [k: string]:
            | {
                output?: {
                  [k: string]: any /* this makes soorria sad */ | undefined;
                };
                executionTime?: number;
                results?: Array<any /* this makes soorria sad */>;
                skipped?: boolean;
                skippedItems?: Array<any /* this makes soorria sad */>;
                status?: ENUM_status2;
                /**
                 * Status of each item in the foreach, key should be the foreach index
                 */
                foreach_statuses?: {
                  status?: ENUM_status2;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                };
                [k: string]: any /* this makes soorria sad */ | undefined;
              }
            | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      predicted_output?: Array<{
        title?: string;
        slug?: string;
        type?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      /**
       * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
       */
      max_job_duration?: ENUM_max_job_duration;
    };
  }>;
};

export type ListToolVersionsQueryInput = unknown;

export type UpsertToolVersionInput = {
  _id?: string;
  version_id?: string;
  project?: string;
  name?: string;
  description?: string;
  created_by?: {
    user_id: string;
    user_name?: string;
  };
  created_at?: string;
  updated_at?: string;
  tool_id: string;
  config?: {
    title?: string;
    description?: string;
    prompt_description?: string;
    cover_image?: string;
    emoji?: string;
    transformations?: {
      steps: Array<{
        name: string;
        transformation: string;
        params: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        saved_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        output?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        /**
         * A jsonschema superset object to provide metadata for tool output fields.
         */
        output_schema?: {
          metadata?: {
            /**
             * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
             */
            field_order?: Array<string>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          properties?: {
            [k: string]:
              | {
                  metadata?: {
                    content_type?: "external_field";
                    /**
                     * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                     */
                    external_name?: string;
                    render_mode?: ENUM_render_mode;
                  };
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        default_output_values?: Array<{
          original_key: string;
          updated_key?: string;
          value: any /* this makes soorria sad */;
        }>;
        continue_on_error?: boolean;
        use_fallback_on_skip?: boolean;
        foreach?: string | Array<any /* this makes soorria sad */>;
        if?: string | boolean | null;
        display_name?: string;
        /**
         * If present, the tool step invent will be activated with the specified instructions in the tool builder.
         */
        invent_instructions?: string;
      }>;
      output?: {
        [k: string]: string | undefined;
      } | null;
    };
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    /**
     * A jsonschema superset object to provide metadata for tool output fields.
     */
    output_schema?: {
      metadata?: {
        /**
         * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
         */
        field_order?: Array<string>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      properties?: {
        [k: string]:
          | {
              metadata?: {
                content_type?: "external_field";
                /**
                 * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                 */
                external_name?: string;
                render_mode?: ENUM_render_mode;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Mapping from alias -> real variable path
     */
    state_mapping?: {
      [k: string]: string | undefined;
    };
    /**
     * Override the starting state of the studio
     */
    state?: {
      params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      steps?: {
        [k: string]:
          | {
              output?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              executionTime?: number;
              results?: Array<any /* this makes soorria sad */>;
              skipped?: boolean;
              skippedItems?: Array<any /* this makes soorria sad */>;
              status?: ENUM_status2;
              /**
               * Status of each item in the foreach, key should be the foreach index
               */
              foreach_statuses?: {
                status?: ENUM_status2;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    predicted_output?: Array<{
      title?: string;
      slug?: string;
      type?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
  };
  /**
   * If true, updates are merged with existing tool version config. If false, updates overwrite existing config.
   */
  partial_update?: boolean;
};

export type UpsertToolVersionOutput = {
  version_id: string;
};

export type UpsertToolVersionQueryInput = unknown;

export type SaveToolAsDraftInput = {
  version?: string;
  project?: string;
  _id?: string;
  studio_id: string;
  /**
   * This tool is listed on the tool marketplace
   */
  in_marketplace?: boolean;
  insert_date_?: string;
  update_date_?: string;
  is_hidden?: boolean;
  tags?: {
    type?: "transformation";
    categories?: {
      [k: string]: true | undefined;
    };
    /**
     * The source of the integration. For example, 'Knowledge: Linear', which imports data from Linear, this would be 'linear'.
     */
    integration_source?: string;
    integrations?: {
      [k: string]: true | undefined;
    };
    use_cases?: {
      [k: string]: true | undefined;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  machine_user_id?: string;
  creator_user_id?: string;
  creator_first_name?: string;
  creator_last_name?: string;
  creator_display_picture?: string;
  /**
   * Anyone can run this tool
   */
  publicly_triggerable?: boolean;
  /**
   * Anyone can view or clone this tool
   */
  public?: boolean;
  metadata?: {
    source_studio_id?: string;
    source_region?: string;
    source_project?: string;
    clone_count?: number;
    last_run_date?: any /* this makes soorria sad */;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  share_styles?: {
    selected_format?: ENUM_selected_format;
    primary_color?: string;
    hide_guidance_tip?: boolean;
    guidance_tip_text?: string;
    cta_text?: string;
    cta_icon?: string;
    hide_logo?: boolean;
  };
  schedule?: {
    frequency?: ENUM_frequency;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  active_version_id?: string;
  draft_version_id?: string;
  title?: string;
  description?: string;
  prompt_description?: string;
  cover_image?: string;
  emoji?: string;
  transformations?: {
    steps: Array<{
      name: string;
      transformation: string;
      params: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      saved_params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      output?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * A jsonschema superset object to provide metadata for tool output fields.
       */
      output_schema?: {
        metadata?: {
          /**
           * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
           */
          field_order?: Array<string>;
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        properties?: {
          [k: string]:
            | {
                metadata?: {
                  content_type?: "external_field";
                  /**
                   * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                   */
                  external_name?: string;
                  render_mode?: ENUM_render_mode;
                };
                [k: string]: any /* this makes soorria sad */ | undefined;
              }
            | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      default_output_values?: Array<{
        original_key: string;
        updated_key?: string;
        value: any /* this makes soorria sad */;
      }>;
      continue_on_error?: boolean;
      use_fallback_on_skip?: boolean;
      foreach?: string | Array<any /* this makes soorria sad */>;
      if?: string | boolean | null;
      display_name?: string;
      /**
       * If present, the tool step invent will be activated with the specified instructions in the tool builder.
       */
      invent_instructions?: string;
    }>;
    output?: {
      [k: string]: string | undefined;
    } | null;
  };
  /**
   * A jsonschema superset object that users parameters will be validated against upon execution.
   */
  params_schema?: ParamsSchema;
  /**
   * A jsonschema superset object to provide metadata for tool output fields.
   */
  output_schema?: {
    metadata?: {
      /**
       * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
       */
      field_order?: Array<string>;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    properties?: {
      [k: string]:
        | {
            metadata?: {
              content_type?: "external_field";
              /**
               * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
               */
              external_name?: string;
              render_mode?: ENUM_render_mode;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  /**
   * Mapping from alias -> real variable path
   */
  state_mapping?: {
    [k: string]: string | undefined;
  };
  /**
   * Override the starting state of the studio
   */
  state?: {
    params?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    steps?: {
      [k: string]:
        | {
            output?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            executionTime?: number;
            results?: Array<any /* this makes soorria sad */>;
            skipped?: boolean;
            skippedItems?: Array<any /* this makes soorria sad */>;
            status?: ENUM_status2;
            /**
             * Status of each item in the foreach, key should be the foreach index
             */
            foreach_statuses?: {
              status?: ENUM_status2;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  predicted_output?: Array<{
    title?: string;
    slug?: string;
    type?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
};

export type SaveToolAsDraftOutput = {
  tool_id: string;
};

export type SaveToolAsDraftQueryInput = unknown;

export type PublishToolInput = {
  tool_id: string;
};

export type PublishToolOutput = {
  version_id: string;
};

export type PublishToolQueryInput = unknown;

export type BulkDeleteToolVersionsInput = {
  /**
   * version ids of tool versions to delete
   */
  version_ids: Array<string>;
};

export type BulkDeleteToolVersionsOutput = unknown;

export type BulkDeleteToolVersionsQueryInput = unknown;

export type RestoreToolVersionInput = {
  /**
   * version id to be restored
   */
  version_id: string;
};

export type RestoreToolVersionOutput = unknown;

export type RestoreToolVersionQueryInput = unknown;

export type CloneAgentInput = {
  /**
   * If set, the agents config will be completely replaced with the templates config.
   */
  template: {
    agent_id: string;
    region?: ENUM_region1;
    project?: string;
  };
  /**
   * Add this prefix to all cloned agents, subagents and tools
   */
  prefix?: string;
};

export type CloneAgentOutput = {
  errors: Array<{
    raw: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type CloneAgentQueryInput = unknown;

export type CloneAgentMarketplaceTemplateInput = {
  /**
   * If set, the agents config will be completely replaced with the templates config.
   */
  template: {
    agent_id: string;
    region?: ENUM_region1;
    project?: string;
  };
};

export type CloneAgentMarketplaceTemplateOutput = {
  errors: Array<{
    raw: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  agentId: string;
};

export type CloneAgentMarketplaceTemplateQueryInput = unknown;

export type UpsertAgentInput = {
  _id?: string;
  agent_id?: string;
  /**
   * If set, records where the agent was cloned from.
   */
  origin?: {
    root_agent_id: string;
    region?: ENUM_region;
    project?: string;
  };
  views?: number;
  public?: boolean;
  in_marketplace?: boolean;
  project?: string;
  update_date_?: string;
  insert_date_?: any /* this makes soorria sad */;
  version?: string;
  embed_config?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  embeddable?: boolean;
  share_styles?: {
    selected_format?: ENUM_selected_format1;
    primary_color?: string;
    bubble_style?: ENUM_bubble_style;
    bubble_icon?: string;
    input_placeholder_text?: string;
    hide_file_uploads?: boolean;
    hide_conversation_list?: boolean;
    hide_tool_steps?: boolean;
    starting_message_prompts?: Array<string>;
    hide_logo?: boolean;
  };
  machine_user_id?: string;
  starting_messages?: Array<{
    message:
      | {
          role: "user";
          content: string;
          importance_level?: ENUM_importance_level;
        }
      | {
          role: "agent";
          content: string;
        };
    /**
     * Any additional metadata to be stored with the message. This is not sent to the agent.
     */
    metadata?: {
      sync_item_id?: string;
      sync_id?: string;
      sync_type?: string;
      regenerate_metadata?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  }>;
  runner?:
    | {
        type: "default";
      }
    | {
        type: "multiagent";
        multiagent?: {
          max_rounds?: number;
          /**
           * Agents that the Admin agent will run.
           */
          child_agents?: Array<{
            agent_id?: string;
            system_prompt?: string;
            name?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }>;
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
      };
  params?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  expiry_date_?: any /* this makes soorria sad */;
  /**
   * Can be used to force a given mas id for every run with this agent.
   */
  mas_id?: string;
  categories?: Array<string>;
  last_updated_by?: {
    user_name?: string;
    user_id?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  metadata?: {
    clone_count?: number;
    custom_task_views?: Array<{
      id: string;
      title: string;
      filters: Array<{
        type: ENUM_type2;
        id: string;
      }>;
    }>;
    last_run_date?: any /* this makes soorria sad */;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  active_version_id?: string;
  draft_version_id?: string;
  name?: string;
  description?: string;
  prompt_description?: string;
  /**
   * Used to provide instructions on how to use or set up the agent.
   */
  user_instructions?: string;
  /**
   * If set, the agents config will be completely replaced with the templates config.
   */
  template?: {
    agent_id: string;
    region?: ENUM_region1;
    project?: string;
  };
  emoji?: string;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
  title_prompt?: string;
  system_prompt?: string;
  /**
   * If true, suggested replies will appear for each agent message in the front-end.
   */
  suggest_replies?: boolean;
  /**
   * The prompt to inject into the LLM step in the tool used to generate suggested replies.
   */
  suggest_replies_prompt?: string;
  /**
   * If true, this agent can plan and schedule future actions
   */
  is_scheduled_triggers_enabled?: boolean;
  model?: string;
  /**
   * Maximum number of actions an agent can autonomously take before the user needs to confirm again.
   */
  autonomy_limit?: number;
  /**
   * Temperature of the selected model. Typically, higher temperature means more random output.
   */
  temperature?: number;
  knowledge?: Array<{
    knowledge_set: string;
  }>;
  actions?: Array<{
    chain_id?: string;
    agent_id?: string;
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    agent?: {
      message_template?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    action_behaviour?: string;
    action_retry_config?: {
      max_retries?: number;
      force_retry?: boolean;
      after_retries_behaviour?: ENUM_after_retries_behaviour;
    };
    title?: string;
    name?: string;
    description?: string;
    emoji?: string;
    /**
     * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
     */
    agent_decide_prompt?: string;
    conditional_approval_rules?: {
      max_auto_approvals?: number;
      max_approvals_asked?: number;
    };
    /**
     * Useful for external systems to track which tools have been added programatically.
     */
    metadata?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Defaults to project agent is being ran from. Tools must be public to use tools in other projects.
     */
    project?: string;
    /**
     * Defaults to region agent is being ran from. Tools must be public to use tools in other regions.
     */
    region?: string;
    /**
     * DEPRECATED: Version of the tool or subagent to run. Defaults to 'latest'.
     */
    version?: string;
    /**
     * Version of the tool or subagent to run. Can be 'active', 'draft', or a specific version id.
     */
    tool_version?: string;
    /**
     * Default values the agent will use as inputs when running the tool.
     */
    default_values?: {
      /**
       * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
       */
      _subagent_params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Auth account values to update in the chains. Will not be saved to the agent config.
     */
    auth_values?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    prompt_description?: string;
    /**
     * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
     */
    prompt_for_when_to_use?: string;
    wait_for_completion?: boolean;
    strict?: boolean;
  }>;
  action_behaviour?: string;
  action_retry_config?: {
    max_retries?: number;
    force_retry?: boolean;
    after_retries_behaviour?: ENUM_after_retries_behaviour;
  };
  /**
   * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
   */
  agent_decide_prompt?: string;
  conditional_approval_rules?: {
    max_auto_approvals?: number;
    max_approvals_asked?: number;
  };
  /**
   * Triggers are used to start / continue a conversation with an agent via an external service (e.g. email).
   */
  triggers?: Array<{
    type: string;
    enabled?: boolean;
    config?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    studios?: Array<{
      studio_id: string;
      label?: string;
    }>;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  /**
   * A jsonschema superset object that users parameters will be validated against upon execution.
   */
  params_schema?: ParamsSchema;
  escalations?: {
    email?: {
      emails?: any /* this makes soorria sad */;
    };
    slack?: {
      channels?: Array<{
        oauth_account_id?: any /* this makes soorria sad */;
      }>;
    };
  };
  /**
   * If true, the agent's progress will be streamed in real-time-ish to the frontend.
   */
  use_streaming?: boolean;
  model_options?: {
    /**
     * The maximum length of the agent's response. Note that too low a value can completely break agent behaviour.
     */
    max_output_tokens?: number;
    parallel_tool_calls?: boolean;
    /**
     * Cost reduction technique due to models performing better with more context
     */
    switch_model_after_n_tokens?: {
      model: string | null;
      n_tokens: number | null;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Some model providers support 'strict':true to force function calling to be more accurate. This activates this when supported.
     */
    strict_mode?: boolean;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  /**
   * Options for controlling of the agent runtime layer.
   */
  runtime?: {
    code?: string;
    enabled?: boolean;
    /**
     * If a non empty string, will not use code runtime, and instead fire a webhook, expecting the webhook to manage all further work.
     */
    webhook?: string;
  };
  tags?: {
    [k: string]:
      | boolean
      | {
          description?: string;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }
      | undefined;
  };
  custom_metadata?: {
    options?: Array<{
      title: string;
      description?: string;
      type: ENUM_type3;
      valid_options?: Array<{
        label: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      is_rule_based?: boolean;
      rules?: Array<{
        conditions?: Array<FlatFilterItem>;
        action?:
          | {
              type: "increment";
              value: number;
            }
          | {
              type: "set";
              value: number | string | boolean | Array<string>;
            };
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    system_prompt?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  /**
   * If true, updates are merged with existing agent config. If false, updates overwrite existing config.
   */
  partial_update?: boolean;
  is_draft?: boolean;
};

export type UpsertAgentOutput = {
  agent_id: string;
};

export type UpsertAgentQueryInput = unknown;

export type ListAgentsInput = {
  filters?: Array<FlatFilterItem>;
  page?: number;
  page_size?: number;
  /**
   * Fields to sort by. For each field, sort by descending or ascending. If you are using descending by datetime, it will get the most recent ones. Can be provided in format ["sortfield","subsortfield"] or in format [{"sortfield":"desc"}, {"subsortfield":"asc"}]. If provided as a query parameter, use: sort=${JSON.stringify([{"sortfield":"desc"}])}
   */
  sort?: SortConfig;
  include_public_agents?: boolean;
  agent_versions?: Array<any /* this makes soorria sad */>;
};

export type ListAgentsOutput = {
  results: Array<{
    _id: string;
    agent_id: string;
    /**
     * If set, records where the agent was cloned from.
     */
    origin?: {
      root_agent_id: string;
      region?: ENUM_region;
      project?: string;
    };
    views?: number;
    public?: boolean;
    in_marketplace?: boolean;
    project: string;
    update_date_?: string;
    insert_date_?: any /* this makes soorria sad */;
    version?: string;
    embed_config?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    embeddable?: boolean;
    share_styles?: {
      selected_format?: ENUM_selected_format1;
      primary_color?: string;
      bubble_style?: ENUM_bubble_style;
      bubble_icon?: string;
      input_placeholder_text?: string;
      hide_file_uploads?: boolean;
      hide_conversation_list?: boolean;
      hide_tool_steps?: boolean;
      starting_message_prompts?: Array<string>;
      hide_logo?: boolean;
    };
    machine_user_id?: string;
    starting_messages?: Array<{
      message:
        | {
            role: "user";
            content: string;
            importance_level?: ENUM_importance_level;
          }
        | {
            role: "agent";
            content: string;
          };
      /**
       * Any additional metadata to be stored with the message. This is not sent to the agent.
       */
      metadata?: {
        sync_item_id?: string;
        sync_id?: string;
        sync_type?: string;
        regenerate_metadata?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    }>;
    runner?:
      | {
          type: "default";
        }
      | {
          type: "multiagent";
          multiagent?: {
            max_rounds?: number;
            /**
             * Agents that the Admin agent will run.
             */
            child_agents?: Array<{
              agent_id?: string;
              system_prompt?: string;
              name?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
        };
    params?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    expiry_date_?: any /* this makes soorria sad */;
    /**
     * Can be used to force a given mas id for every run with this agent.
     */
    mas_id?: string;
    categories?: Array<string>;
    last_updated_by?: {
      user_name?: string;
      user_id?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    metadata?: {
      clone_count?: number;
      custom_task_views?: Array<{
        id: string;
        title: string;
        filters: Array<{
          type: ENUM_type2;
          id: string;
        }>;
      }>;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    active_version_id?: string;
    draft_version_id?: string;
    name?: string;
    description?: string;
    prompt_description?: string;
    /**
     * Used to provide instructions on how to use or set up the agent.
     */
    user_instructions?: string;
    /**
     * If set, the agents config will be completely replaced with the templates config.
     */
    template?: {
      agent_id: string;
      region?: ENUM_region1;
      project?: string;
    };
    emoji?: string;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
    title_prompt?: string;
    system_prompt?: string;
    /**
     * If true, suggested replies will appear for each agent message in the front-end.
     */
    suggest_replies?: boolean;
    /**
     * The prompt to inject into the LLM step in the tool used to generate suggested replies.
     */
    suggest_replies_prompt?: string;
    /**
     * If true, this agent can plan and schedule future actions
     */
    is_scheduled_triggers_enabled?: boolean;
    model?: string;
    /**
     * Maximum number of actions an agent can autonomously take before the user needs to confirm again.
     */
    autonomy_limit?: number;
    /**
     * Temperature of the selected model. Typically, higher temperature means more random output.
     */
    temperature?: number;
    knowledge?: Array<{
      knowledge_set: string;
    }>;
    actions?: Array<{
      chain_id?: string;
      agent_id?: string;
      /**
       * A jsonschema superset object that users parameters will be validated against upon execution.
       */
      params_schema?: ParamsSchema;
      agent?: {
        message_template?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      action_behaviour?: string;
      action_retry_config?: {
        max_retries?: number;
        force_retry?: boolean;
        after_retries_behaviour?: ENUM_after_retries_behaviour;
      };
      title?: string;
      name?: string;
      description?: string;
      emoji?: string;
      /**
       * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
       */
      agent_decide_prompt?: string;
      conditional_approval_rules?: {
        max_auto_approvals?: number;
        max_approvals_asked?: number;
      };
      /**
       * Useful for external systems to track which tools have been added programatically.
       */
      metadata?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Defaults to project agent is being ran from. Tools must be public to use tools in other projects.
       */
      project?: string;
      /**
       * Defaults to region agent is being ran from. Tools must be public to use tools in other regions.
       */
      region?: string;
      /**
       * DEPRECATED: Version of the tool or subagent to run. Defaults to 'latest'.
       */
      version?: string;
      /**
       * Version of the tool or subagent to run. Can be 'active', 'draft', or a specific version id.
       */
      tool_version?: string;
      /**
       * Default values the agent will use as inputs when running the tool.
       */
      default_values?: {
        /**
         * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
         */
        _subagent_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Auth account values to update in the chains. Will not be saved to the agent config.
       */
      auth_values?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      prompt_description?: string;
      /**
       * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
       */
      prompt_for_when_to_use?: string;
      wait_for_completion?: boolean;
      strict?: boolean;
    }>;
    action_behaviour?: string;
    action_retry_config?: {
      max_retries?: number;
      force_retry?: boolean;
      after_retries_behaviour?: ENUM_after_retries_behaviour;
    };
    /**
     * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
     */
    agent_decide_prompt?: string;
    conditional_approval_rules?: {
      max_auto_approvals?: number;
      max_approvals_asked?: number;
    };
    /**
     * Triggers are used to start / continue a conversation with an agent via an external service (e.g. email).
     */
    triggers?: Array<{
      type: string;
      enabled?: boolean;
      config?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      studios?: Array<{
        studio_id: string;
        label?: string;
      }>;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    escalations?: {
      email?: {
        emails?: any /* this makes soorria sad */;
      };
      slack?: {
        channels?: Array<{
          oauth_account_id?: any /* this makes soorria sad */;
        }>;
      };
    };
    /**
     * If true, the agent's progress will be streamed in real-time-ish to the frontend.
     */
    use_streaming?: boolean;
    model_options?: {
      /**
       * The maximum length of the agent's response. Note that too low a value can completely break agent behaviour.
       */
      max_output_tokens?: number;
      parallel_tool_calls?: boolean;
      /**
       * Cost reduction technique due to models performing better with more context
       */
      switch_model_after_n_tokens?: {
        model: string | null;
        n_tokens: number | null;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Some model providers support 'strict':true to force function calling to be more accurate. This activates this when supported.
       */
      strict_mode?: boolean;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Options for controlling of the agent runtime layer.
     */
    runtime?: {
      code?: string;
      enabled?: boolean;
      /**
       * If a non empty string, will not use code runtime, and instead fire a webhook, expecting the webhook to manage all further work.
       */
      webhook?: string;
    };
    tags?: {
      [k: string]:
        | boolean
        | {
            description?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    custom_metadata?: {
      options?: Array<{
        title: string;
        description?: string;
        type: ENUM_type3;
        valid_options?: Array<{
          label: string;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        is_rule_based?: boolean;
        rules?: Array<{
          conditions?: Array<FlatFilterItem>;
          action?:
            | {
                type: "increment";
                value: number;
              }
            | {
                type: "set";
                value: number | string | boolean | Array<string>;
              };
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      system_prompt?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  }>;
};

export type ListAgentsQueryInput = unknown;

export type ViewAgentInput = {
  project: string;
};

export type ViewAgentOutput = {
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type ViewAgentQueryInput = unknown;

export type GetAgentInput = unknown;

export type GetAgentOutput = {
  agent: {
    _id: string;
    agent_id: string;
    /**
     * If set, records where the agent was cloned from.
     */
    origin?: {
      root_agent_id: string;
      region?: ENUM_region;
      project?: string;
    };
    views?: number;
    public?: boolean;
    in_marketplace?: boolean;
    project: string;
    update_date_?: string;
    insert_date_?: any /* this makes soorria sad */;
    version?: string;
    embed_config?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    embeddable?: boolean;
    share_styles?: {
      selected_format?: ENUM_selected_format1;
      primary_color?: string;
      bubble_style?: ENUM_bubble_style;
      bubble_icon?: string;
      input_placeholder_text?: string;
      hide_file_uploads?: boolean;
      hide_conversation_list?: boolean;
      hide_tool_steps?: boolean;
      starting_message_prompts?: Array<string>;
      hide_logo?: boolean;
    };
    machine_user_id?: string;
    starting_messages?: Array<{
      message:
        | {
            role: "user";
            content: string;
            importance_level?: ENUM_importance_level;
          }
        | {
            role: "agent";
            content: string;
          };
      /**
       * Any additional metadata to be stored with the message. This is not sent to the agent.
       */
      metadata?: {
        sync_item_id?: string;
        sync_id?: string;
        sync_type?: string;
        regenerate_metadata?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    }>;
    runner?:
      | {
          type: "default";
        }
      | {
          type: "multiagent";
          multiagent?: {
            max_rounds?: number;
            /**
             * Agents that the Admin agent will run.
             */
            child_agents?: Array<{
              agent_id?: string;
              system_prompt?: string;
              name?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
        };
    params?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    expiry_date_?: any /* this makes soorria sad */;
    /**
     * Can be used to force a given mas id for every run with this agent.
     */
    mas_id?: string;
    categories?: Array<string>;
    last_updated_by?: {
      user_name?: string;
      user_id?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    metadata?: {
      clone_count?: number;
      custom_task_views?: Array<{
        id: string;
        title: string;
        filters: Array<{
          type: ENUM_type2;
          id: string;
        }>;
      }>;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    active_version_id?: string;
    draft_version_id?: string;
    name?: string;
    description?: string;
    prompt_description?: string;
    /**
     * Used to provide instructions on how to use or set up the agent.
     */
    user_instructions?: string;
    /**
     * If set, the agents config will be completely replaced with the templates config.
     */
    template?: {
      agent_id: string;
      region?: ENUM_region1;
      project?: string;
    };
    emoji?: string;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
    title_prompt?: string;
    system_prompt?: string;
    /**
     * If true, suggested replies will appear for each agent message in the front-end.
     */
    suggest_replies?: boolean;
    /**
     * The prompt to inject into the LLM step in the tool used to generate suggested replies.
     */
    suggest_replies_prompt?: string;
    /**
     * If true, this agent can plan and schedule future actions
     */
    is_scheduled_triggers_enabled?: boolean;
    model?: string;
    /**
     * Maximum number of actions an agent can autonomously take before the user needs to confirm again.
     */
    autonomy_limit?: number;
    /**
     * Temperature of the selected model. Typically, higher temperature means more random output.
     */
    temperature?: number;
    knowledge?: Array<{
      knowledge_set: string;
    }>;
    actions?: Array<{
      chain_id?: string;
      agent_id?: string;
      /**
       * A jsonschema superset object that users parameters will be validated against upon execution.
       */
      params_schema?: ParamsSchema;
      agent?: {
        message_template?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      action_behaviour?: string;
      action_retry_config?: {
        max_retries?: number;
        force_retry?: boolean;
        after_retries_behaviour?: ENUM_after_retries_behaviour;
      };
      title?: string;
      name?: string;
      description?: string;
      emoji?: string;
      /**
       * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
       */
      agent_decide_prompt?: string;
      conditional_approval_rules?: {
        max_auto_approvals?: number;
        max_approvals_asked?: number;
      };
      /**
       * Useful for external systems to track which tools have been added programatically.
       */
      metadata?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Defaults to project agent is being ran from. Tools must be public to use tools in other projects.
       */
      project?: string;
      /**
       * Defaults to region agent is being ran from. Tools must be public to use tools in other regions.
       */
      region?: string;
      /**
       * DEPRECATED: Version of the tool or subagent to run. Defaults to 'latest'.
       */
      version?: string;
      /**
       * Version of the tool or subagent to run. Can be 'active', 'draft', or a specific version id.
       */
      tool_version?: string;
      /**
       * Default values the agent will use as inputs when running the tool.
       */
      default_values?: {
        /**
         * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
         */
        _subagent_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Auth account values to update in the chains. Will not be saved to the agent config.
       */
      auth_values?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      prompt_description?: string;
      /**
       * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
       */
      prompt_for_when_to_use?: string;
      wait_for_completion?: boolean;
      strict?: boolean;
    }>;
    action_behaviour?: string;
    action_retry_config?: {
      max_retries?: number;
      force_retry?: boolean;
      after_retries_behaviour?: ENUM_after_retries_behaviour;
    };
    /**
     * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
     */
    agent_decide_prompt?: string;
    conditional_approval_rules?: {
      max_auto_approvals?: number;
      max_approvals_asked?: number;
    };
    /**
     * Triggers are used to start / continue a conversation with an agent via an external service (e.g. email).
     */
    triggers?: Array<{
      type: string;
      enabled?: boolean;
      config?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      studios?: Array<{
        studio_id: string;
        label?: string;
      }>;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    escalations?: {
      email?: {
        emails?: any /* this makes soorria sad */;
      };
      slack?: {
        channels?: Array<{
          oauth_account_id?: any /* this makes soorria sad */;
        }>;
      };
    };
    /**
     * If true, the agent's progress will be streamed in real-time-ish to the frontend.
     */
    use_streaming?: boolean;
    model_options?: {
      /**
       * The maximum length of the agent's response. Note that too low a value can completely break agent behaviour.
       */
      max_output_tokens?: number;
      parallel_tool_calls?: boolean;
      /**
       * Cost reduction technique due to models performing better with more context
       */
      switch_model_after_n_tokens?: {
        model: string | null;
        n_tokens: number | null;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Some model providers support 'strict':true to force function calling to be more accurate. This activates this when supported.
       */
      strict_mode?: boolean;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Options for controlling of the agent runtime layer.
     */
    runtime?: {
      code?: string;
      enabled?: boolean;
      /**
       * If a non empty string, will not use code runtime, and instead fire a webhook, expecting the webhook to manage all further work.
       */
      webhook?: string;
    };
    tags?: {
      [k: string]:
        | boolean
        | {
            description?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    custom_metadata?: {
      options?: Array<{
        title: string;
        description?: string;
        type: ENUM_type3;
        valid_options?: Array<{
          label: string;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        is_rule_based?: boolean;
        rules?: Array<{
          conditions?: Array<FlatFilterItem>;
          action?:
            | {
                type: "increment";
                value: number;
              }
            | {
                type: "set";
                value: number | string | boolean | Array<string>;
              };
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      system_prompt?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  };
};

export type GetAgentQueryInput = {
  /**
   * Version of the agent to run. Can be 'active', 'draft', or a specific version_id
   */
  version?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type ListAgentsToolsViewInput = {
  agent_ids: Array<string>;
};

export type ListAgentsToolsViewOutput = {
  results: Array<{
    version?: string;
    project: string;
    _id?: string;
    studio_id: string;
    title?: string;
    description?: string;
    emoji?: string;
    action_id: string;
    type: ENUM_43_ENUM;
    region: string;
  }>;
  agent_id_to_action_ids: {
    [k: string]: Array<string> | undefined;
  };
};

export type ListAgentsToolsViewQueryInput = unknown;

export type GetAgentsToolsInput = {
  agent_override?: {
    _id?: string;
    agent_id?: string;
    /**
     * If set, records where the agent was cloned from.
     */
    origin?: {
      root_agent_id: string;
      region?: ENUM_region;
      project?: string;
    };
    views?: number;
    public?: boolean;
    in_marketplace?: boolean;
    project?: string;
    update_date_?: string;
    insert_date_?: any /* this makes soorria sad */;
    version?: string;
    embed_config?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    embeddable?: boolean;
    share_styles?: {
      selected_format?: ENUM_selected_format1;
      primary_color?: string;
      bubble_style?: ENUM_bubble_style;
      bubble_icon?: string;
      input_placeholder_text?: string;
      hide_file_uploads?: boolean;
      hide_conversation_list?: boolean;
      hide_tool_steps?: boolean;
      starting_message_prompts?: Array<string>;
      hide_logo?: boolean;
    };
    machine_user_id?: string;
    starting_messages?: Array<{
      message:
        | {
            role: "user";
            content: string;
            importance_level?: ENUM_importance_level;
          }
        | {
            role: "agent";
            content: string;
          };
      /**
       * Any additional metadata to be stored with the message. This is not sent to the agent.
       */
      metadata?: {
        sync_item_id?: string;
        sync_id?: string;
        sync_type?: string;
        regenerate_metadata?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    }>;
    runner?:
      | {
          type: "default";
        }
      | {
          type: "multiagent";
          multiagent?: {
            max_rounds?: number;
            /**
             * Agents that the Admin agent will run.
             */
            child_agents?: Array<{
              agent_id?: string;
              system_prompt?: string;
              name?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
        };
    params?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    expiry_date_?: any /* this makes soorria sad */;
    /**
     * Can be used to force a given mas id for every run with this agent.
     */
    mas_id?: string;
    categories?: Array<string>;
    last_updated_by?: {
      user_name?: string;
      user_id?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    metadata?: {
      clone_count?: number;
      custom_task_views?: Array<{
        id: string;
        title: string;
        filters: Array<{
          type: ENUM_type2;
          id: string;
        }>;
      }>;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    active_version_id?: string;
    draft_version_id?: string;
    name?: string;
    description?: string;
    prompt_description?: string;
    /**
     * Used to provide instructions on how to use or set up the agent.
     */
    user_instructions?: string;
    /**
     * If set, the agents config will be completely replaced with the templates config.
     */
    template?: {
      agent_id: string;
      region?: ENUM_region1;
      project?: string;
    };
    emoji?: string;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
    title_prompt?: string;
    system_prompt?: string;
    /**
     * If true, suggested replies will appear for each agent message in the front-end.
     */
    suggest_replies?: boolean;
    /**
     * The prompt to inject into the LLM step in the tool used to generate suggested replies.
     */
    suggest_replies_prompt?: string;
    /**
     * If true, this agent can plan and schedule future actions
     */
    is_scheduled_triggers_enabled?: boolean;
    model?: string;
    /**
     * Maximum number of actions an agent can autonomously take before the user needs to confirm again.
     */
    autonomy_limit?: number;
    /**
     * Temperature of the selected model. Typically, higher temperature means more random output.
     */
    temperature?: number;
    knowledge?: Array<{
      knowledge_set: string;
    }>;
    actions?: Array<{
      chain_id?: string;
      agent_id?: string;
      /**
       * A jsonschema superset object that users parameters will be validated against upon execution.
       */
      params_schema?: ParamsSchema;
      agent?: {
        message_template?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      action_behaviour?: string;
      action_retry_config?: {
        max_retries?: number;
        force_retry?: boolean;
        after_retries_behaviour?: ENUM_after_retries_behaviour;
      };
      title?: string;
      name?: string;
      description?: string;
      emoji?: string;
      /**
       * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
       */
      agent_decide_prompt?: string;
      conditional_approval_rules?: {
        max_auto_approvals?: number;
        max_approvals_asked?: number;
      };
      /**
       * Useful for external systems to track which tools have been added programatically.
       */
      metadata?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Defaults to project agent is being ran from. Tools must be public to use tools in other projects.
       */
      project?: string;
      /**
       * Defaults to region agent is being ran from. Tools must be public to use tools in other regions.
       */
      region?: string;
      /**
       * DEPRECATED: Version of the tool or subagent to run. Defaults to 'latest'.
       */
      version?: string;
      /**
       * Version of the tool or subagent to run. Can be 'active', 'draft', or a specific version id.
       */
      tool_version?: string;
      /**
       * Default values the agent will use as inputs when running the tool.
       */
      default_values?: {
        /**
         * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
         */
        _subagent_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Auth account values to update in the chains. Will not be saved to the agent config.
       */
      auth_values?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      prompt_description?: string;
      /**
       * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
       */
      prompt_for_when_to_use?: string;
      wait_for_completion?: boolean;
      strict?: boolean;
    }>;
    action_behaviour?: string;
    action_retry_config?: {
      max_retries?: number;
      force_retry?: boolean;
      after_retries_behaviour?: ENUM_after_retries_behaviour;
    };
    /**
     * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
     */
    agent_decide_prompt?: string;
    conditional_approval_rules?: {
      max_auto_approvals?: number;
      max_approvals_asked?: number;
    };
    /**
     * Triggers are used to start / continue a conversation with an agent via an external service (e.g. email).
     */
    triggers?: Array<{
      type: string;
      enabled?: boolean;
      config?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      studios?: Array<{
        studio_id: string;
        label?: string;
      }>;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    escalations?: {
      email?: {
        emails?: any /* this makes soorria sad */;
      };
      slack?: {
        channels?: Array<{
          oauth_account_id?: any /* this makes soorria sad */;
        }>;
      };
    };
    /**
     * If true, the agent's progress will be streamed in real-time-ish to the frontend.
     */
    use_streaming?: boolean;
    model_options?: {
      /**
       * The maximum length of the agent's response. Note that too low a value can completely break agent behaviour.
       */
      max_output_tokens?: number;
      parallel_tool_calls?: boolean;
      /**
       * Cost reduction technique due to models performing better with more context
       */
      switch_model_after_n_tokens?: {
        model: string | null;
        n_tokens: number | null;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Some model providers support 'strict':true to force function calling to be more accurate. This activates this when supported.
       */
      strict_mode?: boolean;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Options for controlling of the agent runtime layer.
     */
    runtime?: {
      code?: string;
      enabled?: boolean;
      /**
       * If a non empty string, will not use code runtime, and instead fire a webhook, expecting the webhook to manage all further work.
       */
      webhook?: string;
    };
    tags?: {
      [k: string]:
        | boolean
        | {
            description?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    custom_metadata?: {
      options?: Array<{
        title: string;
        description?: string;
        type: ENUM_type3;
        valid_options?: Array<{
          label: string;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        is_rule_based?: boolean;
        rules?: Array<{
          conditions?: Array<FlatFilterItem>;
          action?:
            | {
                type: "increment";
                value: number;
              }
            | {
                type: "set";
                value: number | string | boolean | Array<string>;
              };
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      system_prompt?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  };
  /**
   * Version of the agent to run. Can be 'active', 'draft', or a specific version_id
   */
  agent_version?: string;
};

export type GetAgentsToolsOutput = {
  chains: Array<AgentTool>;
};

export type GetAgentsToolsQueryInput = unknown;

export type TriggerAgentInput = {
  agent_id?: string;
  conversation_id?: string;
  agent_override?: {
    _id?: string;
    agent_id: string;
    /**
     * If set, records where the agent was cloned from.
     */
    origin?: {
      root_agent_id: string;
      region?: ENUM_region;
      project?: string;
    };
    views?: number;
    public?: boolean;
    in_marketplace?: boolean;
    project?: string;
    update_date_?: string;
    insert_date_?: any /* this makes soorria sad */;
    version?: string;
    embed_config?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    embeddable?: boolean;
    share_styles?: {
      selected_format?: ENUM_selected_format1;
      primary_color?: string;
      bubble_style?: ENUM_bubble_style;
      bubble_icon?: string;
      input_placeholder_text?: string;
      hide_file_uploads?: boolean;
      hide_conversation_list?: boolean;
      hide_tool_steps?: boolean;
      starting_message_prompts?: Array<string>;
      hide_logo?: boolean;
    };
    machine_user_id?: string;
    starting_messages?: Array<{
      message:
        | {
            role: "user";
            content: string;
            importance_level?: ENUM_importance_level;
          }
        | {
            role: "agent";
            content: string;
          };
      /**
       * Any additional metadata to be stored with the message. This is not sent to the agent.
       */
      metadata?: {
        sync_item_id?: string;
        sync_id?: string;
        sync_type?: string;
        regenerate_metadata?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    }>;
    runner?:
      | {
          type: "default";
        }
      | {
          type: "multiagent";
          multiagent?: {
            max_rounds?: number;
            /**
             * Agents that the Admin agent will run.
             */
            child_agents?: Array<{
              agent_id?: string;
              system_prompt?: string;
              name?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
        };
    params?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    expiry_date_?: any /* this makes soorria sad */;
    /**
     * Can be used to force a given mas id for every run with this agent.
     */
    mas_id?: string;
    categories?: Array<string>;
    last_updated_by?: {
      user_name?: string;
      user_id?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    metadata?: {
      clone_count?: number;
      custom_task_views?: Array<{
        id: string;
        title: string;
        filters: Array<{
          type: ENUM_type2;
          id: string;
        }>;
      }>;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    active_version_id?: string;
    draft_version_id?: string;
    name?: string;
    description?: string;
    prompt_description?: string;
    /**
     * Used to provide instructions on how to use or set up the agent.
     */
    user_instructions?: string;
    /**
     * If set, the agents config will be completely replaced with the templates config.
     */
    template?: {
      agent_id: string;
      region?: ENUM_region1;
      project?: string;
    };
    emoji?: string;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
    title_prompt?: string;
    system_prompt?: string;
    /**
     * If true, suggested replies will appear for each agent message in the front-end.
     */
    suggest_replies?: boolean;
    /**
     * The prompt to inject into the LLM step in the tool used to generate suggested replies.
     */
    suggest_replies_prompt?: string;
    /**
     * If true, this agent can plan and schedule future actions
     */
    is_scheduled_triggers_enabled?: boolean;
    model?: string;
    /**
     * Maximum number of actions an agent can autonomously take before the user needs to confirm again.
     */
    autonomy_limit?: number;
    /**
     * Temperature of the selected model. Typically, higher temperature means more random output.
     */
    temperature?: number;
    knowledge?: Array<{
      knowledge_set: string;
    }>;
    actions?: Array<{
      chain_id?: string;
      agent_id?: string;
      /**
       * A jsonschema superset object that users parameters will be validated against upon execution.
       */
      params_schema?: ParamsSchema;
      agent?: {
        message_template?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      action_behaviour?: string;
      action_retry_config?: {
        max_retries?: number;
        force_retry?: boolean;
        after_retries_behaviour?: ENUM_after_retries_behaviour;
      };
      title?: string;
      name?: string;
      description?: string;
      emoji?: string;
      /**
       * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
       */
      agent_decide_prompt?: string;
      conditional_approval_rules?: {
        max_auto_approvals?: number;
        max_approvals_asked?: number;
      };
      /**
       * Useful for external systems to track which tools have been added programatically.
       */
      metadata?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Defaults to project agent is being ran from. Tools must be public to use tools in other projects.
       */
      project?: string;
      /**
       * Defaults to region agent is being ran from. Tools must be public to use tools in other regions.
       */
      region?: string;
      /**
       * DEPRECATED: Version of the tool or subagent to run. Defaults to 'latest'.
       */
      version?: string;
      /**
       * Version of the tool or subagent to run. Can be 'active', 'draft', or a specific version id.
       */
      tool_version?: string;
      /**
       * Default values the agent will use as inputs when running the tool.
       */
      default_values?: {
        /**
         * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
         */
        _subagent_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Auth account values to update in the chains. Will not be saved to the agent config.
       */
      auth_values?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      prompt_description?: string;
      /**
       * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
       */
      prompt_for_when_to_use?: string;
      wait_for_completion?: boolean;
      strict?: boolean;
    }>;
    action_behaviour?: string;
    action_retry_config?: {
      max_retries?: number;
      force_retry?: boolean;
      after_retries_behaviour?: ENUM_after_retries_behaviour;
    };
    /**
     * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
     */
    agent_decide_prompt?: string;
    conditional_approval_rules?: {
      max_auto_approvals?: number;
      max_approvals_asked?: number;
    };
    /**
     * Triggers are used to start / continue a conversation with an agent via an external service (e.g. email).
     */
    triggers?: Array<{
      type: string;
      enabled?: boolean;
      config?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      studios?: Array<{
        studio_id: string;
        label?: string;
      }>;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    escalations?: {
      email?: {
        emails?: any /* this makes soorria sad */;
      };
      slack?: {
        channels?: Array<{
          oauth_account_id?: any /* this makes soorria sad */;
        }>;
      };
    };
    /**
     * If true, the agent's progress will be streamed in real-time-ish to the frontend.
     */
    use_streaming?: boolean;
    model_options?: {
      /**
       * The maximum length of the agent's response. Note that too low a value can completely break agent behaviour.
       */
      max_output_tokens?: number;
      parallel_tool_calls?: boolean;
      /**
       * Cost reduction technique due to models performing better with more context
       */
      switch_model_after_n_tokens?: {
        model: string | null;
        n_tokens: number | null;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Some model providers support 'strict':true to force function calling to be more accurate. This activates this when supported.
       */
      strict_mode?: boolean;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Options for controlling of the agent runtime layer.
     */
    runtime?: {
      code?: string;
      enabled?: boolean;
      /**
       * If a non empty string, will not use code runtime, and instead fire a webhook, expecting the webhook to manage all further work.
       */
      webhook?: string;
    };
    tags?: {
      [k: string]:
        | boolean
        | {
            description?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    custom_metadata?: {
      options?: Array<{
        title: string;
        description?: string;
        type: ENUM_type3;
        valid_options?: Array<{
          label: string;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        is_rule_based?: boolean;
        rules?: Array<{
          conditions?: Array<FlatFilterItem>;
          action?:
            | {
                type: "increment";
                value: number;
              }
            | {
                type: "set";
                value: number | string | boolean | Array<string>;
              };
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      system_prompt?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  };
  /**
   * Any additional metadata to be stored with the message. This is not sent to the agent.
   */
  metadata?: {
    sync_item_id?: string;
    sync_id?: string;
    sync_type?: string;
    regenerate_metadata?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  debug_mode_config?: {
    /**
     * Mapping from tool action_id => override config
     */
    tool_configs?: {
      [k: string]:
        | {
            /**
             * 0-indexed mapping from tool run of this specific tool to the overrides. Use `'default'` to set the default overrides for all runs of this tool.
             */
            overrides?: {
              [k: string]:
                | {
                    input_overrides_enabled?: boolean;
                    input_overrides?: {
                      [k: string]: any /* this makes soorria sad */ | undefined;
                    };
                    output_overrides_enabled?: boolean;
                    output_overrides?: {
                      output?: {
                        [k: string]:
                          | any /* this makes soorria sad */
                          | undefined;
                      };
                    };
                    action_config_overrides?: {
                      action_behaviour?: string;
                      action_retry_config?: {
                        max_retries?: number;
                        force_retry?: boolean;
                        after_retries_behaviour?: ENUM_after_retries_behaviour;
                      };
                      /**
                       * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
                       */
                      agent_decide_prompt?: string;
                      conditional_approval_rules?: {
                        max_auto_approvals?: number;
                        max_approvals_asked?: number;
                      };
                    };
                  }
                | undefined;
            };
          }
        | undefined;
    };
  };
  debug_mode_config_id?: string;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
  /**
   * The External ID for the conversation from the source system. By default when provided it will not create second conversations if one with the same external_id already exists.
   */
  external_id?: string;
  external_id_behaviour?: "extend-conversation" | "nothing";
  /**
   * Params to set in the agent before running
   */
  params?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  /**
   * ID Of the MAS Store that the agent should use.
   */
  mas_store_id?: string;
  /**
   * ID Of the MAS system to tie this agent trigger to.
   */
  mas_id?: string;
  enable_custom_params?: boolean;
  /**
   * Version of the agent to run. Can be 'active', 'draft', or a specific version_id
   */
  version?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
} & (
  | {
      action?: "send";
      message:
        | {
            role: "user";
            content: string;
            importance_level?: ENUM_importance_level;
          }
        | {
            action: string;
            action_request_id: string;
            importance_level?: ENUM_importance_level;
            mock_tool_output?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            role: "action-confirm";
            action_params_override?: any /* this makes soorria sad */;
          }
        | {
            action: string;
            action_request_id: string;
            importance_level?: ENUM_importance_level;
            role: "action-reject";
          };
      /**
       * document_id of the message to overwrite
       */
      edit_message_id?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }
  | {
      action: "regenerate";
      use_first_message?: boolean;
      regenerate_message_id?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }
);

export type TriggerAgentOutput = {
  job_info: {
    job_id: string;
    studio_id: string;
  };
  conversation_id: string;
  agent_id: string;
  state: ENUM_3_ENUM;
};

export type TriggerAgentQueryInput = unknown;

export type AppendMessageToConversationInput = {
  message:
    | {
        role: "user";
        content: string;
        importance_level?: ENUM_importance_level;
      }
    | {
        action: string;
        action_request_id: string;
        importance_level?: ENUM_importance_level;
        mock_tool_output?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        role: "action-confirm";
        action_params_override?: any /* this makes soorria sad */;
      }
    | {
        action: string;
        action_request_id: string;
        importance_level?: ENUM_importance_level;
        role: "action-reject";
      };
};

export type AppendMessageToConversationOutput = unknown;

export type AppendMessageToConversationQueryInput = unknown;

export type BulkTriggerAgentsInput = {
  filters?: Array<
    | {
        /**
         * Match where document[field] is in value list.
         */
        match?: {
          /**
           * If matching on text, match even if there are extra words / case insensitivity
           */
          fuzzy?: boolean;
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        matchArray?: {
          field: string;
          value: Array<string | number>;
        };
        random?: {
          size: number;
        };
        /**
         * Match where document._id is in value list.
         */
        matchIds?: {
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        /**
         * Match documents where greaterThan < document[field] < lessThan. Supports numbers and date strings.
         */
        range?: {
          /**
           * Field to match on.
           */
          field?: string;
          greaterThan?: any /* this makes soorria sad */;
          lessThan?: any /* this makes soorria sad */;
          greaterThanOrEqualTo?: any /* this makes soorria sad */;
          lessThanOrEqualTo?: any /* this makes soorria sad */;
        };
        wildcard?: {
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * single string or array of valid wildcard strings to match on, for example ['tele*']
           */
          value: string | Array<string>;
        };
        /**
         * Match documents where field specified by 'field' exists in the document. for nested fields, use syntax: a.b.c
         */
        fieldExists?: {
          /**
           * Field that must exist.
           */
          field?: string;
        };
        /**
         * Match documents where doc[field] % module == value
         */
        matchModulo?: {
          field?: string;
          modulo: number;
          value: number;
        };
        /**
         * Filter down to one document for each value of selected field.
         */
        dedupeByValue?: {
          /**
           * Field to filter on.
           */
          field: string;
        };
        /**
         * Match documents where document[a] <=/>=/</>/==/!=/stringEquals document[b]. Use stringEquals to compare strings.
         */
        selfreference?: {
          /**
           * First field in comparison.
           */
          a: string;
          /**
           * Second field in comparison.
           */
          b: string;
          /**
           * Operator used to compare a and b.
           */
          operation: ENUM_operation;
        };
        /**
         * Match documents where greaterThan < wordCount(document[field]) < lessThan.
         */
        wordCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum word count.
           */
          greaterThan?: number;
          /**
           * Maximum word count.
           */
          lessThan?: number;
        };
        /**
         * Match documents where greaterThan < characterCount(document[field]) < lessThan.
         */
        characterCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum character count.
           */
          greaterThan?: number;
          /**
           * Maximum character count.
           */
          lessThan?: number;
        };
        /**
         * Used to perform a logical OR of filters. each element of the OR list can itself be a list  to perform a nested AND. {or:[[A,B],C]} is equivalent to (A AND B) OR C
         */
        or?: Array<
          Array<SimpleSearchAndFlatFilterItem> | SimpleSearchAndFlatFilterItem
        >;
        /**
         * Used to perform NOT filter. Can be a single filter or a list of filters to perform a !(AND). {not:[A,B]} is equivalent to !(A AND B)
         */
        not?:
          | Array<SimpleSearchAndFlatFilterItem>
          | SimpleSearchAndFlatFilterItem;
        /**
         * Filter based on data within a _chunk_ field.
         */
        chunk?: {
          /**
           * The path of the chunk field to filter on. For example: description_sentences_chunk_
           */
          path: string;
          filters: Array<SimpleSearchAndFlatFilterItem>;
        };
      }
    | FlatFilterItem
  >;
  agent_id: string;
  /**
   * Page of the results
   */
  page?: number;
  /**
   * Size of each page of results
   */
  page_size?: number;
  max_rows_at_once?: number;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type BulkTriggerAgentsOutput = {
  job_info: {
    job_id: string;
    studio_id: string;
  };
  tracking_knowledge_set: string;
};

export type BulkTriggerAgentsQueryInput = unknown;

export type GetEmbedKeyForAgentInput = {
  agent_id: string;
  project: string;
};

export type GetEmbedKeyForAgentOutput = {
  embed_key: string;
  conversation_prefix: string;
};

export type GetEmbedKeyForAgentQueryInput = unknown;

export type DeleteAgentInput = unknown;

export type DeleteAgentOutput = {};

export type DeleteAgentQueryInput = unknown;

export type SuggestRepliesInput = {
  /**
   * The ID of the conversation to generate suggestions for.
   */
  conversation_id: string;
  /**
   * The instructions to use for generating suggested replies. If provided, these are injected into the prompt used to generate suggestions, NOT override the starting prompt. (i.e. 'Each suggestion should be a question.')
   */
  instructions?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type SuggestRepliesOutput = {
  replies: Array<string>;
};

export type SuggestRepliesQueryInput = unknown;

export type ListAgentPromptModelsInput = unknown;

export type ListAgentPromptModelsOutput = {
  models: Array<{
    value?: string;
    label?: string;
    description?: string;
    group_name?: string;
    deprecation_details?: DeprecationDetails;
    importance?: number;
    data_collection_model?: boolean;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type ListAgentPromptModelsQueryInput = unknown;

export type UpsertAgentScheduledTriggersGroupInput = {
  max_count?: number;
  /**
   * If this property is true, then the sync will not trigger if there is an active conversation
   */
  prevent_triggering_if_conversation_active?: {
    /**
     * postpone all upcoming trigger items in conversation by this amount of time in seconds
     */
    postpone_by: number;
  };
};

export type UpsertAgentScheduledTriggersGroupOutput = {
  sync_document_id: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type UpsertAgentScheduledTriggersGroupQueryInput = unknown;

export type CreateAgentScheduledTriggersItemInput = {
  message: string;
  conversation_id: string;
  minutes_until_schedule: number;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type CreateAgentScheduledTriggersItemOutput = {
  trigger_id: string;
};

export type CreateAgentScheduledTriggersItemQueryInput = unknown;

export type TriggerScheduledAgentTriggerInput = {
  trigger_id: string;
  agent_version?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type TriggerScheduledAgentTriggerOutput = {
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type TriggerScheduledAgentTriggerQueryInput = unknown;

export type TriggerRecurringInput = {
  sync_id: string;
  key_user_id: string;
  message?: string;
  is_one_off?: boolean;
  project: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type TriggerRecurringOutput = {
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type TriggerRecurringQueryInput = unknown;

export type ListScheduledTriggersInput = unknown;

export type ListScheduledTriggersOutput = {
  results: Array<{
    _id?: string;
    conversation_id?: string;
    message?: string;
    expression?: string;
    type?: number;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type ListScheduledTriggersQueryInput = {
  filters?: Array<FlatFilterItem>;
  page?: number;
  page_size?: number;
  project: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type DeleteAgentScheduledTriggerInput = {
  trigger_id: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type DeleteAgentScheduledTriggerOutput = {
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type DeleteAgentScheduledTriggerQueryInput = unknown;

export type CancelAgentScheduledTriggerItemInput = {
  trigger_id: string;
};

export type CancelAgentScheduledTriggerItemOutput = {
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type CancelAgentScheduledTriggerItemQueryInput = unknown;

export type GenerateAgentRequirementsInput = {};

export type GenerateAgentRequirementsOutput = {
  results: Array<{
    provider?: string;
    tools_requiring_auth?: Array<{
      name: string;
      id: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    types?: Array<string>;
    oauth_url?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GenerateAgentRequirementsQueryInput = unknown;

/**
 *
 * Generated from a shared definition.
 */
export type AggregateTaggedAgentConversationsInput = AggregateInput;

export type AggregateTaggedAgentConversationsOutput = {
  results: Array<{
    "conversation.tags"?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  resultsMap?: {
    [k: string]:
      | {
          "conversation.tags"?: string;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }
      | undefined;
  };
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type AggregateTaggedAgentConversationsQueryInput = unknown;

export type ListAgentsCustomMetadataInput = {
  agent_id?: string;
};

export type ListAgentsCustomMetadataOutput = {
  fields: Array<{
    title: string;
    type: ENUM_type3;
    valid_options?: Array<string>;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type ListAgentsCustomMetadataQueryInput = unknown;

export type GenerateAgentParamsSchemaInput = {
  agent: {
    _id?: string;
    agent_id?: string;
    /**
     * If set, records where the agent was cloned from.
     */
    origin?: {
      root_agent_id: string;
      region?: ENUM_region;
      project?: string;
    };
    views?: number;
    public?: boolean;
    in_marketplace?: boolean;
    project?: string;
    update_date_?: string;
    insert_date_?: any /* this makes soorria sad */;
    version?: string;
    embed_config?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    embeddable?: boolean;
    share_styles?: {
      selected_format?: ENUM_selected_format1;
      primary_color?: string;
      bubble_style?: ENUM_bubble_style;
      bubble_icon?: string;
      input_placeholder_text?: string;
      hide_file_uploads?: boolean;
      hide_conversation_list?: boolean;
      hide_tool_steps?: boolean;
      starting_message_prompts?: Array<string>;
      hide_logo?: boolean;
    };
    machine_user_id?: string;
    starting_messages?: Array<{
      message:
        | {
            role: "user";
            content: string;
            importance_level?: ENUM_importance_level;
          }
        | {
            role: "agent";
            content: string;
          };
      /**
       * Any additional metadata to be stored with the message. This is not sent to the agent.
       */
      metadata?: {
        sync_item_id?: string;
        sync_id?: string;
        sync_type?: string;
        regenerate_metadata?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    }>;
    runner?:
      | {
          type: "default";
        }
      | {
          type: "multiagent";
          multiagent?: {
            max_rounds?: number;
            /**
             * Agents that the Admin agent will run.
             */
            child_agents?: Array<{
              agent_id?: string;
              system_prompt?: string;
              name?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
        };
    params?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    expiry_date_?: any /* this makes soorria sad */;
    /**
     * Can be used to force a given mas id for every run with this agent.
     */
    mas_id?: string;
    categories?: Array<string>;
    last_updated_by?: {
      user_name?: string;
      user_id?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    metadata?: {
      clone_count?: number;
      custom_task_views?: Array<{
        id: string;
        title: string;
        filters: Array<{
          type: ENUM_type2;
          id: string;
        }>;
      }>;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    active_version_id?: string;
    draft_version_id?: string;
    name?: string;
    description?: string;
    prompt_description?: string;
    /**
     * Used to provide instructions on how to use or set up the agent.
     */
    user_instructions?: string;
    /**
     * If set, the agents config will be completely replaced with the templates config.
     */
    template?: {
      agent_id: string;
      region?: ENUM_region1;
      project?: string;
    };
    emoji?: string;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
    title_prompt?: string;
    system_prompt?: string;
    /**
     * If true, suggested replies will appear for each agent message in the front-end.
     */
    suggest_replies?: boolean;
    /**
     * The prompt to inject into the LLM step in the tool used to generate suggested replies.
     */
    suggest_replies_prompt?: string;
    /**
     * If true, this agent can plan and schedule future actions
     */
    is_scheduled_triggers_enabled?: boolean;
    model?: string;
    /**
     * Maximum number of actions an agent can autonomously take before the user needs to confirm again.
     */
    autonomy_limit?: number;
    /**
     * Temperature of the selected model. Typically, higher temperature means more random output.
     */
    temperature?: number;
    knowledge?: Array<{
      knowledge_set: string;
    }>;
    actions?: Array<{
      chain_id?: string;
      agent_id?: string;
      /**
       * A jsonschema superset object that users parameters will be validated against upon execution.
       */
      params_schema?: ParamsSchema;
      agent?: {
        message_template?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      action_behaviour?: string;
      action_retry_config?: {
        max_retries?: number;
        force_retry?: boolean;
        after_retries_behaviour?: ENUM_after_retries_behaviour;
      };
      title?: string;
      name?: string;
      description?: string;
      emoji?: string;
      /**
       * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
       */
      agent_decide_prompt?: string;
      conditional_approval_rules?: {
        max_auto_approvals?: number;
        max_approvals_asked?: number;
      };
      /**
       * Useful for external systems to track which tools have been added programatically.
       */
      metadata?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Defaults to project agent is being ran from. Tools must be public to use tools in other projects.
       */
      project?: string;
      /**
       * Defaults to region agent is being ran from. Tools must be public to use tools in other regions.
       */
      region?: string;
      /**
       * DEPRECATED: Version of the tool or subagent to run. Defaults to 'latest'.
       */
      version?: string;
      /**
       * Version of the tool or subagent to run. Can be 'active', 'draft', or a specific version id.
       */
      tool_version?: string;
      /**
       * Default values the agent will use as inputs when running the tool.
       */
      default_values?: {
        /**
         * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
         */
        _subagent_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Auth account values to update in the chains. Will not be saved to the agent config.
       */
      auth_values?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      prompt_description?: string;
      /**
       * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
       */
      prompt_for_when_to_use?: string;
      wait_for_completion?: boolean;
      strict?: boolean;
    }>;
    action_behaviour?: string;
    action_retry_config?: {
      max_retries?: number;
      force_retry?: boolean;
      after_retries_behaviour?: ENUM_after_retries_behaviour;
    };
    /**
     * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
     */
    agent_decide_prompt?: string;
    conditional_approval_rules?: {
      max_auto_approvals?: number;
      max_approvals_asked?: number;
    };
    /**
     * Triggers are used to start / continue a conversation with an agent via an external service (e.g. email).
     */
    triggers?: Array<{
      type: string;
      enabled?: boolean;
      config?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      studios?: Array<{
        studio_id: string;
        label?: string;
      }>;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    escalations?: {
      email?: {
        emails?: any /* this makes soorria sad */;
      };
      slack?: {
        channels?: Array<{
          oauth_account_id?: any /* this makes soorria sad */;
        }>;
      };
    };
    /**
     * If true, the agent's progress will be streamed in real-time-ish to the frontend.
     */
    use_streaming?: boolean;
    model_options?: {
      /**
       * The maximum length of the agent's response. Note that too low a value can completely break agent behaviour.
       */
      max_output_tokens?: number;
      parallel_tool_calls?: boolean;
      /**
       * Cost reduction technique due to models performing better with more context
       */
      switch_model_after_n_tokens?: {
        model: string | null;
        n_tokens: number | null;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Some model providers support 'strict':true to force function calling to be more accurate. This activates this when supported.
       */
      strict_mode?: boolean;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Options for controlling of the agent runtime layer.
     */
    runtime?: {
      code?: string;
      enabled?: boolean;
      /**
       * If a non empty string, will not use code runtime, and instead fire a webhook, expecting the webhook to manage all further work.
       */
      webhook?: string;
    };
    tags?: {
      [k: string]:
        | boolean
        | {
            description?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    custom_metadata?: {
      options?: Array<{
        title: string;
        description?: string;
        type: ENUM_type3;
        valid_options?: Array<{
          label: string;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        is_rule_based?: boolean;
        rules?: Array<{
          conditions?: Array<FlatFilterItem>;
          action?:
            | {
                type: "increment";
                value: number;
              }
            | {
                type: "set";
                value: number | string | boolean | Array<string>;
              };
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      system_prompt?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  };
  /**
   * If true, returns the full schema (including _actions). If false, returns only the new variables.
   */
  output_full_schema?: boolean;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GenerateAgentParamsSchemaOutput = {
  /**
   * A jsonschema superset object that users parameters will be validated against upon execution.
   */
  params_schema: ParamsSchema;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GenerateAgentParamsSchemaQueryInput = unknown;

/**
 *
 * Generated from a shared definition.
 */
export type ListAgentMetricsInput = GetWhereInput;

export type ListAgentMetricsOutput = {
  results: Array<{
    insert_date_: string;
    update_date: string;
    expiry_date_?: any /* this makes soorria sad */;
    project: string;
    _id: string;
    feature: string;
    collection_id: string;
    document_id: string;
    data: {
      timestamp: string;
      agent_id: string;
      user_id: string;
      metric_type: "edits";
      metric_count?: number;
      metadata: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    };
    deleted_date?: any /* this makes soorria sad */;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type ListAgentMetricsQueryInput = unknown;

export type ListConversationsInput = unknown;

export type ListConversationsOutput = {
  results: Array<{
    knowledge_set: string;
    knowledge_count?: number;
    knowledge_chunked_count?: number;
    knowledge_vectorized_count?: number;
    metadata?: {
      _id: string;
      project: string;
      knowledge_set: string;
      insert_date?: string;
      update_date?: string;
      expiry_date_?: any /* this makes soorria sad */;
      insert_datetime?: any /* this makes soorria sad */;
      update_datetime?: any /* this makes soorria sad */;
      model?: string;
      external_id?: string;
      source_dataset_id?: string;
      conversation?: {
        tags?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        user_id?: string;
        agent_id?: string;
        agent_region?: string | null;
        agent_project?: string | null;
        bookmark?: boolean;
        /**
         * Time from which we can ignore the "state" field, and trigger the agent anyway. Prevents conversations from being permanently locked if an agent job stalls.
         */
        ignore_state_at?: string;
        title?: string;
        message_feedback?: Array<{
          feedback: ENUM_feedback;
          message_id: string;
        }>;
        debug?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        has_errored?: boolean;
        params_from_previous_trigger?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        caller_agent?: {
          agent_id?: string;
          conversation_id?: string;
          project?: string;
          region?: string;
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        /**
         * Sum total number of times all emails in this conversation have been opened
         */
        email_open_count?: number;
        is_debug_mode_task?: boolean;
        debug_mode_config_id?: string;
        custom_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        enable_custom_params?: boolean;
        state_metadata?: {
          unrecoverable_error_type?: "max-tool-retries";
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        state?: ENUM_3_ENUM;
        workforce_context?: {
          node_id: string;
          workforce_task_id?: string;
        };
        custom_metadata?: Array<{
          title: string;
          value?: number | string | boolean | Array<string>;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        workforce_node_started_event_id?: number;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      hidden?: boolean;
      type?: string;
      split_method?: {
        type: "num_tokens";
        /**
         * Maximum number of tokens per chunk
         */
        num_tokens: number;
        split_chunk?: ENUM_split_chunk;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      field_metadata?: {
        [k: string]:
          | {
              alias?: string;
              should_vectorize?: boolean;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      /**
       * Metadata for knowledge sets in the table view.
       */
      table_metadata?: {
        /**
         * A map of tool column UUIDs to their corresponding column metadata.
         */
        tool_columns?: {
          [k: string]:
            | {
                /**
                 * Metadata for the chain (tool) used in the column.
                 */
                chain?: {
                  project: string;
                  region: string;
                  studio_id: string;
                  version?: string;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                };
                /**
                 * A map of tool params to their values. Params can be inferred from table fields or by entering values manually.
                 */
                paramMapping?: {
                  [k: string]:
                    | {
                        type?: ENUM_type;
                        value?: any /* this makes soorria sad */;
                        [k: string]:
                          | any /* this makes soorria sad */
                          | undefined;
                      }
                    | undefined;
                };
                /**
                 * A map of tool output keys to column names to overwrite. Tools can overwrite existing columns.
                 */
                outputMapping?: {
                  [k: string]: string | boolean | undefined;
                };
                /**
                 * The UUID for the column.
                 */
                uid?: string;
                [k: string]: any /* this makes soorria sad */ | undefined;
              }
            | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      bulk_run?: {
        /**
         * Bulk run state of table
         */
        state?: ENUM_state;
        /**
         * The column currently being processed.
         */
        column?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      vectorizing_info?: {
        last_job_info?: {
          job_id: string;
          studio_id: string;
        } | null;
        status?: ENUM_status;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  }>;
  agents?: {
    [k: string]:
      | {
          _id: string;
          agent_id: string;
          /**
           * If set, records where the agent was cloned from.
           */
          origin?: {
            root_agent_id: string;
            region?: ENUM_region;
            project?: string;
          };
          views?: number;
          public?: boolean;
          in_marketplace?: boolean;
          project: string;
          update_date_?: string;
          insert_date_?: any /* this makes soorria sad */;
          version?: string;
          embed_config?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          embeddable?: boolean;
          share_styles?: {
            selected_format?: ENUM_selected_format1;
            primary_color?: string;
            bubble_style?: ENUM_bubble_style;
            bubble_icon?: string;
            input_placeholder_text?: string;
            hide_file_uploads?: boolean;
            hide_conversation_list?: boolean;
            hide_tool_steps?: boolean;
            starting_message_prompts?: Array<string>;
            hide_logo?: boolean;
          };
          machine_user_id?: string;
          starting_messages?: Array<{
            message:
              | {
                  role: "user";
                  content: string;
                  importance_level?: ENUM_importance_level;
                }
              | {
                  role: "agent";
                  content: string;
                };
            /**
             * Any additional metadata to be stored with the message. This is not sent to the agent.
             */
            metadata?: {
              sync_item_id?: string;
              sync_id?: string;
              sync_type?: string;
              regenerate_metadata?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
          }>;
          runner?:
            | {
                type: "default";
              }
            | {
                type: "multiagent";
                multiagent?: {
                  max_rounds?: number;
                  /**
                   * Agents that the Admin agent will run.
                   */
                  child_agents?: Array<{
                    agent_id?: string;
                    system_prompt?: string;
                    name?: string;
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  }>;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                };
              };
          params?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          expiry_date_?: any /* this makes soorria sad */;
          /**
           * Can be used to force a given mas id for every run with this agent.
           */
          mas_id?: string;
          categories?: Array<string>;
          last_updated_by?: {
            user_name?: string;
            user_id?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          metadata?: {
            clone_count?: number;
            custom_task_views?: Array<{
              id: string;
              title: string;
              filters: Array<{
                type: ENUM_type2;
                id: string;
              }>;
            }>;
            last_run_date?: any /* this makes soorria sad */;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          active_version_id?: string;
          draft_version_id?: string;
          name?: string;
          description?: string;
          prompt_description?: string;
          /**
           * Used to provide instructions on how to use or set up the agent.
           */
          user_instructions?: string;
          /**
           * If set, the agents config will be completely replaced with the templates config.
           */
          template?: {
            agent_id: string;
            region?: ENUM_region1;
            project?: string;
          };
          emoji?: string;
          /**
           * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
           */
          max_job_duration?: ENUM_max_job_duration;
          title_prompt?: string;
          system_prompt?: string;
          /**
           * If true, suggested replies will appear for each agent message in the front-end.
           */
          suggest_replies?: boolean;
          /**
           * The prompt to inject into the LLM step in the tool used to generate suggested replies.
           */
          suggest_replies_prompt?: string;
          /**
           * If true, this agent can plan and schedule future actions
           */
          is_scheduled_triggers_enabled?: boolean;
          model?: string;
          /**
           * Maximum number of actions an agent can autonomously take before the user needs to confirm again.
           */
          autonomy_limit?: number;
          /**
           * Temperature of the selected model. Typically, higher temperature means more random output.
           */
          temperature?: number;
          knowledge?: Array<{
            knowledge_set: string;
          }>;
          actions?: Array<{
            chain_id?: string;
            agent_id?: string;
            /**
             * A jsonschema superset object that users parameters will be validated against upon execution.
             */
            params_schema?: ParamsSchema;
            agent?: {
              message_template?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            action_behaviour?: string;
            action_retry_config?: {
              max_retries?: number;
              force_retry?: boolean;
              after_retries_behaviour?: ENUM_after_retries_behaviour;
            };
            title?: string;
            name?: string;
            description?: string;
            emoji?: string;
            /**
             * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
             */
            agent_decide_prompt?: string;
            conditional_approval_rules?: {
              max_auto_approvals?: number;
              max_approvals_asked?: number;
            };
            /**
             * Useful for external systems to track which tools have been added programatically.
             */
            metadata?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Defaults to project agent is being ran from. Tools must be public to use tools in other projects.
             */
            project?: string;
            /**
             * Defaults to region agent is being ran from. Tools must be public to use tools in other regions.
             */
            region?: string;
            /**
             * DEPRECATED: Version of the tool or subagent to run. Defaults to 'latest'.
             */
            version?: string;
            /**
             * Version of the tool or subagent to run. Can be 'active', 'draft', or a specific version id.
             */
            tool_version?: string;
            /**
             * Default values the agent will use as inputs when running the tool.
             */
            default_values?: {
              /**
               * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
               */
              _subagent_params?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Auth account values to update in the chains. Will not be saved to the agent config.
             */
            auth_values?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            prompt_description?: string;
            /**
             * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
             */
            prompt_for_when_to_use?: string;
            wait_for_completion?: boolean;
            strict?: boolean;
          }>;
          action_behaviour?: string;
          action_retry_config?: {
            max_retries?: number;
            force_retry?: boolean;
            after_retries_behaviour?: ENUM_after_retries_behaviour;
          };
          /**
           * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
           */
          agent_decide_prompt?: string;
          conditional_approval_rules?: {
            max_auto_approvals?: number;
            max_approvals_asked?: number;
          };
          /**
           * Triggers are used to start / continue a conversation with an agent via an external service (e.g. email).
           */
          triggers?: Array<{
            type: string;
            enabled?: boolean;
            config?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            studios?: Array<{
              studio_id: string;
              label?: string;
            }>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }>;
          /**
           * A jsonschema superset object that users parameters will be validated against upon execution.
           */
          params_schema?: ParamsSchema;
          escalations?: {
            email?: {
              emails?: any /* this makes soorria sad */;
            };
            slack?: {
              channels?: Array<{
                oauth_account_id?: any /* this makes soorria sad */;
              }>;
            };
          };
          /**
           * If true, the agent's progress will be streamed in real-time-ish to the frontend.
           */
          use_streaming?: boolean;
          model_options?: {
            /**
             * The maximum length of the agent's response. Note that too low a value can completely break agent behaviour.
             */
            max_output_tokens?: number;
            parallel_tool_calls?: boolean;
            /**
             * Cost reduction technique due to models performing better with more context
             */
            switch_model_after_n_tokens?: {
              model: string | null;
              n_tokens: number | null;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Some model providers support 'strict':true to force function calling to be more accurate. This activates this when supported.
             */
            strict_mode?: boolean;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          /**
           * Options for controlling of the agent runtime layer.
           */
          runtime?: {
            code?: string;
            enabled?: boolean;
            /**
             * If a non empty string, will not use code runtime, and instead fire a webhook, expecting the webhook to manage all further work.
             */
            webhook?: string;
          };
          tags?: {
            [k: string]:
              | boolean
              | {
                  description?: string;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          custom_metadata?: {
            options?: Array<{
              title: string;
              description?: string;
              type: ENUM_type3;
              valid_options?: Array<{
                label: string;
                [k: string]: any /* this makes soorria sad */ | undefined;
              }>;
              is_rule_based?: boolean;
              rules?: Array<{
                conditions?: Array<FlatFilterItem>;
                action?:
                  | {
                      type: "increment";
                      value: number;
                    }
                  | {
                      type: "set";
                      value: number | string | boolean | Array<string>;
                    };
                [k: string]: any /* this makes soorria sad */ | undefined;
              }>;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>;
            system_prompt?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
        }
      | undefined;
  };
};

export type ListConversationsQueryInput = {
  filters?: Array<FlatFilterItem>;
  /**
   * Filter conversations by event type and trigger type/studio id
   */
  event_logs_filters?: Array<{
    /**
     * Studio id of tool or trigger type
     */
    event_value: string;
    event_type: ENUM_event_type;
    /**
     * Minimum number of times a trigger type or tool has been used in this conversation
     */
    min_count?: number;
    /**
     * Maximum number of times a trigger type or tool has been used in this conversation
     */
    max_count?: number;
    comparison_type: ENUM_comparison_type;
  }>;
  page?: number;
  page_size?: number;
  include_agent_details?: boolean;
  include_debug_info?: boolean;
  /**
   * Fields to sort by. For each field, sort by descending or ascending. If you are using descending by datetime, it will get the most recent ones. Can be provided in format ["sortfield","subsortfield"] or in format [{"sortfield":"desc"}, {"subsortfield":"asc"}]. If provided as a query parameter, use: sort=${JSON.stringify([{"sortfield":"desc"}])}
   */
  sort?: SortConfig;
  query?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type ListConversationStudiosHistoryInput = unknown;

export type ListConversationStudiosHistoryOutput = {
  results: Array<StudioRunHistory>;
  studios?: {
    [k: string]:
      | {
          version?: string;
          project?: string;
          _id?: string;
          studio_id: string;
          /**
           * This tool is listed on the tool marketplace
           */
          in_marketplace?: boolean;
          insert_date_?: string;
          update_date_?: string;
          is_hidden?: boolean;
          tags?: {
            type?: "transformation";
            categories?: {
              [k: string]: true | undefined;
            };
            /**
             * The source of the integration. For example, 'Knowledge: Linear', which imports data from Linear, this would be 'linear'.
             */
            integration_source?: string;
            integrations?: {
              [k: string]: true | undefined;
            };
            use_cases?: {
              [k: string]: true | undefined;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          machine_user_id?: string;
          creator_user_id?: string;
          creator_first_name?: string;
          creator_last_name?: string;
          creator_display_picture?: string;
          /**
           * Anyone can run this tool
           */
          publicly_triggerable?: boolean;
          /**
           * Anyone can view or clone this tool
           */
          public?: boolean;
          metadata?: {
            source_studio_id?: string;
            source_region?: string;
            source_project?: string;
            clone_count?: number;
            last_run_date?: any /* this makes soorria sad */;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          share_styles?: {
            selected_format?: ENUM_selected_format;
            primary_color?: string;
            hide_guidance_tip?: boolean;
            guidance_tip_text?: string;
            cta_text?: string;
            cta_icon?: string;
            hide_logo?: boolean;
          };
          schedule?: {
            frequency?: ENUM_frequency;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          active_version_id?: string;
          draft_version_id?: string;
          title?: string;
          description?: string;
          prompt_description?: string;
          cover_image?: string;
          emoji?: string;
          transformations?: {
            steps: Array<{
              name: string;
              transformation: string;
              params: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              saved_params?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              output?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              /**
               * A jsonschema superset object to provide metadata for tool output fields.
               */
              output_schema?: {
                metadata?: {
                  /**
                   * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
                   */
                  field_order?: Array<string>;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                };
                properties?: {
                  [k: string]:
                    | {
                        metadata?: {
                          content_type?: "external_field";
                          /**
                           * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                           */
                          external_name?: string;
                          render_mode?: ENUM_render_mode;
                        };
                        [k: string]:
                          | any /* this makes soorria sad */
                          | undefined;
                      }
                    | undefined;
                };
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              default_output_values?: Array<{
                original_key: string;
                updated_key?: string;
                value: any /* this makes soorria sad */;
              }>;
              continue_on_error?: boolean;
              use_fallback_on_skip?: boolean;
              foreach?: string | Array<any /* this makes soorria sad */>;
              if?: string | boolean | null;
              display_name?: string;
              /**
               * If present, the tool step invent will be activated with the specified instructions in the tool builder.
               */
              invent_instructions?: string;
            }>;
            output?: {
              [k: string]: string | undefined;
            } | null;
          };
          /**
           * A jsonschema superset object that users parameters will be validated against upon execution.
           */
          params_schema?: ParamsSchema;
          /**
           * A jsonschema superset object to provide metadata for tool output fields.
           */
          output_schema?: {
            metadata?: {
              /**
               * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
               */
              field_order?: Array<string>;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            properties?: {
              [k: string]:
                | {
                    metadata?: {
                      content_type?: "external_field";
                      /**
                       * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                       */
                      external_name?: string;
                      render_mode?: ENUM_render_mode;
                    };
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  }
                | undefined;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          /**
           * Mapping from alias -> real variable path
           */
          state_mapping?: {
            [k: string]: string | undefined;
          };
          /**
           * Override the starting state of the studio
           */
          state?: {
            params?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            steps?: {
              [k: string]:
                | {
                    output?: {
                      [k: string]: any /* this makes soorria sad */ | undefined;
                    };
                    executionTime?: number;
                    results?: Array<any /* this makes soorria sad */>;
                    skipped?: boolean;
                    skippedItems?: Array<any /* this makes soorria sad */>;
                    status?: ENUM_status2;
                    /**
                     * Status of each item in the foreach, key should be the foreach index
                     */
                    foreach_statuses?: {
                      status?: ENUM_status2;
                      [k: string]: any /* this makes soorria sad */ | undefined;
                    };
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  }
                | undefined;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          predicted_output?: Array<{
            title?: string;
            slug?: string;
            type?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }>;
          /**
           * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
           */
          max_job_duration?: ENUM_max_job_duration;
          metrics?: {
            views?: number;
            executions?: number;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          share_id?: string;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }
      | undefined;
  };
  agentDetails?: {
    [k: string]:
      | {
          _id: string;
          agent_id: string;
          /**
           * If set, records where the agent was cloned from.
           */
          origin?: {
            root_agent_id: string;
            region?: ENUM_region;
            project?: string;
          };
          views?: number;
          public?: boolean;
          in_marketplace?: boolean;
          project: string;
          update_date_?: string;
          insert_date_?: any /* this makes soorria sad */;
          version?: string;
          embed_config?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          embeddable?: boolean;
          share_styles?: {
            selected_format?: ENUM_selected_format1;
            primary_color?: string;
            bubble_style?: ENUM_bubble_style;
            bubble_icon?: string;
            input_placeholder_text?: string;
            hide_file_uploads?: boolean;
            hide_conversation_list?: boolean;
            hide_tool_steps?: boolean;
            starting_message_prompts?: Array<string>;
            hide_logo?: boolean;
          };
          machine_user_id?: string;
          starting_messages?: Array<{
            message:
              | {
                  role: "user";
                  content: string;
                  importance_level?: ENUM_importance_level;
                }
              | {
                  role: "agent";
                  content: string;
                };
            /**
             * Any additional metadata to be stored with the message. This is not sent to the agent.
             */
            metadata?: {
              sync_item_id?: string;
              sync_id?: string;
              sync_type?: string;
              regenerate_metadata?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
          }>;
          runner?:
            | {
                type: "default";
              }
            | {
                type: "multiagent";
                multiagent?: {
                  max_rounds?: number;
                  /**
                   * Agents that the Admin agent will run.
                   */
                  child_agents?: Array<{
                    agent_id?: string;
                    system_prompt?: string;
                    name?: string;
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  }>;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                };
              };
          params?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          expiry_date_?: any /* this makes soorria sad */;
          /**
           * Can be used to force a given mas id for every run with this agent.
           */
          mas_id?: string;
          categories?: Array<string>;
          last_updated_by?: {
            user_name?: string;
            user_id?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          metadata?: {
            clone_count?: number;
            custom_task_views?: Array<{
              id: string;
              title: string;
              filters: Array<{
                type: ENUM_type2;
                id: string;
              }>;
            }>;
            last_run_date?: any /* this makes soorria sad */;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          active_version_id?: string;
          draft_version_id?: string;
          name?: string;
          description?: string;
          prompt_description?: string;
          /**
           * Used to provide instructions on how to use or set up the agent.
           */
          user_instructions?: string;
          /**
           * If set, the agents config will be completely replaced with the templates config.
           */
          template?: {
            agent_id: string;
            region?: ENUM_region1;
            project?: string;
          };
          emoji?: string;
          /**
           * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
           */
          max_job_duration?: ENUM_max_job_duration;
          title_prompt?: string;
          system_prompt?: string;
          /**
           * If true, suggested replies will appear for each agent message in the front-end.
           */
          suggest_replies?: boolean;
          /**
           * The prompt to inject into the LLM step in the tool used to generate suggested replies.
           */
          suggest_replies_prompt?: string;
          /**
           * If true, this agent can plan and schedule future actions
           */
          is_scheduled_triggers_enabled?: boolean;
          model?: string;
          /**
           * Maximum number of actions an agent can autonomously take before the user needs to confirm again.
           */
          autonomy_limit?: number;
          /**
           * Temperature of the selected model. Typically, higher temperature means more random output.
           */
          temperature?: number;
          knowledge?: Array<{
            knowledge_set: string;
          }>;
          actions?: Array<{
            chain_id?: string;
            agent_id?: string;
            /**
             * A jsonschema superset object that users parameters will be validated against upon execution.
             */
            params_schema?: ParamsSchema;
            agent?: {
              message_template?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            action_behaviour?: string;
            action_retry_config?: {
              max_retries?: number;
              force_retry?: boolean;
              after_retries_behaviour?: ENUM_after_retries_behaviour;
            };
            title?: string;
            name?: string;
            description?: string;
            emoji?: string;
            /**
             * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
             */
            agent_decide_prompt?: string;
            conditional_approval_rules?: {
              max_auto_approvals?: number;
              max_approvals_asked?: number;
            };
            /**
             * Useful for external systems to track which tools have been added programatically.
             */
            metadata?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Defaults to project agent is being ran from. Tools must be public to use tools in other projects.
             */
            project?: string;
            /**
             * Defaults to region agent is being ran from. Tools must be public to use tools in other regions.
             */
            region?: string;
            /**
             * DEPRECATED: Version of the tool or subagent to run. Defaults to 'latest'.
             */
            version?: string;
            /**
             * Version of the tool or subagent to run. Can be 'active', 'draft', or a specific version id.
             */
            tool_version?: string;
            /**
             * Default values the agent will use as inputs when running the tool.
             */
            default_values?: {
              /**
               * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
               */
              _subagent_params?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Auth account values to update in the chains. Will not be saved to the agent config.
             */
            auth_values?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            prompt_description?: string;
            /**
             * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
             */
            prompt_for_when_to_use?: string;
            wait_for_completion?: boolean;
            strict?: boolean;
          }>;
          action_behaviour?: string;
          action_retry_config?: {
            max_retries?: number;
            force_retry?: boolean;
            after_retries_behaviour?: ENUM_after_retries_behaviour;
          };
          /**
           * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
           */
          agent_decide_prompt?: string;
          conditional_approval_rules?: {
            max_auto_approvals?: number;
            max_approvals_asked?: number;
          };
          /**
           * Triggers are used to start / continue a conversation with an agent via an external service (e.g. email).
           */
          triggers?: Array<{
            type: string;
            enabled?: boolean;
            config?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            studios?: Array<{
              studio_id: string;
              label?: string;
            }>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }>;
          /**
           * A jsonschema superset object that users parameters will be validated against upon execution.
           */
          params_schema?: ParamsSchema;
          escalations?: {
            email?: {
              emails?: any /* this makes soorria sad */;
            };
            slack?: {
              channels?: Array<{
                oauth_account_id?: any /* this makes soorria sad */;
              }>;
            };
          };
          /**
           * If true, the agent's progress will be streamed in real-time-ish to the frontend.
           */
          use_streaming?: boolean;
          model_options?: {
            /**
             * The maximum length of the agent's response. Note that too low a value can completely break agent behaviour.
             */
            max_output_tokens?: number;
            parallel_tool_calls?: boolean;
            /**
             * Cost reduction technique due to models performing better with more context
             */
            switch_model_after_n_tokens?: {
              model: string | null;
              n_tokens: number | null;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Some model providers support 'strict':true to force function calling to be more accurate. This activates this when supported.
             */
            strict_mode?: boolean;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          /**
           * Options for controlling of the agent runtime layer.
           */
          runtime?: {
            code?: string;
            enabled?: boolean;
            /**
             * If a non empty string, will not use code runtime, and instead fire a webhook, expecting the webhook to manage all further work.
             */
            webhook?: string;
          };
          tags?: {
            [k: string]:
              | boolean
              | {
                  description?: string;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | undefined;
          };
          custom_metadata?: {
            options?: Array<{
              title: string;
              description?: string;
              type: ENUM_type3;
              valid_options?: Array<{
                label: string;
                [k: string]: any /* this makes soorria sad */ | undefined;
              }>;
              is_rule_based?: boolean;
              rules?: Array<{
                conditions?: Array<FlatFilterItem>;
                action?:
                  | {
                      type: "increment";
                      value: number;
                    }
                  | {
                      type: "set";
                      value: number | string | boolean | Array<string>;
                    };
                [k: string]: any /* this makes soorria sad */ | undefined;
              }>;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>;
            system_prompt?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
        }
      | undefined;
  };
};

export type ListConversationStudiosHistoryQueryInput = {
  agent_id: string;
  conversation_id: string;
  page_size?: number;
  page?: number;
};

export type AggregateAgentsBillingMetricsInput = {
  filters?: Array<FlatFilterItem>;
  page?: number;
  page_size?: number;
  include_task_details?: boolean;
};

export type AggregateAgentsBillingMetricsOutput = {
  results: {
    total_tasks: number;
    total_credits: number;
    total_events: number;
    agents: Array<{
      agent_id: string;
      name?: string;
      description?: string;
      emoji?: string;
      processed_tasks: number;
      processed_events: number;
      credits_used: number;
    }>;
  };
};

export type AggregateAgentsBillingMetricsQueryInput = unknown;

export type CancelAgentInput = unknown;

export type CancelAgentOutput = unknown;

export type CancelAgentQueryInput = unknown;

export type SubmitMessageFeedbackInput = {
  task_details: string;
  conversation_id: string;
  message_id: string;
  task_tags: Array<string>;
  is_full_conversation_feedback?: boolean;
  notes?: string;
  is_feedback_positive?: boolean;
  user_name?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type SubmitMessageFeedbackOutput = {};

export type SubmitMessageFeedbackQueryInput = unknown;

export type GetAgentAnalyticsInput = {
  filters?: {
    agentId?: {
      filter_type?: "is" | "is_not";
      value?: Array<string>;
    };
    insert_date_?: {
      filter_type?: "date_range";
      value?: {
        from?: string;
        to?: string;
      };
    };
  };
};

export type GetAgentAnalyticsOutput = {
  states_results: {
    timeseries: Array<{
      insert_date_: any /* this makes soorria sad */;
      source_type: ENUM_43_ENUM;
      /**
       * The ID of the source of the event. For example, the agent_id.
       */
      source_id: string;
      event_type: ENUM_event_type1;
      /**
       * A indexable value for the event that happened.
       * e.g. if the event is 'label-added', this should be the label/tag that was added
       */
      event_value: string;
      frequency: number;
      total: number;
      bucket: ENUM_bucket;
    }>;
    total_change: {
      absolute: number | null;
      percentage: number | null;
      current_value?: number | null;
      previous_value?: number | null;
    };
    change_per_event_value: {
      [k: string]:
        | {
            absolute: number | null;
            percentage: number | null;
            current_value?: number | null;
            previous_value?: number | null;
          }
        | undefined;
    };
  };
  labels_results: {
    timeseries: Array<{
      insert_date_: any /* this makes soorria sad */;
      source_type: ENUM_43_ENUM;
      /**
       * The ID of the source of the event. For example, the agent_id.
       */
      source_id: string;
      event_type: ENUM_event_type1;
      /**
       * A indexable value for the event that happened.
       * e.g. if the event is 'label-added', this should be the label/tag that was added
       */
      event_value: string;
      frequency: number;
      total: number;
      bucket: ENUM_bucket;
    }>;
    total_change: {
      absolute: number | null;
      percentage: number | null;
      current_value?: number | null;
      previous_value?: number | null;
    };
    change_per_event_value: {
      [k: string]:
        | {
            absolute: number | null;
            percentage: number | null;
            current_value?: number | null;
            previous_value?: number | null;
          }
        | undefined;
    };
  };
  tasks_created_results: {
    timeseries: Array<{
      insert_date_: any /* this makes soorria sad */;
      source_type: ENUM_43_ENUM;
      /**
       * The ID of the source of the event. For example, the agent_id.
       */
      source_id: string;
      frequency: number;
      total: number;
      bucket: ENUM_bucket;
    }>;
    total_change: {
      absolute: number | null;
      percentage: number | null;
      current_value?: number | null;
      previous_value?: number | null;
    };
  };
  last_updated_at: string;
};

export type GetAgentAnalyticsQueryInput = unknown;

export type BatchScheduleAgentTasksInput = {
  knowledge_set: string;
  sync_document_id: string;
  page?: number;
  page_size?: number;
  /**
   * Fields to sort by. For each field, sort by descending or ascending. If you are using descending by datetime, it will get the most recent ones. Can be provided in format ["sortfield","subsortfield"] or in format [{"sortfield":"desc"}, {"subsortfield":"asc"}]. If provided as a query parameter, use: sort=${JSON.stringify([{"sortfield":"desc"}])}
   */
  sort?: SortConfig;
};

export type BatchScheduleAgentTasksOutput = {
  interval: ENUM_interval;
  max_tasks: number;
  message_template: string;
  total_scheduled_tasks: number;
  sets: Array<{
    schedule_date: string;
    is_triggered_immediately: boolean;
    data: Array<{
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
  }>;
};

export type BatchScheduleAgentTasksQueryInput = unknown;

export type CreateBatchScheduleAgentTasksInput = {
  knowledge_set: string;
  message_template: string;
  display_name: string;
  contract: {
    /**
     * operating timezone e.g. 'America/New_York'
     */
    time_zone?: string;
    /**
     * time in format HH:mm:ss
     */
    start_of_workday?: string;
    /**
     * time in format HH:mm:ss
     */
    end_of_workday?: string;
    max_tasks?: number;
    interval?: ENUM_interval;
    active_week_days?: {
      sunday: boolean;
      monday: boolean;
      tuesday: boolean;
      wednesday: boolean;
      thursday: boolean;
      friday: boolean;
      saturday: boolean;
    };
    max_count?: {
      number: number;
      interval: "daily";
    };
    /**
     * If this property is true, then the specific time will be found on the sync item
     */
    one_time_action?: boolean;
    /**
     * If this property is true, then the sync will not trigger if there is an active conversation
     */
    prevent_triggering_if_conversation_active?: {
      /**
       * postpone all upcoming trigger items in conversation by this amount of time in seconds
       */
      postpone_by: number;
    };
    metadata?: {
      time_zone?: string;
    };
  };
  metadata?: {
    is_debug_mode_enabled?: boolean;
    debug_mode_config_id?: string;
    name?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
};

export type CreateBatchScheduleAgentTasksOutput = {
  sync_document_id: string;
  sync_items_document_ids: Array<string>;
};

export type CreateBatchScheduleAgentTasksQueryInput = unknown;

export type CancelBatchScheduleAgentTasksGroupInput = {
  sync_document_ids: Array<string>;
};

export type CancelBatchScheduleAgentTasksGroupOutput = {
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type CancelBatchScheduleAgentTasksGroupQueryInput = unknown;

export type PauseBatchScheduleAgentTasksGroupInput = {
  sync_document_ids: Array<string>;
};

export type PauseBatchScheduleAgentTasksGroupOutput = {
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type PauseBatchScheduleAgentTasksGroupQueryInput = unknown;

export type ResumeBatchScheduleAgentTasksGroupInput = {
  sync_document_ids: Array<string>;
};

export type ResumeBatchScheduleAgentTasksGroupOutput = {
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type ResumeBatchScheduleAgentTasksGroupQueryInput = unknown;

export type ListAgentTaskViewInput = {
  page_size?: number;
  cursor?: {
    after?: string;
    before?: string;
  };
  debug?: boolean;
  agent_override?: {
    _id?: string;
    agent_id?: string;
    /**
     * If set, records where the agent was cloned from.
     */
    origin?: {
      root_agent_id: string;
      region?: ENUM_region;
      project?: string;
    };
    views?: number;
    public?: boolean;
    in_marketplace?: boolean;
    project?: string;
    update_date_?: string;
    insert_date_?: any /* this makes soorria sad */;
    version?: string;
    embed_config?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    embeddable?: boolean;
    share_styles?: {
      selected_format?: ENUM_selected_format1;
      primary_color?: string;
      bubble_style?: ENUM_bubble_style;
      bubble_icon?: string;
      input_placeholder_text?: string;
      hide_file_uploads?: boolean;
      hide_conversation_list?: boolean;
      hide_tool_steps?: boolean;
      starting_message_prompts?: Array<string>;
      hide_logo?: boolean;
    };
    machine_user_id?: string;
    starting_messages?: Array<{
      message:
        | {
            role: "user";
            content: string;
            importance_level?: ENUM_importance_level;
          }
        | {
            role: "agent";
            content: string;
          };
      /**
       * Any additional metadata to be stored with the message. This is not sent to the agent.
       */
      metadata?: {
        sync_item_id?: string;
        sync_id?: string;
        sync_type?: string;
        regenerate_metadata?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    }>;
    runner?:
      | {
          type: "default";
        }
      | {
          type: "multiagent";
          multiagent?: {
            max_rounds?: number;
            /**
             * Agents that the Admin agent will run.
             */
            child_agents?: Array<{
              agent_id?: string;
              system_prompt?: string;
              name?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
        };
    params?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    expiry_date_?: any /* this makes soorria sad */;
    /**
     * Can be used to force a given mas id for every run with this agent.
     */
    mas_id?: string;
    categories?: Array<string>;
    last_updated_by?: {
      user_name?: string;
      user_id?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    metadata?: {
      clone_count?: number;
      custom_task_views?: Array<{
        id: string;
        title: string;
        filters: Array<{
          type: ENUM_type2;
          id: string;
        }>;
      }>;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    active_version_id?: string;
    draft_version_id?: string;
    name?: string;
    description?: string;
    prompt_description?: string;
    /**
     * Used to provide instructions on how to use or set up the agent.
     */
    user_instructions?: string;
    /**
     * If set, the agents config will be completely replaced with the templates config.
     */
    template?: {
      agent_id: string;
      region?: ENUM_region1;
      project?: string;
    };
    emoji?: string;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
    title_prompt?: string;
    system_prompt?: string;
    /**
     * If true, suggested replies will appear for each agent message in the front-end.
     */
    suggest_replies?: boolean;
    /**
     * The prompt to inject into the LLM step in the tool used to generate suggested replies.
     */
    suggest_replies_prompt?: string;
    /**
     * If true, this agent can plan and schedule future actions
     */
    is_scheduled_triggers_enabled?: boolean;
    model?: string;
    /**
     * Maximum number of actions an agent can autonomously take before the user needs to confirm again.
     */
    autonomy_limit?: number;
    /**
     * Temperature of the selected model. Typically, higher temperature means more random output.
     */
    temperature?: number;
    knowledge?: Array<{
      knowledge_set: string;
    }>;
    actions?: Array<{
      chain_id?: string;
      agent_id?: string;
      /**
       * A jsonschema superset object that users parameters will be validated against upon execution.
       */
      params_schema?: ParamsSchema;
      agent?: {
        message_template?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      action_behaviour?: string;
      action_retry_config?: {
        max_retries?: number;
        force_retry?: boolean;
        after_retries_behaviour?: ENUM_after_retries_behaviour;
      };
      title?: string;
      name?: string;
      description?: string;
      emoji?: string;
      /**
       * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
       */
      agent_decide_prompt?: string;
      conditional_approval_rules?: {
        max_auto_approvals?: number;
        max_approvals_asked?: number;
      };
      /**
       * Useful for external systems to track which tools have been added programatically.
       */
      metadata?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Defaults to project agent is being ran from. Tools must be public to use tools in other projects.
       */
      project?: string;
      /**
       * Defaults to region agent is being ran from. Tools must be public to use tools in other regions.
       */
      region?: string;
      /**
       * DEPRECATED: Version of the tool or subagent to run. Defaults to 'latest'.
       */
      version?: string;
      /**
       * Version of the tool or subagent to run. Can be 'active', 'draft', or a specific version id.
       */
      tool_version?: string;
      /**
       * Default values the agent will use as inputs when running the tool.
       */
      default_values?: {
        /**
         * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
         */
        _subagent_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Auth account values to update in the chains. Will not be saved to the agent config.
       */
      auth_values?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      prompt_description?: string;
      /**
       * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
       */
      prompt_for_when_to_use?: string;
      wait_for_completion?: boolean;
      strict?: boolean;
    }>;
    action_behaviour?: string;
    action_retry_config?: {
      max_retries?: number;
      force_retry?: boolean;
      after_retries_behaviour?: ENUM_after_retries_behaviour;
    };
    /**
     * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
     */
    agent_decide_prompt?: string;
    conditional_approval_rules?: {
      max_auto_approvals?: number;
      max_approvals_asked?: number;
    };
    /**
     * Triggers are used to start / continue a conversation with an agent via an external service (e.g. email).
     */
    triggers?: Array<{
      type: string;
      enabled?: boolean;
      config?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      studios?: Array<{
        studio_id: string;
        label?: string;
      }>;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    escalations?: {
      email?: {
        emails?: any /* this makes soorria sad */;
      };
      slack?: {
        channels?: Array<{
          oauth_account_id?: any /* this makes soorria sad */;
        }>;
      };
    };
    /**
     * If true, the agent's progress will be streamed in real-time-ish to the frontend.
     */
    use_streaming?: boolean;
    model_options?: {
      /**
       * The maximum length of the agent's response. Note that too low a value can completely break agent behaviour.
       */
      max_output_tokens?: number;
      parallel_tool_calls?: boolean;
      /**
       * Cost reduction technique due to models performing better with more context
       */
      switch_model_after_n_tokens?: {
        model: string | null;
        n_tokens: number | null;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Some model providers support 'strict':true to force function calling to be more accurate. This activates this when supported.
       */
      strict_mode?: boolean;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Options for controlling of the agent runtime layer.
     */
    runtime?: {
      code?: string;
      enabled?: boolean;
      /**
       * If a non empty string, will not use code runtime, and instead fire a webhook, expecting the webhook to manage all further work.
       */
      webhook?: string;
    };
    tags?: {
      [k: string]:
        | boolean
        | {
            description?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    custom_metadata?: {
      options?: Array<{
        title: string;
        description?: string;
        type: ENUM_type3;
        valid_options?: Array<{
          label: string;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        is_rule_based?: boolean;
        rules?: Array<{
          conditions?: Array<FlatFilterItem>;
          action?:
            | {
                type: "increment";
                value: number;
              }
            | {
                type: "set";
                value: number | string | boolean | Array<string>;
              };
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      system_prompt?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  };
};

export type ListAgentTaskViewOutput = {
  /**
   * The task view items for the frontend to render.
   */
  results: Array<AgentTaskViewItem>;
  /**
   * The "after" cursor to use in the next request to get the next page of results. If one is not returned, there are no more results to fetch.
   */
  next_cursor?: string;
};

export type ListAgentTaskViewQueryInput = unknown;

export type GetAgentTaskViewTriggerMessageInput = unknown;

export type GetAgentTaskViewTriggerMessageOutput = {
  trigger_message: {
    item_id: string;
    insert_date_: string;
    /**
     * Whether the UI item in the frontend is expanded (vs collapsed) by default
     */
    is_expanded_by_default: boolean;
    is_in_hidden_group: boolean;
    debug?: {
      original_documents?: Array<{
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    feedback?: {
      task_details?: string;
      original_task?: string;
      task_id?: string;
      message_id: string;
      task_tags?: Array<string>;
      notes?: string;
      is_full_conversation_feedback?: boolean;
      is_feedback_positive?: boolean;
      user_name?: string;
    };
    content: UserMessageTaskViewContent;
    /**
     * Only applicable to Workforce Task View. The ID of the parent item in the task view.
     */
    parent_item_id?: string;
  } | null;
};

export type GetAgentTaskViewTriggerMessageQueryInput = {};

export type CreateEmailWarmupInboxInput = {
  from_name: string;
  email: string;
  password: string;
  max_email_per_day?: number;
  custom_tracking_url?: string;
  bcc?: string;
  signature?: string;
  total_warmup_per_day?: any /* this makes soorria sad */;
  daily_rampup?: number;
  reply_rate_percentage?: number;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type CreateEmailWarmupInboxOutput = {
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type CreateEmailWarmupInboxQueryInput = unknown;

export type GetEmailWarmupStatsInput = unknown;

export type GetEmailWarmupStatsOutput = {
  id?: number;
  status?: string;
  created_at?: string;
  reply_rate?: number;
  warmup_key_id?: string;
  blocked_reason?: string | null;
  total_sent_count?: number;
  total_spam_count?: number;
  warmup_max_count?: number;
  warmup_min_count?: number;
  is_warmup_blocked?: boolean;
  max_email_per_day?: number;
  warmup_reputation?: string | null;
  stats?: {
    id?: number;
    sent_count?: string;
    spam_count?: string;
    inbox_count?: string;
    warmup_email_received_count?: string;
    stats_by_date?: Array<{
      id?: number;
      date?: string;
      sent_count?: number;
      reply_count?: number;
      save_from_spam_count?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetEmailWarmupStatsQueryInput = {
  include_stats?: boolean;
};

export type StartEmailWarmupInput = {
  email: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type StartEmailWarmupOutput = {
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type StartEmailWarmupQueryInput = unknown;

export type StopEmailWarmupInput = {
  email: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type StopEmailWarmupOutput = {
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type StopEmailWarmupQueryInput = unknown;

export type CloneConversationInput = {
  metadata_updates: {
    model?: string;
    external_id?: string;
    source_dataset_id?: string;
    conversation?: {
      tags?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      user_id?: string;
      agent_id?: string;
      agent_region?: string | null;
      agent_project?: string | null;
      bookmark?: boolean;
      /**
       * Time from which we can ignore the "state" field, and trigger the agent anyway. Prevents conversations from being permanently locked if an agent job stalls.
       */
      ignore_state_at?: string;
      title?: string;
      message_feedback?: Array<{
        feedback: ENUM_feedback;
        message_id: string;
      }>;
      debug?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      has_errored?: boolean;
      params_from_previous_trigger?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      caller_agent?: {
        agent_id?: string;
        conversation_id?: string;
        project?: string;
        region?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Sum total number of times all emails in this conversation have been opened
       */
      email_open_count?: number;
      is_debug_mode_task?: boolean;
      debug_mode_config_id?: string;
      custom_params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      enable_custom_params?: boolean;
      state_metadata?: {
        unrecoverable_error_type?: "max-tool-retries";
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      state?: ENUM_3_ENUM;
      workforce_context?: {
        node_id: string;
        workforce_task_id?: string;
      };
      custom_metadata?: Array<{
        title: string;
        value?: number | string | boolean | Array<string>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      workforce_node_started_event_id?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    hidden?: boolean;
    type?: string;
    split_method?: {
      type: "num_tokens";
      /**
       * Maximum number of tokens per chunk
       */
      num_tokens: number;
      split_chunk?: ENUM_split_chunk;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    field_metadata?: {
      [k: string]:
        | {
            alias?: string;
            should_vectorize?: boolean;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    /**
     * Metadata for knowledge sets in the table view.
     */
    table_metadata?: {
      /**
       * A map of tool column UUIDs to their corresponding column metadata.
       */
      tool_columns?: {
        [k: string]:
          | {
              /**
               * Metadata for the chain (tool) used in the column.
               */
              chain?: {
                project: string;
                region: string;
                studio_id: string;
                version?: string;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              /**
               * A map of tool params to their values. Params can be inferred from table fields or by entering values manually.
               */
              paramMapping?: {
                [k: string]:
                  | {
                      type?: ENUM_type;
                      value?: any /* this makes soorria sad */;
                      [k: string]: any /* this makes soorria sad */ | undefined;
                    }
                  | undefined;
              };
              /**
               * A map of tool output keys to column names to overwrite. Tools can overwrite existing columns.
               */
              outputMapping?: {
                [k: string]: string | boolean | undefined;
              };
              /**
               * The UUID for the column.
               */
              uid?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    bulk_run?: {
      /**
       * Bulk run state of table
       */
      state?: ENUM_state;
      /**
       * The column currently being processed.
       */
      column?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    vectorizing_info?: {
      last_job_info?: {
        job_id: string;
        studio_id: string;
      } | null;
      status?: ENUM_status;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
};

export type CloneConversationOutput = {
  cloned_conversation_id: string;
};

export type CloneConversationQueryInput = unknown;

export type GetAgentDebugConfigsInput = unknown;

export type GetAgentDebugConfigsOutput = {
  insert_date_: any /* this makes soorria sad */;
  update_date: any /* this makes soorria sad */;
  expiry_date_?: any /* this makes soorria sad */;
  project: string;
  _id: string;
  feature: string;
  collection_id: string;
  document_id: string;
  data: {
    /**
     * Mapping from tool action_id => override config
     */
    tool_configs?: {
      [k: string]:
        | {
            /**
             * 0-indexed mapping from tool run of this specific tool to the overrides. Use `'default'` to set the default overrides for all runs of this tool.
             */
            overrides?: {
              [k: string]:
                | {
                    input_overrides_enabled?: boolean;
                    input_overrides?: {
                      [k: string]: any /* this makes soorria sad */ | undefined;
                    };
                    output_overrides_enabled?: boolean;
                    output_overrides?: {
                      output?: {
                        [k: string]:
                          | any /* this makes soorria sad */
                          | undefined;
                      };
                    };
                    action_config_overrides?: {
                      action_behaviour?: string;
                      action_retry_config?: {
                        max_retries?: number;
                        force_retry?: boolean;
                        after_retries_behaviour?: ENUM_after_retries_behaviour;
                      };
                      /**
                       * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
                       */
                      agent_decide_prompt?: string;
                      conditional_approval_rules?: {
                        max_auto_approvals?: number;
                        max_approvals_asked?: number;
                      };
                    };
                  }
                | undefined;
            };
          }
        | undefined;
    };
  };
  deleted_date?: any /* this makes soorria sad */;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetAgentDebugConfigsQueryInput = {
  /**
   * Fields to include in the search results, empty array/list means all fields.
   */
  select_fields?: Array<string>;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type DeleteAgentDebugConfigsInput = unknown;

export type DeleteAgentDebugConfigsOutput = unknown;

export type DeleteAgentDebugConfigsQueryInput = unknown;

/**
 *
 * Generated from a shared definition.
 */
export type ListAgentDebugConfigsInput = GetWhereInput;

export type ListAgentDebugConfigsOutput = {
  results: Array<{
    insert_date_: any /* this makes soorria sad */;
    update_date: any /* this makes soorria sad */;
    expiry_date_?: any /* this makes soorria sad */;
    project: string;
    _id: string;
    feature: string;
    collection_id: string;
    document_id: string;
    data: {
      /**
       * Mapping from tool action_id => override config
       */
      tool_configs?: {
        [k: string]:
          | {
              /**
               * 0-indexed mapping from tool run of this specific tool to the overrides. Use `'default'` to set the default overrides for all runs of this tool.
               */
              overrides?: {
                [k: string]:
                  | {
                      input_overrides_enabled?: boolean;
                      input_overrides?: {
                        [k: string]:
                          | any /* this makes soorria sad */
                          | undefined;
                      };
                      output_overrides_enabled?: boolean;
                      output_overrides?: {
                        output?: {
                          [k: string]:
                            | any /* this makes soorria sad */
                            | undefined;
                        };
                      };
                      action_config_overrides?: {
                        action_behaviour?: string;
                        action_retry_config?: {
                          max_retries?: number;
                          force_retry?: boolean;
                          after_retries_behaviour?: ENUM_after_retries_behaviour;
                        };
                        /**
                         * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
                         */
                        agent_decide_prompt?: string;
                        conditional_approval_rules?: {
                          max_auto_approvals?: number;
                          max_approvals_asked?: number;
                        };
                      };
                    }
                  | undefined;
              };
            }
          | undefined;
      };
    };
    deleted_date?: any /* this makes soorria sad */;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type ListAgentDebugConfigsQueryInput = unknown;

export type UpsertAgentDebugConfigsInput = {
  data: {
    /**
     * Mapping from tool action_id => override config
     */
    tool_configs?: {
      [k: string]:
        | {
            /**
             * 0-indexed mapping from tool run of this specific tool to the overrides. Use `'default'` to set the default overrides for all runs of this tool.
             */
            overrides?: {
              [k: string]:
                | {
                    input_overrides_enabled?: boolean;
                    input_overrides?: {
                      [k: string]: any /* this makes soorria sad */ | undefined;
                    };
                    output_overrides_enabled?: boolean;
                    output_overrides?: {
                      output?: {
                        [k: string]:
                          | any /* this makes soorria sad */
                          | undefined;
                      };
                    };
                    action_config_overrides?: {
                      action_behaviour?: string;
                      action_retry_config?: {
                        max_retries?: number;
                        force_retry?: boolean;
                        after_retries_behaviour?: ENUM_after_retries_behaviour;
                      };
                      /**
                       * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
                       */
                      agent_decide_prompt?: string;
                      conditional_approval_rules?: {
                        max_auto_approvals?: number;
                        max_approvals_asked?: number;
                      };
                    };
                  }
                | undefined;
            };
          }
        | undefined;
    };
  };
  /**
   * If true, will create the metadata if it does not exist. Defaults to true.
   */
  insert_if_not_exists?: boolean;
  /**
   * Fields to remove from the metadata.
   */
  fields_to_remove?: Array<string>;
  /**
   * Fields to replace in the metadata.
   */
  fields_to_replace?: Array<string>;
};

export type UpsertAgentDebugConfigsOutput = unknown;

export type UpsertAgentDebugConfigsQueryInput = unknown;

export type ListAgentsViewInput = {
  sort?: {
    field:
      | "description"
      | "generated_metadata.last_month_task_count"
      | "insert_date_"
      | "metadata.last_run_date"
      | "name"
      | "update_date_";
    direction: ENUM_21_ENUM;
  };
};

export type ListAgentsViewOutput = {
  results: Array<{
    _id: string;
    agent_id: string;
    /**
     * If set, records where the agent was cloned from.
     */
    origin?: {
      root_agent_id: string;
      region?: ENUM_region;
      project?: string;
    };
    views?: number;
    public?: boolean;
    in_marketplace?: boolean;
    project: string;
    update_date_?: string;
    insert_date_?: any /* this makes soorria sad */;
    version?: string;
    embed_config?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    embeddable?: boolean;
    share_styles?: {
      selected_format?: ENUM_selected_format1;
      primary_color?: string;
      bubble_style?: ENUM_bubble_style;
      bubble_icon?: string;
      input_placeholder_text?: string;
      hide_file_uploads?: boolean;
      hide_conversation_list?: boolean;
      hide_tool_steps?: boolean;
      starting_message_prompts?: Array<string>;
      hide_logo?: boolean;
    };
    machine_user_id?: string;
    starting_messages?: Array<{
      message:
        | {
            role: "user";
            content: string;
            importance_level?: ENUM_importance_level;
          }
        | {
            role: "agent";
            content: string;
          };
      /**
       * Any additional metadata to be stored with the message. This is not sent to the agent.
       */
      metadata?: {
        sync_item_id?: string;
        sync_id?: string;
        sync_type?: string;
        regenerate_metadata?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    }>;
    runner?:
      | {
          type: "default";
        }
      | {
          type: "multiagent";
          multiagent?: {
            max_rounds?: number;
            /**
             * Agents that the Admin agent will run.
             */
            child_agents?: Array<{
              agent_id?: string;
              system_prompt?: string;
              name?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
        };
    params?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    expiry_date_?: any /* this makes soorria sad */;
    /**
     * Can be used to force a given mas id for every run with this agent.
     */
    mas_id?: string;
    categories?: Array<string>;
    last_updated_by?: {
      user_name?: string;
      user_id?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    metadata?: {
      clone_count?: number;
      custom_task_views?: Array<{
        id: string;
        title: string;
        filters: Array<{
          type: ENUM_type2;
          id: string;
        }>;
      }>;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    active_version_id?: string;
    draft_version_id?: string;
    name?: string;
    description?: string;
    prompt_description?: string;
    /**
     * Used to provide instructions on how to use or set up the agent.
     */
    user_instructions?: string;
    /**
     * If set, the agents config will be completely replaced with the templates config.
     */
    template?: {
      agent_id: string;
      region?: ENUM_region1;
      project?: string;
    };
    emoji?: string;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
    title_prompt?: string;
    system_prompt?: string;
    /**
     * If true, suggested replies will appear for each agent message in the front-end.
     */
    suggest_replies?: boolean;
    /**
     * The prompt to inject into the LLM step in the tool used to generate suggested replies.
     */
    suggest_replies_prompt?: string;
    /**
     * If true, this agent can plan and schedule future actions
     */
    is_scheduled_triggers_enabled?: boolean;
    model?: string;
    /**
     * Maximum number of actions an agent can autonomously take before the user needs to confirm again.
     */
    autonomy_limit?: number;
    /**
     * Temperature of the selected model. Typically, higher temperature means more random output.
     */
    temperature?: number;
    knowledge?: Array<{
      knowledge_set: string;
    }>;
    actions?: Array<{
      chain_id?: string;
      agent_id?: string;
      /**
       * A jsonschema superset object that users parameters will be validated against upon execution.
       */
      params_schema?: ParamsSchema;
      agent?: {
        message_template?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      action_behaviour?: string;
      action_retry_config?: {
        max_retries?: number;
        force_retry?: boolean;
        after_retries_behaviour?: ENUM_after_retries_behaviour;
      };
      title?: string;
      name?: string;
      description?: string;
      emoji?: string;
      /**
       * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
       */
      agent_decide_prompt?: string;
      conditional_approval_rules?: {
        max_auto_approvals?: number;
        max_approvals_asked?: number;
      };
      /**
       * Useful for external systems to track which tools have been added programatically.
       */
      metadata?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Defaults to project agent is being ran from. Tools must be public to use tools in other projects.
       */
      project?: string;
      /**
       * Defaults to region agent is being ran from. Tools must be public to use tools in other regions.
       */
      region?: string;
      /**
       * DEPRECATED: Version of the tool or subagent to run. Defaults to 'latest'.
       */
      version?: string;
      /**
       * Version of the tool or subagent to run. Can be 'active', 'draft', or a specific version id.
       */
      tool_version?: string;
      /**
       * Default values the agent will use as inputs when running the tool.
       */
      default_values?: {
        /**
         * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
         */
        _subagent_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Auth account values to update in the chains. Will not be saved to the agent config.
       */
      auth_values?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      prompt_description?: string;
      /**
       * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
       */
      prompt_for_when_to_use?: string;
      wait_for_completion?: boolean;
      strict?: boolean;
    }>;
    action_behaviour?: string;
    action_retry_config?: {
      max_retries?: number;
      force_retry?: boolean;
      after_retries_behaviour?: ENUM_after_retries_behaviour;
    };
    /**
     * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
     */
    agent_decide_prompt?: string;
    conditional_approval_rules?: {
      max_auto_approvals?: number;
      max_approvals_asked?: number;
    };
    /**
     * Triggers are used to start / continue a conversation with an agent via an external service (e.g. email).
     */
    triggers?: Array<{
      type: string;
      enabled?: boolean;
      config?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      studios?: Array<{
        studio_id: string;
        label?: string;
      }>;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    escalations?: {
      email?: {
        emails?: any /* this makes soorria sad */;
      };
      slack?: {
        channels?: Array<{
          oauth_account_id?: any /* this makes soorria sad */;
        }>;
      };
    };
    /**
     * If true, the agent's progress will be streamed in real-time-ish to the frontend.
     */
    use_streaming?: boolean;
    model_options?: {
      /**
       * The maximum length of the agent's response. Note that too low a value can completely break agent behaviour.
       */
      max_output_tokens?: number;
      parallel_tool_calls?: boolean;
      /**
       * Cost reduction technique due to models performing better with more context
       */
      switch_model_after_n_tokens?: {
        model: string | null;
        n_tokens: number | null;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Some model providers support 'strict':true to force function calling to be more accurate. This activates this when supported.
       */
      strict_mode?: boolean;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Options for controlling of the agent runtime layer.
     */
    runtime?: {
      code?: string;
      enabled?: boolean;
      /**
       * If a non empty string, will not use code runtime, and instead fire a webhook, expecting the webhook to manage all further work.
       */
      webhook?: string;
    };
    tags?: {
      [k: string]:
        | boolean
        | {
            description?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    custom_metadata?: {
      options?: Array<{
        title: string;
        description?: string;
        type: ENUM_type3;
        valid_options?: Array<{
          label: string;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        is_rule_based?: boolean;
        rules?: Array<{
          conditions?: Array<FlatFilterItem>;
          action?:
            | {
                type: "increment";
                value: number;
              }
            | {
                type: "set";
                value: number | string | boolean | Array<string>;
              };
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      system_prompt?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    generated_metadata: {
      last_month_task_count?: number;
    };
  }>;
  /**
   * List of folders for organizing agents (only included when not in public listing mode)
   */
  folders?: Array<Folder>;
};

export type ListAgentsViewQueryInput = unknown;

export type CountAgentsInput = unknown;

export type CountAgentsOutput = {
  count: number;
};

export type CountAgentsQueryInput = unknown;

export type BulkApproveConversationsInput = {
  conversation_ids: Array<string>;
  agent_id: string;
  contract?: {
    /**
     * operating timezone e.g. 'America/New_York'
     */
    time_zone?: string;
    /**
     * time in format HH:mm:ss
     */
    start_of_workday?: string;
    /**
     * time in format HH:mm:ss
     */
    end_of_workday?: string;
    max_tasks?: number;
    interval?: ENUM_interval;
    active_week_days?: {
      sunday: boolean;
      monday: boolean;
      tuesday: boolean;
      wednesday: boolean;
      thursday: boolean;
      friday: boolean;
      saturday: boolean;
    };
    max_count?: {
      number: number;
      interval: "daily";
    };
    /**
     * If this property is true, then the specific time will be found on the sync item
     */
    one_time_action?: boolean;
    /**
     * If this property is true, then the sync will not trigger if there is an active conversation
     */
    prevent_triggering_if_conversation_active?: {
      /**
       * postpone all upcoming trigger items in conversation by this amount of time in seconds
       */
      postpone_by: number;
    };
    metadata?: {
      time_zone?: string;
    };
  };
};

export type BulkApproveConversationsOutput = {
  skipped_conversations: Array<string>;
  approved_conversations: Array<string>;
};

export type BulkApproveConversationsQueryInput = unknown;

export type BulkRerunConversationsInput = {
  conversation_ids: Array<string>;
  agent_id: string;
  contract?: {
    /**
     * operating timezone e.g. 'America/New_York'
     */
    time_zone?: string;
    /**
     * time in format HH:mm:ss
     */
    start_of_workday?: string;
    /**
     * time in format HH:mm:ss
     */
    end_of_workday?: string;
    max_tasks?: number;
    interval?: ENUM_interval;
    active_week_days?: {
      sunday: boolean;
      monday: boolean;
      tuesday: boolean;
      wednesday: boolean;
      thursday: boolean;
      friday: boolean;
      saturday: boolean;
    };
    max_count?: {
      number: number;
      interval: "daily";
    };
    /**
     * If this property is true, then the specific time will be found on the sync item
     */
    one_time_action?: boolean;
    /**
     * If this property is true, then the sync will not trigger if there is an active conversation
     */
    prevent_triggering_if_conversation_active?: {
      /**
       * postpone all upcoming trigger items in conversation by this amount of time in seconds
       */
      postpone_by: number;
    };
    metadata?: {
      time_zone?: string;
    };
  };
};

export type BulkRerunConversationsOutput = {
  skipped_conversations: Array<string>;
  queued_conversations: Array<string>;
};

export type BulkRerunConversationsQueryInput = unknown;

export type GetAgentVersionInput = unknown;

export type GetAgentVersionOutput = {
  version?: AgentVersion;
};

export type GetAgentVersionQueryInput = unknown;

export type ListAgentVersionsInput = {
  agent_id: string;
  page_size?: number;
  page?: number;
  /**
   * Fields to include in the search results, empty array/list means all fields.
   */
  include_fields?: Array<string>;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type ListAgentVersionsOutput = {
  results: Array<AgentVersion>;
};

export type ListAgentVersionsQueryInput = unknown;

/**
 *
 * Generated from a shared definition.
 */
export type UpsertAgentVersionInput = AgentVersion;

export type UpsertAgentVersionOutput = {
  version_id: string;
};

export type UpsertAgentVersionQueryInput = unknown;

export type RestoreAgentVersionInput = {
  /**
   * version id to be restored
   */
  version_id: string;
};

export type RestoreAgentVersionOutput = unknown;

export type RestoreAgentVersionQueryInput = unknown;

export type SaveAgentAsDraftInput = {
  _id?: string;
  agent_id?: string;
  /**
   * If set, records where the agent was cloned from.
   */
  origin?: {
    root_agent_id: string;
    region?: ENUM_region;
    project?: string;
  };
  views?: number;
  public?: boolean;
  in_marketplace?: boolean;
  project?: string;
  update_date_?: string;
  insert_date_?: any /* this makes soorria sad */;
  version?: string;
  embed_config?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  embeddable?: boolean;
  share_styles?: {
    selected_format?: ENUM_selected_format1;
    primary_color?: string;
    bubble_style?: ENUM_bubble_style;
    bubble_icon?: string;
    input_placeholder_text?: string;
    hide_file_uploads?: boolean;
    hide_conversation_list?: boolean;
    hide_tool_steps?: boolean;
    starting_message_prompts?: Array<string>;
    hide_logo?: boolean;
  };
  machine_user_id?: string;
  starting_messages?: Array<{
    message:
      | {
          role: "user";
          content: string;
          importance_level?: ENUM_importance_level;
        }
      | {
          role: "agent";
          content: string;
        };
    /**
     * Any additional metadata to be stored with the message. This is not sent to the agent.
     */
    metadata?: {
      sync_item_id?: string;
      sync_id?: string;
      sync_type?: string;
      regenerate_metadata?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  }>;
  runner?:
    | {
        type: "default";
      }
    | {
        type: "multiagent";
        multiagent?: {
          max_rounds?: number;
          /**
           * Agents that the Admin agent will run.
           */
          child_agents?: Array<{
            agent_id?: string;
            system_prompt?: string;
            name?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }>;
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
      };
  params?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  expiry_date_?: any /* this makes soorria sad */;
  /**
   * Can be used to force a given mas id for every run with this agent.
   */
  mas_id?: string;
  categories?: Array<string>;
  last_updated_by?: {
    user_name?: string;
    user_id?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  metadata?: {
    clone_count?: number;
    custom_task_views?: Array<{
      id: string;
      title: string;
      filters: Array<{
        type: ENUM_type2;
        id: string;
      }>;
    }>;
    last_run_date?: any /* this makes soorria sad */;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  active_version_id?: string;
  draft_version_id?: string;
  name?: string;
  description?: string;
  prompt_description?: string;
  /**
   * Used to provide instructions on how to use or set up the agent.
   */
  user_instructions?: string;
  /**
   * If set, the agents config will be completely replaced with the templates config.
   */
  template?: {
    agent_id: string;
    region?: ENUM_region1;
    project?: string;
  };
  emoji?: string;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
  title_prompt?: string;
  system_prompt?: string;
  /**
   * If true, suggested replies will appear for each agent message in the front-end.
   */
  suggest_replies?: boolean;
  /**
   * The prompt to inject into the LLM step in the tool used to generate suggested replies.
   */
  suggest_replies_prompt?: string;
  /**
   * If true, this agent can plan and schedule future actions
   */
  is_scheduled_triggers_enabled?: boolean;
  model?: string;
  /**
   * Maximum number of actions an agent can autonomously take before the user needs to confirm again.
   */
  autonomy_limit?: number;
  /**
   * Temperature of the selected model. Typically, higher temperature means more random output.
   */
  temperature?: number;
  knowledge?: Array<{
    knowledge_set: string;
  }>;
  actions?: Array<{
    chain_id?: string;
    agent_id?: string;
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    agent?: {
      message_template?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    action_behaviour?: string;
    action_retry_config?: {
      max_retries?: number;
      force_retry?: boolean;
      after_retries_behaviour?: ENUM_after_retries_behaviour;
    };
    title?: string;
    name?: string;
    description?: string;
    emoji?: string;
    /**
     * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
     */
    agent_decide_prompt?: string;
    conditional_approval_rules?: {
      max_auto_approvals?: number;
      max_approvals_asked?: number;
    };
    /**
     * Useful for external systems to track which tools have been added programatically.
     */
    metadata?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Defaults to project agent is being ran from. Tools must be public to use tools in other projects.
     */
    project?: string;
    /**
     * Defaults to region agent is being ran from. Tools must be public to use tools in other regions.
     */
    region?: string;
    /**
     * DEPRECATED: Version of the tool or subagent to run. Defaults to 'latest'.
     */
    version?: string;
    /**
     * Version of the tool or subagent to run. Can be 'active', 'draft', or a specific version id.
     */
    tool_version?: string;
    /**
     * Default values the agent will use as inputs when running the tool.
     */
    default_values?: {
      /**
       * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
       */
      _subagent_params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Auth account values to update in the chains. Will not be saved to the agent config.
     */
    auth_values?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    prompt_description?: string;
    /**
     * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
     */
    prompt_for_when_to_use?: string;
    wait_for_completion?: boolean;
    strict?: boolean;
  }>;
  action_behaviour?: string;
  action_retry_config?: {
    max_retries?: number;
    force_retry?: boolean;
    after_retries_behaviour?: ENUM_after_retries_behaviour;
  };
  /**
   * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
   */
  agent_decide_prompt?: string;
  conditional_approval_rules?: {
    max_auto_approvals?: number;
    max_approvals_asked?: number;
  };
  /**
   * Triggers are used to start / continue a conversation with an agent via an external service (e.g. email).
   */
  triggers?: Array<{
    type: string;
    enabled?: boolean;
    config?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    studios?: Array<{
      studio_id: string;
      label?: string;
    }>;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  /**
   * A jsonschema superset object that users parameters will be validated against upon execution.
   */
  params_schema?: ParamsSchema;
  escalations?: {
    email?: {
      emails?: any /* this makes soorria sad */;
    };
    slack?: {
      channels?: Array<{
        oauth_account_id?: any /* this makes soorria sad */;
      }>;
    };
  };
  /**
   * If true, the agent's progress will be streamed in real-time-ish to the frontend.
   */
  use_streaming?: boolean;
  model_options?: {
    /**
     * The maximum length of the agent's response. Note that too low a value can completely break agent behaviour.
     */
    max_output_tokens?: number;
    parallel_tool_calls?: boolean;
    /**
     * Cost reduction technique due to models performing better with more context
     */
    switch_model_after_n_tokens?: {
      model: string | null;
      n_tokens: number | null;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Some model providers support 'strict':true to force function calling to be more accurate. This activates this when supported.
     */
    strict_mode?: boolean;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  /**
   * Options for controlling of the agent runtime layer.
   */
  runtime?: {
    code?: string;
    enabled?: boolean;
    /**
     * If a non empty string, will not use code runtime, and instead fire a webhook, expecting the webhook to manage all further work.
     */
    webhook?: string;
  };
  tags?: {
    [k: string]:
      | boolean
      | {
          description?: string;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }
      | undefined;
  };
  custom_metadata?: {
    options?: Array<{
      title: string;
      description?: string;
      type: ENUM_type3;
      valid_options?: Array<{
        label: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      is_rule_based?: boolean;
      rules?: Array<{
        conditions?: Array<FlatFilterItem>;
        action?:
          | {
              type: "increment";
              value: number;
            }
          | {
              type: "set";
              value: number | string | boolean | Array<string>;
            };
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    system_prompt?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
};

export type SaveAgentAsDraftOutput = {
  agent_id: string;
};

export type SaveAgentAsDraftQueryInput = unknown;

export type PublishAgentInput = {
  agent_id: string;
};

export type PublishAgentOutput = {
  version_id: string;
};

export type PublishAgentQueryInput = unknown;

export type UpsertFolderInput = {
  /**
   * The ID of the folder to update. If not provided, a new folder will be created.
   */
  folder_id?: string;
  /**
   * The name of the folder
   */
  name: string;
  /**
   * The ID of the parent folder, if this is a nested folder
   */
  parent_folder_id?: string;
  /**
   * IDs of agents or other folders contained in this folder
   */
  items?: Array<string>;
};

export type UpsertFolderOutput = {
  folder_id: string;
};

export type UpsertFolderQueryInput = unknown;

export type DeleteFolderInput = unknown;

export type DeleteFolderOutput = {};

export type DeleteFolderQueryInput = unknown;

export type AddKnowledgeInput = {
  data: Array<
    | {
        type?: "text";
        value?: string;
        document_id?: string;
      }
    | {
        type?: "dataset";
        value?: string;
        fields?: Array<string>;
      }
    | {
        type?: "document";
        value?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        document_id?: string;
      }
  >;
  chunk_and_vectorize_on_upload?: boolean;
  knowledge_set: string;
  alias?: string;
  expiry_date?: string;
  metadata?: {
    model?: string;
    external_id?: string;
    source_dataset_id?: string;
    conversation?: {
      tags?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      user_id?: string;
      agent_id?: string;
      agent_region?: string | null;
      agent_project?: string | null;
      bookmark?: boolean;
      /**
       * Time from which we can ignore the "state" field, and trigger the agent anyway. Prevents conversations from being permanently locked if an agent job stalls.
       */
      ignore_state_at?: string;
      title?: string;
      message_feedback?: Array<{
        feedback: ENUM_feedback;
        message_id: string;
      }>;
      debug?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      has_errored?: boolean;
      params_from_previous_trigger?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      caller_agent?: {
        agent_id?: string;
        conversation_id?: string;
        project?: string;
        region?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Sum total number of times all emails in this conversation have been opened
       */
      email_open_count?: number;
      is_debug_mode_task?: boolean;
      debug_mode_config_id?: string;
      custom_params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      enable_custom_params?: boolean;
      state_metadata?: {
        unrecoverable_error_type?: "max-tool-retries";
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      state?: ENUM_3_ENUM;
      workforce_context?: {
        node_id: string;
        workforce_task_id?: string;
      };
      custom_metadata?: Array<{
        title: string;
        value?: number | string | boolean | Array<string>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      workforce_node_started_event_id?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    hidden?: boolean;
    type?: string;
    split_method?: {
      type: "num_tokens";
      /**
       * Maximum number of tokens per chunk
       */
      num_tokens: number;
      split_chunk?: ENUM_split_chunk;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    field_metadata?: {
      [k: string]:
        | {
            alias?: string;
            should_vectorize?: boolean;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    /**
     * Metadata for knowledge sets in the table view.
     */
    table_metadata?: {
      /**
       * A map of tool column UUIDs to their corresponding column metadata.
       */
      tool_columns?: {
        [k: string]:
          | {
              /**
               * Metadata for the chain (tool) used in the column.
               */
              chain?: {
                project: string;
                region: string;
                studio_id: string;
                version?: string;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              /**
               * A map of tool params to their values. Params can be inferred from table fields or by entering values manually.
               */
              paramMapping?: {
                [k: string]:
                  | {
                      type?: ENUM_type;
                      value?: any /* this makes soorria sad */;
                      [k: string]: any /* this makes soorria sad */ | undefined;
                    }
                  | undefined;
              };
              /**
               * A map of tool output keys to column names to overwrite. Tools can overwrite existing columns.
               */
              outputMapping?: {
                [k: string]: string | boolean | undefined;
              };
              /**
               * The UUID for the column.
               */
              uid?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    bulk_run?: {
      /**
       * Bulk run state of table
       */
      state?: ENUM_state;
      /**
       * The column currently being processed.
       */
      column?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    vectorizing_info?: {
      last_job_info?: {
        job_id: string;
        studio_id: string;
      } | null;
      status?: ENUM_status;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
};

export type AddKnowledgeOutput = {
  results: Array<{
    status: ENUM_status3;
    job_info?: {
      job_id: string;
      studio_id: string;
    };
    run_type: "chain" | "inline" | "workflow";
    error?: string;
  }>;
  vectorize_job_info?: {
    job_id: string;
    studio_id: string;
  };
};

export type AddKnowledgeQueryInput = unknown;

export type ChunkAndVectorizeKnowledgeInput = {
  /**
   * The name of the knowledge set to chunk and vectorize
   */
  knowledge_set: string;
  /**
   * Chunk and vectorize all documents (including those already chunked)
   */
  chunk_and_vectorize_all?: boolean;
};

export type ChunkAndVectorizeKnowledgeOutput = {
  vectorize_job_info: {
    job_id: string;
    studio_id: string;
  };
};

export type ChunkAndVectorizeKnowledgeQueryInput = unknown;

export type BulkUpdateKnowledgeInput = {
  updates: Array<{
    document_id: string;
    data: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  }>;
  fields_to_remove?: Array<string>;
  knowledge_set: string;
  alias?: string;
  chunk_and_vectorize_on_upload?: boolean;
};

export type BulkUpdateKnowledgeOutput = {
  vectorize_job_info?: {
    job_id: string;
    studio_id: string;
  };
};

export type BulkUpdateKnowledgeQueryInput = unknown;

export type ListKnowledgeInput = {
  query?: string;
  /**
   * Use * as knowledge set to retrieve all knowledge sets
   */
  knowledge_set: string;
  document_id?: string;
  /**
   * ONLY APPLIES WHEN `query` ISN'T PROVIDED. Currently limited to exact_match, ids, exists, regexp filter_type
   */
  filters?: Array<FlatFilterItem>;
  page?: number;
  page_size?: number;
  /**
   * Fields to include in the response. Default is all fields
   */
  include_fields?: Array<string>;
  /**
   * Fields to sort by. For each field, sort by descending or ascending. If you are using descending by datetime, it will get the most recent ones. Can be provided in format ["sortfield","subsortfield"] or in format [{"sortfield":"desc"}, {"subsortfield":"asc"}]. If provided as a query parameter, use: sort=${JSON.stringify([{"sortfield":"desc"}])}
   */
  sort?: SortConfig;
};

export type ListKnowledgeOutput = {
  results: Array<{
    _id: string;
    project: string;
    knowledge_set: string;
    document_id: string;
    alias: string;
    data: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    tags?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    insert_date_?: any /* this makes soorria sad */;
    update_date_?: any /* this makes soorria sad */;
    expiry_date_?: any /* this makes soorria sad */;
    is_chunked?: boolean;
    is_vectorized?: boolean;
    bulk_run?: {
      /**
       * Run state of row
       */
      state?: ENUM_state1;
      /**
       * If in state errored, a short description of the tools error
       */
      error?: string;
      /**
       * Job id of the tool run
       */
      job_id?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  }>;
};

export type ListKnowledgeQueryInput = unknown;

export type ListKnowledgeChunksInput = {
  query?: string;
  query_type?: "keyword" | "vector";
  knowledge_set: string;
  document_id?: string;
  /**
   * ONLY APPLIES WHEN `query` ISN'T PROVIDED. Currently limited to exact_match, ids, exists, regexp filter_type
   */
  filters?: Array<FlatFilterItem>;
  page?: number;
  page_size?: number;
  include_vectors?: boolean;
  use_exact_search?: boolean;
};

export type ListKnowledgeChunksOutput = {
  results: Array<{
    _id: string;
    project: string;
    knowledge_set: string;
    document_id: string;
    alias: string;
    data: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    tags?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    insert_date_?: any /* this makes soorria sad */;
    update_date_?: any /* this makes soorria sad */;
    expiry_date_?: any /* this makes soorria sad */;
    is_chunked?: boolean;
    is_vectorized?: boolean;
    bulk_run?: {
      /**
       * Run state of row
       */
      state?: ENUM_state1;
      /**
       * If in state errored, a short description of the tools error
       */
      error?: string;
      /**
       * Job id of the tool run
       */
      job_id?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    text: string;
    text_vector_?: Array<any /* this makes soorria sad */>;
    chunk_index?: number;
    /**
     * character offset for this chunk of text, from the start of the whole text
     */
    chunk_offset?: number;
    num_tokens?: number;
    /**
     * Only returned if `query` is provided in the request body. Score of the chunk for the query.
     */
    score?: number;
  }>;
};

export type ListKnowledgeChunksQueryInput = unknown;

export type DeleteKnowledgeInput = {
  knowledge_set: string;
  document_id?: string;
  /**
   * Currently limited to exact_match, ids, exists, regexp filter_type
   */
  filters?: Array<FlatFilterItem>;
};

export type DeleteKnowledgeOutput = {};

export type DeleteKnowledgeQueryInput = unknown;

export type DeleteKnowledgeSetInput = {
  knowledge_set: string | Array<string>;
};

export type DeleteKnowledgeSetOutput = {};

export type DeleteKnowledgeSetQueryInput = unknown;

/**
 *
 * Generated from a shared definition.
 */
export type AggregateKnowledgeInput = AggregateInput;

export type AggregateKnowledgeOutput = {
  results: Array<any /* this makes soorria sad */>;
};

export type AggregateKnowledgeQueryInput = unknown;

/**
 *
 * Generated from a shared definition.
 */
export type AggregateKnowledgeChunksInput = AggregateInput;

export type AggregateKnowledgeChunksOutput = {
  results: Array<any /* this makes soorria sad */>;
};

export type AggregateKnowledgeChunksQueryInput = unknown;

export type CountKnowledgeChunksInput = {
  knowledge_set: string;
  document_id?: string;
  filters?: Array<FlatFilterItem>;
};

export type CountKnowledgeChunksOutput = {
  results: number;
};

export type CountKnowledgeChunksQueryInput = unknown;

export type ListKnowledgeSetsInput = {
  /**
   * Currently limited to exact_match, ids, exists, regexp filter_type
   */
  filters?: Array<FlatFilterItem>;
  /**
   * Fields to sort by. For each field, sort by descending or ascending. If you are using descending by datetime, it will get the most recent ones. Can be provided in format ["sortfield","subsortfield"] or in format [{"sortfield":"desc"}, {"subsortfield":"asc"}]. If provided as a query parameter, use: sort=${JSON.stringify([{"sortfield":"desc"}])}
   */
  sort?: SortConfig;
  include_metadata?: boolean;
  include_hidden?: boolean;
  include_counts?: boolean;
  page?: number;
  page_size?: number;
  query?: string;
};

export type ListKnowledgeSetsOutput = {
  results: Array<{
    knowledge_set: string;
    knowledge_count?: number;
    knowledge_chunked_count?: number;
    knowledge_vectorized_count?: number;
    metadata?: {
      _id: string;
      project: string;
      knowledge_set: string;
      insert_date?: string;
      update_date?: string;
      expiry_date_?: any /* this makes soorria sad */;
      insert_datetime?: any /* this makes soorria sad */;
      update_datetime?: any /* this makes soorria sad */;
      model?: string;
      external_id?: string;
      source_dataset_id?: string;
      conversation?: {
        tags?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        user_id?: string;
        agent_id?: string;
        agent_region?: string | null;
        agent_project?: string | null;
        bookmark?: boolean;
        /**
         * Time from which we can ignore the "state" field, and trigger the agent anyway. Prevents conversations from being permanently locked if an agent job stalls.
         */
        ignore_state_at?: string;
        title?: string;
        message_feedback?: Array<{
          feedback: ENUM_feedback;
          message_id: string;
        }>;
        debug?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        has_errored?: boolean;
        params_from_previous_trigger?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        caller_agent?: {
          agent_id?: string;
          conversation_id?: string;
          project?: string;
          region?: string;
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        /**
         * Sum total number of times all emails in this conversation have been opened
         */
        email_open_count?: number;
        is_debug_mode_task?: boolean;
        debug_mode_config_id?: string;
        custom_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        enable_custom_params?: boolean;
        state_metadata?: {
          unrecoverable_error_type?: "max-tool-retries";
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        state?: ENUM_3_ENUM;
        workforce_context?: {
          node_id: string;
          workforce_task_id?: string;
        };
        custom_metadata?: Array<{
          title: string;
          value?: number | string | boolean | Array<string>;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        workforce_node_started_event_id?: number;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      hidden?: boolean;
      type?: string;
      split_method?: {
        type: "num_tokens";
        /**
         * Maximum number of tokens per chunk
         */
        num_tokens: number;
        split_chunk?: ENUM_split_chunk;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      field_metadata?: {
        [k: string]:
          | {
              alias?: string;
              should_vectorize?: boolean;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      /**
       * Metadata for knowledge sets in the table view.
       */
      table_metadata?: {
        /**
         * A map of tool column UUIDs to their corresponding column metadata.
         */
        tool_columns?: {
          [k: string]:
            | {
                /**
                 * Metadata for the chain (tool) used in the column.
                 */
                chain?: {
                  project: string;
                  region: string;
                  studio_id: string;
                  version?: string;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                };
                /**
                 * A map of tool params to their values. Params can be inferred from table fields or by entering values manually.
                 */
                paramMapping?: {
                  [k: string]:
                    | {
                        type?: ENUM_type;
                        value?: any /* this makes soorria sad */;
                        [k: string]:
                          | any /* this makes soorria sad */
                          | undefined;
                      }
                    | undefined;
                };
                /**
                 * A map of tool output keys to column names to overwrite. Tools can overwrite existing columns.
                 */
                outputMapping?: {
                  [k: string]: string | boolean | undefined;
                };
                /**
                 * The UUID for the column.
                 */
                uid?: string;
                [k: string]: any /* this makes soorria sad */ | undefined;
              }
            | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      bulk_run?: {
        /**
         * Bulk run state of table
         */
        state?: ENUM_state;
        /**
         * The column currently being processed.
         */
        column?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      vectorizing_info?: {
        last_job_info?: {
          job_id: string;
          studio_id: string;
        } | null;
        status?: ENUM_status;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  }>;
};

export type ListKnowledgeSetsQueryInput = unknown;

/**
 *
 * Generated from a shared definition.
 */
export type AggregateKnowledgeSetsInput = AggregateInput;

export type AggregateKnowledgeSetsOutput = {
  results: Array<any /* this makes soorria sad */>;
};

export type AggregateKnowledgeSetsQueryInput = unknown;

export type AggregatedAgentTaskStatusesInput = {
  filters?: Array<
    | {
        /**
         * Match where document[field] is in value list.
         */
        match?: {
          /**
           * If matching on text, match even if there are extra words / case insensitivity
           */
          fuzzy?: boolean;
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        matchArray?: {
          field: string;
          value: Array<string | number>;
        };
        random?: {
          size: number;
        };
        /**
         * Match where document._id is in value list.
         */
        matchIds?: {
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        /**
         * Match documents where greaterThan < document[field] < lessThan. Supports numbers and date strings.
         */
        range?: {
          /**
           * Field to match on.
           */
          field?: string;
          greaterThan?: any /* this makes soorria sad */;
          lessThan?: any /* this makes soorria sad */;
          greaterThanOrEqualTo?: any /* this makes soorria sad */;
          lessThanOrEqualTo?: any /* this makes soorria sad */;
        };
        wildcard?: {
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * single string or array of valid wildcard strings to match on, for example ['tele*']
           */
          value: string | Array<string>;
        };
        /**
         * Match documents where field specified by 'field' exists in the document. for nested fields, use syntax: a.b.c
         */
        fieldExists?: {
          /**
           * Field that must exist.
           */
          field?: string;
        };
        /**
         * Match documents where doc[field] % module == value
         */
        matchModulo?: {
          field?: string;
          modulo: number;
          value: number;
        };
        /**
         * Filter down to one document for each value of selected field.
         */
        dedupeByValue?: {
          /**
           * Field to filter on.
           */
          field: string;
        };
        /**
         * Match documents where document[a] <=/>=/</>/==/!=/stringEquals document[b]. Use stringEquals to compare strings.
         */
        selfreference?: {
          /**
           * First field in comparison.
           */
          a: string;
          /**
           * Second field in comparison.
           */
          b: string;
          /**
           * Operator used to compare a and b.
           */
          operation: ENUM_operation;
        };
        /**
         * Match documents where greaterThan < wordCount(document[field]) < lessThan.
         */
        wordCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum word count.
           */
          greaterThan?: number;
          /**
           * Maximum word count.
           */
          lessThan?: number;
        };
        /**
         * Match documents where greaterThan < characterCount(document[field]) < lessThan.
         */
        characterCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum character count.
           */
          greaterThan?: number;
          /**
           * Maximum character count.
           */
          lessThan?: number;
        };
        /**
         * Used to perform a logical OR of filters. each element of the OR list can itself be a list  to perform a nested AND. {or:[[A,B],C]} is equivalent to (A AND B) OR C
         */
        or?: Array<
          Array<SimpleSearchAndFlatFilterItem> | SimpleSearchAndFlatFilterItem
        >;
        /**
         * Used to perform NOT filter. Can be a single filter or a list of filters to perform a !(AND). {not:[A,B]} is equivalent to !(A AND B)
         */
        not?:
          | Array<SimpleSearchAndFlatFilterItem>
          | SimpleSearchAndFlatFilterItem;
        /**
         * Filter based on data within a _chunk_ field.
         */
        chunk?: {
          /**
           * The path of the chunk field to filter on. For example: description_sentences_chunk_
           */
          path: string;
          filters: Array<SimpleSearchAndFlatFilterItem>;
        };
      }
    | FlatFilterItem
  >;
  groupby?: Array<{
    agg?: ENUM_agg;
    size?: number;
    field?: string;
    name?: string;
    boolean_filter?:
      | {
          /**
           * Match where document[field] is in value list.
           */
          match?: {
            /**
             * If matching on text, match even if there are extra words / case insensitivity
             */
            fuzzy?: boolean;
            /**
             * Field to match on.
             */
            field?: string;
            /**
             * Can be either a single item or a list of items to match on.
             */
            value:
              | string
              | boolean
              | number
              | Array<any /* this makes soorria sad */>;
          };
          matchArray?: {
            field: string;
            value: Array<string | number>;
          };
          random?: {
            size: number;
          };
          /**
           * Match where document._id is in value list.
           */
          matchIds?: {
            /**
             * Can be either a single item or a list of items to match on.
             */
            value:
              | string
              | boolean
              | number
              | Array<any /* this makes soorria sad */>;
          };
          /**
           * Match documents where greaterThan < document[field] < lessThan. Supports numbers and date strings.
           */
          range?: {
            /**
             * Field to match on.
             */
            field?: string;
            greaterThan?: any /* this makes soorria sad */;
            lessThan?: any /* this makes soorria sad */;
            greaterThanOrEqualTo?: any /* this makes soorria sad */;
            lessThanOrEqualTo?: any /* this makes soorria sad */;
          };
          wildcard?: {
            /**
             * Field to match on.
             */
            field?: string;
            /**
             * single string or array of valid wildcard strings to match on, for example ['tele*']
             */
            value: string | Array<string>;
          };
          /**
           * Match documents where field specified by 'field' exists in the document. for nested fields, use syntax: a.b.c
           */
          fieldExists?: {
            /**
             * Field that must exist.
             */
            field?: string;
          };
          /**
           * Match documents where doc[field] % module == value
           */
          matchModulo?: {
            field?: string;
            modulo: number;
            value: number;
          };
          /**
           * Filter down to one document for each value of selected field.
           */
          dedupeByValue?: {
            /**
             * Field to filter on.
             */
            field: string;
          };
          /**
           * Match documents where document[a] <=/>=/</>/==/!=/stringEquals document[b]. Use stringEquals to compare strings.
           */
          selfreference?: {
            /**
             * First field in comparison.
             */
            a: string;
            /**
             * Second field in comparison.
             */
            b: string;
            /**
             * Operator used to compare a and b.
             */
            operation: ENUM_operation;
          };
          /**
           * Match documents where greaterThan < wordCount(document[field]) < lessThan.
           */
          wordCount?: {
            /**
             * Field to match on.
             */
            field: string;
            /**
             * Minimum word count.
             */
            greaterThan?: number;
            /**
             * Maximum word count.
             */
            lessThan?: number;
          };
          /**
           * Match documents where greaterThan < characterCount(document[field]) < lessThan.
           */
          characterCount?: {
            /**
             * Field to match on.
             */
            field: string;
            /**
             * Minimum character count.
             */
            greaterThan?: number;
            /**
             * Maximum character count.
             */
            lessThan?: number;
          };
          /**
           * Used to perform a logical OR of filters. each element of the OR list can itself be a list  to perform a nested AND. {or:[[A,B],C]} is equivalent to (A AND B) OR C
           */
          or?: Array<
            Array<SimpleSearchAndFlatFilterItem> | SimpleSearchAndFlatFilterItem
          >;
          /**
           * Used to perform NOT filter. Can be a single filter or a list of filters to perform a !(AND). {not:[A,B]} is equivalent to !(A AND B)
           */
          not?:
            | Array<SimpleSearchAndFlatFilterItem>
            | SimpleSearchAndFlatFilterItem;
          /**
           * Filter based on data within a _chunk_ field.
           */
          chunk?: {
            /**
             * The path of the chunk field to filter on. For example: description_sentences_chunk_
             */
            path: string;
            filters: Array<SimpleSearchAndFlatFilterItem>;
          };
        }
      | FlatFilterItem;
    /**
     * Control the number of results for this aggregation level. This will default to the page_size provided in the root body if not provided.
     */
    page_size?: number;
    group_size?: number;
    select_fields?: Array<string>;
    remove_words?: Array<string>;
    include_words?: Array<string>;
    date_interval?: ENUM_date_interval;
    /**
     * If provided, group by field into n buckets in date range.
     */
    n_date_buckets?: number;
    buckets?:
      | {
          histogram?: {
            interval?: number;
            min_doc_count?: number;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          [k: string]: any /* this makes soorria sad */ | undefined;
        }
      | Array<{
          from?: number;
          to?: number;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
    date_type?: ENUM_date_type;
    date_format?: ENUM_date_format;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  /**
   * Filter conversations by event type and trigger type/studio id
   */
  event_logs_filters?: Array<{
    /**
     * Studio id of tool or trigger type
     */
    event_value: string;
    event_type: ENUM_event_type;
    /**
     * Minimum number of times a trigger type or tool has been used in this conversation
     */
    min_count?: number;
    /**
     * Maximum number of times a trigger type or tool has been used in this conversation
     */
    max_count?: number;
    comparison_type: ENUM_comparison_type;
  }>;
};

export type AggregatedAgentTaskStatusesOutput = {
  results: Array<any /* this makes soorria sad */>;
};

export type AggregatedAgentTaskStatusesQueryInput = unknown;

export type GetKnowledgeSetMetadataInput = unknown;

export type GetKnowledgeSetMetadataOutput = {
  metadata: {
    _id: string;
    project: string;
    knowledge_set: string;
    insert_date?: string;
    update_date?: string;
    expiry_date_?: any /* this makes soorria sad */;
    insert_datetime?: any /* this makes soorria sad */;
    update_datetime?: any /* this makes soorria sad */;
    model?: string;
    external_id?: string;
    source_dataset_id?: string;
    conversation?: {
      tags?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      user_id?: string;
      agent_id?: string;
      agent_region?: string | null;
      agent_project?: string | null;
      bookmark?: boolean;
      /**
       * Time from which we can ignore the "state" field, and trigger the agent anyway. Prevents conversations from being permanently locked if an agent job stalls.
       */
      ignore_state_at?: string;
      title?: string;
      message_feedback?: Array<{
        feedback: ENUM_feedback;
        message_id: string;
      }>;
      debug?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      has_errored?: boolean;
      params_from_previous_trigger?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      caller_agent?: {
        agent_id?: string;
        conversation_id?: string;
        project?: string;
        region?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Sum total number of times all emails in this conversation have been opened
       */
      email_open_count?: number;
      is_debug_mode_task?: boolean;
      debug_mode_config_id?: string;
      custom_params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      enable_custom_params?: boolean;
      state_metadata?: {
        unrecoverable_error_type?: "max-tool-retries";
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      state?: ENUM_3_ENUM;
      workforce_context?: {
        node_id: string;
        workforce_task_id?: string;
      };
      custom_metadata?: Array<{
        title: string;
        value?: number | string | boolean | Array<string>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      workforce_node_started_event_id?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    hidden?: boolean;
    type?: string;
    split_method?: {
      type: "num_tokens";
      /**
       * Maximum number of tokens per chunk
       */
      num_tokens: number;
      split_chunk?: ENUM_split_chunk;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    field_metadata?: {
      [k: string]:
        | {
            alias?: string;
            should_vectorize?: boolean;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    /**
     * Metadata for knowledge sets in the table view.
     */
    table_metadata?: {
      /**
       * A map of tool column UUIDs to their corresponding column metadata.
       */
      tool_columns?: {
        [k: string]:
          | {
              /**
               * Metadata for the chain (tool) used in the column.
               */
              chain?: {
                project: string;
                region: string;
                studio_id: string;
                version?: string;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              /**
               * A map of tool params to their values. Params can be inferred from table fields or by entering values manually.
               */
              paramMapping?: {
                [k: string]:
                  | {
                      type?: ENUM_type;
                      value?: any /* this makes soorria sad */;
                      [k: string]: any /* this makes soorria sad */ | undefined;
                    }
                  | undefined;
              };
              /**
               * A map of tool output keys to column names to overwrite. Tools can overwrite existing columns.
               */
              outputMapping?: {
                [k: string]: string | boolean | undefined;
              };
              /**
               * The UUID for the column.
               */
              uid?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    bulk_run?: {
      /**
       * Bulk run state of table
       */
      state?: ENUM_state;
      /**
       * The column currently being processed.
       */
      column?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    vectorizing_info?: {
      last_job_info?: {
        job_id: string;
        studio_id: string;
      } | null;
      status?: ENUM_status;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetKnowledgeSetMetadataQueryInput = unknown;

export type UpdateKnowledgeSetMetadataInput = {
  updates: {
    _id?: string;
    project?: string;
    knowledge_set?: string;
    insert_date?: string;
    update_date?: string;
    expiry_date_?: any /* this makes soorria sad */;
    insert_datetime?: any /* this makes soorria sad */;
    update_datetime?: any /* this makes soorria sad */;
    model?: string;
    external_id?: string;
    source_dataset_id?: string;
    conversation?: {
      tags?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      user_id?: string;
      agent_id?: string;
      agent_region?: string | null;
      agent_project?: string | null;
      bookmark?: boolean;
      /**
       * Time from which we can ignore the "state" field, and trigger the agent anyway. Prevents conversations from being permanently locked if an agent job stalls.
       */
      ignore_state_at?: string;
      title?: string;
      message_feedback?: Array<{
        feedback: ENUM_feedback;
        message_id: string;
      }>;
      debug?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      has_errored?: boolean;
      params_from_previous_trigger?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      caller_agent?: {
        agent_id?: string;
        conversation_id?: string;
        project?: string;
        region?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Sum total number of times all emails in this conversation have been opened
       */
      email_open_count?: number;
      is_debug_mode_task?: boolean;
      debug_mode_config_id?: string;
      custom_params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      enable_custom_params?: boolean;
      state_metadata?: {
        unrecoverable_error_type?: "max-tool-retries";
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      state?: ENUM_3_ENUM;
      workforce_context?: {
        node_id: string;
        workforce_task_id?: string;
      };
      custom_metadata?: Array<{
        title: string;
        value?: number | string | boolean | Array<string>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      workforce_node_started_event_id?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    hidden?: boolean;
    type?: string;
    split_method?: {
      type: "num_tokens";
      /**
       * Maximum number of tokens per chunk
       */
      num_tokens: number;
      split_chunk?: ENUM_split_chunk;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    field_metadata?: {
      [k: string]:
        | {
            alias?: string;
            should_vectorize?: boolean;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    /**
     * Metadata for knowledge sets in the table view.
     */
    table_metadata?: {
      /**
       * A map of tool column UUIDs to their corresponding column metadata.
       */
      tool_columns?: {
        [k: string]:
          | {
              /**
               * Metadata for the chain (tool) used in the column.
               */
              chain?: {
                project: string;
                region: string;
                studio_id: string;
                version?: string;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              /**
               * A map of tool params to their values. Params can be inferred from table fields or by entering values manually.
               */
              paramMapping?: {
                [k: string]:
                  | {
                      type?: ENUM_type;
                      value?: any /* this makes soorria sad */;
                      [k: string]: any /* this makes soorria sad */ | undefined;
                    }
                  | undefined;
              };
              /**
               * A map of tool output keys to column names to overwrite. Tools can overwrite existing columns.
               */
              outputMapping?: {
                [k: string]: string | boolean | undefined;
              };
              /**
               * The UUID for the column.
               */
              uid?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    bulk_run?: {
      /**
       * Bulk run state of table
       */
      state?: ENUM_state;
      /**
       * The column currently being processed.
       */
      column?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    vectorizing_info?: {
      last_job_info?: {
        job_id: string;
        studio_id: string;
      } | null;
      status?: ENUM_status;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  fields_to_remove?: Array<any /* this makes soorria sad */>;
  /**
   * Keys in table_metadata to remove. Use dot notation to access nested keys. For example, to remove 'a' in 'tool_columns' in 'table_metadata', use 'tool_columns.a'
   */
  table_metadata_to_remove?: Array<string>;
  /**
   * If true, will create the metadata if it does not exist. Defaults to true.
   */
  insert_if_not_exists?: boolean;
};

export type UpdateKnowledgeSetMetadataOutput = {};

export type UpdateKnowledgeSetMetadataQueryInput = unknown;

export type MarkRowsForBulkRunInput = {
  filters?: Array<
    | {
        /**
         * Match where document[field] is in value list.
         */
        match?: {
          /**
           * If matching on text, match even if there are extra words / case insensitivity
           */
          fuzzy?: boolean;
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        matchArray?: {
          field: string;
          value: Array<string | number>;
        };
        random?: {
          size: number;
        };
        /**
         * Match where document._id is in value list.
         */
        matchIds?: {
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        /**
         * Match documents where greaterThan < document[field] < lessThan. Supports numbers and date strings.
         */
        range?: {
          /**
           * Field to match on.
           */
          field?: string;
          greaterThan?: any /* this makes soorria sad */;
          lessThan?: any /* this makes soorria sad */;
          greaterThanOrEqualTo?: any /* this makes soorria sad */;
          lessThanOrEqualTo?: any /* this makes soorria sad */;
        };
        wildcard?: {
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * single string or array of valid wildcard strings to match on, for example ['tele*']
           */
          value: string | Array<string>;
        };
        /**
         * Match documents where field specified by 'field' exists in the document. for nested fields, use syntax: a.b.c
         */
        fieldExists?: {
          /**
           * Field that must exist.
           */
          field?: string;
        };
        /**
         * Match documents where doc[field] % module == value
         */
        matchModulo?: {
          field?: string;
          modulo: number;
          value: number;
        };
        /**
         * Filter down to one document for each value of selected field.
         */
        dedupeByValue?: {
          /**
           * Field to filter on.
           */
          field: string;
        };
        /**
         * Match documents where document[a] <=/>=/</>/==/!=/stringEquals document[b]. Use stringEquals to compare strings.
         */
        selfreference?: {
          /**
           * First field in comparison.
           */
          a: string;
          /**
           * Second field in comparison.
           */
          b: string;
          /**
           * Operator used to compare a and b.
           */
          operation: ENUM_operation;
        };
        /**
         * Match documents where greaterThan < wordCount(document[field]) < lessThan.
         */
        wordCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum word count.
           */
          greaterThan?: number;
          /**
           * Maximum word count.
           */
          lessThan?: number;
        };
        /**
         * Match documents where greaterThan < characterCount(document[field]) < lessThan.
         */
        characterCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum character count.
           */
          greaterThan?: number;
          /**
           * Maximum character count.
           */
          lessThan?: number;
        };
        /**
         * Used to perform a logical OR of filters. each element of the OR list can itself be a list  to perform a nested AND. {or:[[A,B],C]} is equivalent to (A AND B) OR C
         */
        or?: Array<
          Array<SimpleSearchAndFlatFilterItem> | SimpleSearchAndFlatFilterItem
        >;
        /**
         * Used to perform NOT filter. Can be a single filter or a list of filters to perform a !(AND). {not:[A,B]} is equivalent to !(A AND B)
         */
        not?:
          | Array<SimpleSearchAndFlatFilterItem>
          | SimpleSearchAndFlatFilterItem;
        /**
         * Filter based on data within a _chunk_ field.
         */
        chunk?: {
          /**
           * The path of the chunk field to filter on. For example: description_sentences_chunk_
           */
          path: string;
          filters: Array<SimpleSearchAndFlatFilterItem>;
        };
      }
    | FlatFilterItem
  >;
  /**
   * Column of table to bulk run on
   */
  column: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type MarkRowsForBulkRunOutput = {};

export type MarkRowsForBulkRunQueryInput = unknown;

export type GetKnowledgeFileUrlInput = {
  knowledge_set: string;
  extension?: string;
};

export type GetKnowledgeFileUrlOutput = {
  upload_url: string;
  download_url: string;
};

export type GetKnowledgeFileUrlQueryInput = unknown;

export type FinetuneKnowledgePrepareInput = {
  knowledge_set: string;
  dataset_type:
    | "alpaca"
    | "completion"
    | "concisechoice"
    | "explainchoice"
    | "gpteacher"
    | "jeopardy"
    | "oasst"
    | "reflection"
    | "sharegpt"
    | "summarizetldr";
  base_model:
    | "CodeLlama 7B"
    | "Falcon 7B"
    | "Llama2 7B"
    | "Mistral 7B"
    | "Mixtral 8x7B"
    | "TinyLlama 1.1B";
  alias_mapping: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type FinetuneKnowledgePrepareOutput = {
  config?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
};

export type FinetuneKnowledgePrepareQueryInput = unknown;

export type FinetuneKnowledgeTrainInput = {
  knowledge_set: string;
  alias: string;
  config: {
    base_model?: string;
    num_epochs?: number;
    gradient_accumulation_steps?: number;
    micro_batch_size?: number;
    datasets?: Array<{
      url?: string;
      path?: string;
      ds_type?: string;
      type?:
        | "alpaca"
        | "completion"
        | "concisechoice"
        | "explainchoice"
        | "gpteacher"
        | "jeopardy"
        | "llama"
        | "oasst"
        | "reflection"
        | "sharegpt"
        | "summarizetldr";
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    wandb_project?: string;
    wandb_entity?: string;
    wandb_watch?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  passthrough?: boolean;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type FinetuneKnowledgeTrainOutput = {
  alias: string;
};

export type FinetuneKnowledgeTrainQueryInput = unknown;

export type FinetuneKnowledgeGenerateInput = {
  knowledge_set?: string;
  alias: string;
  prompt?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type FinetuneKnowledgeGenerateOutput = {
  text?: string;
};

export type FinetuneKnowledgeGenerateQueryInput = unknown;

export type FinetuneKnowledgePollInput = {
  job_id: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type FinetuneKnowledgePollOutput = {
  status?: "Training Completed" | "Training Not Completed";
};

export type FinetuneKnowledgePollQueryInput = unknown;

export type FinetuneKnowledgeListInput = {
  knowledge_set?: string;
  alias?: string;
  filters?: Array<FlatFilterItem>;
  page?: number;
  page_size?: number;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type FinetuneKnowledgeListOutput = {
  runs?: Array<{
    _id?: string;
    insert_date?: string;
    config?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    knowledge_set?: string;
    alias?: string;
    project?: string;
    status?: "cancelled" | "done" | "running";
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type FinetuneKnowledgeListQueryInput = unknown;

export type FinetuneKnowledgeDeleteInput = {
  knowledge_set: string;
  alias: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type FinetuneKnowledgeDeleteOutput = {};

export type FinetuneKnowledgeDeleteQueryInput = unknown;

export type KnowledgeUploadTriggerInput = {
  /**
   * List of files to upload
   */
  file_urls: Array<{
    file?: string;
    download_url?: string;
  }>;
  /**
   * Name of dataset to insert results
   */
  dataset: string;
  should_chunk_text?: boolean;
  /**
   * Should chunk and vectorize straight away?
   */
  chunk_and_vectorize_on_upload?: boolean;
  /**
   * Should return the documents in the step as well
   */
  return_documents?: boolean;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type KnowledgeUploadTriggerOutput = {
  job_info: {
    job_id: string;
    studio_id: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type KnowledgeUploadTriggerQueryInput = unknown;

export type KnowledgeExportTriggerInput = {
  /**
   * Knowledge set ID to export
   */
  knowledge_set: string;
  /**
   * A json object that maps actual field names to their alias in metadata
   */
  alias_mapping?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  export_type?: "Standard" | "Wide format";
  export_extension?: "csv" | "xlsx";
  /**
   * The raw field name in the knowledge set to flatten.
   */
  wide_format_field?: string;
  page_size?: number;
  select_fields?: Array<any /* this makes soorria sad */>;
};

export type KnowledgeExportTriggerOutput = {
  job_info: {
    job_id: string;
    studio_id: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type KnowledgeExportTriggerQueryInput = unknown;

export type GetMASInput = unknown;

export type GetMASOutput = {
  insert_date_: any /* this makes soorria sad */;
  update_date: any /* this makes soorria sad */;
  expiry_date_?: any /* this makes soorria sad */;
  project: string;
  _id: string;
  feature: string;
  collection_id: string;
  document_id: string;
  data: {
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    name?: string;
    description?: string;
    entities?: Array<{
      type: ENUM_type5;
      id: string;
      /**
       * Defaults to project agent is being ran from.
       */
      project?: string;
      /**
       * Defaults to region agent is being ran from.
       */
      region?: string;
      scratchpad?: {
        [k: string]:
          | Array<{
              type?: ENUM_type6;
              id?: string;
              field: string;
              agent_id?: string;
              chain_id?: string;
              source?: ENUM_source;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * link to the thumbnail image of the workforce
     */
    thumbnail_url?: string;
    last_run_date?: any /* this makes soorria sad */;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  deleted_date?: any /* this makes soorria sad */;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetMASQueryInput = {
  /**
   * Fields to include in the search results, empty array/list means all fields.
   */
  select_fields?: Array<string>;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type DeleteMASInput = unknown;

export type DeleteMASOutput = unknown;

export type DeleteMASQueryInput = unknown;

/**
 *
 * Generated from a shared definition.
 */
export type ListMASInput = GetWhereInput;

export type ListMASOutput = {
  results: Array<{
    insert_date_: any /* this makes soorria sad */;
    update_date: any /* this makes soorria sad */;
    expiry_date_?: any /* this makes soorria sad */;
    project: string;
    _id: string;
    feature: string;
    collection_id: string;
    document_id: string;
    data: {
      /**
       * A jsonschema superset object that users parameters will be validated against upon execution.
       */
      params_schema?: ParamsSchema;
      name?: string;
      description?: string;
      entities?: Array<{
        type: ENUM_type5;
        id: string;
        /**
         * Defaults to project agent is being ran from.
         */
        project?: string;
        /**
         * Defaults to region agent is being ran from.
         */
        region?: string;
        scratchpad?: {
          [k: string]:
            | Array<{
                type?: ENUM_type6;
                id?: string;
                field: string;
                agent_id?: string;
                chain_id?: string;
                source?: ENUM_source;
                [k: string]: any /* this makes soorria sad */ | undefined;
              }>
            | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      /**
       * link to the thumbnail image of the workforce
       */
      thumbnail_url?: string;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    deleted_date?: any /* this makes soorria sad */;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type ListMASQueryInput = unknown;

export type UpsertMASInput = {
  data: {
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    name?: string;
    description?: string;
    entities?: Array<{
      type: ENUM_type5;
      id: string;
      /**
       * Defaults to project agent is being ran from.
       */
      project?: string;
      /**
       * Defaults to region agent is being ran from.
       */
      region?: string;
      scratchpad?: {
        [k: string]:
          | Array<{
              type?: ENUM_type6;
              id?: string;
              field: string;
              agent_id?: string;
              chain_id?: string;
              source?: ENUM_source;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * link to the thumbnail image of the workforce
     */
    thumbnail_url?: string;
    last_run_date?: any /* this makes soorria sad */;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  /**
   * If true, will create the metadata if it does not exist. Defaults to true.
   */
  insert_if_not_exists?: boolean;
  /**
   * Fields to remove from the metadata.
   */
  fields_to_remove?: Array<string>;
  /**
   * Fields to replace in the metadata.
   */
  fields_to_replace?: Array<string>;
};

export type UpsertMASOutput = unknown;

export type UpsertMASQueryInput = unknown;

export type GetMASStoreInput = unknown;

export type GetMASStoreOutput = {
  insert_date_: any /* this makes soorria sad */;
  update_date: any /* this makes soorria sad */;
  expiry_date_?: any /* this makes soorria sad */;
  project: string;
  _id: string;
  feature: string;
  collection_id: string;
  document_id: string;
  data: {
    scratchpad?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    source?: {
      [k: string]:
        | {
            mapping?: {
              type?: ENUM_type6;
              id?: string;
              field: string;
              agent_id?: string;
              chain_id?: string;
              source?: ENUM_source;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    mas_id: string;
  };
  deleted_date?: any /* this makes soorria sad */;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetMASStoreQueryInput = {
  /**
   * Fields to include in the search results, empty array/list means all fields.
   */
  select_fields?: Array<string>;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type DeleteMASStoreInput = unknown;

export type DeleteMASStoreOutput = unknown;

export type DeleteMASStoreQueryInput = unknown;

/**
 *
 * Generated from a shared definition.
 */
export type ListMASStoreInput = GetWhereInput;

export type ListMASStoreOutput = {
  results: Array<{
    insert_date_: any /* this makes soorria sad */;
    update_date: any /* this makes soorria sad */;
    expiry_date_?: any /* this makes soorria sad */;
    project: string;
    _id: string;
    feature: string;
    collection_id: string;
    document_id: string;
    data: {
      scratchpad?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      source?: {
        [k: string]:
          | {
              mapping?: {
                type?: ENUM_type6;
                id?: string;
                field: string;
                agent_id?: string;
                chain_id?: string;
                source?: ENUM_source;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
      mas_id: string;
    };
    deleted_date?: any /* this makes soorria sad */;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type ListMASStoreQueryInput = unknown;

export type UpsertMASStoreInput = {
  data: {
    scratchpad?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    source?: {
      [k: string]:
        | {
            mapping?: {
              type?: ENUM_type6;
              id?: string;
              field: string;
              agent_id?: string;
              chain_id?: string;
              source?: ENUM_source;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    mas_id: string;
  };
  /**
   * If true, will create the metadata if it does not exist. Defaults to true.
   */
  insert_if_not_exists?: boolean;
  /**
   * Fields to remove from the metadata.
   */
  fields_to_remove?: Array<string>;
  /**
   * Fields to replace in the metadata.
   */
  fields_to_replace?: Array<string>;
};

export type UpsertMASStoreOutput = unknown;

export type UpsertMASStoreQueryInput = unknown;

export type GetMASLogInput = unknown;

export type GetMASLogOutput = {
  insert_date_: any /* this makes soorria sad */;
  update_date: any /* this makes soorria sad */;
  expiry_date_?: any /* this makes soorria sad */;
  project: string;
  _id: string;
  feature: string;
  collection_id: string;
  document_id: string;
  data: {
    entity: {
      type: ENUM_type5;
      id: string;
      /**
       * Defaults to project agent is being ran from.
       */
      project?: string;
      /**
       * Defaults to region agent is being ran from.
       */
      region?: string;
      scratchpad?: {
        [k: string]:
          | Array<{
              type?: ENUM_type6;
              id?: string;
              field: string;
              agent_id?: string;
              chain_id?: string;
              source?: ENUM_source;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    mappings: Array<{
      scratchpad_field: string;
      source_field: string;
      type: ENUM_type6;
      id?: string;
      status: ENUM_status4;
      message: string;
    }>;
    params_seen: Array<string>;
  };
  deleted_date?: any /* this makes soorria sad */;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetMASLogQueryInput = {
  /**
   * Fields to include in the search results, empty array/list means all fields.
   */
  select_fields?: Array<string>;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type DeleteMASLogInput = unknown;

export type DeleteMASLogOutput = unknown;

export type DeleteMASLogQueryInput = unknown;

/**
 *
 * Generated from a shared definition.
 */
export type ListMASLogInput = GetWhereInput;

export type ListMASLogOutput = {
  results: Array<{
    insert_date_: any /* this makes soorria sad */;
    update_date: any /* this makes soorria sad */;
    expiry_date_?: any /* this makes soorria sad */;
    project: string;
    _id: string;
    feature: string;
    collection_id: string;
    document_id: string;
    data: {
      entity: {
        type: ENUM_type5;
        id: string;
        /**
         * Defaults to project agent is being ran from.
         */
        project?: string;
        /**
         * Defaults to region agent is being ran from.
         */
        region?: string;
        scratchpad?: {
          [k: string]:
            | Array<{
                type?: ENUM_type6;
                id?: string;
                field: string;
                agent_id?: string;
                chain_id?: string;
                source?: ENUM_source;
                [k: string]: any /* this makes soorria sad */ | undefined;
              }>
            | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      mappings: Array<{
        scratchpad_field: string;
        source_field: string;
        type: ENUM_type6;
        id?: string;
        status: ENUM_status4;
        message: string;
      }>;
      params_seen: Array<string>;
    };
    deleted_date?: any /* this makes soorria sad */;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type ListMASLogQueryInput = unknown;

export type UpsertMASLogInput = {
  data: {
    entity: {
      type: ENUM_type5;
      id: string;
      /**
       * Defaults to project agent is being ran from.
       */
      project?: string;
      /**
       * Defaults to region agent is being ran from.
       */
      region?: string;
      scratchpad?: {
        [k: string]:
          | Array<{
              type?: ENUM_type6;
              id?: string;
              field: string;
              agent_id?: string;
              chain_id?: string;
              source?: ENUM_source;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    mappings: Array<{
      scratchpad_field: string;
      source_field: string;
      type: ENUM_type6;
      id?: string;
      status: ENUM_status4;
      message: string;
    }>;
    params_seen: Array<string>;
  };
  /**
   * If true, will create the metadata if it does not exist. Defaults to true.
   */
  insert_if_not_exists?: boolean;
  /**
   * Fields to remove from the metadata.
   */
  fields_to_remove?: Array<string>;
  /**
   * Fields to replace in the metadata.
   */
  fields_to_replace?: Array<string>;
};

export type UpsertMASLogOutput = unknown;

export type UpsertMASLogQueryInput = unknown;

export type GetFSEventsInput = unknown;

export type GetFSEventsOutput = {
  insert_date_: any /* this makes soorria sad */;
  update_date: any /* this makes soorria sad */;
  expiry_date_?: any /* this makes soorria sad */;
  project: string;
  _id: string;
  feature: string;
  collection_id: string;
  document_id: string;
  data: {
    input?: {
      type?: ENUM_type7;
      dir?: string;
      text?: string;
      command?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    output?: {
      list?: Array<string>;
      exec?: string;
      get?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  deleted_date?: any /* this makes soorria sad */;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetFSEventsQueryInput = {
  /**
   * Fields to include in the search results, empty array/list means all fields.
   */
  select_fields?: Array<string>;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

/**
 *
 * Generated from a shared definition.
 */
export type ListFSEventsInput = GetWhereInput;

export type ListFSEventsOutput = {
  results: Array<{
    insert_date_: any /* this makes soorria sad */;
    update_date: any /* this makes soorria sad */;
    expiry_date_?: any /* this makes soorria sad */;
    project: string;
    _id: string;
    feature: string;
    collection_id: string;
    document_id: string;
    data: {
      input?: {
        type?: ENUM_type7;
        dir?: string;
        text?: string;
        command?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      output?: {
        list?: Array<string>;
        exec?: string;
        get?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    deleted_date?: any /* this makes soorria sad */;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type ListFSEventsQueryInput = unknown;

export type UpsertFSEventsInput = {
  data: {
    input?: {
      type?: ENUM_type7;
      dir?: string;
      text?: string;
      command?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    output?: {
      list?: Array<string>;
      exec?: string;
      get?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  /**
   * If true, will create the metadata if it does not exist. Defaults to true.
   */
  insert_if_not_exists?: boolean;
  /**
   * Fields to remove from the metadata.
   */
  fields_to_remove?: Array<string>;
  /**
   * Fields to replace in the metadata.
   */
  fields_to_replace?: Array<string>;
};

export type UpsertFSEventsOutput = unknown;

export type UpsertFSEventsQueryInput = unknown;

export type GetAgentRuntimeEventInput = unknown;

export type GetAgentRuntimeEventOutput = {
  insert_date_: any /* this makes soorria sad */;
  update_date: any /* this makes soorria sad */;
  expiry_date_?: any /* this makes soorria sad */;
  project: string;
  _id: string;
  feature: string;
  collection_id: string;
  document_id: string;
  data: {
    input?: {
      type: ENUM_type8;
      use_tool?: {
        params: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        name: string;
        agent_fills_inputs?: boolean;
      };
      record_tool_use?: {
        params: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        name: string;
        output: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
      };
      error?: {
        message: string;
      };
      agent_message?: {
        message: string;
      };
      user_message?: {
        message: string;
      };
    };
    output?: {
      status?: "success";
      requires_approval?: boolean;
      /**
       * output of last tool ran
       */
      output?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * params of last tool ran
       */
      params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * name of last tool ran
       */
      name?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  };
  deleted_date?: any /* this makes soorria sad */;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetAgentRuntimeEventQueryInput = {
  /**
   * Fields to include in the search results, empty array/list means all fields.
   */
  select_fields?: Array<string>;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type DeleteAgentRuntimeEventInput = unknown;

export type DeleteAgentRuntimeEventOutput = unknown;

export type DeleteAgentRuntimeEventQueryInput = unknown;

/**
 *
 * Generated from a shared definition.
 */
export type ListAgentRuntimeEventInput = GetWhereInput;

export type ListAgentRuntimeEventOutput = {
  results: Array<{
    insert_date_: any /* this makes soorria sad */;
    update_date: any /* this makes soorria sad */;
    expiry_date_?: any /* this makes soorria sad */;
    project: string;
    _id: string;
    feature: string;
    collection_id: string;
    document_id: string;
    data: {
      input?: {
        type: ENUM_type8;
        use_tool?: {
          params: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          name: string;
          agent_fills_inputs?: boolean;
        };
        record_tool_use?: {
          params: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          name: string;
          output: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
        };
        error?: {
          message: string;
        };
        agent_message?: {
          message: string;
        };
        user_message?: {
          message: string;
        };
      };
      output?: {
        status?: "success";
        requires_approval?: boolean;
        /**
         * output of last tool ran
         */
        output?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        /**
         * params of last tool ran
         */
        params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        /**
         * name of last tool ran
         */
        name?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    };
    deleted_date?: any /* this makes soorria sad */;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type ListAgentRuntimeEventQueryInput = unknown;

export type UpsertAgentRuntimeEventInput = {
  data: {
    input?: {
      type: ENUM_type8;
      use_tool?: {
        params: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        name: string;
        agent_fills_inputs?: boolean;
      };
      record_tool_use?: {
        params: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        name: string;
        output: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
      };
      error?: {
        message: string;
      };
      agent_message?: {
        message: string;
      };
      user_message?: {
        message: string;
      };
    };
    output?: {
      status?: "success";
      requires_approval?: boolean;
      /**
       * output of last tool ran
       */
      output?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * params of last tool ran
       */
      params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * name of last tool ran
       */
      name?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  };
  /**
   * If true, will create the metadata if it does not exist. Defaults to true.
   */
  insert_if_not_exists?: boolean;
  /**
   * Fields to remove from the metadata.
   */
  fields_to_remove?: Array<string>;
  /**
   * Fields to replace in the metadata.
   */
  fields_to_replace?: Array<string>;
};

export type UpsertAgentRuntimeEventOutput = unknown;

export type UpsertAgentRuntimeEventQueryInput = unknown;

export type ListMasScratchpadOptionsInput = {
  /**
   * Optionally only retrieve for one agent id
   */
  agent_id?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type ListMasScratchpadOptionsOutput = {
  results: Array<{
    type?: ENUM_type6;
    id?: string;
    field: string;
    agent_id?: string;
    chain_id?: string;
    source?: ENUM_source;
    schema?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    title?: string;
    emoji?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  missing_results?: Array<{
    type?: ENUM_type6;
    id?: string;
    field: string;
    agent_id?: string;
    chain_id?: string;
    source?: ENUM_source;
    schema?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    title?: string;
    emoji?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  entities: Array<{
    emoji?: string;
    name: string;
    id: string;
    type: "agent";
  }>;
};

export type ListMasScratchpadOptionsQueryInput = unknown;

export type GetWorkforceInput = unknown;

export type GetWorkforceOutput = {
  workforce_metadata: {
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    name?: string;
    description?: string;
    entities?: Array<{
      type: ENUM_type5;
      id: string;
      /**
       * Defaults to project agent is being ran from.
       */
      project?: string;
      /**
       * Defaults to region agent is being ran from.
       */
      region?: string;
      scratchpad?: {
        [k: string]:
          | Array<{
              type?: ENUM_type6;
              id?: string;
              field: string;
              agent_id?: string;
              chain_id?: string;
              source?: ENUM_source;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * link to the thumbnail image of the workforce
     */
    thumbnail_url?: string;
    last_run_date?: any /* this makes soorria sad */;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  workforce_graph?: WorkforceGraph;
  related_metadata?: WorkforceRelatedMetadata;
};

export type GetWorkforceQueryInput = {
  /**
   * Selects the version of the workforce to retrieve.
   */
  version_select: {
    type: "draft" | "published";
  };
  include_related_metadata?: boolean;
};

export type SaveWorkforceInput = {
  /**
   * If true, will save a new published version. If false, will save as a draft.
   */
  should_publish: boolean;
  workforce_metadata: {
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    name?: string;
    description?: string;
    entities?: Array<{
      type: ENUM_type5;
      id: string;
      /**
       * Defaults to project agent is being ran from.
       */
      project?: string;
      /**
       * Defaults to region agent is being ran from.
       */
      region?: string;
      scratchpad?: {
        [k: string]:
          | Array<{
              type?: ENUM_type6;
              id?: string;
              field: string;
              agent_id?: string;
              chain_id?: string;
              source?: ENUM_source;
              [k: string]: any /* this makes soorria sad */ | undefined;
            }>
          | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * link to the thumbnail image of the workforce
     */
    thumbnail_url?: string;
    last_run_date?: any /* this makes soorria sad */;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  workforce_graph: WorkforceGraph;
};

export type SaveWorkforceOutput = {
  message?: string;
};

export type SaveWorkforceQueryInput = unknown;

export type DeleteWorkforceInput = unknown;

export type DeleteWorkforceOutput = unknown;

export type DeleteWorkforceQueryInput = unknown;

export type ListWorkforcesInput = unknown;

export type ListWorkforcesOutput = {
  results: Array<{
    id: string;
    project: string;
    insert_date: any /* this makes soorria sad */;
    update_date: any /* this makes soorria sad */;
    workforce_metadata: {
      /**
       * A jsonschema superset object that users parameters will be validated against upon execution.
       */
      params_schema?: ParamsSchema;
      name?: string;
      description?: string;
      entities?: Array<{
        type: ENUM_type5;
        id: string;
        /**
         * Defaults to project agent is being ran from.
         */
        project?: string;
        /**
         * Defaults to region agent is being ran from.
         */
        region?: string;
        scratchpad?: {
          [k: string]:
            | Array<{
                type?: ENUM_type6;
                id?: string;
                field: string;
                agent_id?: string;
                chain_id?: string;
                source?: ENUM_source;
                [k: string]: any /* this makes soorria sad */ | undefined;
              }>
            | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      /**
       * link to the thumbnail image of the workforce
       */
      thumbnail_url?: string;
      last_run_date?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  }>;
};

export type ListWorkforcesQueryInput = unknown;

export type TriggerWorkforceInput = {
  workforce_id: string;
  workforce_task_id?: string;
  trigger: WorkforceTriggerPayload;
};

export type TriggerWorkforceOutput = {
  workforce_task_id: string;
  jobs: Array<WorkforceTriggerResultItem>;
};

export type TriggerWorkforceQueryInput = unknown;

export type ListWorkforceTasksInput = {
  workforce_id: string;
  page_size?: number;
  cursor?: string;
};

export type ListWorkforceTasksOutput = {
  results: Array<WorkforceTask>;
  next_cursor?: string;
};

export type ListWorkforceTasksQueryInput = unknown;

export type ListWorkforceTaskMessagesInput = {
  page_size?: number;
  cursor?: {
    before?: string;
  };
  debug?: boolean;
};

export type ListWorkforceTaskMessagesOutput = {
  /**
   * The task view items for the frontend to render.
   */
  results: Array<WorkforceTaskViewItem>;
  next_cursor?: {
    before?: string;
  };
};

export type ListWorkforceTaskMessagesQueryInput = unknown;

export type DeleteWorkforceTasksInput = {
  workforce_task_ids: Array<string>;
};

export type DeleteWorkforceTasksOutput = {};

export type DeleteWorkforceTasksQueryInput = unknown;

export type GetTutorialCmsInput = unknown;

export type GetTutorialCmsOutput = {
  insert_date_: any /* this makes soorria sad */;
  update_date: any /* this makes soorria sad */;
  expiry_date_?: any /* this makes soorria sad */;
  project: string;
  _id: string;
  feature: string;
  collection_id: string;
  document_id: string;
  data: {
    tutorial_item_id: string;
    title: string;
    description: string;
    link: {
      url?: string;
      content_type?: ENUM_content_type;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    category?: string;
    preferred_order_within_category?: number;
  };
  deleted_date?: any /* this makes soorria sad */;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetTutorialCmsQueryInput = {
  /**
   * Fields to include in the search results, empty array/list means all fields.
   */
  select_fields?: Array<string>;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type DeleteTutorialCmsInput = unknown;

export type DeleteTutorialCmsOutput = unknown;

export type DeleteTutorialCmsQueryInput = unknown;

/**
 *
 * Generated from a shared definition.
 */
export type ListTutorialCmsInput = GetWhereInput;

export type ListTutorialCmsOutput = {
  results: Array<{
    insert_date_: any /* this makes soorria sad */;
    update_date: any /* this makes soorria sad */;
    expiry_date_?: any /* this makes soorria sad */;
    project: string;
    _id: string;
    feature: string;
    collection_id: string;
    document_id: string;
    data: {
      tutorial_item_id: string;
      title: string;
      description: string;
      link: {
        url?: string;
        content_type?: ENUM_content_type;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      category?: string;
      preferred_order_within_category?: number;
    };
    deleted_date?: any /* this makes soorria sad */;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type ListTutorialCmsQueryInput = unknown;

export type UpsertTutorialCmsInput = {
  data: {
    tutorial_item_id: string;
    title: string;
    description: string;
    link: {
      url?: string;
      content_type?: ENUM_content_type;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    category?: string;
    preferred_order_within_category?: number;
  };
  /**
   * If true, will create the metadata if it does not exist. Defaults to true.
   */
  insert_if_not_exists?: boolean;
  /**
   * Fields to remove from the metadata.
   */
  fields_to_remove?: Array<string>;
  /**
   * Fields to replace in the metadata.
   */
  fields_to_replace?: Array<string>;
};

export type UpsertTutorialCmsOutput = unknown;

export type UpsertTutorialCmsQueryInput = unknown;

export type GetTriggerGroupSummaryInput = unknown;

export type GetTriggerGroupSummaryOutput = {
  /**
   * The _id of the trigger group
   */
  _id: string;
  /**
   * The document_id of the trigger group
   */
  trigger_group_id: string;
  /**
   * The type of the trigger group
   */
  type: ENUM_70_ENUM;
  /**
   * The date the trigger group was created in iso string format
   */
  created_at: string;
  /**
   * The status of the trigger group
   */
  status?: ENUM_status5;
  contract: {
    /**
     * operating timezone e.g. 'America/New_York'
     */
    time_zone?: string;
    /**
     * time in format HH:mm:ss
     */
    start_of_workday?: string;
    /**
     * time in format HH:mm:ss
     */
    end_of_workday?: string;
    max_tasks?: number;
    interval?: ENUM_interval;
    active_week_days?: {
      sunday: boolean;
      monday: boolean;
      tuesday: boolean;
      wednesday: boolean;
      thursday: boolean;
      friday: boolean;
      saturday: boolean;
    };
    max_count?: {
      number: number;
      interval: "daily";
    };
    /**
     * If this property is true, then the specific time will be found on the sync item
     */
    one_time_action?: boolean;
    /**
     * If this property is true, then the sync will not trigger if there is an active conversation
     */
    prevent_triggering_if_conversation_active?: {
      /**
       * postpone all upcoming trigger items in conversation by this amount of time in seconds
       */
      postpone_by: number;
    };
    metadata?: {
      time_zone?: string;
    };
  };
  /**
   * Keys are column headers. Values would include metadata about the column header.
   */
  field_metadata: {
    [k: string]:
      | {
          [k: string]: any /* this makes soorria sad */ | undefined;
        }
      | undefined;
  };
  system_field_metadata: {
    insert_date: {
      type: "dateString";
    };
    execution_order: {
      type: ENUM_type9;
    };
    processed_date?: {
      type: "dateString";
    };
    conversation_id?: {
      type: string;
    };
    message_content?: {
      type: string;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  display_name?: string;
  message_template?: string;
  progress: {
    /**
     * Statuses have been simplified for display purposes.
     */
    by_status: {
      running: number;
      queued: number;
      failed: number;
      completed: number;
      cancelled: number;
    };
    /**
     * Total count of items that have been executed including items in a failed and completed state.
     */
    executed_count: number;
    total_count: number;
  };
};

export type GetTriggerGroupSummaryQueryInput = unknown;

export type ListAgentTriggerGroupsSummariesInput = {
  /**
   * Can restrict which trigger types to show.
   */
  trigger_types?: Array<ENUM_70_ENUM>;
  statuses?: Array<ENUM_status5>;
  cursor: {
    value?: string;
    field: "created_at";
  };
  /**
   * The number of items to return
   */
  page_size?: number;
  /**
   * The sort order to use for pagination
   */
  sort?: ENUM_21_ENUM;
};

export type ListAgentTriggerGroupsSummariesOutput = {
  results: Array<{
    /**
     * The _id of the trigger group
     */
    _id: string;
    /**
     * The document_id of the trigger group
     */
    trigger_group_id: string;
    /**
     * The type of the trigger group
     */
    type: ENUM_70_ENUM;
    /**
     * The date the trigger group was created in iso string format
     */
    created_at: string;
    /**
     * The status of the trigger group
     */
    status?: ENUM_status5;
    contract: {
      /**
       * operating timezone e.g. 'America/New_York'
       */
      time_zone?: string;
      /**
       * time in format HH:mm:ss
       */
      start_of_workday?: string;
      /**
       * time in format HH:mm:ss
       */
      end_of_workday?: string;
      max_tasks?: number;
      interval?: ENUM_interval;
      active_week_days?: {
        sunday: boolean;
        monday: boolean;
        tuesday: boolean;
        wednesday: boolean;
        thursday: boolean;
        friday: boolean;
        saturday: boolean;
      };
      max_count?: {
        number: number;
        interval: "daily";
      };
      /**
       * If this property is true, then the specific time will be found on the sync item
       */
      one_time_action?: boolean;
      /**
       * If this property is true, then the sync will not trigger if there is an active conversation
       */
      prevent_triggering_if_conversation_active?: {
        /**
         * postpone all upcoming trigger items in conversation by this amount of time in seconds
         */
        postpone_by: number;
      };
      metadata?: {
        time_zone?: string;
      };
    };
    /**
     * Keys are column headers. Values would include metadata about the column header.
     */
    field_metadata: {
      [k: string]:
        | {
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    system_field_metadata: {
      insert_date: {
        type: "dateString";
      };
      execution_order: {
        type: ENUM_type9;
      };
      processed_date?: {
        type: "dateString";
      };
      conversation_id?: {
        type: string;
      };
      message_content?: {
        type: string;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    display_name?: string;
    message_template?: string;
    progress: {
      /**
       * Statuses have been simplified for display purposes.
       */
      by_status: {
        running: number;
        queued: number;
        failed: number;
        completed: number;
        cancelled: number;
      };
      /**
       * Total count of items that have been executed including items in a failed and completed state.
       */
      executed_count: number;
      total_count: number;
    };
  }>;
  cursor: {
    value?: string;
    field: "created_at";
  };
};

export type ListAgentTriggerGroupsSummariesQueryInput = unknown;

export type ListAgentActiveTriggerGroupsOverviewInput = {};

export type ListAgentActiveTriggerGroupsOverviewOutput = {
  active_groups_count: number;
  queued_items_in_active_groups_count: number;
  total_groups_count: number;
};

export type ListAgentActiveTriggerGroupsOverviewQueryInput = unknown;

export type ListTriggerItemsViewInput = {
  /**
   * The document_id of the trigger group
   */
  trigger_group_id: string;
  /**
   * Statuses have been simplified for display purposes.
   */
  simplified_status:
    | "cancelled"
    | "completed"
    | "failed"
    | "queued"
    | "running";
  /**
   * The number of items to return
   */
  page_size?: number;
  /**
   * The sort order to use for pagination
   */
  sort?: ENUM_21_ENUM;
  cursor: {
    value?: number | string;
    field: "execution_order";
  };
};

export type ListTriggerItemsViewOutput = {
  trigger_type: ENUM_70_ENUM;
  results: Array<{
    /**
     * Actual status of the trigger item as it is in the queue
     */
    status?: ENUM_status6;
    record: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    insert_date: {
      type: "dateString";
      value: string;
    };
    execution_order:
      | {
          type: "number";
          value: number;
        }
      | {
          type: "dateString";
          value: string;
        };
    processed_date?: {
      type: "dateString";
      value: string;
    };
    conversation_id?: {
      type: "string";
      value: string;
    };
    message_content?: {
      type: "string";
      value: string;
    };
  }>;
  cursor: {
    value?: number | string;
    field: "execution_order";
  };
};

export type ListTriggerItemsViewQueryInput = unknown;

export type UpdateTriggerGroupStatusInput = {
  trigger_group_id?: string;
  status?: ENUM_status5;
};

export type UpdateTriggerGroupStatusOutput = unknown;

export type UpdateTriggerGroupStatusQueryInput = unknown;

export type BulkCancelUpcomingSyncItemsInput = {
  trigger_group_id: string;
};

export type BulkCancelUpcomingSyncItemsOutput = unknown;

export type BulkCancelUpcomingSyncItemsQueryInput = unknown;

export type GetSyncsInput = unknown;

export type GetSyncsOutput = {
  insert_date_: string;
  update_date: string;
  expiry_date_?: any /* this makes soorria sad */;
  project: string;
  _id: string;
  feature: string;
  collection_id: string;
  document_id: string;
  data: {
    destination:
      | {
          type?: "agent";
          agent_id: string;
        }
      | {
          type: "workforce";
          workforce_id: string;
        };
    run_method?: ENUM_run_method;
    contract?: {
      /**
       * operating timezone e.g. 'America/New_York'
       */
      time_zone?: string;
      /**
       * time in format HH:mm:ss
       */
      start_of_workday?: string;
      /**
       * time in format HH:mm:ss
       */
      end_of_workday?: string;
      max_tasks?: number;
      interval?: ENUM_interval;
      active_week_days?: {
        sunday: boolean;
        monday: boolean;
        tuesday: boolean;
        wednesday: boolean;
        thursday: boolean;
        friday: boolean;
        saturday: boolean;
      };
      max_count?: {
        number: number;
        interval: "daily";
      };
      /**
       * If this property is true, then the specific time will be found on the sync item
       */
      one_time_action?: boolean;
      /**
       * If this property is true, then the sync will not trigger if there is an active conversation
       */
      prevent_triggering_if_conversation_active?: {
        /**
         * postpone all upcoming trigger items in conversation by this amount of time in seconds
         */
        postpone_by: number;
      };
      metadata?: {
        time_zone?: string;
      };
    };
    state?: {
      /**
       * first item to process may not have this property set yet
       */
      last_item_process_time?: any /* this makes soorria sad */;
      status?: ENUM_status5;
      /**
       * disabling incoming sync items from queueing and processing
       */
      disable_incoming_items?: boolean;
      count?: number;
      count_reset_time?: any /* this makes soorria sad */;
    };
    last_sync_date_utc?: string;
    next_trigger_date_utc?: string;
    config: SyncConfigSharedDef;
    metadata?: {
      is_debug_mode_enabled?: boolean;
      debug_mode_config_id?: string;
      name?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  };
  deleted_date?: any /* this makes soorria sad */;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetSyncsQueryInput = {
  /**
   * Fields to include in the search results, empty array/list means all fields.
   */
  select_fields?: Array<string>;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type DeleteSyncsInput = unknown;

export type DeleteSyncsOutput = unknown;

export type DeleteSyncsQueryInput = unknown;

/**
 *
 * Generated from a shared definition.
 */
export type ListSyncsInput = GetWhereInput;

export type ListSyncsOutput = {
  results: Array<{
    insert_date_: string;
    update_date: string;
    expiry_date_?: any /* this makes soorria sad */;
    project: string;
    _id: string;
    feature: string;
    collection_id: string;
    document_id: string;
    data: {
      destination:
        | {
            type?: "agent";
            agent_id: string;
          }
        | {
            type: "workforce";
            workforce_id: string;
          };
      run_method?: ENUM_run_method;
      contract?: {
        /**
         * operating timezone e.g. 'America/New_York'
         */
        time_zone?: string;
        /**
         * time in format HH:mm:ss
         */
        start_of_workday?: string;
        /**
         * time in format HH:mm:ss
         */
        end_of_workday?: string;
        max_tasks?: number;
        interval?: ENUM_interval;
        active_week_days?: {
          sunday: boolean;
          monday: boolean;
          tuesday: boolean;
          wednesday: boolean;
          thursday: boolean;
          friday: boolean;
          saturday: boolean;
        };
        max_count?: {
          number: number;
          interval: "daily";
        };
        /**
         * If this property is true, then the specific time will be found on the sync item
         */
        one_time_action?: boolean;
        /**
         * If this property is true, then the sync will not trigger if there is an active conversation
         */
        prevent_triggering_if_conversation_active?: {
          /**
           * postpone all upcoming trigger items in conversation by this amount of time in seconds
           */
          postpone_by: number;
        };
        metadata?: {
          time_zone?: string;
        };
      };
      state?: {
        /**
         * first item to process may not have this property set yet
         */
        last_item_process_time?: any /* this makes soorria sad */;
        status?: ENUM_status5;
        /**
         * disabling incoming sync items from queueing and processing
         */
        disable_incoming_items?: boolean;
        count?: number;
        count_reset_time?: any /* this makes soorria sad */;
      };
      last_sync_date_utc?: string;
      next_trigger_date_utc?: string;
      config: SyncConfigSharedDef;
      metadata?: {
        is_debug_mode_enabled?: boolean;
        debug_mode_config_id?: string;
        name?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    };
    deleted_date?: any /* this makes soorria sad */;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type ListSyncsQueryInput = unknown;

export type UpsertSyncsInput = {
  data: {
    destination:
      | {
          type?: "agent";
          agent_id: string;
        }
      | {
          type: "workforce";
          workforce_id: string;
        };
    run_method?: ENUM_run_method;
    contract?: {
      /**
       * operating timezone e.g. 'America/New_York'
       */
      time_zone?: string;
      /**
       * time in format HH:mm:ss
       */
      start_of_workday?: string;
      /**
       * time in format HH:mm:ss
       */
      end_of_workday?: string;
      max_tasks?: number;
      interval?: ENUM_interval;
      active_week_days?: {
        sunday: boolean;
        monday: boolean;
        tuesday: boolean;
        wednesday: boolean;
        thursday: boolean;
        friday: boolean;
        saturday: boolean;
      };
      max_count?: {
        number: number;
        interval: "daily";
      };
      /**
       * If this property is true, then the specific time will be found on the sync item
       */
      one_time_action?: boolean;
      /**
       * If this property is true, then the sync will not trigger if there is an active conversation
       */
      prevent_triggering_if_conversation_active?: {
        /**
         * postpone all upcoming trigger items in conversation by this amount of time in seconds
         */
        postpone_by: number;
      };
      metadata?: {
        time_zone?: string;
      };
    };
    state?: {
      /**
       * first item to process may not have this property set yet
       */
      last_item_process_time?: any /* this makes soorria sad */;
      status?: ENUM_status5;
      /**
       * disabling incoming sync items from queueing and processing
       */
      disable_incoming_items?: boolean;
      count?: number;
      count_reset_time?: any /* this makes soorria sad */;
    };
    last_sync_date_utc?: string;
    next_trigger_date_utc?: string;
    config: SyncConfigSharedDef;
    metadata?: {
      is_debug_mode_enabled?: boolean;
      debug_mode_config_id?: string;
      name?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  };
  /**
   * If true, will create the metadata if it does not exist. Defaults to true.
   */
  insert_if_not_exists?: boolean;
  /**
   * Fields to remove from the metadata.
   */
  fields_to_remove?: Array<string>;
  /**
   * Fields to replace in the metadata.
   */
  fields_to_replace?: Array<string>;
};

export type UpsertSyncsOutput = unknown;

export type UpsertSyncsQueryInput = unknown;

export type GetSyncItemsInput = unknown;

export type GetSyncItemsOutput = {
  insert_date_: string;
  update_date: string;
  expiry_date_?: any /* this makes soorria sad */;
  project: string;
  _id: string;
  feature: string;
  collection_id: string;
  document_id: string;
  data: {
    record: {
      raw_data?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    sync_config_snapshot?: SyncConfigSharedDef;
    agent_id?: string;
    sleep_until?: string;
    processed_date_?: any /* this makes soorria sad */;
    sequence_id?: number;
    execution_date?: any /* this makes soorria sad */;
    metadata?: {
      error?: {
        internal_log_info?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        error_type?: ENUM_error_type;
        raw_error_message?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      attempt_count?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    status?: ENUM_status6;
  };
  deleted_date?: any /* this makes soorria sad */;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetSyncItemsQueryInput = {
  /**
   * Fields to include in the search results, empty array/list means all fields.
   */
  select_fields?: Array<string>;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type DeleteSyncItemsInput = unknown;

export type DeleteSyncItemsOutput = unknown;

export type DeleteSyncItemsQueryInput = unknown;

/**
 *
 * Generated from a shared definition.
 */
export type ListSyncItemsInput = GetWhereInput;

export type ListSyncItemsOutput = {
  results: Array<{
    insert_date_: string;
    update_date: string;
    expiry_date_?: any /* this makes soorria sad */;
    project: string;
    _id: string;
    feature: string;
    collection_id: string;
    document_id: string;
    data: {
      record: {
        raw_data?: any /* this makes soorria sad */;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      sync_config_snapshot?: SyncConfigSharedDef;
      agent_id?: string;
      sleep_until?: string;
      processed_date_?: any /* this makes soorria sad */;
      sequence_id?: number;
      execution_date?: any /* this makes soorria sad */;
      metadata?: {
        error?: {
          internal_log_info?: {
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          error_type?: ENUM_error_type;
          raw_error_message?: string;
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        attempt_count?: number;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      status?: ENUM_status6;
    };
    deleted_date?: any /* this makes soorria sad */;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
};

export type ListSyncItemsQueryInput = unknown;

export type UpsertSyncItemsInput = {
  data: {
    record: {
      raw_data?: any /* this makes soorria sad */;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    sync_config_snapshot?: SyncConfigSharedDef;
    agent_id?: string;
    sleep_until?: string;
    processed_date_?: any /* this makes soorria sad */;
    sequence_id?: number;
    execution_date?: any /* this makes soorria sad */;
    metadata?: {
      error?: {
        internal_log_info?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        error_type?: ENUM_error_type;
        raw_error_message?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      attempt_count?: number;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    status?: ENUM_status6;
  };
  /**
   * If true, will create the metadata if it does not exist. Defaults to true.
   */
  insert_if_not_exists?: boolean;
  /**
   * Fields to remove from the metadata.
   */
  fields_to_remove?: Array<string>;
  /**
   * Fields to replace in the metadata.
   */
  fields_to_replace?: Array<string>;
};

export type UpsertSyncItemsOutput = {
  message?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type UpsertSyncItemsQueryInput = unknown;

export type TriggerSyncInput = {
  config_override?: SyncConfigSharedDef;
  sync_options?: SyncOptions;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type TriggerSyncOutput = {
  job_id: string;
  studio_id: string;
};

export type TriggerSyncQueryInput = unknown;

export type TriggerSyncItemInput = unknown;

export type TriggerSyncItemOutput = unknown;

export type TriggerSyncItemQueryInput = unknown;

export type UpdateSyncItemStatusInput = {
  status: ENUM_status6;
  error?: {
    error_type?: ENUM_error_type;
    raw_error_message?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
};

export type UpdateSyncItemStatusOutput = unknown;

export type UpdateSyncItemStatusQueryInput = unknown;

export type UpdateSelectedSyncItemFieldsInput = {
  type: "todo_group";
  updates: {
    execution_date?: string;
    agent_message_content?: string;
  };
};

export type UpdateSelectedSyncItemFieldsOutput = unknown;

export type UpdateSelectedSyncItemFieldsQueryInput = unknown;

export type BulkPostponeUpcomingSyncItemsInput = {
  postpone_by_seconds: number;
  sync_type:
    | "custom_webhook"
    | "freshdesk"
    | "gmail"
    | "google_calendar"
    | "hubspot"
    | "outlook"
    | "recurring"
    | "relevance_meeting_bot"
    | "salesforce"
    | "todo_group"
    | "unipile_linkedin"
    | "unipile_telegram"
    | "unipile_whatsapp"
    | "webhook"
    | "whatsapp"
    | "zoominfo";
};

export type BulkPostponeUpcomingSyncItemsOutput = {
  updated_items_document_ids: Array<string>;
};

export type BulkPostponeUpcomingSyncItemsQueryInput = unknown;

export type GetFileUploadUrlsForDatasetInput = {
  /**
   * files we be accessible under a url that will be returned in the output.
   */
  files: Array<string>;
  include_file_path_in_url?: boolean;
};

export type GetFileUploadUrlsForDatasetOutput = {
  files: Array<{
    upload_url: string;
    url: string;
  }>;
};

export type GetFileUploadUrlsForDatasetQueryInput = unknown;

export type GetTemporaryPublicFileUploadUrlInput = {
  /**
   * Used so when file is downloaded by customers, extension is correct.
   */
  extension?: string;
};

export type GetTemporaryPublicFileUploadUrlOutput = {
  upload_url: string;
  download_url: string;
};

export type GetTemporaryPublicFileUploadUrlQueryInput = unknown;

export type GetTemporaryFileUploadUrlInput = {
  /**
   * Used so when file is downloaded by customers, extension is correct.
   */
  extension?: string;
  /**
   * Used to identify file hosted on the temporary url.
   */
  filename?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetTemporaryFileUploadUrlOutput = {
  upload_url: string;
  download_url: string;
};

export type GetTemporaryFileUploadUrlQueryInput = unknown;

export type GetWorkflowConfigInput = unknown;

export type GetWorkflowConfigOutput = {
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type GetWorkflowConfigQueryInput = unknown;

export type AnyModel =
  | "anthropic-claude-3-7-sonnet"
  | "anthropic-claude-3-7-sonnet-20250219"
  | "anthropic-claude-instant-v1"
  | "anthropic-claude-instant-v1-100k"
  | "anthropic-claude-v1"
  | "anthropic-claude-v1-100k"
  | "anthropic-claude-v2"
  | "anthropic-claude-v21"
  | "anthropic-claude-v3-haiku"
  | "anthropic-claude-v3-opus"
  | "anthropic-claude-v3-sonnet"
  | "anthropic-claude-v35-haiku"
  | "anthropic-claude-v35-haiku-20241022"
  | "anthropic-claude-v35-sonnet"
  | "anthropic-claude-v35-sonnet-20240620"
  | "anthropic-claude-v35-sonnet-20241022"
  | "azure-openai"
  | "claude-v3-vision"
  | "cohere-command"
  | "cohere-command-light"
  | "cohere-command-light-nightly"
  | "cohere-command-nightly"
  | "cohere-command-r"
  | "cohere-command-r-plus"
  | "fast-gemma-7b-it"
  | "fast-llama3-70b"
  | "fast-llama3-8b"
  | "fast-mixtral-8x7b"
  | "fireworks-function-calling-34b"
  | "fireworks-mistral-7b"
  | "gemini-vision"
  | "google-gemini"
  | "google-gemini-15"
  | "google-gemini-15-flash"
  | "google-gemini-2.0-flash"
  | "google-gemini-2.0-flash-exp"
  | "google-gemini-2.0-flash-lite-preview-02-05"
  | "google-gemini-2.0-pro-exp-02-05"
  | "gpt-4o-2024-11-20"
  | "litellm-bedrock"
  | "meta-llama-34b-instruct"
  | "meta-llama2-70b"
  | "open-router"
  | "open-router-01-ai/yi-large"
  | "open-router-aetherwiing/mn-starcannon-12b"
  | "open-router-ai21/jamba-1-5-large"
  | "open-router-ai21/jamba-1-5-mini"
  | "open-router-ai21/jamba-1.6-large"
  | "open-router-ai21/jamba-1.6-mini"
  | "open-router-ai21/jamba-instruct"
  | "open-router-aion-labs/aion-1.0"
  | "open-router-aion-labs/aion-1.0-mini"
  | "open-router-aion-labs/aion-rp-llama-3.1-8b"
  | "open-router-allenai/llama-3.1-tulu-3-405b"
  | "open-router-allenai/olmo-2-0325-32b-instruct"
  | "open-router-alpindale/goliath-120b"
  | "open-router-alpindale/magnum-72b"
  | "open-router-amazon/nova-lite-v1"
  | "open-router-amazon/nova-micro-v1"
  | "open-router-amazon/nova-pro-v1"
  | "open-router-anthracite-org/magnum-v2-72b"
  | "open-router-anthracite-org/magnum-v4-72b"
  | "open-router-anthropic/claude-2"
  | "open-router-anthropic/claude-2.0"
  | "open-router-anthropic/claude-2.0:beta"
  | "open-router-anthropic/claude-2.1"
  | "open-router-anthropic/claude-2.1:beta"
  | "open-router-anthropic/claude-2:beta"
  | "open-router-anthropic/claude-3-haiku"
  | "open-router-anthropic/claude-3-haiku:beta"
  | "open-router-anthropic/claude-3-opus"
  | "open-router-anthropic/claude-3-opus:beta"
  | "open-router-anthropic/claude-3-sonnet"
  | "open-router-anthropic/claude-3-sonnet:beta"
  | "open-router-anthropic/claude-3.5-haiku"
  | "open-router-anthropic/claude-3.5-haiku-20241022"
  | "open-router-anthropic/claude-3.5-haiku-20241022:beta"
  | "open-router-anthropic/claude-3.5-haiku:beta"
  | "open-router-anthropic/claude-3.5-sonnet"
  | "open-router-anthropic/claude-3.5-sonnet-20240620"
  | "open-router-anthropic/claude-3.5-sonnet-20240620:beta"
  | "open-router-anthropic/claude-3.5-sonnet:beta"
  | "open-router-anthropic/claude-3.7-sonnet"
  | "open-router-anthropic/claude-3.7-sonnet:beta"
  | "open-router-anthropic/claude-3.7-sonnet:thinking"
  | "open-router-cognitivecomputations/dolphin-mixtral-8x22b"
  | "open-router-cognitivecomputations/dolphin-mixtral-8x7b"
  | "open-router-cognitivecomputations/dolphin3.0-mistral-24b:free"
  | "open-router-cognitivecomputations/dolphin3.0-r1-mistral-24b:free"
  | "open-router-cohere/command"
  | "open-router-cohere/command-a"
  | "open-router-cohere/command-r"
  | "open-router-cohere/command-r-03-2024"
  | "open-router-cohere/command-r-08-2024"
  | "open-router-cohere/command-r-plus"
  | "open-router-cohere/command-r-plus-04-2024"
  | "open-router-cohere/command-r-plus-08-2024"
  | "open-router-cohere/command-r7b-12-2024"
  | "open-router-deepseek/deepseek-chat"
  | "open-router-deepseek/deepseek-chat:free"
  | "open-router-deepseek/deepseek-r1"
  | "open-router-deepseek/deepseek-r1-distill-llama-70b"
  | "open-router-deepseek/deepseek-r1-distill-llama-70b:free"
  | "open-router-deepseek/deepseek-r1-distill-llama-8b"
  | "open-router-deepseek/deepseek-r1-distill-qwen-1.5b"
  | "open-router-deepseek/deepseek-r1-distill-qwen-14b"
  | "open-router-deepseek/deepseek-r1-distill-qwen-14b:free"
  | "open-router-deepseek/deepseek-r1-distill-qwen-32b"
  | "open-router-deepseek/deepseek-r1-distill-qwen-32b:free"
  | "open-router-deepseek/deepseek-r1-zero:free"
  | "open-router-deepseek/deepseek-r1:free"
  | "open-router-eva-unit-01/eva-llama-3.33-70b"
  | "open-router-eva-unit-01/eva-qwen-2.5-32b"
  | "open-router-eva-unit-01/eva-qwen-2.5-72b"
  | "open-router-google/gemini-2.0-flash-001"
  | "open-router-google/gemini-2.0-flash-exp:free"
  | "open-router-google/gemini-2.0-flash-lite-001"
  | "open-router-google/gemini-2.0-flash-lite-preview-02-05:free"
  | "open-router-google/gemini-2.0-flash-thinking-exp-1219:free"
  | "open-router-google/gemini-2.0-flash-thinking-exp:free"
  | "open-router-google/gemini-2.0-pro-exp-02-05:free"
  | "open-router-google/gemini-exp-1206:free"
  | "open-router-google/gemini-flash-1.5"
  | "open-router-google/gemini-flash-1.5-8b"
  | "open-router-google/gemini-flash-1.5-8b-exp"
  | "open-router-google/gemini-pro"
  | "open-router-google/gemini-pro-1.5"
  | "open-router-google/gemini-pro-vision"
  | "open-router-google/gemma-2-27b-it"
  | "open-router-google/gemma-2-9b-it"
  | "open-router-google/gemma-2-9b-it:free"
  | "open-router-google/gemma-3-12b-it:free"
  | "open-router-google/gemma-3-1b-it:free"
  | "open-router-google/gemma-3-27b-it"
  | "open-router-google/gemma-3-27b-it:free"
  | "open-router-google/gemma-3-4b-it:free"
  | "open-router-google/gemma-7b-it"
  | "open-router-google/learnlm-1.5-pro-experimental:free"
  | "open-router-google/palm-2-chat-bison"
  | "open-router-google/palm-2-chat-bison-32k"
  | "open-router-google/palm-2-codechat-bison"
  | "open-router-google/palm-2-codechat-bison-32k"
  | "open-router-gryphe/mythomax-l2-13b"
  | "open-router-gryphe/mythomax-l2-13b:free"
  | "open-router-huggingfaceh4/zephyr-7b-beta:free"
  | "open-router-infermatic/mn-inferor-12b"
  | "open-router-inflection/inflection-3-pi"
  | "open-router-inflection/inflection-3-productivity"
  | "open-router-jondurbin/airoboros-l2-70b"
  | "open-router-latitudegames/wayfarer-large-70b-llama-3.3"
  | "open-router-liquid/lfm-3b"
  | "open-router-liquid/lfm-40b"
  | "open-router-liquid/lfm-7b"
  | "open-router-mancer/weaver"
  | "open-router-meta-llama/llama-2-13b-chat"
  | "open-router-meta-llama/llama-2-70b-chat"
  | "open-router-meta-llama/llama-3-70b-instruct"
  | "open-router-meta-llama/llama-3-8b-instruct"
  | "open-router-meta-llama/llama-3-8b-instruct:free"
  | "open-router-meta-llama/llama-3.1-405b"
  | "open-router-meta-llama/llama-3.1-405b-instruct"
  | "open-router-meta-llama/llama-3.1-70b-instruct"
  | "open-router-meta-llama/llama-3.1-8b-instruct"
  | "open-router-meta-llama/llama-3.1-8b-instruct:free"
  | "open-router-meta-llama/llama-3.2-11b-vision-instruct"
  | "open-router-meta-llama/llama-3.2-11b-vision-instruct:free"
  | "open-router-meta-llama/llama-3.2-1b-instruct"
  | "open-router-meta-llama/llama-3.2-1b-instruct:free"
  | "open-router-meta-llama/llama-3.2-3b-instruct"
  | "open-router-meta-llama/llama-3.2-3b-instruct:free"
  | "open-router-meta-llama/llama-3.2-90b-vision-instruct"
  | "open-router-meta-llama/llama-3.3-70b-instruct"
  | "open-router-meta-llama/llama-3.3-70b-instruct:free"
  | "open-router-meta-llama/llama-guard-2-8b"
  | "open-router-meta-llama/llama-guard-3-8b"
  | "open-router-microsoft/phi-3-medium-128k-instruct"
  | "open-router-microsoft/phi-3-medium-128k-instruct:free"
  | "open-router-microsoft/phi-3-mini-128k-instruct"
  | "open-router-microsoft/phi-3-mini-128k-instruct:free"
  | "open-router-microsoft/phi-3.5-mini-128k-instruct"
  | "open-router-microsoft/phi-4"
  | "open-router-microsoft/phi-4-multimodal-instruct"
  | "open-router-microsoft/wizardlm-2-7b"
  | "open-router-microsoft/wizardlm-2-8x22b"
  | "open-router-minimax/minimax-01"
  | "open-router-mistralai/codestral-2501"
  | "open-router-mistralai/codestral-mamba"
  | "open-router-mistralai/ministral-3b"
  | "open-router-mistralai/ministral-8b"
  | "open-router-mistralai/mistral-7b-instruct"
  | "open-router-mistralai/mistral-7b-instruct-v0.1"
  | "open-router-mistralai/mistral-7b-instruct-v0.2"
  | "open-router-mistralai/mistral-7b-instruct-v0.3"
  | "open-router-mistralai/mistral-7b-instruct:free"
  | "open-router-mistralai/mistral-large"
  | "open-router-mistralai/mistral-large-2407"
  | "open-router-mistralai/mistral-large-2411"
  | "open-router-mistralai/mistral-medium"
  | "open-router-mistralai/mistral-nemo"
  | "open-router-mistralai/mistral-nemo:free"
  | "open-router-mistralai/mistral-saba"
  | "open-router-mistralai/mistral-small"
  | "open-router-mistralai/mistral-small-24b-instruct-2501"
  | "open-router-mistralai/mistral-small-24b-instruct-2501:free"
  | "open-router-mistralai/mistral-tiny"
  | "open-router-mistralai/mixtral-8x22b-instruct"
  | "open-router-mistralai/mixtral-8x7b"
  | "open-router-mistralai/mixtral-8x7b-instruct"
  | "open-router-mistralai/pixtral-12b"
  | "open-router-mistralai/pixtral-large-2411"
  | "open-router-moonshotai/moonlight-16b-a3b-instruct:free"
  | "open-router-neversleep/llama-3-lumimaid-70b"
  | "open-router-neversleep/llama-3-lumimaid-8b"
  | "open-router-neversleep/llama-3-lumimaid-8b:extended"
  | "open-router-neversleep/llama-3.1-lumimaid-70b"
  | "open-router-neversleep/llama-3.1-lumimaid-8b"
  | "open-router-neversleep/noromaid-20b"
  | "open-router-nothingiisreal/mn-celeste-12b"
  | "open-router-nousresearch/deephermes-3-llama-3-8b-preview:free"
  | "open-router-nousresearch/hermes-2-pro-llama-3-8b"
  | "open-router-nousresearch/hermes-3-llama-3.1-405b"
  | "open-router-nousresearch/hermes-3-llama-3.1-70b"
  | "open-router-nousresearch/nous-hermes-2-mixtral-8x7b-dpo"
  | "open-router-nousresearch/nous-hermes-llama2-13b"
  | "open-router-nvidia/llama-3.1-nemotron-70b-instruct"
  | "open-router-nvidia/llama-3.1-nemotron-70b-instruct:free"
  | "open-router-open-r1/olympiccoder-32b:free"
  | "open-router-open-r1/olympiccoder-7b:free"
  | "open-router-openai/chatgpt-4o-latest"
  | "open-router-openai/gpt-3.5-turbo"
  | "open-router-openai/gpt-3.5-turbo-0125"
  | "open-router-openai/gpt-3.5-turbo-0613"
  | "open-router-openai/gpt-3.5-turbo-1106"
  | "open-router-openai/gpt-3.5-turbo-16k"
  | "open-router-openai/gpt-3.5-turbo-instruct"
  | "open-router-openai/gpt-4"
  | "open-router-openai/gpt-4-0314"
  | "open-router-openai/gpt-4-1106-preview"
  | "open-router-openai/gpt-4-32k"
  | "open-router-openai/gpt-4-32k-0314"
  | "open-router-openai/gpt-4-turbo"
  | "open-router-openai/gpt-4-turbo-preview"
  | "open-router-openai/gpt-4.5-preview"
  | "open-router-openai/gpt-4o"
  | "open-router-openai/gpt-4o-2024-05-13"
  | "open-router-openai/gpt-4o-2024-08-06"
  | "open-router-openai/gpt-4o-2024-11-20"
  | "open-router-openai/gpt-4o-mini"
  | "open-router-openai/gpt-4o-mini-2024-07-18"
  | "open-router-openai/gpt-4o-mini-search-preview"
  | "open-router-openai/gpt-4o-search-preview"
  | "open-router-openai/gpt-4o:extended"
  | "open-router-openai/o1"
  | "open-router-openai/o1-mini"
  | "open-router-openai/o1-mini-2024-09-12"
  | "open-router-openai/o1-preview"
  | "open-router-openai/o1-preview-2024-09-12"
  | "open-router-openai/o3-mini"
  | "open-router-openai/o3-mini-high"
  | "open-router-openchat/openchat-7b"
  | "open-router-openchat/openchat-7b:free"
  | "open-router-perplexity/llama-3.1-sonar-large-128k-chat"
  | "open-router-perplexity/llama-3.1-sonar-large-128k-online"
  | "open-router-perplexity/llama-3.1-sonar-small-128k-chat"
  | "open-router-perplexity/llama-3.1-sonar-small-128k-online"
  | "open-router-perplexity/r1-1776"
  | "open-router-perplexity/sonar"
  | "open-router-perplexity/sonar-deep-research"
  | "open-router-perplexity/sonar-pro"
  | "open-router-perplexity/sonar-reasoning"
  | "open-router-perplexity/sonar-reasoning-pro"
  | "open-router-pygmalionai/mythalion-13b"
  | "open-router-qwen/qwen-2-72b-instruct"
  | "open-router-qwen/qwen-2-7b-instruct"
  | "open-router-qwen/qwen-2-7b-instruct:free"
  | "open-router-qwen/qwen-2.5-72b-instruct"
  | "open-router-qwen/qwen-2.5-72b-instruct:free"
  | "open-router-qwen/qwen-2.5-7b-instruct"
  | "open-router-qwen/qwen-2.5-coder-32b-instruct"
  | "open-router-qwen/qwen-2.5-coder-32b-instruct:free"
  | "open-router-qwen/qwen-2.5-vl-72b-instruct"
  | "open-router-qwen/qwen-2.5-vl-7b-instruct"
  | "open-router-qwen/qwen-max"
  | "open-router-qwen/qwen-plus"
  | "open-router-qwen/qwen-turbo"
  | "open-router-qwen/qwen-vl-max"
  | "open-router-qwen/qwen-vl-plus"
  | "open-router-qwen/qwen2.5-32b-instruct"
  | "open-router-qwen/qwen2.5-vl-72b-instruct"
  | "open-router-qwen/qwen2.5-vl-72b-instruct:free"
  | "open-router-qwen/qwq-32b"
  | "open-router-qwen/qwq-32b-preview"
  | "open-router-qwen/qwq-32b-preview:free"
  | "open-router-qwen/qwq-32b:free"
  | "open-router-raifle/sorcererlm-8x22b"
  | "open-router-rekaai/reka-flash-3:free"
  | "open-router-sao10k/fimbulvetr-11b-v2"
  | "open-router-sao10k/l3-euryale-70b"
  | "open-router-sao10k/l3-lunaris-8b"
  | "open-router-sao10k/l3.1-70b-hanami-x1"
  | "open-router-sao10k/l3.1-euryale-70b"
  | "open-router-sao10k/l3.3-euryale-70b"
  | "open-router-sophosympatheia/midnight-rose-70b"
  | "open-router-sophosympatheia/rogue-rose-103b-v0.2:free"
  | "open-router-steelskull/l3.3-electra-r1-70b"
  | "open-router-teknium/openhermes-2.5-mistral-7b"
  | "open-router-thedrummer/anubis-pro-105b-v1"
  | "open-router-thedrummer/rocinante-12b"
  | "open-router-thedrummer/skyfall-36b-v2"
  | "open-router-thedrummer/unslopnemo-12b"
  | "open-router-tokyotech-llm/llama-3.1-swallow-70b-instruct-v0.3"
  | "open-router-undi95/remm-slerp-l2-13b"
  | "open-router-undi95/toppy-m-7b"
  | "open-router-undi95/toppy-m-7b:free"
  | "open-router-x-ai/grok-2-1212"
  | "open-router-x-ai/grok-2-vision-1212"
  | "open-router-x-ai/grok-beta"
  | "open-router-x-ai/grok-vision-beta"
  | "open-router-xwin-lm/xwin-lm-70b"
  | "openai-gpt-4.5-preview"
  | "openai-gpt-4.5-preview-2025-02-27"
  | "openai-gpt-4o"
  | "openai-gpt-4o-2024-08-06"
  | "openai-gpt-4o-mini"
  | "openai-gpt-4o-mini-2024-07-18"
  | "openai-gpt35"
  | "openai-gpt35-0613"
  | "openai-gpt35-1106"
  | "openai-gpt35-16k"
  | "openai-gpt4"
  | "openai-gpt4-0125"
  | "openai-gpt4-0613"
  | "openai-gpt4-1106"
  | "openai-gpt4-32k-0613"
  | "openai-gpt4-turbo-2024-04-09"
  | "openai-gpt4v"
  | "openai-o1-2024-12-17"
  | "openai-o1-latest"
  | "openai-o1-mini"
  | "openai-o1-mini-2024-09-12"
  | "openai-o1-preview"
  | "openai-o1-preview-2024-09-12"
  | "openai-o3-mini"
  | "openai-o3-mini-2025-01-31"
  | "pplx-70b-chat"
  | "pplx-llama-3-70b-instruct"
  | "pplx-llama-3-8b-instruct"
  | "pplx-llama-3-sonar-large-32k-chat"
  | "pplx-llama-3-sonar-large-32k-online"
  | "pplx-llama-3-sonar-small-32k-chat"
  | "pplx-llama-3-sonar-small-32k-online"
  | "pplx-llama-3.1-70b-instruct"
  | "pplx-llama-3.1-8b-instruct"
  | "pplx-llama-3.1-sonar-huge-128k-online"
  | "pplx-llama-3.1-sonar-large-128k-chat"
  | "pplx-llama-3.1-sonar-large-128k-online"
  | "pplx-llama-3.1-sonar-small-128k-chat"
  | "pplx-llama-3.1-sonar-small-128k-online"
  | "pplx-mixtral-8x7b-instruct"
  | "pplx-r1-1776"
  | "pplx-sonar"
  | "pplx-sonar-pro"
  | "pplx-sonar-reasoning"
  | "pplx-sonar-reasoning-pro"
  | "replicate-llava13b"
  | "replicate-qwen";

export type DeprecationDetails = {
  /**
   * If you know when a model is going to be deprecated, put the date here in iso format
   */
  deprecation_date?: string;
  /**
   * This will be model name in *relevance format* which replaces the model if it gets deprecated.
   */
  deprecation_fallback_model?: AnyModel;
  /**
   * A description of why you have chosen this fallback model
   */
  display_description?: string;
  deprecated?: boolean;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

/**
 * Task threading rules
 */
export type ThreadingRule = {
  join: {
    field_path: string;
    value_path: string;
  };
  condition?: {
    path: string;
    value?: string;
  };
};

export type FlatFilterItem = {
  condition?: string;
  case_insensitive?: boolean;
  field?: string;
  filter_type?:
    | "and"
    | "array_object_match"
    | "date"
    | "exact_match"
    | "exists"
    | "ids"
    | "numeric"
    | "or"
    | "regexp"
    | "size";
  condition_value?: any /* this makes soorria sad */;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

/**
 * A jsonschema superset object that users parameters will be validated against upon execution.
 */
export type ParamsSchema = {
  metadata?: {
    field_order?: Array<string>;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  properties?: {
    [k: string]:
      | {
          metadata?: {
            content_type?:
              | "agent_id"
              | "api_key"
              | "api_selector"
              | "chain_id"
              | "chain_params"
              | "code"
              | "colour_picker"
              | "componentized_json_array"
              | "conditional"
              | "dataset_id"
              | "datetime"
              | "external_field"
              | "file_to_text"
              | "file_to_text_llm_friendly"
              | "file_url"
              | "file_urls"
              | "json"
              | "json_list"
              | "key_value_input"
              | "knowledge_editor"
              | "knowledge_set"
              | "llm_model_selector"
              | "llm_prompt"
              | "long_text"
              | "markdown"
              | "memory"
              | "memory_optimizer"
              | "oauth_account"
              | "short_text"
              | "speech"
              | "table"
              | "tool_approval";
            allow_one_of_variable_mode?: boolean;
            possible_options_from?: {
              type?: "object_keys";
              source?: {
                variable?: string;
              };
            };
            default_to_variable_selector?: boolean;
            api_selector_type?: ENUM_api_selector_type;
            api_selector_placeholder?: string;
            variable_search_field?: string;
            accepted_file_types?: Array<string>;
            hidden?: boolean;
            relevance_only?: boolean;
            minimum_plan?: ENUM_0_ENUM;
            advanced?: boolean;
            placeholder?: any /* this makes soorria sad */;
            title?: string;
            description?: string;
            icon_url?: string;
            require_toggle?: boolean;
            dont_substitute?: boolean;
            min?: number;
            max?: number;
            value_suggestion_chain?: {
              url: string;
              project_id: string;
              output_key?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            enum?: Array<{
              description: string;
              label?: string;
              credits_per_token?: number;
              value: string;
              group_name?: string;
              deprecation_details?: DeprecationDetails;
              data_collection_model?: boolean;
              importance?: number;
            }>;
            bulk_run_input_source?: "" | "$DOCUMENT" | "$FIELD_PARAM_MAPPING";
            agent_input_source?: "agent_id" | "conversation_id";
            headers?: Array<string>;
            rows?: number;
            can_add_or_remove_columns?: boolean;
            placeholders?: {
              [k: string]: string | undefined;
            };
            language?: "html" | "javascript" | "python";
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
                hide?: boolean;
                /**
                 * The header displayed above the key column.
                 */
                key?: string;
                /**
                 * The header displayed above the value column.
                 */
                value?: string;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              /**
               * Set placeholder values to display in the key and/or value columns.
               */
              placeholder?: {
                /**
                 * Whether to hide all placeholders.
                 */
                hide?: boolean;
                /**
                 * The placeholder to display in each cell of the key column.
                 */
                key?: string;
                /**
                 * The placeholder to display in each cell of the value column.
                 */
                value?: string;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              /**
               * The text displayed in the 'Add' button that inserts a new pair.
               */
              addButtonText?: string;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * [KnowledgeEditor] The name of the field in the transformation's param schema containing the knowledge set ID.
             */
            knowledge_set_field_name?: string;
            /**
             * General filters for the content_type
             */
            filters?: Array<FlatFilterItem>;
            /**
             * (Optional) OAuth permissions required for a step. Only applicable for content_type `oauth_token`
             */
            oauth_permissions?: Array<{
              provider: string;
              types: Array<string>;
            }>;
            is_fixed_param?: boolean;
            is_history_excluded?: boolean;
            auto_stringify?: boolean;
            /**
             * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
             */
            external_name?: string;
            /**
             * Filters the OAuth account selector based on the selected provider
             */
            oauth_account_provider?: string;
            /**
             * Filters the OAuth account selector based on the selected permission type
             */
            oauth_account_permission_type?: string;
            scratchpad?: {
              type: "dynamic" | "static";
            };
          };
          order?: number;
          items?: {
            type?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          [k: string]: any /* this makes soorria sad */ | undefined;
        }
      | undefined;
  };
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type AggregateInput = {
  filters?: Array<
    | {
        /**
         * Match where document[field] is in value list.
         */
        match?: {
          /**
           * If matching on text, match even if there are extra words / case insensitivity
           */
          fuzzy?: boolean;
          /**
           * Field to match on.
           */
          key?: string;
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        matchArray?: {
          field: string;
          value: Array<string | number>;
        };
        random?: {
          size: number;
        };
        /**
         * Match where document._id is in value list.
         */
        matchIds?: {
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        /**
         * Match documents where greaterThan < document[field] < lessThan. Supports numbers and date strings.
         */
        range?: {
          /**
           * Field to match on.
           */
          key?: string;
          /**
           * Field to match on.
           */
          field?: string;
          greaterThan?: any /* this makes soorria sad */;
          lessThan?: any /* this makes soorria sad */;
          greaterThanOrEqualTo?: any /* this makes soorria sad */;
          lessThanOrEqualTo?: any /* this makes soorria sad */;
        };
        wildcard?: {
          /**
           * Field to match on.
           */
          key?: string;
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * single string or array of valid wildcard strings to match on, for example ['tele*']
           */
          value: string | Array<string>;
        };
        /**
         * Match documents where field specified by 'field' exists in the document. for nested fields, use syntax: a.b.c
         */
        fieldExists?: {
          /**
           * Field that must exist.
           */
          key?: string;
          /**
           * Field that must exist.
           */
          field?: string;
        };
        /**
         * Match documents where doc[field] % module == value
         */
        matchModulo?: {
          field?: string;
          modulo: number;
          value: number;
        };
        /**
         * Filter down to one document for each value of selected field.
         */
        dedupeByValue?: {
          /**
           * Field to filter on.
           */
          field: string;
        };
        /**
         * Match documents where document[a] <=/>=/</>/==/!=/stringEquals document[b]. Use stringEquals to compare strings.
         */
        selfreference?: {
          /**
           * First field in comparison.
           */
          a: string;
          /**
           * Second field in comparison.
           */
          b: string;
          /**
           * Operator used to compare a and b.
           */
          operation: ENUM_operation;
        };
        /**
         * Match documents where greaterThan < wordCount(document[field]) < lessThan.
         */
        wordCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum word count.
           */
          greaterThan?: number;
          /**
           * Maximum word count.
           */
          lessThan?: number;
        };
        /**
         * Match documents where greaterThan < characterCount(document[field]) < lessThan.
         */
        characterCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum character count.
           */
          greaterThan?: number;
          /**
           * Maximum character count.
           */
          lessThan?: number;
        };
        /**
         * Used to perform a logical OR of filters. each element of the OR list can itself be a list  to perform a nested AND. {or:[[A,B],C]} is equivalent to (A AND B) OR C
         */
        or?: Array<
          Array<SimpleSearchAndFlatFilterItem> | SimpleSearchAndFlatFilterItem
        >;
        /**
         * Used to perform NOT filter. Can be a single filter or a list of filters to perform a !(AND). {not:[A,B]} is equivalent to !(A AND B)
         */
        not?:
          | Array<SimpleSearchAndFlatFilterItem>
          | SimpleSearchAndFlatFilterItem;
        /**
         * Filter based on data within a _chunk_ field.
         */
        chunk?: {
          /**
           * The path of the chunk field to filter on. For example: description_sentences_chunk_
           */
          path: string;
          filters: Array<SimpleSearchAndFlatFilterItem>;
        };
      }
    | FlatFilterItem
  >;
  /**
   * Aggregation query to aggregate data
   */
  aggregation_query?: {
    groupby?: Array<{
      agg?: ENUM_agg;
      size?: number;
      field?: string;
      name?: string;
      boolean_filter?:
        | {
            /**
             * Match where document[field] is in value list.
             */
            match?: {
              /**
               * If matching on text, match even if there are extra words / case insensitivity
               */
              fuzzy?: boolean;
              /**
               * Field to match on.
               */
              key?: string;
              /**
               * Field to match on.
               */
              field?: string;
              /**
               * Can be either a single item or a list of items to match on.
               */
              value:
                | string
                | boolean
                | number
                | Array<any /* this makes soorria sad */>;
            };
            matchArray?: {
              field: string;
              value: Array<string | number>;
            };
            random?: {
              size: number;
            };
            /**
             * Match where document._id is in value list.
             */
            matchIds?: {
              /**
               * Can be either a single item or a list of items to match on.
               */
              value:
                | string
                | boolean
                | number
                | Array<any /* this makes soorria sad */>;
            };
            /**
             * Match documents where greaterThan < document[field] < lessThan. Supports numbers and date strings.
             */
            range?: {
              /**
               * Field to match on.
               */
              key?: string;
              /**
               * Field to match on.
               */
              field?: string;
              greaterThan?: any /* this makes soorria sad */;
              lessThan?: any /* this makes soorria sad */;
              greaterThanOrEqualTo?: any /* this makes soorria sad */;
              lessThanOrEqualTo?: any /* this makes soorria sad */;
            };
            wildcard?: {
              /**
               * Field to match on.
               */
              key?: string;
              /**
               * Field to match on.
               */
              field?: string;
              /**
               * single string or array of valid wildcard strings to match on, for example ['tele*']
               */
              value: string | Array<string>;
            };
            /**
             * Match documents where field specified by 'field' exists in the document. for nested fields, use syntax: a.b.c
             */
            fieldExists?: {
              /**
               * Field that must exist.
               */
              key?: string;
              /**
               * Field that must exist.
               */
              field?: string;
            };
            /**
             * Match documents where doc[field] % module == value
             */
            matchModulo?: {
              field?: string;
              modulo: number;
              value: number;
            };
            /**
             * Filter down to one document for each value of selected field.
             */
            dedupeByValue?: {
              /**
               * Field to filter on.
               */
              field: string;
            };
            /**
             * Match documents where document[a] <=/>=/</>/==/!=/stringEquals document[b]. Use stringEquals to compare strings.
             */
            selfreference?: {
              /**
               * First field in comparison.
               */
              a: string;
              /**
               * Second field in comparison.
               */
              b: string;
              /**
               * Operator used to compare a and b.
               */
              operation: ENUM_operation;
            };
            /**
             * Match documents where greaterThan < wordCount(document[field]) < lessThan.
             */
            wordCount?: {
              /**
               * Field to match on.
               */
              field: string;
              /**
               * Minimum word count.
               */
              greaterThan?: number;
              /**
               * Maximum word count.
               */
              lessThan?: number;
            };
            /**
             * Match documents where greaterThan < characterCount(document[field]) < lessThan.
             */
            characterCount?: {
              /**
               * Field to match on.
               */
              field: string;
              /**
               * Minimum character count.
               */
              greaterThan?: number;
              /**
               * Maximum character count.
               */
              lessThan?: number;
            };
            /**
             * Used to perform a logical OR of filters. each element of the OR list can itself be a list  to perform a nested AND. {or:[[A,B],C]} is equivalent to (A AND B) OR C
             */
            or?: Array<
              | Array<SimpleSearchAndFlatFilterItem>
              | SimpleSearchAndFlatFilterItem
            >;
            /**
             * Used to perform NOT filter. Can be a single filter or a list of filters to perform a !(AND). {not:[A,B]} is equivalent to !(A AND B)
             */
            not?:
              | Array<SimpleSearchAndFlatFilterItem>
              | SimpleSearchAndFlatFilterItem;
            /**
             * Filter based on data within a _chunk_ field.
             */
            chunk?: {
              /**
               * The path of the chunk field to filter on. For example: description_sentences_chunk_
               */
              path: string;
              filters: Array<SimpleSearchAndFlatFilterItem>;
            };
          }
        | FlatFilterItem;
      /**
       * Control the number of results for this aggregation level. This will default to the page_size provided in the root body if not provided.
       */
      page_size?: number;
      group_size?: number;
      select_fields?: Array<string>;
      remove_words?: Array<string>;
      include_words?: Array<string>;
      date_interval?: ENUM_date_interval;
      /**
       * If provided, group by field into n buckets in date range.
       */
      n_date_buckets?: number;
      buckets?:
        | {
            histogram?: {
              interval?: number;
              min_doc_count?: number;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | Array<{
            from?: number;
            to?: number;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }>;
      date_type?: ENUM_date_type;
      date_format?: ENUM_date_format;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    metrics?: Array<{
      field?: string;
      fields?: Array<string>;
      agg?: ENUM_agg1;
      name?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    sort?: Array<
      | string
      | {
          [k: string]: ENUM_21_ENUM | undefined;
        }
    >;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  /**
   * Size of each page of results
   */
  page_size?: number;
  /**
   * Page of the results
   */
  page?: number;
  /**
   * Whether to sort results by ascending or descending order.
   */
  asc?: boolean;
  dataset_ids?: Array<string>;
  dataset_id?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

/**
 * Fields to sort by. For each field, sort by descending or ascending. If you are using descending by datetime, it will get the most recent ones. Can be provided in format ["sortfield","subsortfield"] or in format [{"sortfield":"desc"}, {"subsortfield":"asc"}]. If provided as a query parameter, use: sort=${JSON.stringify([{"sortfield":"desc"}])}
 */
export type SortConfig = Array<
  | string
  | {
      [k: string]: ENUM_21_ENUM | undefined;
    }
>;

export type GetWhereInput = {
  filters?: Array<
    | {
        /**
         * Match where document[field] is in value list.
         */
        match?: {
          /**
           * If matching on text, match even if there are extra words / case insensitivity
           */
          fuzzy?: boolean;
          /**
           * Field to match on.
           */
          key?: string;
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        matchArray?: {
          field: string;
          value: Array<string | number>;
        };
        random?: {
          size: number;
        };
        /**
         * Match where document._id is in value list.
         */
        matchIds?: {
          /**
           * Can be either a single item or a list of items to match on.
           */
          value:
            | string
            | boolean
            | number
            | Array<any /* this makes soorria sad */>;
        };
        /**
         * Match documents where greaterThan < document[field] < lessThan. Supports numbers and date strings.
         */
        range?: {
          /**
           * Field to match on.
           */
          key?: string;
          /**
           * Field to match on.
           */
          field?: string;
          greaterThan?: any /* this makes soorria sad */;
          lessThan?: any /* this makes soorria sad */;
          greaterThanOrEqualTo?: any /* this makes soorria sad */;
          lessThanOrEqualTo?: any /* this makes soorria sad */;
        };
        wildcard?: {
          /**
           * Field to match on.
           */
          key?: string;
          /**
           * Field to match on.
           */
          field?: string;
          /**
           * single string or array of valid wildcard strings to match on, for example ['tele*']
           */
          value: string | Array<string>;
        };
        /**
         * Match documents where field specified by 'field' exists in the document. for nested fields, use syntax: a.b.c
         */
        fieldExists?: {
          /**
           * Field that must exist.
           */
          key?: string;
          /**
           * Field that must exist.
           */
          field?: string;
        };
        /**
         * Match documents where doc[field] % module == value
         */
        matchModulo?: {
          field?: string;
          modulo: number;
          value: number;
        };
        /**
         * Filter down to one document for each value of selected field.
         */
        dedupeByValue?: {
          /**
           * Field to filter on.
           */
          field: string;
        };
        /**
         * Match documents where document[a] <=/>=/</>/==/!=/stringEquals document[b]. Use stringEquals to compare strings.
         */
        selfreference?: {
          /**
           * First field in comparison.
           */
          a: string;
          /**
           * Second field in comparison.
           */
          b: string;
          /**
           * Operator used to compare a and b.
           */
          operation: ENUM_operation;
        };
        /**
         * Match documents where greaterThan < wordCount(document[field]) < lessThan.
         */
        wordCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum word count.
           */
          greaterThan?: number;
          /**
           * Maximum word count.
           */
          lessThan?: number;
        };
        /**
         * Match documents where greaterThan < characterCount(document[field]) < lessThan.
         */
        characterCount?: {
          /**
           * Field to match on.
           */
          field: string;
          /**
           * Minimum character count.
           */
          greaterThan?: number;
          /**
           * Maximum character count.
           */
          lessThan?: number;
        };
        /**
         * Used to perform a logical OR of filters. each element of the OR list can itself be a list  to perform a nested AND. {or:[[A,B],C]} is equivalent to (A AND B) OR C
         */
        or?: Array<
          Array<SimpleSearchAndFlatFilterItem> | SimpleSearchAndFlatFilterItem
        >;
        /**
         * Used to perform NOT filter. Can be a single filter or a list of filters to perform a !(AND). {not:[A,B]} is equivalent to !(A AND B)
         */
        not?:
          | Array<SimpleSearchAndFlatFilterItem>
          | SimpleSearchAndFlatFilterItem;
        /**
         * Filter based on data within a _chunk_ field.
         */
        chunk?: {
          /**
           * The path of the chunk field to filter on. For example: description_sentences_chunk_
           */
          path: string;
          filters: Array<SimpleSearchAndFlatFilterItem>;
        };
      }
    | FlatFilterItem
  >;
  /**
   * Fields to include in the search results, empty array/list means all fields.
   */
  select_fields?: Array<string>;
  /**
   * Size of each page of results
   */
  page_size?: number;
  /**
   * Page of the results
   */
  page?: number;
  /**
   * Fields to sort by. For each field, sort by descending or ascending. If you are using descending by datetime, it will get the most recent ones. Can be provided in format ["sortfield","subsortfield"] or in format [{"sortfield":"desc"}, {"subsortfield":"asc"}]. If provided as a query parameter, use: sort=${JSON.stringify([{"sortfield":"desc"}])}
   */
  sort?: SortConfig;
  /**
   * Include vectors in the search results.
   */
  include_vector?: boolean;
  /**
   * Retrieve items after these sort values in the sort order.
   */
  after_id?: Array<any /* this makes soorria sad */>;
  query?: string;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type AgentVersion = {
  _id: string;
  version_id?: string;
  project: string;
  name?: string;
  description?: string;
  created_by: {
    user_id: string;
    user_name?: string;
  };
  created_at: string;
  updated_at: string;
  agent_id: string;
  config?: {
    name?: string;
    description?: string;
    prompt_description?: string;
    /**
     * Used to provide instructions on how to use or set up the agent.
     */
    user_instructions?: string;
    /**
     * If set, the agents config will be completely replaced with the templates config.
     */
    template?: {
      agent_id: string;
      region?: ENUM_region1;
      project?: string;
    };
    emoji?: string;
    /**
     * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
     */
    max_job_duration?: ENUM_max_job_duration;
    title_prompt?: string;
    system_prompt?: string;
    /**
     * If true, suggested replies will appear for each agent message in the front-end.
     */
    suggest_replies?: boolean;
    /**
     * The prompt to inject into the LLM step in the tool used to generate suggested replies.
     */
    suggest_replies_prompt?: string;
    /**
     * If true, this agent can plan and schedule future actions
     */
    is_scheduled_triggers_enabled?: boolean;
    model?: string;
    /**
     * Maximum number of actions an agent can autonomously take before the user needs to confirm again.
     */
    autonomy_limit?: number;
    /**
     * Temperature of the selected model. Typically, higher temperature means more random output.
     */
    temperature?: number;
    knowledge?: Array<{
      knowledge_set: string;
    }>;
    actions?: Array<{
      chain_id?: string;
      agent_id?: string;
      /**
       * A jsonschema superset object that users parameters will be validated against upon execution.
       */
      params_schema?: ParamsSchema;
      agent?: {
        message_template?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      action_behaviour?: string;
      action_retry_config?: {
        max_retries?: number;
        force_retry?: boolean;
        after_retries_behaviour?: ENUM_after_retries_behaviour;
      };
      title?: string;
      name?: string;
      description?: string;
      emoji?: string;
      /**
       * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
       */
      agent_decide_prompt?: string;
      conditional_approval_rules?: {
        max_auto_approvals?: number;
        max_approvals_asked?: number;
      };
      /**
       * Useful for external systems to track which tools have been added programatically.
       */
      metadata?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Defaults to project agent is being ran from. Tools must be public to use tools in other projects.
       */
      project?: string;
      /**
       * Defaults to region agent is being ran from. Tools must be public to use tools in other regions.
       */
      region?: string;
      /**
       * DEPRECATED: Version of the tool or subagent to run. Defaults to 'latest'.
       */
      version?: string;
      /**
       * Version of the tool or subagent to run. Can be 'active', 'draft', or a specific version id.
       */
      tool_version?: string;
      /**
       * Default values the agent will use as inputs when running the tool.
       */
      default_values?: {
        /**
         * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
         */
        _subagent_params?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Auth account values to update in the chains. Will not be saved to the agent config.
       */
      auth_values?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      prompt_description?: string;
      /**
       * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
       */
      prompt_for_when_to_use?: string;
      wait_for_completion?: boolean;
      strict?: boolean;
    }>;
    action_behaviour?: string;
    action_retry_config?: {
      max_retries?: number;
      force_retry?: boolean;
      after_retries_behaviour?: ENUM_after_retries_behaviour;
    };
    /**
     * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
     */
    agent_decide_prompt?: string;
    conditional_approval_rules?: {
      max_auto_approvals?: number;
      max_approvals_asked?: number;
    };
    /**
     * Triggers are used to start / continue a conversation with an agent via an external service (e.g. email).
     */
    triggers?: Array<{
      type: string;
      enabled?: boolean;
      config?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      studios?: Array<{
        studio_id: string;
        label?: string;
      }>;
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    escalations?: {
      email?: {
        emails?: any /* this makes soorria sad */;
      };
      slack?: {
        channels?: Array<{
          oauth_account_id?: any /* this makes soorria sad */;
        }>;
      };
    };
    /**
     * If true, the agent's progress will be streamed in real-time-ish to the frontend.
     */
    use_streaming?: boolean;
    model_options?: {
      /**
       * The maximum length of the agent's response. Note that too low a value can completely break agent behaviour.
       */
      max_output_tokens?: number;
      parallel_tool_calls?: boolean;
      /**
       * Cost reduction technique due to models performing better with more context
       */
      switch_model_after_n_tokens?: {
        model: string | null;
        n_tokens: number | null;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Some model providers support 'strict':true to force function calling to be more accurate. This activates this when supported.
       */
      strict_mode?: boolean;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Options for controlling of the agent runtime layer.
     */
    runtime?: {
      code?: string;
      enabled?: boolean;
      /**
       * If a non empty string, will not use code runtime, and instead fire a webhook, expecting the webhook to manage all further work.
       */
      webhook?: string;
    };
    tags?: {
      [k: string]:
        | boolean
        | {
            description?: string;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    custom_metadata?: {
      options?: Array<{
        title: string;
        description?: string;
        type: ENUM_type3;
        valid_options?: Array<{
          label: string;
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        is_rule_based?: boolean;
        rules?: Array<{
          conditions?: Array<FlatFilterItem>;
          action?:
            | {
                type: "increment";
                value: number;
              }
            | {
                type: "set";
                value: number | string | boolean | Array<string>;
              };
          [k: string]: any /* this makes soorria sad */ | undefined;
        }>;
        [k: string]: any /* this makes soorria sad */ | undefined;
      }>;
      system_prompt?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
};

export type Folder = {
  /**
   * The ID of the folder to update. If not provided, a new folder will be created.
   */
  folder_id: string;
  /**
   * The name of the folder
   */
  name: string;
  /**
   * The ID of the parent folder, if this is a nested folder
   */
  parent_folder_id?: string;
  /**
   * IDs of agents or other folders contained in this folder
   */
  items: Array<string>;
  project: string;
  /**
   * Type of folder for entity-agnostic categorization (e.g., 'agent', 'tool')
   */
  folder_type?: ENUM_43_ENUM;
  created_at: any /* this makes soorria sad */;
  updated_at: any /* this makes soorria sad */;
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type VapiAiVoices =
  | {
      _oneof_type_: "deepgram";
      voice_id: string;
    }
  | {
      _oneof_type_: "11labs";
      voice_id: string;
    }
  | {
      _oneof_type_: "lmnt";
      voice_id: string;
    }
  | {
      _oneof_type_: "neets";
      voice_id: string;
    }
  | {
      _oneof_type_: "openai";
      voice_id: string;
    }
  | {
      _oneof_type_: "playht";
      voice_id: string;
    }
  | {
      _oneof_type_: "rime-ai";
      voice_id: string;
    }
  | {
      _oneof_type_: "smallest-ai";
      voice_id: string;
    }
  | {
      _oneof_type_: "tavus";
      voice_id: string;
    }
  | {
      _oneof_type_: "azure";
      voice_id: string;
    }
  | {
      _oneof_type_: "cartesia";
      voice_id: string;
    };

export type RecurringScheduleFrequency = {
  frequency: "annually" | "daily" | "monthly" | "no_repeat" | "weekly";
  /**
   * Month of the year. Required for monthly and annually schedules.
   */
  month?:
    | "april"
    | "august"
    | "december"
    | "february"
    | "january"
    | "july"
    | "june"
    | "march"
    | "may"
    | "november"
    | "october"
    | "september";
  /**
   * Day of the week. Required for weekly schedules.
   */
  day_of_week?: "fri" | "mon" | "sat" | "sun" | "thu" | "tue" | "wed";
  /**
   * Day of the month. Required for monthly and annually schedules. Note this also accepts 'last' for the last day of the month (e.g. Feb ends 28)
   */
  day_of_month?: string;
  /**
   * Hour of the day. Required for daily schedules. HH:mm
   */
  hour: string;
  /**
   * Specific date in YYYY-MM-DD format. Required for no_repeat schedules.
   */
  date?: string;
  /**
   * IANA timezone string (e.g. 'Australia/Sydney')
   */
  timezone: string;
};

export type PostTweetDataResponse = {
  id: string;
  text: string;
};

export type PostTweetErrorResponse = {
  title: string;
  type: string;
  detail?: string;
  status?: number;
};

export type RecallAiStatusChangeWebhookPayload = {
  data: {
    bot_id: string;
    status: {
      code: string;
      created_at: string;
      sub_code?: string | null;
      message?: string | null;
      recording_id?: string | null;
    };
  };
  event: "bot.status_change";
};

export type SyncConfigSharedDef =
  | {
      type: "gmail";
      gmail: {
        include_labels?: Array<string>;
        exclude_emails?: Array<string>;
        oauth_account_id: string;
        is_outreach_reply_only?: boolean;
        is_attachments_enabled?: boolean;
        recently_processed_ids?: Array<{
          gmail_id: string;
        }>;
        search?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    }
  | {
      type: "google_calendar";
      google_calendar: {
        oauth_account_id: string;
        oauth_account_label: string;
        calendar_id: string;
        events: {
          /**
           * Lower bound for event's last modification time (as a RFC3339 timestamp) to filter by.
           */
          updated_min_date?: string;
          /**
           * An array of notifications
           */
          notifications: Array<{
            timeOffset:
              | {
                  unit: "minutes";
                  quantity: number;
                  direction: ENUM_direction;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | {
                  unit: "hours";
                  quantity: number;
                  direction: ENUM_direction;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                }
              | {
                  unit: "days";
                  quantity: number;
                  direction: ENUM_direction;
                  [k: string]: any /* this makes soorria sad */ | undefined;
                };
            message: {
              /**
               * Type of the message
               */
              type: "custom" | "raw";
              /**
               * Custom message content (optional if type is 'Whole payload')
               */
              content?: string;
            };
          }>;
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    }
  | {
      type: "outlook";
      outlook: {
        oauth_account_id: string;
        exclude_emails?: Array<string>;
        is_outreach_reply_only?: boolean;
        is_attachments_enabled?: boolean;
        recently_processed_ids?: Array<{
          outlook_id: string;
        }>;
        search?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    }
  | {
      type: "hubspot";
      hubspot: {
        oauth_account_id?: string;
        oauth_account_label?: string;
        include_labels?: Array<string>;
        exclude_labels?: Array<string>;
        labels?: Array<string>;
        search?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    }
  | {
      type: "unipile_linkedin";
      unipile: {
        oauth_account_id: string;
        oauth_account_label: string;
        provider_user_id: string;
        is_outreach_reply_only?: boolean;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    }
  | {
      type: "unipile_whatsapp";
      unipile: {
        oauth_account_id: string;
        oauth_account_label: string;
        provider_user_id: string;
        is_outreach_reply_only?: boolean;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    }
  | {
      type: "unipile_telegram";
      unipile: {
        oauth_account_id: string;
        oauth_account_label: string;
        provider_user_id: string;
        is_outreach_reply_only?: boolean;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    }
  | {
      type: "whatsapp";
      whatsapp: {
        oauth_account_id?: string;
        whatsapp_business_account_id: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    }
  | {
      type: "relevance_meeting_bot";
      relevance_meeting_bot: {
        bot_id?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    }
  | {
      type: "freshdesk";
      freshdesk: {
        /**
         * DEPRECATED
         */
        oauth_account_id?: string;
        whitelist?: Array<{
          source_object: "ticket";
          source_properties: Array<{
            field_name: string;
            whitelist_values: Array<any /* this makes soorria sad */>;
          }>;
        }>;
      };
    }
  | {
      type: "salesforce";
      salesforce: {
        oauth_account_id: string;
        oauth_account_label?: string;
        salesforce_query: string;
        last_processed_message_date_utc?: string;
        page_size?: number;
        sync_interval?: "daily" | "hourly" | "minutely";
        last_sync_date_utc?: string;
        dedupe_field?: "Email" | "None";
        mapping?: {
          /**
           * jq path to unique input field for idempotency
           */
          unique_id?: string;
          /**
           * jq path to input field for conversation threading
           */
          thread_id?: string;
        };
        /**
         * The task creation mode controls how tasks are created and appended to.
         */
        task_creation_mode?: "existing_tasks_only" | "new_and_existing_tasks";
      };
    }
  | {
      type: "zoominfo";
      zoominfo: {
        /**
         * DEPRECATED
         */
        oauth_account_id?: string;
        intent_topics: Array<string>;
        signal_score_min: 80 | 90 | 95 | 99;
        audience_strength_min: "A" | "B" | "C";
        company_country: string;
        company_annual_revenue_min_usd?: number;
        company_annual_revenue_max_usd?: number;
        employee_count_min?: number;
        employee_count_max?: number;
        industry_codes?: Array<string>;
        /**
         * The page number to start the intent search from
         */
        next_page_number: number;
        /**
         * The maximum number of results to return per ingestion
         */
        max_results_per_ingestion?: number;
      };
    }
  | {
      type: "webhook";
      webhook: {
        /**
         * DEPRECATED
         */
        oauth_account_id?: string;
        message_template?: string;
      };
    }
  | {
      type: "custom_webhook";
      custom_webhook: {
        /**
         * Right now this is mandatory due to frontend design for all syncs but should'nt be
         */
        oauth_account_id?: string;
        /**
         * Name of the webhook
         */
        webhook_name?: string;
        /**
         * Description of the webhook
         */
        webhook_description?: string;
        mapping: {
          /**
           * jq path to unique input field for idempotency
           */
          unique_id?: string;
          /**
           * jq path to input field for conversation threading
           */
          thread_id?: string;
        };
        /**
         * template to substitute input fields for custom agent trigger message e.g. 'New message: {{data.body}}'
         */
        message_template: string;
      };
    }
  | {
      type: "recurring";
      recurring: {
        /**
         * The trigger id of the scheduled recurrence
         */
        sync_id?: string;
        /**
         * Right now this is mandatory due to frontend design for all syncs but should'nt be
         */
        oauth_account_id?: string;
        /**
         * Name of the scheduled recurrence
         */
        name?: string;
        /**
         * Instruction of the scheduled recurrence
         */
        message?: string;
        schedule: RecurringScheduleFrequency;
      };
    }
  | {
      type: "batch_schedule_agent_tasks";
      batch_schedule_agent_tasks: {
        message_template: string;
        display_name?: string;
        /**
         * The knowledge set that created this sync.
         */
        knowledge_set?: string;
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * Keys are column headers. Values would include metadata about the column header.
       */
      field_metadata?: {
        [k: string]:
          | {
              [k: string]: any /* this makes soorria sad */ | undefined;
            }
          | undefined;
      };
    }
  | {
      type: "todo_group";
      todo_group: {
        type: "scheduled_trigger";
      };
    }
  | {
      type: "bulk_approve";
      bulk_approve: {};
      /**
       * Keys are column headers. Values would include metadata about the column header.
       */
      field_metadata: {
        conversation_id: {
          type?: "string";
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        action: {
          type?: "string";
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        action_request_id: {
          type?: "string";
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
    }
  | {
      type: "bulk_rerun";
      bulk_rerun: {
        run_from: "start";
      };
    };

export type ExecutionModeSharedDef = "once_off" | "scheduled";

export type SyncOptions = {
  execution_mode?: ExecutionModeSharedDef;
};

export type WorkforceNode =
  | {
      node_id: string;
      metadata?: {
        position: {
          x: number;
          y: number;
          z: number;
        };
      };
      type: "trigger";
      config:
        | {
            type: "manual";
          }
        | {
            type: "auto";
            sync_data: {
              destination:
                | {
                    type?: "agent";
                    agent_id: string;
                  }
                | {
                    type: "workforce";
                    workforce_id: string;
                  };
              run_method?: ENUM_run_method;
              contract?: {
                /**
                 * operating timezone e.g. 'America/New_York'
                 */
                time_zone?: string;
                /**
                 * time in format HH:mm:ss
                 */
                start_of_workday?: string;
                /**
                 * time in format HH:mm:ss
                 */
                end_of_workday?: string;
                max_tasks?: number;
                interval?: ENUM_interval;
                active_week_days?: {
                  sunday: boolean;
                  monday: boolean;
                  tuesday: boolean;
                  wednesday: boolean;
                  thursday: boolean;
                  friday: boolean;
                  saturday: boolean;
                };
                max_count?: {
                  number: number;
                  interval: "daily";
                };
                /**
                 * If this property is true, then the specific time will be found on the sync item
                 */
                one_time_action?: boolean;
                /**
                 * If this property is true, then the sync will not trigger if there is an active conversation
                 */
                prevent_triggering_if_conversation_active?: {
                  /**
                   * postpone all upcoming trigger items in conversation by this amount of time in seconds
                   */
                  postpone_by: number;
                };
                metadata?: {
                  time_zone?: string;
                };
              };
              state?: {
                /**
                 * first item to process may not have this property set yet
                 */
                last_item_process_time?: any /* this makes soorria sad */;
                status?: ENUM_status5;
                /**
                 * disabling incoming sync items from queueing and processing
                 */
                disable_incoming_items?: boolean;
                count?: number;
                count_reset_time?: any /* this makes soorria sad */;
              };
              last_sync_date_utc?: string;
              next_trigger_date_utc?: string;
              config: SyncConfigSharedDef;
              metadata?: {
                is_debug_mode_enabled?: boolean;
                debug_mode_config_id?: string;
                name?: string;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
            };
          };
    }
  | {
      node_id: string;
      metadata?: {
        position: {
          x: number;
          y: number;
          z: number;
        };
      };
      type: "agent";
      config: {
        entity_link: {
          agent_id: string;
          project: string;
          region: string;
        };
        /**
         * Key-value pairs used to override defaults configured in the Agent's template settings
         */
        params_override?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
      };
    }
  | {
      node_id: string;
      metadata?: {
        position: {
          x: number;
          y: number;
          z: number;
        };
      };
      type: "tool";
      config: {
        entity_link: {
          tool_id: string;
          project: string;
          region: string;
        };
      };
    }
  | {
      node_id: string;
      metadata?: {
        position: {
          x: number;
          y: number;
          z: number;
        };
      };
      type: "condition";
      config: {
        label?: string;
        condition_type: "run-multiple" | "run-one";
        /**
         * List of `edge_id`s indicating the order of edges in the UI
         */
        edge_order: Array<string>;
        llm_condition_model?:
          | "anthropic-claude-3-7-sonnet"
          | "anthropic-claude-3-7-sonnet-20250219"
          | "anthropic-claude-v3-haiku"
          | "anthropic-claude-v3-opus"
          | "anthropic-claude-v3-sonnet"
          | "anthropic-claude-v35-haiku"
          | "anthropic-claude-v35-haiku-20241022"
          | "anthropic-claude-v35-sonnet"
          | "anthropic-claude-v35-sonnet-20240620"
          | "anthropic-claude-v35-sonnet-20241022"
          | "azure-openai"
          | "gpt-4o-2024-11-20"
          | "litellm-bedrock"
          | "open-router-google/gemini-2.0-flash-001"
          | "open-router-google/gemini-flash-1.5"
          | "open-router-google/gemini-pro-1.5"
          | "open-router-qwen/qwen-2.5-72b-instruct"
          | "openai-gpt-4.5-preview"
          | "openai-gpt-4.5-preview-2025-02-27"
          | "openai-gpt-4o"
          | "openai-gpt-4o-2024-08-06"
          | "openai-gpt-4o-mini"
          | "openai-gpt-4o-mini-2024-07-18"
          | "openai-gpt35"
          | "openai-gpt35-0613"
          | "openai-gpt35-1106"
          | "openai-gpt35-16k"
          | "openai-gpt4"
          | "openai-gpt4-0125"
          | "openai-gpt4-0613"
          | "openai-gpt4-1106"
          | "openai-gpt4-32k-0613"
          | "openai-gpt4-turbo-2024-04-09"
          | "openai-o1-2024-12-17"
          | "openai-o1-latest"
          | "openai-o3-mini"
          | "openai-o3-mini-2025-01-31";
      };
    };

export type WorkforceTriggerPayload = {
  message:
    | {
        role: "user";
        content: string;
        importance_level?: ENUM_importance_level;
      }
    | {
        action: string;
        action_request_id: string;
        importance_level?: ENUM_importance_level;
        mock_tool_output?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        role: "action-confirm";
        action_params_override?: any /* this makes soorria sad */;
      }
    | {
        action: string;
        action_request_id: string;
        importance_level?: ENUM_importance_level;
        role: "action-reject";
      };
  /**
   * Any additional metadata to be stored with the message. This is not sent to the agent.
   */
  message_metadata?: {
    sync_item_id?: string;
    sync_id?: string;
    sync_type?: string;
    regenerate_metadata?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  sync_id?: string;
};

export type WorkforceTriggerResultItem = {
  node: {
    node_id: string;
    type: "agent";
  };
  trigger_result: {
    job_info: {
      job_id: string;
      studio_id: string;
    };
    conversation_id: string;
  };
};

export type WorkforceAgentToolCallActionConfig = {
  /**
   * A jsonschema superset object that users parameters will be validated against upon execution.
   */
  params_schema?: ParamsSchema;
  agent?: {
    message_template?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  action_behaviour?: string;
  action_retry_config?: {
    max_retries?: number;
    force_retry?: boolean;
    after_retries_behaviour?: ENUM_after_retries_behaviour;
  };
  /**
   * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
   */
  agent_decide_prompt?: string;
  conditional_approval_rules?: {
    max_auto_approvals?: number;
    max_approvals_asked?: number;
  };
  /**
   * Default values the agent will use as inputs when running the tool.
   */
  default_values?: {
    /**
     * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
     */
    _subagent_params?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  prompt_description?: string;
  /**
   * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
   */
  prompt_for_when_to_use?: string;
  wait_for_completion?: boolean;
};

export type WorkforceToolToolCallActionConfig = {
  action_behaviour?: string;
  action_retry_config?: {
    max_retries?: number;
    force_retry?: boolean;
    after_retries_behaviour?: ENUM_after_retries_behaviour;
  };
  /**
   * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
   */
  agent_decide_prompt?: string;
  conditional_approval_rules?: {
    max_auto_approvals?: number;
    max_approvals_asked?: number;
  };
  /**
   * Default values the agent will use as inputs when running the tool.
   */
  default_values?: {
    /**
     * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
     */
    _subagent_params?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  prompt_description?: string;
  /**
   * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
   */
  prompt_for_when_to_use?: string;
};

/**
 * Map from tool input name to config for how the input is provided to the tool
 */
export type WorkforceToolInputConfig = {
  [k: string]:
    | {
        input_source:
          | {
              type: "manual";
            }
          | {
              type: "auto";
            };
      }
    | undefined;
};

export type WorkforceCondition =
  | {
      type: "prompt-based";
      config: {
        prompt: string;
      };
    }
  | {
      type?: "rule-based";
      config?: {
        filters: Array<FlatFilterItem>;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };

export type WorkforceTriggerToAgentEdgeConfig = {
  edge_type: "forced-handover";
  config: {
    threading_behavior: {
      type: ENUM_type10;
    };
  };
};

export type WorkforceTriggerToAgentEdge = {
  edge_id: string;
  source_node_id: string;
  target_node_id: string;
  metadata?: {
    label?: string;
  };
  source_type: "trigger";
  target_type: "agent";
  config: WorkforceTriggerToAgentEdgeConfig;
};

export type WorkforceTriggerToToolEdgeConfig = {
  edge_type: "forced-handover";
  config: {};
};

export type WorkforceTriggerToToolEdge = {
  edge_id: string;
  source_node_id: string;
  target_node_id: string;
  metadata?: {
    label?: string;
  };
  source_type: "trigger";
  target_type: "tool";
  config: WorkforceTriggerToToolEdgeConfig;
};

export type WorkforceTriggerToConditionEdgeConfig = {
  edge_type: "forced-handover";
  config: {};
};

export type WorkforceTriggerToConditionEdge = {
  edge_id: string;
  source_node_id: string;
  target_node_id: string;
  metadata?: {
    label?: string;
  };
  source_type: "trigger";
  target_type: "condition";
  config: WorkforceTriggerToConditionEdgeConfig;
};

export type WorkforceAgentToAgentForcedHandoverEdgeConfig = {
  edge_type: "forced-handover";
  config: {
    threading_behavior: {
      type: ENUM_type10;
    };
  };
};

export type WorkforceAgentToAgentToolCallEdgeConfig = {
  edge_type: "tool-call";
  config: {
    action_config?: WorkforceAgentToolCallActionConfig;
    threading_behavior: {
      type: ENUM_type10;
    };
  };
};

export type WorkforceAgentToAgentEdgeConfig =
  | WorkforceAgentToAgentForcedHandoverEdgeConfig
  | WorkforceAgentToAgentToolCallEdgeConfig;

export type WorkforceAgentToAgentEdge = {
  edge_id: string;
  source_node_id: string;
  target_node_id: string;
  metadata?: {
    label?: string;
  };
  source_type: "agent";
  target_type: "agent";
  config: WorkforceAgentToAgentEdgeConfig;
};

export type WorkforceAgentToToolForcedHandoverEdgeConfig = {
  edge_type: "forced-handover";
  config: {};
};

export type WorkforceAgentToToolToolCallEdgeConfig = {
  edge_type: "tool-call";
  config: {
    action_config?: WorkforceToolToolCallActionConfig;
    /**
     * Map from tool input name to config for how the input is provided to the tool
     */
    tool_input_config?: WorkforceToolInputConfig;
  };
};

export type WorkforceAgentToToolEdgeConfig =
  | WorkforceAgentToToolForcedHandoverEdgeConfig
  | WorkforceAgentToToolToolCallEdgeConfig;

export type WorkforceAgentToToolEdge = {
  edge_id: string;
  source_node_id: string;
  target_node_id: string;
  metadata?: {
    label?: string;
  };
  source_type: "agent";
  target_type: "tool";
  config: WorkforceAgentToToolEdgeConfig;
};

export type WorkforceAgentToConditionEdgeConfig = {
  edge_type: "forced-handover";
  config: {};
};

export type WorkforceAgentToConditionEdge = {
  edge_id: string;
  source_node_id: string;
  target_node_id: string;
  metadata?: {
    label?: string;
  };
  source_type: "agent";
  target_type: "condition";
  config: WorkforceAgentToConditionEdgeConfig;
};

export type WorkforceToolToConditionEdgeConfig = {
  edge_type: "forced-handover";
  config: {};
};

export type WorkforceToolToConditionEdge = {
  edge_id: string;
  source_node_id: string;
  target_node_id: string;
  metadata?: {
    label?: string;
  };
  source_type: "tool";
  target_type: "condition";
  config: WorkforceToolToConditionEdgeConfig;
};

export type WorkforceToolToAgentEdgeConfig = {
  edge_type: "forced-handover";
  config: {
    threading_behavior: {
      type: ENUM_type10;
    };
  };
};

export type WorkforceToolToAgentEdge = {
  edge_id: string;
  source_node_id: string;
  target_node_id: string;
  metadata?: {
    label?: string;
  };
  source_type: "tool";
  target_type: "agent";
  config: WorkforceToolToAgentEdgeConfig;
};

export type WorkforceToolToToolEdgeConfig = {
  edge_type: "forced-handover";
  config: {};
};

export type WorkforceToolToToolEdge = {
  edge_id: string;
  source_node_id: string;
  target_node_id: string;
  metadata?: {
    label?: string;
  };
  source_type: "tool";
  target_type: "tool";
  config: WorkforceToolToToolEdgeConfig;
};

export type WorkforceConditionToAgentEdgeConfig = {
  edge_type: "forced-handover";
  config: {
    threading_behavior: {
      type: ENUM_type10;
    };
    condition: WorkforceCondition;
  };
};

export type WorkforceConditionToAgentEdge = {
  edge_id: string;
  source_node_id: string;
  target_node_id: string;
  metadata?: {
    label?: string;
  };
  source_type: "condition";
  target_type: "agent";
  config: WorkforceConditionToAgentEdgeConfig;
};

export type WorkforceConditionToToolEdgeConfig = {
  edge_type: "forced-handover";
  config: {
    condition: WorkforceCondition;
  };
};

export type WorkforceConditionToToolEdge = {
  edge_id: string;
  source_node_id: string;
  target_node_id: string;
  metadata?: {
    label?: string;
  };
  source_type: "condition";
  target_type: "tool";
  config: WorkforceConditionToToolEdgeConfig;
};

export type WorkforceEdge =
  | WorkforceTriggerToAgentEdge
  | WorkforceTriggerToToolEdge
  | WorkforceTriggerToConditionEdge
  | WorkforceAgentToAgentEdge
  | WorkforceAgentToToolEdge
  | WorkforceAgentToConditionEdge
  | WorkforceToolToConditionEdge
  | WorkforceToolToAgentEdge
  | WorkforceToolToToolEdge
  | WorkforceConditionToAgentEdge
  | WorkforceConditionToToolEdge;

export type ListToolStepsResultItem = {
  type: "public_tool" | "transformation";
  id: string;
  title: string;
  description: string;
  categories: Array<string>;
  emoji?: string;
  logo_key?: string;
  logo_key_for_param_value?: string;
  /**
   * Whether the tool step is in beta release
   */
  is_beta?: boolean;
};

export type StudioRunHistory = {
  _id?: string;
  version?: string;
  studio_id?: string;
  title?: string;
  insert_date_?: string;
  expiry_date_?: any /* this makes soorria sad */;
  status?: ENUM_status3;
  errors?: Array<{
    body?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  execution_time?: number;
  project?: string;
  executor?: {
    type: ENUM_type4;
    api_key_id?: string;
    workflow_id?: string;
    document_id?: string;
    sync_id?: string;
    job_id?: string;
    agent_id?: string;
    conversation_id?: string;
    email_message_id?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  credits_used?: Array<{
    credits: number;
    name: string;
    num_units?: number;
    multiplier?: number | null;
    tool_id?: string;
    tool_name?: string;
    tool_run_id?: string;
  }>;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
  output_preview?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  input_params?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  cost?: number;
  internal_job_id?: string;
  internal_log_info?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
};

export type UserMessageTaskViewContent = {
  type: "user-message";
  text: string;
  user_id?: string;
  display?: {
    name?: string;
    content?: string | null;
    content_html?: string;
    message_attachments?: Array<{
      name?: string;
      url: string;
      contentType?: string;
    }>;
    icon?: string;
    oauth_account_label?: string;
  };
  caller_agent?: {
    agent_id?: string;
    project?: string;
    region?: string;
    conversation_id?: string;
  };
  is_trigger_message?: boolean;
  sync_type?: string;
  original_message_ids: {
    user: string;
  };
  trigger_source?: "agent" | "workforce";
};

export type AgentMessageTaskViewContent = {
  type: "agent-message";
  text: string;
  generating?: boolean;
  original_message_ids: {
    agent: string;
  };
  agent_details?: {
    name?: string;
    emoji?: string;
  };
};

export type ToolRunTaskViewContent = {
  type: "tool-run";
  thoughts?: string;
  generating?: boolean;
  tool_run_state: "cancelled" | "error" | "finished" | "pending" | "running";
  tool_config: {
    type: ENUM_43_ENUM;
    title: string;
    description: string;
    region?: string;
    project?: string;
    id: string;
    version: string;
    emoji?: string;
    params_schema: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
  };
  action_details: {
    action_request_id: string;
    action: string;
  };
  display?: {
    name?: string;
    icon?: string;
  };
  requires_confirmation?: "approval" | "input";
  confirmation?: {
    confirmed: boolean;
    by: "agent" | "user";
  };
  params:
    | {
        valid: true;
        json: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        overrides?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        /**
         * The params with which the tool was actually run
         */
        resolved?: {
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        metadata?: {
          [k: string]:
            | {
                param_source?:
                  | "action-confirm-params-override"
                  | "agent-action-config-default-value"
                  | "debug-mode-input-override"
                  | "external-field"
                  | "llm"
                  | "scratchpad";
              }
            | undefined;
        };
      }
    | {
        valid: false;
        json: string;
      };
  errors?: Array<{
    body?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  output?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  output_source?:
    | "action-confirm-mock-tool-output"
    | "debug-mode-output-override"
    | "tool-run";
  optimistic_output?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  component?:
    | {
        content_type: "email";
        options: {
          to_email?: string | Array<string>;
          cc_emails?: Array<string>;
          bcc_emails?: Array<string>;
          from_email?: string;
          email_subject?: string;
          email_body?: string;
          provider?: "gmail" | "outlook" | "sendgrid";
        };
      }
    | {
        content_type: "escalation";
        options: {
          context: string;
          reason?: string;
          response:
            | {
                state: "awaiting-response";
              }
            | {
                state: "responded";
                text: string;
                user_id?: string;
                user_message_id?: string;
                display?: {
                  name?: string;
                  content?: string | null;
                  content_html?: string;
                  message_attachments?: Array<{
                    name?: string;
                    url: string;
                    contentType?: string;
                  }>;
                  icon?: string;
                  oauth_account_label?: string;
                };
                insert_date_: string;
              }
            | {
                state: "skipped";
              };
        };
      };
  original_message_ids: {
    "action-request": string;
    "action-confirm"?: string;
    "action-reject"?: string;
    "action-response"?: string;
    "action-error"?: string;
  };
};

export type AgentErrorsTaskViewContent = {
  type: "agent-error";
  errors: Array<{
    body?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  original_message_ids: {
    "agent-error": string;
  };
};

export type WorkforceAgentRunTaskViewContent = {
  type: "workforce-agent-run";
  task_details: {
    project: string;
    region: string;
    conversation_id: string;
    finished_state?: ENUM_3_ENUM;
    /**
     * Will be undefined if the task has been deleted
     */
    current_state?: ENUM_3_ENUM;
  };
  agent_details?: {
    agent_id: string;
    project: string;
    region: string;
    name?: string;
    emoji?: string;
  };
  original_message_ids: {};
};

export type WorkforceAgentHandoverTaskViewContent = {
  type: "workforce-agent-handover";
  agent_details: {
    agent_id: string;
    project: string;
    region: string;
    name?: string;
    emoji?: string;
  };
  trigger: WorkforceTriggerPayload;
  task_details?: {
    project: string;
    region: string;
    conversation_id: string;
  };
  original_message_ids: {};
};

export type AnyTaskViewItem = {
  item_id: string;
  insert_date_: string;
  /**
   * Whether the UI item in the frontend is expanded (vs collapsed) by default
   */
  is_expanded_by_default: boolean;
  is_in_hidden_group: boolean;
  debug?: {
    original_documents?: Array<{
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  feedback?: {
    task_details?: string;
    original_task?: string;
    task_id?: string;
    message_id: string;
    task_tags?: Array<string>;
    notes?: string;
    is_full_conversation_feedback?: boolean;
    is_feedback_positive?: boolean;
    user_name?: string;
  };
  content:
    | UserMessageTaskViewContent
    | AgentMessageTaskViewContent
    | ToolRunTaskViewContent
    | AgentErrorsTaskViewContent
    | WorkforceAgentRunTaskViewContent
    | WorkforceAgentHandoverTaskViewContent;
  /**
   * Only applicable to Workforce Task View. The ID of the parent item in the task view.
   */
  parent_item_id?: string;
};

export type AgentTaskViewItem = {
  item_id: string;
  insert_date_: string;
  /**
   * Whether the UI item in the frontend is expanded (vs collapsed) by default
   */
  is_expanded_by_default: boolean;
  is_in_hidden_group: boolean;
  debug?: {
    original_documents?: Array<{
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  feedback?: {
    task_details?: string;
    original_task?: string;
    task_id?: string;
    message_id: string;
    task_tags?: Array<string>;
    notes?: string;
    is_full_conversation_feedback?: boolean;
    is_feedback_positive?: boolean;
    user_name?: string;
  };
  content:
    | UserMessageTaskViewContent
    | AgentMessageTaskViewContent
    | ToolRunTaskViewContent
    | AgentErrorsTaskViewContent;
  /**
   * Only applicable to Workforce Task View. The ID of the parent item in the task view.
   */
  parent_item_id?: string;
};

export type WorkforceTaskViewItem = {
  item_id: string;
  insert_date_: string;
  /**
   * Whether the UI item in the frontend is expanded (vs collapsed) by default
   */
  is_expanded_by_default: boolean;
  is_in_hidden_group: boolean;
  debug?: {
    original_documents?: Array<{
      [k: string]: any /* this makes soorria sad */ | undefined;
    }>;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  feedback?: {
    task_details?: string;
    original_task?: string;
    task_id?: string;
    message_id: string;
    task_tags?: Array<string>;
    notes?: string;
    is_full_conversation_feedback?: boolean;
    is_feedback_positive?: boolean;
    user_name?: string;
  };
  content:
    | UserMessageTaskViewContent
    | AgentMessageTaskViewContent
    | ToolRunTaskViewContent
    | AgentErrorsTaskViewContent
    | WorkforceAgentRunTaskViewContent
    | WorkforceAgentHandoverTaskViewContent;
  /**
   * Only applicable to Workforce Task View. The ID of the parent item in the task view.
   */
  parent_item_id?: string;
};

export type WorkforceGraph = {
  nodes: Array<WorkforceNode>;
  edges: Array<WorkforceEdge>;
};

export type WorkforceRelatedMetadata = {
  nodes?: {
    [k: string]:
      | {
          agent?: {
            agent_id: string;
            params?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            name?: string;
            description?: string;
            /**
             * If set, the agents config will be completely replaced with the templates config.
             */
            template?: {
              agent_id: string;
              region?: ENUM_region1;
              project?: string;
            };
            emoji?: string;
            actions?: Array<{
              chain_id?: string;
              agent_id?: string;
              /**
               * A jsonschema superset object that users parameters will be validated against upon execution.
               */
              params_schema?: ParamsSchema;
              agent?: {
                message_template?: string;
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              action_behaviour?: string;
              action_retry_config?: {
                max_retries?: number;
                force_retry?: boolean;
                after_retries_behaviour?: ENUM_after_retries_behaviour;
              };
              title?: string;
              name?: string;
              description?: string;
              emoji?: string;
              /**
               * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
               */
              agent_decide_prompt?: string;
              conditional_approval_rules?: {
                max_auto_approvals?: number;
                max_approvals_asked?: number;
              };
              /**
               * Useful for external systems to track which tools have been added programatically.
               */
              metadata?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              /**
               * Defaults to project agent is being ran from. Tools must be public to use tools in other projects.
               */
              project?: string;
              /**
               * Defaults to region agent is being ran from. Tools must be public to use tools in other regions.
               */
              region?: string;
              /**
               * DEPRECATED: Version of the tool or subagent to run. Defaults to 'latest'.
               */
              version?: string;
              /**
               * Version of the tool or subagent to run. Can be 'active', 'draft', or a specific version id.
               */
              tool_version?: string;
              /**
               * Default values the agent will use as inputs when running the tool.
               */
              default_values?: {
                /**
                 * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
                 */
                _subagent_params?: {
                  [k: string]: any /* this makes soorria sad */ | undefined;
                };
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              /**
               * Auth account values to update in the chains. Will not be saved to the agent config.
               */
              auth_values?: {
                [k: string]: any /* this makes soorria sad */ | undefined;
              };
              prompt_description?: string;
              /**
               * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
               */
              prompt_for_when_to_use?: string;
              wait_for_completion?: boolean;
              strict?: boolean;
            }>;
            /**
             * A jsonschema superset object that users parameters will be validated against upon execution.
             */
            params_schema?: ParamsSchema;
          };
          tool?: {
            studio_id: string;
            title?: string;
            description?: string;
            emoji?: string;
            /**
             * A jsonschema superset object that users parameters will be validated against upon execution.
             */
            params_schema?: ParamsSchema;
          };
        }
      | undefined;
  };
};

export type WorkforceTask = {
  workforce_task_id: string;
  insert_date: any /* this makes soorria sad */;
  update_date: any /* this makes soorria sad */;
  project: string;
  title?: string;
};

export type AgentTool = {
  version?: string;
  project: string;
  _id?: string;
  studio_id: string;
  /**
   * This tool is listed on the tool marketplace
   */
  in_marketplace?: boolean;
  insert_date_?: string;
  update_date_?: string;
  is_hidden?: boolean;
  tags?: {
    type?: "transformation";
    categories?: {
      [k: string]: true | undefined;
    };
    /**
     * The source of the integration. For example, 'Knowledge: Linear', which imports data from Linear, this would be 'linear'.
     */
    integration_source?: string;
    integrations?: {
      [k: string]: true | undefined;
    };
    use_cases?: {
      [k: string]: true | undefined;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  machine_user_id?: string;
  creator_user_id?: string;
  creator_first_name?: string;
  creator_last_name?: string;
  creator_display_picture?: string;
  /**
   * Anyone can run this tool
   */
  publicly_triggerable?: boolean;
  /**
   * Anyone can view or clone this tool
   */
  public?: boolean;
  metadata?: {
    source_studio_id?: string;
    source_region?: string;
    source_project?: string;
    clone_count?: number;
    last_run_date?: any /* this makes soorria sad */;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  share_styles?: {
    selected_format?: ENUM_selected_format;
    primary_color?: string;
    hide_guidance_tip?: boolean;
    guidance_tip_text?: string;
    cta_text?: string;
    cta_icon?: string;
    hide_logo?: boolean;
  };
  schedule?: {
    frequency?: ENUM_frequency;
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  active_version_id?: string;
  draft_version_id?: string;
  title?: string;
  description?: string;
  title_description_embedding?: null | Array<number>;
  prompt_description?: string;
  cover_image?: string;
  emoji?: string;
  transformations?: {
    steps: Array<{
      name: string;
      transformation: string;
      params: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      saved_params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      output?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      /**
       * A jsonschema superset object to provide metadata for tool output fields.
       */
      output_schema?: {
        metadata?: {
          /**
           * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
           */
          field_order?: Array<string>;
          [k: string]: any /* this makes soorria sad */ | undefined;
        };
        properties?: {
          [k: string]:
            | {
                metadata?: {
                  content_type?: "external_field";
                  /**
                   * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
                   */
                  external_name?: string;
                  render_mode?: ENUM_render_mode;
                };
                [k: string]: any /* this makes soorria sad */ | undefined;
              }
            | undefined;
        };
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      default_output_values?: Array<{
        original_key: string;
        updated_key?: string;
        value: any /* this makes soorria sad */;
      }>;
      continue_on_error?: boolean;
      use_fallback_on_skip?: boolean;
      foreach?: string | Array<any /* this makes soorria sad */>;
      if?: string | boolean | null;
      display_name?: string;
      /**
       * If present, the tool step invent will be activated with the specified instructions in the tool builder.
       */
      invent_instructions?: string;
    }>;
    output?: {
      [k: string]: string | undefined;
    } | null;
  };
  /**
   * A jsonschema superset object that users parameters will be validated against upon execution.
   */
  params_schema?: ParamsSchema;
  /**
   * A jsonschema superset object to provide metadata for tool output fields.
   */
  output_schema?: {
    metadata?: {
      /**
       * An array of output keys in the order that they should be displayed in the tool builder. Used in the frontend to guarantee tab order.
       */
      field_order?: Array<string>;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    properties?: {
      [k: string]:
        | {
            metadata?: {
              content_type?: "external_field";
              /**
               * Field name in external data source (e.g. 'agent_id' in agent conversation metadata)
               */
              external_name?: string;
              render_mode?: ENUM_render_mode;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  /**
   * Mapping from alias -> real variable path
   */
  state_mapping?: {
    [k: string]: string | undefined;
  };
  /**
   * Override the starting state of the studio
   */
  state?: {
    params?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    steps?: {
      [k: string]:
        | {
            output?: {
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            executionTime?: number;
            results?: Array<any /* this makes soorria sad */>;
            skipped?: boolean;
            skippedItems?: Array<any /* this makes soorria sad */>;
            status?: ENUM_status2;
            /**
             * Status of each item in the foreach, key should be the foreach index
             */
            foreach_statuses?: {
              status?: ENUM_status2;
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            /**
             * Internal only object for storing results of step callbacks
             */
            _callback_results?: Array<
              | {
                  status: "success";
                  output: {
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  };
                  foreach_index?: number;
                }
              | {
                  status: "error";
                  error: {
                    message: string;
                  };
                  foreach_index?: number;
                }
            >;
            [k: string]: any /* this makes soorria sad */ | undefined;
          }
        | undefined;
    };
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
  predicted_output?: Array<{
    title?: string;
    slug?: string;
    type?: string;
    [k: string]: any /* this makes soorria sad */ | undefined;
  }>;
  /**
   * Switching this to hours tells our runner engine to run the job in a way suited for long runs.
   */
  max_job_duration?: ENUM_max_job_duration;
  action_config: {
    chain_id?: string;
    agent_id?: string;
    /**
     * A jsonschema superset object that users parameters will be validated against upon execution.
     */
    params_schema?: ParamsSchema;
    agent?: {
      message_template?: string;
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    action_behaviour?: string;
    action_retry_config?: {
      max_retries?: number;
      force_retry?: boolean;
      after_retries_behaviour?: ENUM_after_retries_behaviour;
    };
    title?: string;
    name?: string;
    description?: string;
    emoji?: string;
    /**
     * This prompt guides the agent's decision on whether or not approval is required to execute the tool.
     */
    agent_decide_prompt?: string;
    conditional_approval_rules?: {
      max_auto_approvals?: number;
      max_approvals_asked?: number;
    };
    /**
     * Useful for external systems to track which tools have been added programatically.
     */
    metadata?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Defaults to project agent is being ran from. Tools must be public to use tools in other projects.
     */
    project?: string;
    /**
     * Defaults to region agent is being ran from. Tools must be public to use tools in other regions.
     */
    region?: string;
    /**
     * DEPRECATED: Version of the tool or subagent to run. Defaults to 'latest'.
     */
    version?: string;
    /**
     * Version of the tool or subagent to run. Can be 'active', 'draft', or a specific version id.
     */
    tool_version?: string;
    /**
     * Default values the agent will use as inputs when running the tool.
     */
    default_values?: {
      /**
       * Params to substitute in the subagent. This is only used for subagents (when agent_id is set). This should be used instead of providing params at the top-level since that is reserved for the params in the message template defined in the parent agent.
       */
      _subagent_params?: {
        [k: string]: any /* this makes soorria sad */ | undefined;
      };
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    /**
     * Auth account values to update in the chains. Will not be saved to the agent config.
     */
    auth_values?: {
      [k: string]: any /* this makes soorria sad */ | undefined;
    };
    prompt_description?: string;
    /**
     * Prompt that is added to the calling agent's system prompt. Used to instruct the agent how and when to use this tool or agent.
     */
    prompt_for_when_to_use?: string;
    wait_for_completion?: boolean;
    strict?: boolean;
  };
  action_id: string;
  openai_temporary_function_name: string;
  type: ENUM_43_ENUM;
  is_phantom_tool?: boolean;
  region: string;
  workforce_context?: {
    node_id: string;
    edge_id: string;
  };
};

export type ProjectSnippet = {
  _id: string;
  name: string;
  content: string;
  title?: string;
  description?: string;
  order: number;
  project: string;
  referenced_in?: Array<{
    type: "agent" | "studio";
    object_id: string;
    name?: string;
    emoji?: string;
  }>;
};

export type GenericApiCallOutput = {
  response_body:
    | string
    | {
        [k: string]: any /* this makes soorria sad */ | undefined;
      }
    | Array<any /* this makes soorria sad */>;
  status: number;
  body?: string;
  url?: string;
  response_headers?: {
    [k: string]: any /* this makes soorria sad */ | undefined;
  };
};

export type ApiCallStepOAuthAccountId = string;

export type ApiCallStepHttpHeaders = {
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type ApiCallStepHttpMethod = "DELETE" | "GET" | "PATCH" | "POST" | "PUT";

export type ApiCallStepHttpRequestBody = {
  [k: string]: any /* this makes soorria sad */ | undefined;
};

export type ApiCallStepRelativePath = string;

export type ApiCallStepBaseUrl = string;

export type Permissions = {
  items: {
    [k: string]:
      | {
          resources?: {
            datasets?: {
              [k: string]: boolean | undefined;
            };
            deployables?: {
              [k: string]: boolean | undefined;
            };
            users?: {
              [k: string]: boolean | undefined;
            };
            agents?: {
              [k: string]: boolean | undefined;
            };
            knowledge_sets?: {
              [k: string]: boolean | undefined;
            };
            chains?: {
              [k: string]: boolean | undefined;
            };
            syncs?: {
              [k: string]: boolean | undefined;
            };
            [k: string]: any /* this makes soorria sad */ | undefined;
          };
          actions?: {
            [k: string]: boolean | undefined;
          };
        }
      | undefined;
  };
};

export type FullUserPermissions = {
  projects: {
    [k: string]:
      | {
          items: {
            [k: string]:
              | {
                  resources?: {
                    datasets?: {
                      [k: string]: boolean | undefined;
                    };
                    deployables?: {
                      [k: string]: boolean | undefined;
                    };
                    users?: {
                      [k: string]: boolean | undefined;
                    };
                    agents?: {
                      [k: string]: boolean | undefined;
                    };
                    knowledge_sets?: {
                      [k: string]: boolean | undefined;
                    };
                    chains?: {
                      [k: string]: boolean | undefined;
                    };
                    syncs?: {
                      [k: string]: boolean | undefined;
                    };
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  };
                  actions?: {
                    [k: string]: boolean | undefined;
                  };
                }
              | undefined;
          };
        }
      | undefined;
  };
  organizations?: {
    [k: string]:
      | {
          items: {
            [k: string]:
              | {
                  resources?: {
                    datasets?: {
                      [k: string]: boolean | undefined;
                    };
                    deployables?: {
                      [k: string]: boolean | undefined;
                    };
                    users?: {
                      [k: string]: boolean | undefined;
                    };
                    agents?: {
                      [k: string]: boolean | undefined;
                    };
                    knowledge_sets?: {
                      [k: string]: boolean | undefined;
                    };
                    chains?: {
                      [k: string]: boolean | undefined;
                    };
                    syncs?: {
                      [k: string]: boolean | undefined;
                    };
                    [k: string]: any /* this makes soorria sad */ | undefined;
                  };
                  actions?: {
                    [k: string]: boolean | undefined;
                  };
                }
              | undefined;
          };
        }
      | undefined;
  };
  administrator?: {
    items: {
      [k: string]:
        | {
            resources?: {
              datasets?: {
                [k: string]: boolean | undefined;
              };
              deployables?: {
                [k: string]: boolean | undefined;
              };
              users?: {
                [k: string]: boolean | undefined;
              };
              agents?: {
                [k: string]: boolean | undefined;
              };
              knowledge_sets?: {
                [k: string]: boolean | undefined;
              };
              chains?: {
                [k: string]: boolean | undefined;
              };
              syncs?: {
                [k: string]: boolean | undefined;
              };
              [k: string]: any /* this makes soorria sad */ | undefined;
            };
            actions?: {
              [k: string]: boolean | undefined;
            };
          }
        | undefined;
    };
  };
};

export type SimpleSearchAndFlatFilterItem =
  | {
      /**
       * Match where document[field] is in value list.
       */
      match?: {
        /**
         * If matching on text, match even if there are extra words / case insensitivity
         */
        fuzzy?: boolean;
        /**
         * Field to match on.
         */
        key?: string;
        /**
         * Field to match on.
         */
        field?: string;
        /**
         * Can be either a single item or a list of items to match on.
         */
        value:
          | string
          | boolean
          | number
          | Array<any /* this makes soorria sad */>;
      };
      matchArray?: {
        field: string;
        value: Array<string | number>;
      };
      random?: {
        size: number;
      };
      /**
       * Match where document._id is in value list.
       */
      matchIds?: {
        /**
         * Can be either a single item or a list of items to match on.
         */
        value:
          | string
          | boolean
          | number
          | Array<any /* this makes soorria sad */>;
      };
      /**
       * Match documents where greaterThan < document[field] < lessThan. Supports numbers and date strings.
       */
      range?: {
        /**
         * Field to match on.
         */
        key?: string;
        /**
         * Field to match on.
         */
        field?: string;
        greaterThan?: any /* this makes soorria sad */;
        lessThan?: any /* this makes soorria sad */;
        greaterThanOrEqualTo?: any /* this makes soorria sad */;
        lessThanOrEqualTo?: any /* this makes soorria sad */;
      };
      wildcard?: {
        /**
         * Field to match on.
         */
        key?: string;
        /**
         * Field to match on.
         */
        field?: string;
        /**
         * single string or array of valid wildcard strings to match on, for example ['tele*']
         */
        value: string | Array<string>;
      };
      /**
       * Match documents where field specified by 'field' exists in the document. for nested fields, use syntax: a.b.c
       */
      fieldExists?: {
        /**
         * Field that must exist.
         */
        key?: string;
        /**
         * Field that must exist.
         */
        field?: string;
      };
      /**
       * Match documents where doc[field] % module == value
       */
      matchModulo?: {
        field?: string;
        modulo: number;
        value: number;
      };
      /**
       * Filter down to one document for each value of selected field.
       */
      dedupeByValue?: {
        /**
         * Field to filter on.
         */
        field: string;
      };
      /**
       * Match documents where document[a] <=/>=/</>/==/!=/stringEquals document[b]. Use stringEquals to compare strings.
       */
      selfreference?: {
        /**
         * First field in comparison.
         */
        a: string;
        /**
         * Second field in comparison.
         */
        b: string;
        /**
         * Operator used to compare a and b.
         */
        operation: ENUM_operation;
      };
      /**
       * Match documents where greaterThan < wordCount(document[field]) < lessThan.
       */
      wordCount?: {
        /**
         * Field to match on.
         */
        field: string;
        /**
         * Minimum word count.
         */
        greaterThan?: number;
        /**
         * Maximum word count.
         */
        lessThan?: number;
      };
      /**
       * Match documents where greaterThan < characterCount(document[field]) < lessThan.
       */
      characterCount?: {
        /**
         * Field to match on.
         */
        field: string;
        /**
         * Minimum character count.
         */
        greaterThan?: number;
        /**
         * Maximum character count.
         */
        lessThan?: number;
      };
      /**
       * Used to perform a logical OR of filters. each element of the OR list can itself be a list  to perform a nested AND. {or:[[A,B],C]} is equivalent to (A AND B) OR C
       */
      or?: Array<
        Array<SimpleSearchAndFlatFilterItem> | SimpleSearchAndFlatFilterItem
      >;
      /**
       * Used to perform NOT filter. Can be a single filter or a list of filters to perform a !(AND). {not:[A,B]} is equivalent to !(A AND B)
       */
      not?:
        | Array<SimpleSearchAndFlatFilterItem>
        | SimpleSearchAndFlatFilterItem;
      /**
       * Filter based on data within a _chunk_ field.
       */
      chunk?: {
        /**
         * The path of the chunk field to filter on. For example: description_sentences_chunk_
         */
        path: string;
        filters: Array<SimpleSearchAndFlatFilterItem>;
      };
    }
  | FlatFilterItem;
