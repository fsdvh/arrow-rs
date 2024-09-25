var srcIndex = new Map(JSON.parse('[["arrow",["",[["array",[],["mod.rs"]],["compute",[],["kernels.rs","mod.rs"]],["datatypes",[],["mod.rs"]],["util",[],["bench_util.rs","data_gen.rs","mod.rs","string_writer.rs","test_util.rs"]]],["error.rs","lib.rs","pyarrow.rs","tensor.rs"]]],["arrow_arith",["",[],["aggregate.rs","arithmetic.rs","arity.rs","bitwise.rs","boolean.rs","lib.rs","numeric.rs","temporal.rs"]]],["arrow_array",["",[["array",[],["binary_array.rs","boolean_array.rs","byte_array.rs","byte_view_array.rs","dictionary_array.rs","fixed_size_binary_array.rs","fixed_size_list_array.rs","list_array.rs","map_array.rs","mod.rs","null_array.rs","primitive_array.rs","run_array.rs","string_array.rs","struct_array.rs","union_array.rs"]],["builder",[],["boolean_builder.rs","buffer_builder.rs","fixed_size_binary_builder.rs","fixed_size_list_builder.rs","generic_byte_run_builder.rs","generic_bytes_builder.rs","generic_bytes_dictionary_builder.rs","generic_bytes_view_builder.rs","generic_list_builder.rs","map_builder.rs","mod.rs","null_builder.rs","primitive_builder.rs","primitive_dictionary_builder.rs","primitive_run_builder.rs","struct_builder.rs","union_builder.rs"]]],["arithmetic.rs","cast.rs","delta.rs","ffi.rs","ffi_stream.rs","iterator.rs","lib.rs","numeric.rs","record_batch.rs","run_iterator.rs","scalar.rs","temporal_conversions.rs","timezone.rs","trusted_len.rs","types.rs"]]],["arrow_avro",["",[["reader",[],["block.rs","header.rs","mod.rs","vlq.rs"]]],["codec.rs","compression.rs","lib.rs","schema.rs"]]],["arrow_buffer",["",[["alloc",[],["alignment.rs","mod.rs"]],["bigint",[],["div.rs","mod.rs"]],["buffer",[],["boolean.rs","immutable.rs","mod.rs","mutable.rs","null.rs","offset.rs","ops.rs","run.rs","scalar.rs"]],["builder",[],["boolean.rs","mod.rs","null.rs","offset.rs"]],["util",[],["bit_chunk_iterator.rs","bit_iterator.rs","bit_mask.rs","bit_util.rs","mod.rs"]]],["arith.rs","bytes.rs","interval.rs","lib.rs","native.rs"]]],["arrow_cast",["",[["cast",[],["decimal.rs","dictionary.rs","list.rs","map.rs","mod.rs","string.rs"]]],["base64.rs","display.rs","lib.rs","parse.rs","pretty.rs"]]],["arrow_csv",["",[["reader",[],["mod.rs","records.rs"]]],["lib.rs","writer.rs"]]],["arrow_data",["",[["equal",[],["boolean.rs","byte_view.rs","dictionary.rs","fixed_binary.rs","fixed_list.rs","list.rs","mod.rs","null.rs","primitive.rs","run.rs","structure.rs","union.rs","utils.rs","variable_size.rs"]],["transform",[],["boolean.rs","fixed_binary.rs","fixed_size_list.rs","list.rs","mod.rs","null.rs","primitive.rs","structure.rs","union.rs","utils.rs","variable_size.rs"]]],["byte_view.rs","data.rs","decimal.rs","ffi.rs","lib.rs"]]],["arrow_file_to_stream",["",[],["arrow-file-to-stream.rs"]]],["arrow_flight",["",[["sql",[["metadata",[],["catalogs.rs","db_schemas.rs","mod.rs","sql_info.rs","table_types.rs","tables.rs","xdbc_info.rs"]]],["arrow.flight.protocol.sql.rs","client.rs","mod.rs","server.rs"]]],["arrow.flight.protocol.rs","client.rs","decode.rs","encode.rs","error.rs","lib.rs","streams.rs","trailers.rs","utils.rs"]]],["arrow_integration_test",["",[],["datatype.rs","field.rs","lib.rs","schema.rs"]]],["arrow_integration_testing",["",[["flight_client_scenarios",[],["auth_basic_proto.rs","integration_test.rs","middleware.rs"]],["flight_server_scenarios",[],["auth_basic_proto.rs","integration_test.rs","middleware.rs"]]],["flight_client_scenarios.rs","flight_server_scenarios.rs","lib.rs"]]],["arrow_ipc",["",[["gen",[],["File.rs","Message.rs","Schema.rs","SparseTensor.rs","Tensor.rs","mod.rs"]],["reader",[],["stream.rs"]]],["compression.rs","convert.rs","lib.rs","reader.rs","writer.rs"]]],["arrow_json",["",[["reader",[],["boolean_array.rs","decimal_array.rs","list_array.rs","map_array.rs","mod.rs","null_array.rs","primitive_array.rs","schema.rs","serializer.rs","string_array.rs","struct_array.rs","tape.rs","timestamp_array.rs"]],["writer",[],["encoder.rs"]]],["lib.rs","writer.rs"]]],["arrow_json_integration_test",["",[],["arrow-json-integration-test.rs"]]],["arrow_ord",["",[],["cmp.rs","comparison.rs","lib.rs","ord.rs","partition.rs","rank.rs","sort.rs"]]],["arrow_row",["",[],["fixed.rs","lib.rs","list.rs","variable.rs"]]],["arrow_schema",["",[],["datatype.rs","datatype_parse.rs","error.rs","ffi.rs","field.rs","fields.rs","lib.rs","schema.rs"]]],["arrow_select",["",[],["concat.rs","dictionary.rs","filter.rs","interleave.rs","lib.rs","nullif.rs","take.rs","window.rs","zip.rs"]]],["arrow_stream_to_file",["",[],["arrow-stream-to-file.rs"]]],["arrow_string",["",[],["concat_elements.rs","length.rs","lib.rs","like.rs","predicate.rs","regexp.rs","substring.rs"]]],["flight_sql_client",["",[],["flight_sql_client.rs"]]],["flight_test_integration_client",["",[],["flight-test-integration-client.rs"]]],["flight_test_integration_server",["",[],["flight-test-integration-server.rs"]]],["gen",["",[],["main.rs"]]],["parquet",["",[["arrow",[["array_reader",[],["builder.rs","byte_array.rs","byte_array_dictionary.rs","byte_view_array.rs","empty_array.rs","fixed_len_byte_array.rs","fixed_size_list_array.rs","list_array.rs","map_array.rs","mod.rs","null_array.rs","primitive_array.rs","struct_array.rs"]],["arrow_reader",[],["filter.rs","mod.rs","selection.rs","statistics.rs"]],["arrow_writer",[],["byte_array.rs","levels.rs","mod.rs"]],["async_reader",[],["metadata.rs","mod.rs","store.rs"]],["async_writer",[],["mod.rs","store.rs"]],["buffer",[],["bit_util.rs","dictionary_buffer.rs","mod.rs","offset_buffer.rs","view_buffer.rs"]],["decoder",[],["delta_byte_array.rs","dictionary_index.rs","mod.rs"]],["record_reader",[],["buffer.rs","definition_levels.rs","mod.rs"]],["schema",[],["complex.rs","mod.rs","primitive.rs"]]],["mod.rs"]],["bloom_filter",[],["mod.rs"]],["column",[["reader",[],["decoder.rs"]],["writer",[],["encoder.rs","mod.rs"]]],["mod.rs","page.rs","reader.rs"]],["encodings",[["decoding",[],["byte_stream_split_decoder.rs"]],["encoding",[],["byte_stream_split_encoder.rs","dict_encoder.rs","mod.rs"]]],["decoding.rs","levels.rs","mod.rs","rle.rs"]],["file",[["metadata",[],["memory.rs","mod.rs","reader.rs","writer.rs"]],["page_index",[],["index.rs","index_reader.rs","mod.rs","offset_index.rs"]]],["footer.rs","mod.rs","page_encoding_stats.rs","properties.rs","reader.rs","serialized_reader.rs","statistics.rs","writer.rs"]],["record",[],["api.rs","mod.rs","reader.rs","record_reader.rs","record_writer.rs","triplet.rs"]],["schema",[],["mod.rs","parser.rs","printer.rs","types.rs","visitor.rs"]],["util",[["test_common",[],["mod.rs","page_util.rs"]]],["bit_pack.rs","bit_util.rs","interner.rs","mod.rs"]]],["basic.rs","compression.rs","data_type.rs","errors.rs","format.rs","lib.rs","thrift.rs"]]],["parquet_concat",["",[],["parquet-concat.rs"]]],["parquet_derive",["",[],["lib.rs","parquet_field.rs"]]],["parquet_derive_test",["",[],["lib.rs"]]],["parquet_fromcsv",["",[],["parquet-fromcsv.rs"]]],["parquet_index",["",[],["parquet-index.rs"]]],["parquet_layout",["",[],["parquet-layout.rs"]]],["parquet_read",["",[],["parquet-read.rs"]]],["parquet_rewrite",["",[],["parquet-rewrite.rs"]]],["parquet_rowcount",["",[],["parquet-rowcount.rs"]]],["parquet_schema",["",[],["parquet-schema.rs"]]],["parquet_show_bloom_filter",["",[],["parquet-show-bloom-filter.rs"]]]]'));
createSrcSidebar();
//{"start":36,"fragment_lengths":[241,130,989,130,428,164,82,453,61,338,83,292,201,300,75,102,68,125,135,61,121,55,81,81,28,1803,49,57,43,51,47,49,45,51,53,49,71]}