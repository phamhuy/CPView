import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileService } from '../../services/file.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private fileService : FileService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onFileUpload(e) {
    let file = e.target.files[0];
    this.fileService.loadFile(file).subscribe(isLoaded => {
      if (isLoaded) {
        this.router.navigate(['/editor']);
      }
    });
  }

  onClick() {
    this.fileService.loadFile2(xml).subscribe(isLoaded => {
      if (isLoaded) {
        this.router.navigate(['/editor']);
      }
    });
  }

}

const xml = String.raw`<?xml version="1.0" encoding="UTF-8"?>
<CPViewConfig>
	<Menus name="CPVIEW">
		<View viewtag="TOP-Overview"/>
		<View viewtag="TOP-SysInfo"/>
		<Menu name="Network">
			<View viewtag="Network-Traffic"/>
			<Menu name="Interfaces">
				<View viewtag="Interfaces-Overview"/>
				<View viewtag="Interfaces-Traffic"/>
			</Menu>
			<Menu name="Top-Protocols">
				<DynamicView viewtag="Network-Top_Protocols"/>
			</Menu>
			<Menu name="Top-Connections">
				<DynamicView viewtag="Network-Top_Connections"/>
			</Menu>
		</Menu>
		<Menu name="CPU">
			<Menu name="Overview">
				<View viewtag="CPU-Overview"/>
				<DynamicView viewtag="ppak-CPU"/>
			</Menu>
			<Menu name="Top-Protocols">
				<Menu name="All-Instances">
					<View viewtag="Flofiler-ALL-0"/>
				</Menu>
				<Menu name="Instances">
					<DynamicView viewtag="Flofiler-Pivot-0"/>
				</Menu>
			</Menu>
			<Menu name="Top-Connections">
				<DynamicView viewtag="CPU-Top-Conns-Instance"/>
			</Menu>
		</Menu>
		<Menu name="I/O">
			<View viewtag="IO-Overview"/>
		</Menu>
		<Menu name="Software-blades">
			<View viewtag="SB-GENERAL"/>
			<Menu name="VPN">
				<View viewtag="SB-VPN-OVERVIEW"/>
				<View viewtag="SB-VPN-DETAILED"/>
				<Menu name="SecureXL">
					<DynamicView viewtag="VPN-ppak"/>
				</Menu>
			</Menu>
			<View viewtag="SB-IDA"/>
			<View viewtag="SB-DLP"/>
			<View viewtag="SB-SCRUB"/>
			<Menu name="Threat-Emulation">
				<Menu name="MTA">
					<View viewtag="MTA-QUEUES"/>
					<View viewtag="MTA-MONITORING"/>
				</Menu>
			</Menu>
			<Menu name="Content-Awareness">
				<Menu name="Matched-Data-Types">
					<View viewtag="SB-CTNT-DT-BIDT"/>
					<View viewtag="SB-CTNT-DT-CDT"/>
				</Menu>
				<Menu name="Files">
					<View viewtag="SB-CTNT-F-FBS"/>
					<View viewtag="SB-CTNT-F-FBT"/>
					<View viewtag="SB-CTNT-F-FBE"/>
				</Menu>
			</Menu>
			<Menu name="QoS">
				<DynamicView viewtag="QoS-ppak"/>
			</Menu>
		</Menu>
		<Menu name="Hardware-Health">
			<View viewtag="HW_GAIA-temperature"/>
			<View viewtag="HW_GAIA-voltage"/>
			<View viewtag="HW_GAIA-power"/>
			<View viewtag="HW_GAIA-fan"/>
			<View viewtag="HW_GAIA-bios"/>
		</Menu>
		<Menu name="Advanced">
			<Menu name="CPU-Profiler">
				<Menu name="Components">
					<Menu name="All-Instances">
						<View viewtag="Flofiler-ALL-1"/>
					</Menu>
					<Menu name="Instances">
						<DynamicView viewtag="Flofiler-Pivot-1"/>
					</Menu>
				</Menu>
				<Menu name="PM-Stats">
					<Menu name="All-Instances">
						<View viewtag="Flofiler-ALL-2"/>
					</Menu>
					<Menu name="Instances">
						<DynamicView viewtag="Flofiler-Pivot-2"/>
					</Menu>
				</Menu>
			</Menu>
			<Menu name="Memory">
				<Menu name="Overview">
					<View viewtag="FW-kernel-mem"/>
					<DynamicView viewtag="ppak-memory"/>
				</Menu>
				<View viewtag="FW-failed_allocs"/>
				<View viewtag="Memory-Contexts"/>
			</Menu>
			<Menu name="Network">
				<Menu name="Overview">
					<DynamicView viewtag="ppak-network"/>
				</Menu>
				<Menu name="Path">
					<DynamicView viewtag="Protocols-Path_Distribution"/>
				</Menu>
				<Menu name="Direction">
					<DynamicView viewtag="Protocols-Direction_Distribution"/>
				</Menu>
				<Menu name="Size">
					<DynamicView viewtag="Protocols-Size_Distribution"/>
				</Menu>
				<Menu name="BOTH_FIN">
					<View viewtag="SecureXL-BOTH_FIN-packets"/>
					<View viewtag="FW-BOTH_FIN-packets"/>
				</Menu>
			</Menu>
			<Menu name="VSX">
				<View viewtag="VSX-Overview"/>
				<Menu name="VSs">
					<View viewtag="VSX-VSs-Configuration"/>
					<View viewtag="VSX-VSs-Physical-Resources"/>
					<View viewtag="VSX-VSs-Traffic"/>
				</Menu>
				<View viewtag="VSX-Statistics"/>
			</Menu>
			<Menu name="SecureXL">
				<View viewtag="ppak-side-by-side"/>
				<Menu name="Drops">
					<DynamicView viewtag="ppak-Drops"/>
				</Menu>
				<Menu name="Advanced">
					<View viewtag="SecureXL-Drop-reasons"/>
					<View viewtag="SecureXL-Synatk"/>
				</Menu>
				<Menu name="Nip-Stats">
					<DynamicView viewtag="nip-stats"/>
				</Menu>
			</Menu>
			<Menu name ="ClusterXL">
				<View viewtag="ClusterXL-Overview"/>
			</Menu>
			<Menu name="CoreXL">
				<View viewtag="CoreXL-General"/>
				<View viewtag="CoreXL-Global"/>
				<Menu name="Instances">
					<DynamicView viewtag="CoreXL-Instance"/>
				</Menu>
			</Menu>
			<Menu name="PrioQ">
				<View viewtag="PrioQ-General"/>
				<Menu name="Instances">
					<DynamicView viewtag="PrioQ-Instance"/>
				</Menu>
			</Menu>
			<Menu name="Streaming">
				<Menu name="PSL">
					<DynamicView viewtag="PSL-falcon"/>
				</Menu>
				<Menu name="CPAS">
					<DynamicView viewtag="CPAS-falcon"/>
				</Menu>
			</Menu>
			<Menu name="Routed">
				<View viewtag="bgp"/>
				<View viewtag="ospf"/>
				<View viewtag="rip"/>
				<View viewtag="pim"/>
			</Menu>
			<View viewtag="IS-RAD"/>
			<View viewtag="UP_stats"/>
			<View viewtag="WS_stats"/>
			<Menu name="CPAQ">
				<Menu name="PPAK">
					<Menu name="General">
						<DynamicView viewtag="cpaq_sim_general"/>
					</Menu>
					<Menu name="FW-to-PPAK">
						<DynamicView viewtag="cpaq_sim_fw2sxl"/>
					</Menu>
					<Menu name="PPAK-to-FW">
						<DynamicView viewtag="cpaq_sim_sxl2fw"/>
					</Menu>
					<Menu name="Dispatcher-to-PPAK">
						<DynamicView viewtag="cpaq_sim_fw2sxl_g"/>
					</Menu>
					<Menu name="PPAK-to-Dispatcher">
						<DynamicView viewtag="cpaq_sim_sxl2fw_g"/>
					</Menu>
				</Menu>
				<Menu name="FW">
					<Menu name="General">
						<DynamicView viewtag="cpaq_fw_general"/>
					</Menu>
					<Menu name="FW-to-PPAK">
						<DynamicView viewtag="cpaq_fw_fw2sxl"/>
					</Menu>
					<Menu name="PPAK-to-FW">
						<DynamicView viewtag="cpaq_fw_sxl2fw"/>
					</Menu>
					<Menu name="Dispatcher-to-PPAK">
						<DynamicView viewtag="cpaq_fw_fw2sxl_g"/>
					</Menu>
					<Menu name="PPAK-to-Dispatcher">
						<DynamicView viewtag="cpaq_fw_sxl2fw_g"/>
					</Menu>
				</Menu>
			</Menu>
		</Menu>
	</Menus>
	<Views>
		<View viewtag="UP_stats" name="UP" hide_on_mgmt="1">
			<Block heading="Unified Policy Concurrent Information">
				<Stat type="TABLE" rows_num="3" sid="up.upConcurrent.upConcurrentTbl" override_width="6">
					<Column name="">
						<Row name="Connections"/>
						<Row name="Transactions"/>
						<Row name="Memory KB"/>
					</Column>
					<Column type="UINT64" name="Concurrent" sid="up.upConcurrent.upConcurrentTbl.up_concurrent"/>
					<Column type="UINT64" name="Peak" sid="up.upConcurrent.upConcurrentTbl.up_max_concurrent"/>
					<Column type="TIMESTAMP" name="Peak Time" sid="up.upConcurrent.upConcurrentTbl.up_max_concurrent_time"/>
				</Stat>
				<Stat type="UINT" name="Non-Fully matched connections" sid="up.upConcurrent.up_none_match_conns"/>
				<Stat type="UINT64" name="Total connections" sid="up.upConcurrent.total_connections"/>
			</Block>
		</View>
		<View viewtag="WS_stats" name="HTTP-Parser" hide_on_mgmt="1">
			<Block heading="Concurrent Information">
				<Stat type="TABLE" sid="ws.wsStats.ws_concurrent_conn" override_width="8">
					<Column name="">
						<Row name="Connections"/>
						<Row name="Sessions"/>
					</Column>
					<Column name="Concurrent" type="UINT" sid="ws.wsStats.ws_concurrent_conn.ws_concurrent_connections"/>
					<Column name="Peak" type="UINT" sid="ws.wsStats.ws_concurrent_conn.ws_max_concurrent_connections"/>
					<Column name="Peak Time" type="TIMESTAMP" sid="ws.wsStats.ws_concurrent_conn.ws_concurrent_connections_time"/>
				</Stat>
			</Block>
			<Block heading="Top connections with more than 50 sessions">
				<Stat type="TABLE" sid="ws.wsStats.multi_session">
					<Column name="Conn-Key" type="STRING" sid="ws.wsStats.multi_session.session_conn"/>
					<Column name="Sessions" type="UINT" sid="ws.wsStats.multi_session.session_count"/>
				</Stat>
			</Block>
			<Block heading="Http Traffic volume by Content-Type">
				<Stat type="TABLE" sid="ws.wsStats.http_volume">
					<Column name="Content-Type" type="STRING" sid="ws.wsStats.http_volume.ws_content_type"/>
					<Column name="Response" type="UINT64" sid="ws.wsStats.http_volume.ws_res_volume"/>
					<Column name="Request" type="UINT64" sid="ws.wsStats.http_volume.ws_req_volume"/>
				</Stat>
			</Block>
			<Block heading="Content-Encoding information">
				<Stat type="TABLE" sid="ws.wsStats.content_encoding_table" override_width="8">
					<Column name="Encode-Type" type="STRING" sid="ws.wsStats.content_encoding_table.encode_type"/>
					<Column name="Count" type="UINT" sid="ws.wsStats.content_encoding_table.encode_type_count"/>
				</Stat>
			</Block>
			<Block heading="Streaming information">
				<Stat type="UINT" override_width="8" name="Max stream size:" sid="ws.wsStats.max_streaming_count"/>
			</Block>
		</View>
		<View viewtag="cpaq_fw_fw2sxl" name="fw2sxl" hide_on_mgmt="1">
			<Dynamic max_views_num="10" sid="" type="snd_falcon"/>
			<Block heading="Legend">
				<Stat type="TABLE" rows_num="6">
					<Column name="">
						<Row name="in S 	- Inbound successful"/>
						<Row name="in F 	- Inbound failure"/>
						<Row name="out_s S 	- Outbound-start successful"/>
						<Row name="out_s F 	- Outbound-start failure"/>
						<Row name="out_e S 	- Outbound-end successful"/>
						<Row name="out_e F 	- Outbound-end failure"/>
					</Column>
				</Stat>
			</Block>
			<Block heading="API calls sent from FW to PPAK">
				<Stat type="TABLE" sid="cpaq_fw_.fw2sxl.fw2sxl" sid_prefix="cpaq_fw_">
					<Column name="opcode" type="STRING" sid="cpaq_fw_.fw2sxl.fw2sxl.opcode" sid_prefix="cpaq_fw_"/>
					<Column name="in S" type="UINT64" sid="cpaq_fw_.fw2sxl.fw2sxl.inbound_success" sid_prefix="cpaq_fw_"/>
					<Column name="in F" type="UINT64" sid="cpaq_fw_.fw2sxl.fw2sxl.inbound_failure" sid_prefix="cpaq_fw_"/>
					<Column name="out_s S" type="UINT64" sid="cpaq_fw_.fw2sxl.fw2sxl.outbound_start_success" sid_prefix="cpaq_fw_"/>
					<Column name="out_s F" type="UINT64" sid="cpaq_fw_.fw2sxl.fw2sxl.outbound_start_failure" sid_prefix="cpaq_fw_"/>
					<Column name="out_e S" type="UINT64" sid="cpaq_fw_.fw2sxl.fw2sxl.outbound_end_success" sid_prefix="cpaq_fw_"/>
					<Column name="out_e F" type="UINT64" sid="cpaq_fw_.fw2sxl.fw2sxl.outbound_end_failure" sid_prefix="cpaq_fw_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="cpaq_fw_fw2sxl_g" name="fw2sxl_g" hide_on_mgmt="1">
			<Dynamic max_views_num="10" sid="" type="snd_falcon"/>
			<Block heading="Legend">
				<Stat type="TABLE" rows_num="6">
					<Column name="">
						<Row name="in S 	- Inbound successful"/>
						<Row name="in F 	- Inbound failure"/>
						<Row name="out_s S 	- Outbound-start successful"/>
						<Row name="out_s F 	- Outbound-start failure"/>
						<Row name="out_e S 	- Outbound-end successful"/>
						<Row name="out_e F 	- Outbound-end failure"/>
					</Column>
				</Stat>
			</Block>
			<Block heading="API calls sent from Dispatcher to PPAK">
				<Stat type="TABLE" sid="cpaq_fw_.fw2sxl_g.fw2sxl_g" sid_prefix="cpaq_fw_">
					<Column name="opcode" type="STRING" sid="cpaq_fw_.fw2sxl_g.fw2sxl_g.opcode" sid_prefix="cpaq_fw_"/>
					<Column name="in S" type="UINT64" sid="cpaq_fw_.fw2sxl_g.fw2sxl_g.inbound_success" sid_prefix="cpaq_fw_"/>
					<Column name="in F" type="UINT64" sid="cpaq_fw_.fw2sxl_g.fw2sxl_g.inbound_failure" sid_prefix="cpaq_fw_"/>
					<Column name="out_s S" type="UINT64" sid="cpaq_fw_.fw2sxl_g.fw2sxl_g.outbound_start_success" sid_prefix="cpaq_fw_"/>
					<Column name="out_s F" type="UINT64" sid="cpaq_fw_.fw2sxl_g.fw2sxl_g.outbound_start_failure" sid_prefix="cpaq_fw_"/>
					<Column name="out_e S" type="UINT64" sid="cpaq_fw_.fw2sxl_g.fw2sxl_g.outbound_end_success" sid_prefix="cpaq_fw_"/>
					<Column name="out_e F" type="UINT64" sid="cpaq_fw_.fw2sxl_g.fw2sxl_g.outbound_end_failure" sid_prefix="cpaq_fw_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="cpaq_fw_sxl2fw" name="sxl2fw" hide_on_mgmt="1">
			<Dynamic max_views_num="10" sid="" type="snd_falcon"/>
			<Block heading="Legend">
				<Stat type="TABLE" rows_num="6">
					<Column name="">
						<Row name="in S 	- Inbound successful"/>
						<Row name="in F 	- Inbound failure"/>
						<Row name="out_s S 	- Outbound-start successful"/>
						<Row name="out_s F 	- Outbound-start failure"/>
						<Row name="out_e S 	- Outbound-end successful"/>
						<Row name="out_e F 	- Outbound-end failure"/>
					</Column>
				</Stat>
			</Block>
			<Block heading="Notifications sent from PPAK to FW">
				<Stat type="TABLE" sid="cpaq_fw_.sxl2fw.sxl2fw" sid_prefix="cpaq_fw_">
					<Column name="opcode" type="STRING" sid="cpaq_fw_.sxl2fw.sxl2fw.opcode" sid_prefix="cpaq_fw_"/>
					<Column name="in S" type="UINT64" sid="cpaq_fw_.sxl2fw.sxl2fw.inbound_success" sid_prefix="cpaq_fw_"/>
					<Column name="in F" type="UINT64" sid="cpaq_fw_.sxl2fw.sxl2fw.inbound_failure" sid_prefix="cpaq_fw_"/>
					<Column name="out_s S" type="UINT64" sid="cpaq_fw_.sxl2fw.sxl2fw.outbound_start_success" sid_prefix="cpaq_fw_"/>
					<Column name="out_s F" type="UINT64" sid="cpaq_fw_.sxl2fw.sxl2fw.outbound_start_failure" sid_prefix="cpaq_fw_"/>
					<Column name="out_e S" type="UINT64" sid="cpaq_fw_.sxl2fw.sxl2fw.outbound_end_success" sid_prefix="cpaq_fw_"/>
					<Column name="out_e F" type="UINT64" sid="cpaq_fw_.sxl2fw.sxl2fw.outbound_end_failure" sid_prefix="cpaq_fw_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="cpaq_fw_sxl2fw_g" name="sxl2fw_g" hide_on_mgmt="1">
			<Dynamic max_views_num="10" sid="" type="snd_falcon"/>
			<Block heading="Legend">
				<Stat type="TABLE" rows_num="6">
					<Column name="">
						<Row name="in S 	- Inbound successful"/>
						<Row name="in F 	- Inbound failure"/>
						<Row name="out_s S 	- Outbound-start successful"/>
						<Row name="out_s F 	- Outbound-start failure"/>
						<Row name="out_e S 	- Outbound-end successful"/>
						<Row name="out_e F 	- Outbound-end failure"/>
					</Column>
				</Stat>
			</Block>
			<Block heading="Notification from PPAK to Dispatcher">
				<Stat type="TABLE" sid="cpaq_fw_.sxl2fw_g.sxl2fw_g" sid_prefix="cpaq_fw_">
					<Column name="opcode" type="STRING" sid="cpaq_fw_.sxl2fw_g.sxl2fw_g.opcode" sid_prefix="cpaq_fw_"/>
					<Column name="in S" type="UINT64" sid="cpaq_fw_.sxl2fw_g.sxl2fw_g.inbound_success" sid_prefix="cpaq_fw_"/>
					<Column name="in F" type="UINT64" sid="cpaq_fw_.sxl2fw_g.sxl2fw_g.inbound_failure" sid_prefix="cpaq_fw_"/>
					<Column name="out_s S" type="UINT64" sid="cpaq_fw_.sxl2fw_g.sxl2fw_g.outbound_start_success" sid_prefix="cpaq_fw_"/>
					<Column name="out_s F" type="UINT64" sid="cpaq_fw_.sxl2fw_g.sxl2fw_g.outbound_start_failure" sid_prefix="cpaq_fw_"/>
					<Column name="out_e S" type="UINT64" sid="cpaq_fw_.sxl2fw_g.sxl2fw_g.outbound_end_success" sid_prefix="cpaq_fw_"/>
					<Column name="out_e F" type="UINT64" sid="cpaq_fw_.sxl2fw_g.sxl2fw_g.outbound_end_failure" sid_prefix="cpaq_fw_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="cpaq_fw_general" name="General" hide_on_mgmt="1">
			<Block heading="Counters">
				<Stat type="TABLE" sid="cpaq_fw_.general.counters" sid_prefix="cpaq_fw_">
					<Column name="Name" type="STRING" sid="cpaq_fw_.general.counters.name" sid_prefix="cpaq_fw_"/>
					<Column name="Value" type="UINT64" sid="cpaq_fw_.general.counters.value" sid_prefix="cpaq_fw_"/>
				</Stat>
			</Block>
			<Block heading="Stats">
				<Stat type="TABLE" sid="cpaq_fw_.general.stats" sid_prefix="cpaq_fw_">
					<Column name="Name" type="STRING" sid="cpaq_fw_.general.stats.name" sid_prefix="cpaq_fw_"/>
					<Column name="Successes" type="UINT64" sid="cpaq_fw_.general.stats.successes" sid_prefix="cpaq_fw_"/>
					<Column name="Failures" type="UINT64" sid="cpaq_fw_.general.stats.failures" sid_prefix="cpaq_fw_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="cpaq_sim_fw2sxl" name="fw2sxl" hide_on_mgmt="1">
			<Dynamic max_views_num="10" sid="" type="snd_falcon"/>
			<Block heading="Legend">
				<Stat type="TABLE" rows_num="6">
					<Column name="">
						<Row name="in S 	- Inbound successful"/>
						<Row name="in F 	- Inbound failure"/>
						<Row name="out_s S 	- Outbound-start successful"/>
						<Row name="out_s F 	- Outbound-start failure"/>
						<Row name="out_e S 	- Outbound-end successful"/>
						<Row name="out_e F 	- Outbound-end failure"/>
					</Column>
				</Stat>
			</Block>
			<Block heading="API calls sent from FW to PPAK">
				<Stat type="TABLE" sid="cpaq_sim_.fw2sxl.fw2sxl" sid_prefix="cpaq_sim_">
					<Column name="opcode" type="STRING" sid="cpaq_sim_.fw2sxl.fw2sxl.opcode" sid_prefix="cpaq_sim_"/>
					<Column name="in S" type="UINT64" sid="cpaq_sim_.fw2sxl.fw2sxl.inbound_success" sid_prefix="cpaq_sim_"/>
					<Column name="in F" type="UINT64" sid="cpaq_sim_.fw2sxl.fw2sxl.inbound_failure" sid_prefix="cpaq_sim_"/>
					<Column name="out_s S" type="UINT64" sid="cpaq_sim_.fw2sxl.fw2sxl.outbound_start_success" sid_prefix="cpaq_sim_"/>
					<Column name="out_s F" type="UINT64" sid="cpaq_sim_.fw2sxl.fw2sxl.outbound_start_failure" sid_prefix="cpaq_sim_"/>
					<Column name="out_e S" type="UINT64" sid="cpaq_sim_.fw2sxl.fw2sxl.outbound_end_success" sid_prefix="cpaq_sim_"/>
					<Column name="out_e F" type="UINT64" sid="cpaq_sim_.fw2sxl.fw2sxl.outbound_end_failure" sid_prefix="cpaq_sim_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="cpaq_sim_fw2sxl_g" name="fw2sxl_g" hide_on_mgmt="1">
			<Dynamic max_views_num="10" sid="" type="snd_falcon"/>
			<Block heading="Legend">
				<Stat type="TABLE" rows_num="6">
					<Column name="">
						<Row name="in S 	- Inbound successful"/>
						<Row name="in F 	- Inbound failure"/>
						<Row name="out_s S 	- Outbound-start successful"/>
						<Row name="out_s F 	- Outbound-start failure"/>
						<Row name="out_e S 	- Outbound-end successful"/>
						<Row name="out_e F 	- Outbound-end failure"/>
					</Column>
				</Stat>
			</Block>
			<Block heading="API calls sent from Dispatcher to PPAK">
				<Stat type="TABLE" sid="cpaq_sim_.fw2sxl_g.fw2sxl_g" sid_prefix="cpaq_sim_">
					<Column name="opcode" type="STRING" sid="cpaq_sim_.fw2sxl_g.fw2sxl_g.opcode" sid_prefix="cpaq_sim_"/>
					<Column name="in S" type="UINT64" sid="cpaq_sim_.fw2sxl_g.fw2sxl_g.inbound_success" sid_prefix="cpaq_sim_"/>
					<Column name="in F" type="UINT64" sid="cpaq_sim_.fw2sxl_g.fw2sxl_g.inbound_failure" sid_prefix="cpaq_sim_"/>
					<Column name="out_s S" type="UINT64" sid="cpaq_sim_.fw2sxl_g.fw2sxl_g.outbound_start_success" sid_prefix="cpaq_sim_"/>
					<Column name="out_s F" type="UINT64" sid="cpaq_sim_.fw2sxl_g.fw2sxl_g.outbound_start_failure" sid_prefix="cpaq_sim_"/>
					<Column name="out_e S" type="UINT64" sid="cpaq_sim_.fw2sxl_g.fw2sxl_g.outbound_end_success" sid_prefix="cpaq_sim_"/>
					<Column name="out_e F" type="UINT64" sid="cpaq_sim_.fw2sxl_g.fw2sxl_g.outbound_end_failure" sid_prefix="cpaq_sim_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="cpaq_sim_sxl2fw" name="sxl2fw" hide_on_mgmt="1">
			<Dynamic max_views_num="10" sid="" type="snd_falcon"/>
			<Block heading="Legend">
				<Stat type="TABLE" rows_num="6">
					<Column name="">
						<Row name="in S 	- Inbound successful"/>
						<Row name="in F 	- Inbound failure"/>
						<Row name="out_s S 	- Outbound-start successful"/>
						<Row name="out_s F 	- Outbound-start failure"/>
						<Row name="out_e S 	- Outbound-end successful"/>
						<Row name="out_e F 	- Outbound-end failure"/>
					</Column>
				</Stat>
			</Block>
			<Block heading="Notifications sent from PPAK to FW">
				<Stat type="TABLE" sid="cpaq_sim_.sxl2fw.sxl2fw" sid_prefix="cpaq_sim_">
					<Column name="opcode" type="STRING" sid="cpaq_sim_.sxl2fw.sxl2fw.opcode" sid_prefix="cpaq_sim_"/>
					<Column name="in S" type="UINT64" sid="cpaq_sim_.sxl2fw.sxl2fw.inbound_success" sid_prefix="cpaq_sim_"/>
					<Column name="in F" type="UINT64" sid="cpaq_sim_.sxl2fw.sxl2fw.inbound_failure" sid_prefix="cpaq_sim_"/>
					<Column name="out_s S" type="UINT64" sid="cpaq_sim_.sxl2fw.sxl2fw.outbound_start_success" sid_prefix="cpaq_sim_"/>
					<Column name="out_s F" type="UINT64" sid="cpaq_sim_.sxl2fw.sxl2fw.outbound_start_failure" sid_prefix="cpaq_sim_"/>
					<Column name="out_e S" type="UINT64" sid="cpaq_sim_.sxl2fw.sxl2fw.outbound_end_success" sid_prefix="cpaq_sim_"/>
					<Column name="out_e F" type="UINT64" sid="cpaq_sim_.sxl2fw.sxl2fw.outbound_end_failure" sid_prefix="cpaq_sim_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="cpaq_sim_sxl2fw_g" name="sxl2fw_g" hide_on_mgmt="1">
			<Dynamic max_views_num="10" sid="" type="snd_falcon"/>
			<Block heading="Legend">
				<Stat type="TABLE" rows_num="6">
					<Column name="">
						<Row name="in S 	- Inbound successful"/>
						<Row name="in F 	- Inbound failure"/>
						<Row name="out_s S 	- Outbound-start successful"/>
						<Row name="out_s F 	- Outbound-start failure"/>
						<Row name="out_e S 	- Outbound-end successful"/>
						<Row name="out_e F 	- Outbound-end failure"/>
					</Column>
				</Stat>
			</Block>
			<Block heading="Notification sent from PPAK to Dispatcher">
				<Stat type="TABLE" sid="cpaq_sim_.sxl2fw_g.sxl2fw_g" sid_prefix="cpaq_sim_">
					<Column name="opcode" type="STRING" sid="cpaq_sim_.sxl2fw_g.sxl2fw_g.opcode" sid_prefix="cpaq_sim_"/>
					<Column name="in S" type="UINT64" sid="cpaq_sim_.sxl2fw_g.sxl2fw_g.inbound_success" sid_prefix="cpaq_sim_"/>
					<Column name="in F" type="UINT64" sid="cpaq_sim_.sxl2fw_g.sxl2fw_g.inbound_failure" sid_prefix="cpaq_sim_"/>
					<Column name="out_s S" type="UINT64" sid="cpaq_sim_.sxl2fw_g.sxl2fw_g.outbound_start_success" sid_prefix="cpaq_sim_"/>
					<Column name="out_s F" type="UINT64" sid="cpaq_sim_.sxl2fw_g.sxl2fw_g.outbound_start_failure" sid_prefix="cpaq_sim_"/>
					<Column name="out_e S" type="UINT64" sid="cpaq_sim_.sxl2fw_g.sxl2fw_g.outbound_end_success" sid_prefix="cpaq_sim_"/>
					<Column name="out_e F" type="UINT64" sid="cpaq_sim_.sxl2fw_g.sxl2fw_g.outbound_end_failure" sid_prefix="cpaq_sim_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="cpaq_sim_general" name="General" hide_on_mgmt="1">
			<Dynamic max_views_num="10" sid="" type="snd_falcon"/>
			<Block heading="General">
				<Stat type="UINT64" name="incoming_invalid_opcode" sid="cpaq_sim_.general.incoming_invalid_opcode" sid_prefix="cpaq_sim_"/>
				<Stat type="UINT64" name="incoming_uninitialized" sid="cpaq_sim_.general.incoming_uninitialized" sid_prefix="cpaq_sim_"/>
				<Stat type="UINT64" name="Incoming messages - success" sid="cpaq_sim_.general.total_in_success" sid_prefix="cpaq_sim_"/>
				<Stat type="UINT64" name="Incoming messages - failures" sid="cpaq_sim_.general.total_in_failure" sid_prefix="cpaq_sim_"/>
				<Stat type="UINT64" name="Outgoing messages - success" sid="cpaq_sim_.general.total_out_success" sid_prefix="cpaq_sim_"/>
				<Stat type="UINT64" name="Outgoing messages - failure" sid="cpaq_sim_.general.total_out_failure" sid_prefix="cpaq_sim_"/>
			</Block>
		</View>
		<View viewtag="TOP-Overview" name="Overview">
			<Block heading="CPU:">
				<Stat type="UINT64" override_width="6" name="Num of CPUs:" sid="UM_STAT.UM_CPU.num_of_cores"/>
				<Stat type="TABLE" rows_num="3" override_width="10" sid="UM_STAT.UM_CPU.UM_CPU_TABLE">
					<Column name="CPU" type="UINT64" sid="UM_STAT.UM_CPU.UM_CPU_TABLE.name_of_cpu"/>
					<Column name="Used" type="PERCENT" sid="UM_STAT.UM_CPU.UM_CPU_TABLE.cpu_usage" limit_threshold_percent="80"/>
				</Stat>
			</Block>
			<Block heading="Memory:">
				<Stat type="TABLE">
					<Column name="">
						<Row name="Physical"/>
						<Row name="FW Kernel" hide_on_mgmt="1"/>
						<Row name="Swap"/>
					</Column>
					<Column name="Total MB">
						<Row type="UINT64" units="MB" sid="UM_STAT.UM_MEMORY.real_total"/>
						<Row type="UINT64" units="MB" sid="kernel_memory.kmem.total_alloc_limit"/>
						<Row type="UINT64" units="MB" sid="UM_STAT.UM_MEMORY.swap_total"/>
					</Column>
					<Column name="Used MB">
						<Row type="UINT64" units="MB" sid="UM_STAT.UM_MEMORY.real_used" limit_threshold_percent="90">
							<Limit type="UINT64" sid="UM_STAT.UM_MEMORY.real_total"/>
						</Row>
						<Row type="UINT64" units="MB" sid="fw.memory.used_virt_mem" limit_threshold_percent="90">
							<Limit type="UINT64" sid="kernel_memory.kmem.total_alloc_limit"/>
						</Row>
						<Row type="UINT64" units="MB" sid="UM_STAT.UM_MEMORY.swap_used"/>
					</Column>
					<Column name="Free MB">
						<Row type="UINT64" units="MB" sid="UM_STAT.UM_MEMORY.real_free"/>
						<Row type="UINT64" units="MB" sid="fw.memory.free_virt_mem"/>
						<Row type="UINT64" units="MB" sid="UM_STAT.UM_MEMORY.swap_free"/>
					</Column>
				</Stat>
			</Block>
			<Block heading="Network:" hide_on_mgmt="1">
				<Stat type="UINT64" name="Bits/sec" sid="fw.total_counters.outbound_throughput" units="AUTO"/>
				<Stat type="UINT64" name="Packets/sec" sid="fw.total_counters.outbound_packet_rate" units="AUTO"/>
				<Stat type="UINT64" name="Connections/sec" sid="fw.total_counters.conn_rate" units="AUTO"/>
				<Stat type="UINT64" name="Concurrent connections" sid="fw.total_counters.concurrent_conns"/>
			</Block>
			<Block heading="Disk space (top 3 used partitions):">
				<Stat type="TABLE" rows_num="3">
					<Column name="Partition" type="STRING" sid="UM_STAT.UM_DISK.UM_DISK_TABLE.disk_path"/>
					<Column name="Total MB" type="UINT64" units="MB" sid="UM_STAT.UM_DISK.UM_DISK_TABLE.disk_total"/>
					<Column name="Used MB" type="UINT64" units="MB" sid="UM_STAT.UM_DISK.UM_DISK_TABLE.disk_used"/>
					<Column name="Free MB" type="UINT64" units="MB" sid="UM_STAT.UM_DISK.UM_DISK_TABLE.disk_free"/>
				</Stat>
			</Block>
			<Block heading="Events:">
				<Stat type="UINT64" name="# of monitored daemons crashes since last cpstart" sid="UM_STAT.UM_EVENT.num_of_crashes_info"/>
			</Block>
		</View>
		<View viewtag="TOP-SysInfo" name="SysInfo">
			<Block heading="Configuration Information:">
				<Stat type="STRING" name="Platform" sid="UM_STAT.UM_SYSTEM.os_info"/>
				<Stat type="STRING" name="Configuration" sid="UM_STAT.UM_SYSTEM.configuration_info"/>
				<Stat type="STRING" name="CoreXL Status" sid="fw.multik.status" hide_on_mgmt="1"/>
				<Stat type="UINT" name="CoreXL instances" sid="kernel_memory.kmem.number_of_instances" hide_on_mgmt="1"/>
				<Stat type="STRING" name="SMT Status" sid="UM_STAT.UM_SYSTEM.smt_status" hide_on_mgmt="1"/>
			</Block>
			<Block heading="General information:">
				<Stat type="STRING" name="System uptime" sid="UM_STAT.UM_SYSTEM.uptime"/>
				<Stat type="TIMESTAMP" name="Last policy install time" sid="fw.policy.last_install_time" hide_on_mgmt="1"/>
				<Stat type="STRING" name="Last policy name" sid="fw.policy.last_policy_name" hide_on_mgmt="1"/>
			</Block>
			<Block heading="Version Information:">
				<Stat type="STRING" name="fw1_wrapper package version" sid="UM_STAT.UM_SYSTEM.cp_ver_info"/>
				<Stat type="TABLE" override_width="5">
					<Column name="">
						<Row name="FW User Mode"/>
						<Row name="FW Kernel" hide_on_mgmt="1"/>
						<Row name="Accel Module"/>
						<Row name="Adpdrv Module"/>
						<Row name="SIM Module"/>
					</Column>
					<Column name="Branch Name">
						<Row type="STRING" sid="UM_STAT.UM_SYSTEM.um_fw_branch_name"/>
						<Row type="STRING" sid="fw.version.branch_name"/>
						<Row type="STRING" sid="UM_STAT.UM_SYSTEM.um_accel_branch_name"/>
						<Row type="STRING" sid="UM_STAT.UM_SYSTEM.um_adpdrv_branch_name"/>
						<Row type="STRING" sid="UM_STAT.UM_SYSTEM.um_sim_branch_name"/>
					</Column>
					<Column name="Build Number">
						<Row type="STRING" sid="UM_STAT.UM_SYSTEM.um_fw_build_number"/>
						<Row type="STRING" sid="fw.version.build_number"/>
						<Row type="STRING" sid="UM_STAT.UM_SYSTEM.um_accel_build_number"/>
						<Row type="STRING" sid="UM_STAT.UM_SYSTEM.um_adpdrv_build_number"/>
						<Row type="STRING" sid="UM_STAT.UM_SYSTEM.um_sim_build_number"/>
					</Column>
				</Stat>
			</Block>
			<Block heading="Hardware Information:">
				<Stat type="STRING" name="HW Model" sid="UM_STAT.UM_HW.model"/>
				<Stat type="STRING" name="SAM CPLD Version" sid="UM_STAT.UM_HW.sam_cpld" hide_on_mgmt="1"/>
				<Stat type="STRING" name="SAM Total Memory" sid="UM_STAT.UM_HW.sam_memory" hide_on_mgmt="1"/>
				<Stat type="TABLE"  override_width="10" sid="falcons_stats.falcons_info.falcons_info_table">
					<Column name="Devices" type="STRING"   sid="falcons_stats.falcons_info.falcons_info_table.falcon_name" />
					<Column name="Type" type="STRING"   sid="falcons_stats.falcons_info.falcons_info_table.falcon_type" />
					<Column name="Slot" type="STRING" sid="falcons_stats.falcons_info.falcons_info_table.falcon_slot" hide_on_mgmt="1"/>
					<Column name="Status" type="STRING"   sid="falcons_stats.falcons_info.falcons_info_table.falcon_status" />
				</Stat>
			</Block>
		</View>
		<View viewtag="CPU-Overview" name="Host">
			<Block heading="CPU:">
				<Stat type="TABLE" override_width="7" sid="UM_STAT.UM_CPU.UM_CPU_ORDERED_TABLE">
					<Column name="CPU" type="UINT64" sid="UM_STAT.UM_CPU.UM_CPU_ORDERED_TABLE.name_of_cpu"/>
					<Column name="User" type="PERCENT" sid="UM_STAT.UM_CPU.UM_CPU_ORDERED_TABLE.cpu_usr_time"/>
					<Column name="System" type="PERCENT" sid="UM_STAT.UM_CPU.UM_CPU_ORDERED_TABLE.cpu_sys_time"/>
					<Column name="Idle " type="PERCENT" sid="UM_STAT.UM_CPU.UM_CPU_ORDERED_TABLE.cpu_idl_time"/>
					<Column name="I/O wait" type="PERCENT" sid="UM_STAT.UM_CPU.UM_CPU_ORDERED_TABLE.cpu_io_wait"/>
					<Column name="Interrupts" type="UINT64" sid="UM_STAT.UM_CPU.UM_CPU_ORDERED_TABLE.cpu_interrupts"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="IO-Overview" name="Overview">
			<Block heading="Requests Per Second:">
				<Stat type="TABLE" override_width="7" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE">
					<Column name="Device" type="STRING" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE.device_name"/>
					<Column name="Merged read" type="DOUBLE" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE.rrqms"/>
					<Column name="Merged write" type="DOUBLE" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE.wrqms"/>
					<Column name="Read" type="DOUBLE" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE.rs"/>
					<Column name="Write" type="DOUBLE" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE.ws"/>
				</Stat>
			</Block>
			<Block heading="Read/Write Per Second:">
				<Stat type="TABLE" override_width="7" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE">
					<Column name="Device" type="STRING" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE.device_name"/>
					<Column name="Read KB" type="DOUBLE" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE.rkbs"/>
					<Column name="Write KB" type="DOUBLE" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE.wkbs"/>
				</Stat>
			</Block>
			<Block heading="Average:">
				<Stat type="TABLE" override_width="8" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE">
					<Column name="Device" type="STRING" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE.device_name"/>
					<Column name="Request Size" type="DOUBLE" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE.avgrqsz"/>
					<Column name="Queue Size" type="DOUBLE" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE.avgqusz"/>
					<Column name="Wait" type="DOUBLE" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE.await"/>
					<Column name="Service" type="DOUBLE" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE.svctm"/>
				</Stat>
			</Block>
			<Block heading="CPU Utilization:">
				<Stat type="TABLE" override_width="8" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE">
					<Column name="Device" type="STRING" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE.device_name"/>
					<Column name="I/O" type="CENTIPERCENT" sid="UM_STAT.UM_IOSTAT.UM_IOSTAT_TABLE.util"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="PSL-falcon" name="Falcon" hide_on_mgmt="1">
			<Dynamic max_views_num="10" type="host_falcon" views_per_sub_menu="0"/>
			<Block heading="Connections:">
				<Stat type="UINT" name="Concurrent num of connections     " sid="psl_.memory.concur_num_of_conns" sid_prefix="psl_"/>
			</Block>
			<Block heading="Packets:">
				<Stat type="UINT" name="Num of packets                 " sid="psl_.memory.total_num_of_pkts" sid_prefix="psl_"/>
				<Stat type="UINT" name="Packets in bytes" sid="psl_.memory.total_pkts_in_bytes" units="AUTOBYTES" sid_prefix="psl_"/>
				<Stat type="UINT" name="Concurrent num of async packets" sid="psl_.memory.concur_async_pkts" sid_prefix="psl_"/>
				<Stat type="UINT" name="Num of rejected packets" sid="psl_.memory.total_num_of_rejected_pkts" sid_prefix="psl_"/>
				<Stat type="UINT" name="Num of dropped packets" sid="psl_.memory.total_num_of_dropped_pkts" sid_prefix="psl_"/>
				<Stat type="UINT" name="Num of stripped packets" sid="psl_.memory.total_num_of_stripped_pkts" sid_prefix="psl_"/>
				<Stat type="UINT" name="Num of truncated packets" sid="psl_.memory.total_num_of_truncated_pkts" sid_prefix="psl_"/>
				<Stat type="UINT" name="Num of c2s paused packets" sid="psl_.memory.total_num_of_c2s_paused_pkts" sid_prefix="psl_"/>
				<Stat type="UINT" name="Num of s2c paused packets" sid="psl_.memory.total_num_of_s2c_paused_pkts" sid_prefix="psl_"/>
				<Stat type="UINT" name="Concurrent num of UDP held packets" sid="psl_.memory.concur_num_of_udp_held_pkts" sid_prefix="psl_"/>
			</Block>
			<Block heading="Memory:">
				<Stat type="UINT" name="Allocated memory in bytes      " sid="psl_.memory.allocated_mem_in_bytes" units="AUTOBYTES" sid_prefix="psl_"/>
				<Stat type="UINT" name="Referenced skbuffs num" sid="psl_.memory.referenced_skbufs_num" sid_prefix="psl_"/>
				<Stat type="UINT" name="Referenced skbuffs size in bytes" sid="psl_.memory.referenced_skbufs_size_in_bytes" units="AUTOBYTES" sid_prefix="psl_"/>
				<Stat type="UINT" name="External packet references" sid="psl_.memory.external_pkt_references" sid_prefix="psl_"/>
				<Stat type="UINT" name="Allocated memory per connection" sid="psl_.memory.allocated_mem_per_conn" sid_prefix="psl_"/>
			</Block>
			<Block heading="Packets manipulations:">
				<Stat type="UINT" name="Splitted packets                " sid="psl_.memory.total_split_pkts" sid_prefix="psl_"/>
				<Stat type="UINT" name="Merged packets" sid="psl_.memory.total_merge_pkts" sid_prefix="psl_"/>
				<Stat type="UINT" name="Shrinked packets" sid="psl_.memory.total_shrink_pkts" sid_prefix="psl_"/>
			</Block>
			<Block heading="Applications statistics:">
				<Stat type="TABLE" rows_num="16" sid="psl_.applications.psl_app_tab" sid_prefix="psl_">
					<Column name="Application" type="STRING" sid="psl_.applications.psl_app_tab.name" sid_prefix="psl_"/>
					<Column name="Num of connections" type="UINT64" sid="psl_.applications.psl_app_tab.conns" sid_prefix="psl_"/>
					<Column name="data pkts c2s" type="UINT64" sid="psl_.applications.psl_app_tab.data_pkts_c2s" sid_prefix="psl_"/>
					<Column name="data pkts s2c" type="UINT64" sid="psl_.applications.psl_app_tab.data_pkts_s2c" sid_prefix="psl_"/>
					<Column name="data pkts in bytes c2s" type="UINT64" sid="psl_.applications.psl_app_tab.bytes_c2s" units="AUTOBYTES" sid_prefix="psl_"/>
					<Column name="data pkts in bytes s2c" type="UINT64" sid="psl_.applications.psl_app_tab.bytes_s2c" units="AUTOBYTES" sid_prefix="psl_"/>
				</Stat>
			</Block>
			<Block heading="Applications FastForward statistics:">
				<Stat type="TABLE" rows_num="16" sid="psl_.ff_applications.psl_app_ff_tab" sid_prefix="psl_">
					<Column name="Application" type="STRING" sid="psl_.ff_applications.psl_app_ff_tab.name" sid_prefix="psl_"/>
					<Column name="Requests" type="UINT64" sid="psl_.ff_applications.psl_app_ff_tab.request" sid_prefix="psl_"/>
					<Column name="Saved pkts" type="UINT64" sid="psl_.ff_applications.psl_app_ff_tab.pkts_save" sid_prefix="psl_"/>
					<Column name="Bytes requests" type="UINT64" sid="psl_.ff_applications.psl_app_ff_tab.bytes_request" units="AUTOBYTES" sid_prefix="psl_"/>
					<Column name="Saved bytes" type="UINT64" sid="psl_.ff_applications.psl_app_ff_tab.bytes_saved" units="AUTOBYTES" sid_prefix="psl_"/>
				</Stat>
			</Block>
			<Block heading="FastForward Counters:">
				<Stat type="TABLE" rows_num="4" sid="psl_.ff_counters.psl_ff_counters_tab" sid_prefix="psl_">
					<Column name=" " type="STRING" sid="psl_.ff_counters.psl_ff_counters_tab.name" sid_prefix="psl_"/>
					<Column name="c2s" type="UINT" sid="psl_.ff_counters.psl_ff_counters_tab.c2s" sid_prefix="psl_"/>
					<Column name="s2c" type="UINT" sid="psl_.ff_counters.psl_ff_counters_tab.s2c" sid_prefix="psl_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="CPAS-falcon" name="Falcon" hide_on_mgmt="1">
			<Dynamic max_views_num="10" type="host_falcon" views_per_sub_menu="0"/>
			<Block heading="Connections:">
				<Stat type="UINT" name="Connections initiated         " sid="cpas_.memory.conns_initiated" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Connections accepted" sid="cpas_.memory.conns_accepted" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Connections established actively or passively" sid="cpas_.memory.conns_established" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Connections dropped" sid="cpas_.memory.conns_dropped" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Connections closed (includes drops)" sid="cpas_.memory.conns_closed" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Delayed acks sent" sid="cpas_.memory.delayed_acks_sent" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Connections dropped in retransmit timeout" sid="cpas_.memory.conns_dropped_in_retrans" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Connections dropped in persist timeout" sid="cpas_.memory.conns_dropped_in_presist_timeout" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Connections dropped in keepalive timeout" sid="cpas_.memory.conns_dropped_in_keepalive" sid_prefix="cpas_"/>
			</Block>
			<Block heading="Packets:">
				<Stat type="UINT" name="Packets sent" sid="cpas_.memory.total_pkts_sent" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Data packets sent" sid="cpas_.memory.data_pkts_sent" sid_prefix="cpas_"/>
				<Stat type="UINT64" name="Data bytes sent" sid="cpas_.memory.data_bytes_sent" units="AUTOBYTES" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Data packets retransmitted" sid="cpas_.memory.data_pkts_retrans" sid_prefix="cpas_"/>
				<Stat type="UINT64" name="Data bytes retransmitted" sid="cpas_.memory.data_bytes_retrans" units="AUTOBYTES" sid_prefix="cpas_"/>
				<Stat type="UINT64" name="Fast retransmits" sid="cpas_.memory.fast_retrans" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Ack-only packets sent" sid="cpas_.memory.ack_only_pkts_sent" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Window probes sent" sid="cpas_.memory.windows_probes_sent" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Packets sent with URG only" sid="cpas_.memory.pkts_send_with_urg_only" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Window update-only packets sent" sid="cpas_.memory.windows_update_only_pkts_sent" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Control (SYN|FIN|RST) packets sent" sid="cpas_.memory.control_pkts_sent" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Packets received" sid="cpas_.memory.total_pkts_received" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Packets received in sequence" sid="cpas_.memory.pkts_received_in_seq" sid_prefix="cpas_"/>
				<Stat type="UINT64" name="Bytes received in sequence" sid="cpas_.memory.bytes_received_in_seq" units="AUTOBYTES" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Packets received with checksum errors" sid="cpas_.memory.pkts_received_checksum_err" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Packets received with bad offset" sid="cpas_.memory.pkts_received_bad_offset" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Packets received too short" sid="cpas_.memory.pkts_received_too_short" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Duplicate-only packets received" sid="cpas_.memory.dup_only_pkts_received" sid_prefix="cpas_"/>
				<Stat type="UINT64" name="Duplicate-only bytes received" sid="cpas_.memory.dup_only_bytes_received" units="AUTOBYTES" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Packets with some duplicate data" sid="cpas_.memory.pkts_with_some_dup_data" sid_prefix="cpas_"/>
				<Stat type="UINT64" name="Duplicate bytes in part-duplicate packets" sid="cpas_.memory.dup_bytes_in_part_dup_pkts" units="AUTOBYTES" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Out-of-order packets received" sid="cpas_.memory.ooo_pkts_received" sid_prefix="cpas_"/>
				<Stat type="UINT64" name="Out-of-order bytes received" sid="cpas_.memory.ooo_bytes_received" units="AUTOBYTES" sid_prefix="cpas_"/>
			</Block>
			<Block heading="More packets statistics:">
				<Stat type="UINT" name="Packets with data after window" sid="cpas_.memory.pkts_with_data_after_window" sid_prefix="cpas_"/>
				<Stat type="UINT64" name="Bytes received after window" sid="cpas_.memory.bytes_received_after_window" units="AUTOBYTES" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Packets received after connection closed" sid="cpas_.memory.pkts_received_after_conn_closed" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Received window probe packets" sid="cpas_.memory.received_window_probe_pkts" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Received duplicate acks" sid="cpas_.memory.received_dup_acks" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Received acks for unsent data" sid="cpas_.memory.received_acks_for_unsent_data" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Received acks for old data" sid="cpas_.memory.received_acks_for_old_data" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Received ack packets" sid="cpas_.memory.received_ack_pkts" sid_prefix="cpas_"/>
				<Stat type="UINT64" name="Bytes acked by received acks" sid="cpas_.memory.bytes_ack_by_received_acks" units="AUTOBYTES" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Received window update packets" sid="cpas_.memory.received_window_updt_pkts" sid_prefix="cpas_"/>
				<Stat type="UINT" name="SYN packet with src=dst received" sid="cpas_.memory.syn_pkts_with_src" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Times header prediction correct for acks" sid="cpas_.memory.timer_prediction_ack" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Times header prediction correct for data packets" sid="cpas_.memory.timer_prediction_data_pkts" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Defragmented packets" sid="cpas_.memory.defragmented_pkts" sid_prefix="cpas_"/>
			</Block>
			<Block heading="Memory:">
				<Stat type="UINT64" name="Allocated memory in bytes                 " sid="cpas_.memory.alloc_mem_in_bytes" units="AUTOBYTES" sid_prefix="cpas_"/>
				<Stat type="UINT" name="Allocated skbuffs num" sid="cpas_.memory.alloc_skbuffs_num" sid_prefix="cpas_"/>
				<Stat type="UINT64" name="Allocated skbuffs size in bytes" sid="cpas_.memory.alloc_skbuffs_size_bytes" units="AUTOBYTES" sid_prefix="cpas_"/>
				<Stat type="UINT64" name="Allocated memory per connection" sid="cpas_.memory.alloc_mem_per_conn" sid_prefix="cpas_"/>
			</Block>
			<Block heading="Applications statistics:">
				<Stat type="TABLE" rows_num="8" sid="cpas_.applications.cpas_app_tab" sid_prefix="cpas_">
					<Column name="Application" type="STRING" sid="cpas_.applications.cpas_app_tab.name" sid_prefix="cpas_"/>
					<Column name="Concurrent connections" type="UINT64" sid="cpas_.applications.cpas_app_tab.concur_conns" sid_prefix="cpas_"/>
					<Column name="Data packets" type="UINT64" sid="cpas_.applications.cpas_app_tab.data_pkts" sid_prefix="cpas_"/>
					<Column name="Data packets in bytes" type="UINT64" sid="cpas_.applications.cpas_app_tab.data_pkts_bytes" units="AUTOBYTES" sid_prefix="cpas_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="QoS-ppak" name="falcon" hide_on_mgmt="1">
			<Dynamic max_views_num="10" type="snd_falcon" views_per_sub_menu="0"/>
			<Block heading="QoS statistics:">
				<Stat type="TABLE" override_width="7" sid="qos_.interface_category.interface_table"  sid_prefix="qos_">
					<Column name="Interface" type="STRING" sid="qos_.interface_category.interface_table.if_name" sid_prefix="qos_"/>
					<Column name="Dir" type="STRING" sid="qos_.interface_category.interface_table.dir" sid_prefix="qos_"/>
					<Column name="Limit (Bps)" type="UINT64" sid="qos_.interface_category.interface_table.rate_limit" sid_prefix="qos_" units="AUTO"/>
					<Column name="Rate (Bps)" type="UINT64" sid="qos_.interface_category.interface_table.rate" sid_prefix="qos_" units="AUTO"/>
					<Column name="Conns" type="UINT64" sid="qos_.interface_category.interface_table.conns" sid_prefix="qos_"/>
					<Column name="Pend pkts" type="UINT64" sid="qos_.interface_category.interface_table.pend_pkts" sid_prefix="qos_"/>
					<Column name="Pend bytes" type="UINT64" sid="qos_.interface_category.interface_table.pend_bytes" sid_prefix="qos_"/>
				</Stat>
			</Block>
			<Block heading="QoS general information:">
				<Stat type="INT64" name="Concurrent conns" sid="ppak_.accel_category.qos_conns" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Classify" sid="ppak_.accel_category.qos_classify" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Classify flow" sid="ppak_.accel_category.qos_classify_flow" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Reclassify policy" sid="ppak_.accel_category.qos_reclassify_policy" sid_prefix="ppak_"/>
			</Block>
			<Block heading="Firewall QoS path:">
				<Stat type="INT64" name="Enq in FW packets" sid="ppak_.accel_category.qos_enq_in_fw_packets" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Enq in FW bytes" sid="ppak_.accel_category.qos_enq_in_fw_bytes" units="AUTOBYTES" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Enq out FW packets" sid="ppak_.accel_category.qos_enq_out_fw_packets" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Enq out FW bytes" sid="ppak_.accel_category.qos_enq_out_fw_bytes" units="AUTOBYTES" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Deq in FW packets" sid="ppak_.accel_category.qos_deq_in_fw_packets" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Deq in FW bytes" sid="ppak_.accel_category.qos_deq_in_fw_bytes" units="AUTOBYTES" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Deq out FW packets" sid="ppak_.accel_category.qos_deq_out_fw_packets" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Deq out FW bytes" sid="ppak_.accel_category.qos_deq_out_fw_bytes" units="AUTOBYTES" sid_prefix="ppak_"/>
			</Block>
			<Block heading="Accelerated QoS path:">
				<Stat type="INT64" name="Enq in accel packets" sid="ppak_.accel_category.qos_enq_in_accel_packets" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Enq in accel bytes" sid="ppak_.accel_category.qos_enq_in_accel_bytes" units="AUTOBYTES" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Enq out accel packets" sid="ppak_.accel_category.qos_enq_out_accel_packets" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Enq out accel bytes" sid="ppak_.accel_category.qos_enq_out_accel_bytes" units="AUTOBYTES" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Deq in accel packets" sid="ppak_.accel_category.qos_deq_in_accel_packets" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Deq in accel bytes" sid="ppak_.accel_category.qos_deq_in_accel_bytes" units="AUTOBYTES" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Deq out accel packets" sid="ppak_.accel_category.qos_deq_out_accel_packets" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Deq out accel bytes" sid="ppak_.accel_category.qos_deq_out_accel_bytes" units="AUTOBYTES" sid_prefix="ppak_"/>
			</Block>
		</View>
		<View viewtag="Network-Traffic" name="Traffic" hide_on_mgmt="1">
			<Block heading="Traffic Rate:">
				<Stat type="TABLE" override_width="11" sid="fw.counters.traffic_rate">
					<Column name="" type="STRING" sid="fw.counters.traffic_rate.component_name"/>
					<Column name="Inbound packets/sec" type="UINT64" sid="fw.counters.traffic_rate.inbound_packets_rate"  units="AUTO"/>
					<Column name="Outbound packets/sec" type="UINT64" sid="fw.counters.traffic_rate.outbound_packets_rate" units="AUTO" />
					<Column name="Inbound bits/sec" type="UINT64" sid="fw.counters.traffic_rate.inbound_throughput"  units="AUTO"/>
					<Column name="Outbound bits/sec" type="UINT64" sid="fw.counters.traffic_rate.outbound_throughput"  units="AUTO"/>
					<Column name="Connections/sec" type="UINT64" sid="fw.counters.traffic_rate.conn_rate"  units="AUTO"/>
				</Stat>
			</Block>
			<Block heading="Concurrent Connections:">
				<Stat type="TABLE" override_width="11" sid="fw.counters.concurrent_conns">
					<Column name="" type="STRING" sid="fw.counters.concurrent_conns.component_name"/>
					<Column name="Connections" type="UINT64" sid="fw.counters.concurrent_conns.conns" units="AUTO"/>
					<Column name="Non-TCP" type="UINT64" sid="fw.counters.concurrent_conns.non_tcp" units="AUTO"/>
					<Column name="TCP handshake" type="UINT64" sid="fw.counters.concurrent_conns.tcp_handshake" units="AUTO"/>
					<Column name="TCP established" type="UINT64" sid="fw.counters.concurrent_conns.tcp_established" units="AUTO" />
					<Column name="TCP closed" type="UINT64" sid="fw.counters.concurrent_conns.tcp_closed" units="AUTO"/>
				</Stat>
			</Block>
			<Block heading="Templates:">
				<Stat type="PERCENT" name="% Connections from templates" sid="fw.counters.tmpl_hit_rate_pct" override_width="6"/>
				<Stat type="PERCENT" name="% Unused templates      " sid="fw.counters.unused_tmpl_pct" override_width="10"/>
			</Block>
			<Block heading="Drops:">
				<Stat type="UINT64" name="Software Blades" sid="fw.counters.drop_reason_general"/>
				<Stat type="UINT64" name="Interface incoming drops" sid="UM_STAT.UM_HW.total_rx_drops" units="AUTO"/>
				<Stat type="UINT64" name="Instance high CPU" sid="fw.counters.drop_reason_corexl_queue"/>
				<Stat type="UINT64" name="Rulebase" sid="fw.counters.drop_reason_rulebase"/>
				<Stat type="UINT64" name="Capacity" sid="fw.counters.drop_reason_capacity"/>
				<Stat type="UINT64" name="SecureXL" sid="fw.counters.drop_reason_sxl"/>
				<Stat type="STRING" name="Drop out of state TCP" sid="fw.counters.drop_tcp_out_of_state"/>
				<Stat type="UINT64" name="First packets not SYN" sid="fw.counters.first_packets_not_syn"/>
			</Block>
		</View>
		<View viewtag="Network-Top_Protocols" name="Top-Protocols" hide_on_mgmt="1" hide_on_nonGaia="1">
			<Dynamic max_views_num="10" sid="" type="snd_falcon"/>
			<Block heading="Protocols distribution summary:">
				<Stat type="TABLE" rows_num="10" override_width="7" sid="network_profile_ppak_.network.total_services" sid_prefix="network_profile_ppak_">
					<Column name="Totals        " type="STRING" sid="network_profile_ppak_.network.total_services.service_name" sid_prefix="network_profile_ppak_"/>
					<Column name=" Mbps" type="UINT64" sid="network_profile_ppak_.network.total_services.throughput" units="Mb" sid_prefix="network_profile_ppak_"/>
					<Column name="    pps" type="UINT64" sid="network_profile_ppak_.network.total_services.packet_rate" sid_prefix="network_profile_ppak_"/>
				</Stat>
				<Stat type="TABLE" rows_num="10" override_width="7" sid="network_profile_ppak_.network.top_services" sid_prefix="network_profile_ppak_">
					<Column name="Protocol       " type="PROTOCOL" sid="network_profile_ppak_.network.top_services.service_name" sid_prefix="network_profile_ppak_"/>
					<Column name=" Mbps" type="UINT64" sid="network_profile_ppak_.network.top_services.throughput" units="Mb" sid_prefix="network_profile_ppak_"/>
					<Column name="    pps" type="UINT64" sid="network_profile_ppak_.network.top_services.packet_rate" sid_prefix="network_profile_ppak_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="Network-Top_Connections" name="Top-Connections" hide_on_mgmt="1" hide_on_nonGaia="1">
			<Dynamic max_views_num="10" sid="" type="snd_falcon"/>
			<Block heading="Connections distribution summary:">
				<Stat type="UINT64" name="Total Mbits/sec" sid="network_profile_ppak_.network.services_throughput" units="Mb" sid_prefix="network_profile_ppak_"/>
				<Stat type="UINT64" name="Total packets/sec" sid="network_profile_ppak_.network.services_packet_rate" sid_prefix="network_profile_ppak_"/>
				<Stat type="TABLE" rows_num="10" override_width="5" sid="network_profile_ppak_.network.top_conns" sid_prefix="network_profile_ppak_">
					<Column name="Connection                                 " type="STRING" sid="network_profile_ppak_.network.top_conns.conn_name" sid_prefix="network_profile_ppak_"/>
					<Column name="Protocol       " type="PROTOCOL" sid="network_profile_ppak_.network.top_conns.conn_proto_name" sid_prefix="network_profile_ppak_"/>
					<Column name="Mbps" type="UINT64" sid="network_profile_ppak_.network.top_conns.throughput" units="Mb" sid_prefix="network_profile_ppak_"/>
					<Column name="    pps" type="UINT64" sid="network_profile_ppak_.network.top_conns.packet_rate" sid_prefix="network_profile_ppak_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="Interfaces-Overview" name="Overview">
			<Block heading="Interfaces Information:">
				<Stat type="TABLE" override_width="5" sid="UM_STAT.UM_HW.UM_IF_TABLE">
					<Column name="Interface" type="STRING" sid="UM_STAT.UM_HW.UM_IF_TABLE.name"/>
					<Column name="" type="STRING" sid="UM_STAT.UM_HW.UM_IF_TABLE.device"/>
					<Column name="State" type="STRING" sid="UM_STAT.UM_HW.UM_IF_TABLE.state"/>
					<Column name="Type" type="STRING" sid="UM_STAT.UM_HW.UM_IF_TABLE.type"/>
					<Column name="Port " type="STRING" sid="UM_STAT.UM_HW.UM_IF_TABLE.port"/>
					<Column name="Driver" type="STRING" sid="UM_STAT.UM_HW.UM_IF_TABLE.driver"/>
					<Column name="Speed" type="STRING" sid="UM_STAT.UM_HW.UM_IF_TABLE.speed"/>
					<Column name="IPv4" type="STRING" sid="UM_STAT.UM_HW.UM_IF_TABLE.ipv4"/>
					<Column name="IPv6" type="STRING" sid="UM_STAT.UM_HW.UM_IF_TABLE.ipv6"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="Interfaces-Traffic" name="Traffic">
			<Block heading="RX Traffic:">
				<Stat type="TABLE" override_width="6" sid="UM_STAT.UM_HW.UM_IF_RX_STATISTICS_TABLE">
					<Column name="Interface" type="STRING" sid="UM_STAT.UM_HW.UM_IF_RX_STATISTICS_TABLE.if_name"/>
					<Column name="" type="STRING" sid="UM_STAT.UM_HW.UM_IF_RX_STATISTICS_TABLE.device"/>
					<Column name="packets" type="UINT64" sid="UM_STAT.UM_HW.UM_IF_RX_STATISTICS_TABLE.if_rx_packets" units="AUTO"/>
					<Column name="    pps" type="UINT64" sid="UM_STAT.UM_HW.UM_IF_RX_STATISTICS_TABLE.if_rx_packets_throughput"/>
					<Column name="   peak" type="UINT64" sid="UM_STAT.UM_HW.UM_IF_RX_STATISTICS_TABLE.if_rx_packets_peak"/>
					<Column name="  Mbits" type="UINT64" sid="UM_STAT.UM_HW.UM_IF_RX_STATISTICS_TABLE.if_rx_bits" units="Mb"/>
					<Column name="   Mbps" type="UINT64" sid="UM_STAT.UM_HW.UM_IF_RX_STATISTICS_TABLE.if_rx_bits_throughput" units="Mb"/>
					<Column name="   peak" type="UINT64" sid="UM_STAT.UM_HW.UM_IF_RX_STATISTICS_TABLE.if_rx_bits_peak" units="Mb"/>
				</Stat>
			</Block>
			<Block heading="TX Traffic:">
				<Stat type="TABLE" override_width="6" sid="UM_STAT.UM_HW.UM_IF_TX_STATISTICS_TABLE">
					<Column name="Interface" type="STRING" sid="UM_STAT.UM_HW.UM_IF_TX_STATISTICS_TABLE.if_name"/>
					<Column name="" type="STRING" sid="UM_STAT.UM_HW.UM_IF_TX_STATISTICS_TABLE.device"/>
					<Column name="packets" type="UINT64" sid="UM_STAT.UM_HW.UM_IF_TX_STATISTICS_TABLE.if_tx_packets" units="AUTO"/>
					<Column name="    pps" type="UINT64" sid="UM_STAT.UM_HW.UM_IF_TX_STATISTICS_TABLE.if_tx_packets_throughput"/>
					<Column name="   peak" type="UINT64" sid="UM_STAT.UM_HW.UM_IF_TX_STATISTICS_TABLE.if_tx_packets_peak"/>
					<Column name="  Mbits" type="UINT64" sid="UM_STAT.UM_HW.UM_IF_TX_STATISTICS_TABLE.if_tx_bits" units="Mb"/>
					<Column name="   Mbps" type="UINT64" sid="UM_STAT.UM_HW.UM_IF_TX_STATISTICS_TABLE.if_tx_bits_throughput" units="Mb"/>
					<Column name="   peak" type="UINT64" sid="UM_STAT.UM_HW.UM_IF_TX_STATISTICS_TABLE.if_tx_bits_peak" units="Mb"/>
				</Stat>
			</Block>
			<Block heading="Errors and Drops:">
				<Stat type="TABLE" override_width="6" sid="UM_STAT.UM_HW.UM_IF_ERR_STATISTICS_TABLE">
					<Column name="Interface" type="STRING" sid="UM_STAT.UM_HW.UM_IF_ERR_STATISTICS_TABLE.if_name"/>
					<Column name="" type="STRING" sid="UM_STAT.UM_HW.UM_IF_ERR_STATISTICS_TABLE.device"/>
					<Column name="RX drops" type="UINT64" sid="UM_STAT.UM_HW.UM_IF_ERR_STATISTICS_TABLE.if_rx_drops" units="AUTO"/>
					<Column name="RX errors" type="UINT64" sid="UM_STAT.UM_HW.UM_IF_ERR_STATISTICS_TABLE.if_rx_errors" units="AUTO"/>
					<Column name="TX drops" type="UINT64" sid="UM_STAT.UM_HW.UM_IF_ERR_STATISTICS_TABLE.if_tx_drops" units="AUTO"/>
					<Column name="TX errors" type="UINT64" sid="UM_STAT.UM_HW.UM_IF_ERR_STATISTICS_TABLE.if_tx_errors" units="AUTO"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="SB-VPN-OVERVIEW" name="Overview" hide_on_mgmt="1">
			<Block heading="Overview:">
				<Stat type="UINT64" name="Encrypted packets                             " sid="vpn.general.encrypted_packets"/>
				<Stat type="UINT64" name="Decrypted packets" sid="vpn.general.decrypted_packets"/>
				<Stat type="UINT64" name="Concurrent IKEv1 SAs" sid="vpn.general.concurrent_ikev1_sas"/>
				<Stat type="UINT64" name="Concurrent IKEv2 SAs" sid="vpn.general.concurrent_ikev2_sas"/>
				<Stat type="UINT64" name="Concurrent IKE SAs with Interoperable Devices" sid="vpn.general.concurrent_ike_sas_third"/>
				<Stat type="UINT64" name="Concurrent IKE SAs with Dynamic Assigned IPs" sid="vpn.general.concurrent_ike_sas_daip"/>
				<Stat type="UINT64" name="Concurrent IKE SAs with Remote Access Endpoints" sid="vpn.general.concurrent_ike_sas_ra"/>
				<Stat type="UINT64" name="Concurrent IKE SAs with IPv6" sid="vpn.general.concurrent_ike_sas_ipv6"/>
				<Stat type="UINT64" name="Concurrent IKE SA negotiations" sid="vpn_us.general.concurrent_sa_negotiations"/>
				<Stat type="UINT64" name="Concurrent IKE peers" sid="vpn.ike_sas.concurrent_ike_peers"/>
				<Stat type="UINT64" name="VPND restarts" sid="vpn.general.vpnd_restarts"/>
				<Stat type="UINT64" name="Policy reload" sid="vpn.general.policy_reload"/>
				<Stat type="UINT64" name="No valid SA errors" sid="vpn.ike_errors.no_valid_sa_errors"/>
				<Stat type="UINT64" name="IKE errors" sid="vpn_us.general.total_ike_errors"/>
				<Stat type="UINT64" name="Encryption errors" sid="vpn.general.encryption_errors"/>
				<Stat type="UINT64" name="Decryption errors" sid="vpn.general.decryption_errors"/>
				<Stat type="UINT64" name="Link failures" sid="vpn_us.link_selection.link_failures"/>
				<Stat type="UINT64" name="Kernel limit reached" sid="vpn.general.kernel_limit_reached"/>
				<Stat type="UINT64" name="Packets compressed" sid="vpn.compression.packets_compressed"/>
			</Block>
			<Block heading="Remote Access:">
				<Stat type="UINT64" name="Clients connected                             " sid="vpn.remote_access.client_mode"/>
				<Stat type="UINT64" name="Office mode assigned IPs" sid="vpn.remote_access.office_mode"/>
				<Stat type="UINT64" name="Visitor mode clients connected" sid="vpn.remote_access.visitor_mode"/>
				<Stat type="UINT64" name="SNX mode clients connected" sid="vpn.remote_access.snx_mode"/>
				<Stat type="UINT64" name="L2TP mode clients connected" sid="vpn.remote_access.l2tp_mode"/>
			</Block>
		</View>
		<View viewtag="SB-VPN-DETAILED" name="Detailed" hide_on_mgmt="1">
			<Block heading="IKE errors:">
				<Stat type="UINT64" name="No response from peer                         " sid="vpn_us.ike_errors.no_response_from_peer"/>
				<Stat type="UINT64" name="Total initiator errors" sid="vpn_us.ike_errors.total_initiator_errors"/>
				<Stat type="UINT64" name="Total responder errors" sid="vpn_us.ike_errors.total_responder_errors"/>
				<Stat type="UINT64" name="Proposal mismatch" sid="vpn_us.ike_errors.proposal_mismatch"/>
				<Stat type="UINT64" name="CRL validation" sid="vpn_us.ike_errors.crl_validation"/>
				<Stat type="UINT64" name="Certificates errors" sid="vpn_us.ike_errors.certificates_errors"/>
				<Stat type="UINT64" name="Pre-shared key mismatch" sid="vpn_us.ike_errors.preshared_key_mismatch"/>
				<Stat type="UINT64" name="IKEv2 Narrowing" sid="vpn_us.ike_errors.ikev2_narrowing"/>
				<Stat type="UINT64" name="No valid SA errors" sid="vpn.ike_errors.no_valid_sa_errors"/>
			</Block>
			<Block heading="Encryption errors:">
				<Stat type="UINT64" name="Fragmentation caused due to IPSec             " sid="vpn.ipsec_errors.ipsec_fragmentation"/>
				<Stat type="UINT64" name="Fragmentation drops" sid="vpn.ipsec_errors.fragmentation_drops"/>
				<Stat type="UINT64" name="Tunnel is not yet established" sid="vpn.ipsec_errors.tunnel_is_not_yet_established"/>
			</Block>
			<Block heading="Decryption errors:">
				<Stat type="UINT64" name="ESP decryption errors                         " sid="vpn.ipsec_errors.esp_decryption_errors"/>
				<Stat type="UINT64" name="Replay errors" sid="vpn.ipsec_errors.replay_errors"/>
				<Stat type="UINT64" name="Unknown SPI errors" sid="vpn.ipsec_errors.unknown_spi_errors"/>
				<Stat type="UINT64" name="Compression errors" sid="vpn.ipsec_errors.compression_errors"/>
				<Stat type="UINT64" name="Clear text packet should be encrypted" sid="vpn.ipsec_errors.clear_pkt_should_be_encrypted"/>
				<Stat type="UINT64" name="Encrypted packet should be clear text packet" sid="vpn.ipsec_errors.encrypted_pkt_should_be_clear"/>
				<Stat type="UINT64" name="Authentication errors" sid="vpn.ipsec_errors.authentication_errors"/>
			</Block>
			<Block heading="Link Selection errors:">
				<Stat type="UINT64" name="Link failures                                 " sid="vpn_us.link_selection.link_failures"/>
				<Stat type="UINT64" name="Active link failures" sid="vpn_us.link_selection.active_link_failures"/>
			</Block>
			<Block heading="Kernel:">
				<Stat type="UINT64" name="Kernel traps                                  " sid="vpn_us.general.kernel_traps"/>
				<Stat type="UINT64" name="Kernel ioctls" sid="vpn.general.kernel_ioctls"/>
				<Stat type="UINT64" name="Kernel ike2peer limit reached" sid="vpn.general_errors.ike2peer_reach_limit"/>
				<Stat type="UINT64" name="Kernel vpn_queues limit reached" sid="vpn.general_errors.vpn_queues_reach_limit"/>
			</Block>
			<Block heading="IKE SAs:">
				<Stat type="UINT64" name="Concurrent IKE peers                          " sid="vpn.ike_sas.concurrent_ike_peers"/>
				<Stat type="UINT64" name="Concurrent IKE SAs" sid="vpn.ike_sas.concurrent_sas"/>
				<Stat type="UINT64" name="Concurrent SAs initiated by me" sid="vpn.ike_sas.concurrent_sas_init_by_me"/>
				<Stat type="UINT64" name="Concurrent SAs initiated by peer" sid="vpn.ike_sas.concurrent_sas_init_by_peer"/>
				<Stat type="UINT64" name="Concurrent IKE SA negotiations peak" sid="vpn_us.ike_sas.max_concurrent_sa_negotiations"/>
				<Stat type="UINT64" name="Concurrent IKE SAs peak" sid="vpn.ike_sas.max_concurrent_sas"/>
				<Stat type="UINT64" name="Concurrent SAs init by me peak" sid="vpn.ike_sas.max_concurrent_sas_init_by_me"/>
				<Stat type="UINT64" name="Concurrent SAs init by peer peak" sid="vpn.ike_sas.max_concurrent_sas_init_by_peer"/>
				<Stat type="UINT64" name="Total SAs" sid="vpn.ike_sas.total_sas"/>
				<Stat type="UINT64" name="Total SAs initiated by me" sid="vpn.ike_sas.total_sas_initiated_by_me"/>
				<Stat type="UINT64" name="Total SAs initiated by peer" sid="vpn.ike_sas.total_sas_initiated_by_peer"/>
				<Stat type="UINT64" name="Total SAs with Aggressive Mode" sid="vpn_us.ike_sas.total_sas_aggresive"/>
				<Stat type="UINT64" name="Total SAs attempts" sid="vpn_us.ike_sas.total_sas_attempts"/>
				<Stat type="UINT64" name="Total SAs attempts init by me" sid="vpn_us.ike_sas.total_sas_attempts_init_by_me"/>
				<Stat type="UINT64" name="Total SAs attempts init by peer" sid="vpn_us.ike_sas.total_sas_attempts_init_by_peer"/>
			</Block>
			<Block heading="IPsec SAs:">
				<Stat type="UINT64" name="Total Inbound SAs                             " sid="vpn.ipsec_sas.total_inbound_sas"/>
				<Stat type="UINT64" name="Total Outbound SAs" sid="vpn.ipsec_sas.total_outbound_sas"/>
			</Block>
			<Block heading="Compression:">
				<Stat type="UINT64" name="Bytes before compression                      " sid="vpn.compression.bytes_before_compression"/>
				<Stat type="UINT64" name="Bytes after compression" sid="vpn.compression.bytes_after_compression"/>
				<Stat type="UINT64" name="Bytes compression overhead" sid="vpn.compression.bytes_compression_overhead"/>
				<Stat type="UINT64" name="Bytes non compressed" sid="vpn.compression.bytes_non_compressed"/>
				<Stat type="UINT64" name="Packets compressed" sid="vpn.compression.packets_compressed"/>
				<Stat type="UINT64" name="Packets non compressible" sid="vpn.compression.packets_non_compressible"/>
			</Block>
		</View>
		<View viewtag="VPN-ppak" name="falcon" hide_on_mgmt="1">
			<Dynamic max_views_num="10" type="snd_falcon" views_per_sub_menu="0"/>
			<Block heading="VPN SecureXL Statistics:">
				<Stat type="INT64" name="ESP enc errors" sid="ppak_.accel_category.esp_enc_err" sid_prefix="ppak_"/>
				<Stat type="INT64" name="ESP dec errors" sid="ppak_.accel_category.esp_dec_err" sid_prefix="ppak_"/>
				<Stat type="INT64" name="ESP other errors" sid="ppak_.accel_category.esp_other_err" sid_prefix="ppak_"/>
				<Stat type="INT64" name="ESPUDP enc errors" sid="ppak_.accel_category.espudp_enc_err" sid_prefix="ppak_"/>
				<Stat type="INT64" name="ESPUDP dec errors" sid="ppak_.accel_category.espudp_dec_err" sid_prefix="ppak_"/>
				<Stat type="INT64" name="ESPUDP other errors" sid="ppak_.accel_category.espudp_other_err" sid_prefix="ppak_"/>
				<Stat type="INT64" name="GTP tunnels created" sid="ppak_.accel_category.gtp_tunnels_created" sid_prefix="ppak_"/>
				<Stat type="INT64" name="GTP concurrent tunnels" sid="ppak_.accel_category.gtp_no_of_tunnels" sid_prefix="ppak_"/>
				<Stat type="INT64" name="GTP accel packets" sid="ppak_.accel_category.gtp_accel_packets" sid_prefix="ppak_"/>
				<Stat type="INT64" name="GTP F2F packets" sid="ppak_.accel_category.gtp_f2fed_packets" sid_prefix="ppak_"/>
				<Stat type="INT64" name="GTP spoofed packets" sid="ppak_.accel_category.gtp_spoofed_packets" sid_prefix="ppak_"/>
				<Stat type="INT64" name="GTP signaling packets" sid="ppak_.accel_category.gtp_signaling_packets" sid_prefix="ppak_"/>
			</Block>
		</View>
		<View viewtag="IS-RAD" name="RAD" hide_on_mgmt="1">
			<Block heading=" ">
				<Stat type="TABLE">
					<Column name="To activate RAD statistics, run 'rad_admin stats'">
						<Row name=""/>
					</Column>
				</Stat>
			</Block>
			<Block heading="RAD General Information:">
				<Stat type="TIMELEN" name="RAD Statistics Up Time" sid="RAD.general.Rad up Time"/>
				<Stat type="TABLE" rows_num="13" sid="RAD.general.rad_table">
					<Column name="Name" type="STRING" sid="RAD.general.rad_table.stat name"/>
					<Column name="APPI" type="UINT64" sid="RAD.general.rad_table.apcl"/>
					<Column name="AB" type="UINT64" sid="RAD.general.rad_table.ab"/>
					<Column name="AV" type="UINT64" sid="RAD.general.rad_table.av"/>
					<Column name="URLF" type="UINT64" sid="RAD.general.rad_table.urlf"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="SB-GENERAL" name="Overview" hide_on_mgmt="1">
			<Block heading="Updates Information:">
				<Stat type="TABLE" override_width="5">
					<Column name="">
						<Row name="Application Control"/>
						<Row name="Anti-Virus"/>
						<Row name="Anti-Bot"/>
						<Row name="IPS"/>
					</Column>
					<Column name="Blade status">
						<Row type="STRING" sid="appi.updates.blade_status"/>
						<Row type="STRING" sid="anti_virus.updates.blade_status"/>
						<Row type="STRING" sid="anti_bot.updates.blade_status"/>
						<Row type="STRING" sid="ips.updates.blade_status"/>
					</Column>
					<Column name="Last update Number">
						<Row type="STRING" sid="appi.updates.update_name"/>
						<Row type="STRING" sid="anti_virus.updates.update_name"/>
						<Row type="STRING" sid="anti_bot.updates.update_name"/>
						<Row type="STRING" sid="ips.updates.update_name"/>
					</Column>
					<Column name="Update Time">
						<Row type="TIMESTAMP" sid="appi.updates.update_time"/>
						<Row type="TIMESTAMP" sid="anti_virus.updates.update_time"/>
						<Row type="TIMESTAMP" sid="anti_bot.updates.update_time"/>
						<Row type="TIMESTAMP" sid="ips.updates.update_time"/>
					</Column>
				</Stat>
			</Block>
		</View>
		<View viewtag="SB-SCRUB" name="Threat-Extraction" hide_on_mgmt="1">
			<Block heading="Health:">
				<Stat type="STRING" name="Operational status" sid="scrub.stats.Operational status"/>
				<Stat type="STRING" name="Update Installed Revision" sid="scrub.stats.Update Installed Revision"/>
			</Block>
			<Block heading="License:">
				<Stat type="STRING" name="Subscription status" sid="scrub.stats.Subscription status"/>
				<Stat type="STRING" name="Subscription expiration" sid="scrub.stats.Subscription expiration"/>
			</Block>
			<Block heading="Mail Statistics:">
				<Stat type="INT" name="Total Mails" sid="scrub.db_stats.Total Mails"/>
				<Stat type="INT" name="Mails With Attachments" sid="scrub.db_stats.Mails With Attachments"/>
				<Stat type="INT" name="Scanned Mails" sid="scrub.db_stats.Scanned Mails"/>
				<Stat type="INT" name="Mails Modified" sid="scrub.db_stats.Mails Modified"/>
				<Stat type="INT" name="Mails Rejected" sid="scrub.db_stats.Mails Rejected"/>
				<Stat type="INT" name="Mails Skipped" sid="scrub.db_stats.Mails Skipped"/>
				<Stat type="INT" name="Mails Failed" sid="scrub.db_stats.Mails Failed"/>
			</Block>
			<Block heading="File Statistics:">
				<Stat type="INT" name="Total Attachments" sid="scrub.db_stats.Total Attachments"/>
				<Stat type="INT" name="Scanned Attachments" sid="scrub.db_stats.Scanned Attachments"/>
				<Stat type="INT" name="Files Attachments" sid="scrub.db_stats.Extracted Attachments"/>
				<Stat type="INT" name="Files Fail Attachments" sid="scrub.db_stats.Extract Fail Attachments"/>
				<Stat type="INT" name="Files Timed Out Attachments" sid="scrub.db_stats.Extracted Timed Out Attachments"/>
				<Stat type="INT" name="Internal Errors" sid="scrub.db_stats.Internal Errors"/>
				<Stat type="INT" name="Attachments with no Content to Extract" sid="scrub.db_stats.Clean Attachments"/>
				<Stat type="INT" name="Too Large Attachments" sid="scrub.db_stats.Too Large Attachments"/>
				<Stat type="INT" name="Original Attachment Accesses" sid="scrub.db_stats.Original Attachment Accesses"/>
				<Stat type="INT" name="Password Protected Attachments" sid="scrub.db_stats.Password Protected Attachments"/>
				<Stat type="INT" name="DocSec Protected Attachments" sid="scrub.db_stats.DocSec Protected Attachments"/>
				<Stat type="INT" name="Skipped since no valid contract found" sid="scrub.db_stats.Skipped since no contract"/>
				<Stat type="INT" name="Unsupported Attachments" sid="scrub.db_stats.Unsupported Attachments"/>
				<Stat type="INT" name="Skipped by administrator script" sid="scrub.db_stats.Skipped by script"/>
				<Stat type="INT" name="Skipped by Threat Emulation Confidence" sid="scrub.db_stats.Skipped by Threat Emulation"/>
				<Stat type="INT" name="Total Cleaned Files" sid="scrub.db_stats.Total Cleaned Files"/>
				<Stat type="INT" name="Total Cleaned Files Peak" sid="scrub.db_stats.Total Cleaned Files Peak"/>
				<Stat type="INT" name="Total Converted Files" sid="scrub.db_stats.Total Converted Files"/>
				<Stat type="INT" name="Total Converted Files Peak" sid="scrub.db_stats.Total Converted Files Peak"/>
				<Stat type="INT" name="Web Cleaned Files" sid="scrub.db_stats.Extension Cleaned Files"/>
				<Stat type="INT" name="Web Cleaned Files Peak" sid="scrub.db_stats.Extension Cleaned Files Peak"/>
				<Stat type="INT" name="Web Converted Files" sid="scrub.db_stats.Extension Converted Files"/>
				<Stat type="INT" name="Web Converted Files Peak" sid="scrub.db_stats.Extension Converted Files Peak"/>
				<Stat type="TIMESTAMP" name="Counters last reset date" sid="scrub.stats.Counters last reset date"/>
				<Stat type="TIMESTAMP" name="Peaks last reset date" sid="scrub.stats.Peaks last reset date"/>
			</Block>
			<Block heading="Queues:">
				<Stat type="INT" name="scrubd queue" sid="scrub.stats.scrubd queue"/>
				<Stat type="INT" name="scrubd queue peak" sid="scrub.stats.scrubd queue peak"/>
				<Stat type="TIMESTAMP" name="scrubd queue peak date" sid="scrub.stats.scrubd queue peak date"/>
				<Stat type="INT" name="cp_file_convert queue" sid="scrub.stats.cp_file_convert queue"/>
				<Stat type="INT" name="cp_file_convert queue peak" sid="scrub.stats.cp_file_convert queue peak"/>
				<Stat type="TIMESTAMP" name="cp_file_convert queue peak date" sid="scrub.stats.cp_file_convert queue peak date"/>
			</Block>
		</View>
		<View viewtag="MTA-QUEUES" name="Queues" hide_on_mgmt="1">
			<Block heading="Mail Statistics:">
				<Stat type="UINT" name="Active Queue" sid="te_mta.stat.active"/>
				<Stat type="UINT" name="Deferred Queue" sid="te_mta.stat.deferred"/>
				<Stat type="UINT" name="Emaild Queue" sid="te_mta.stat.emaild_queue"/>
			</Block>
		</View>
		<View viewtag="MTA-MONITORING" name="Monitoring" hide_on_mgmt="1">
			<Block heading="Mail Statistics:">
				<Stat type="UINT" name="Mails Received" sid="te_mta.stat.mails_received"/>
				<Stat type="UINT" name="Mails With TE Supported Attachments" sid="te_mta.stat.mails_with_attachments"/>
				<Stat type="UINT" name="Mails Processed" sid="te_mta.stat.mails_processed"/>
				<Stat type="UINT" name="Mails Limits Exceeded" sid="te_mta.stat.mails_limits_exceeded"/>
				<Stat type="UINT" name="Mails Modified" sid="te_mta.stat.mails_modified"/>
				<Stat type="UINT" name="Mails Deferred" sid="te_mta.stat.mails_deferred"/>
				<Stat type="UINT" name="Mails Blocked" sid="te_mta.stat.mails_blocked"/>
				<Stat type="UINT" name="Mails Skipped Due To Excluded Recipients" sid="te_mta.stat.mails_skipped_recipients"/>
				<Stat type="UINT" name="Mails Skipped Due To Excluded Sender" sid="te_mta.stat.mails_skipped_sender"/>
				<Stat type="UINT" name="Mails With TE Failures" sid="te_mta.stat.mails_with_te_failures"/>
				<Stat type="UINT" name="Mails With MTA Failures" sid="te_mta.stat.mails_with_mta_failures"/>
			</Block>
			<Block heading="Failures:">
				<Stat type="UINT" name="Header size exceeds maximum" sid="email_mta.stat.mime_parse_header_too_long"/>
				<Stat type="UINT" name="Malformed mime" sid="email_mta.stat.malformed_mime_message"/>
				<Stat type="UINT" name="Mime parsing error" sid="email_mta.stat.mime_parse_error"/>
				<Stat type="UINT" name="Internal error" sid="email_mta.stat.internal_error"/>
				<Stat type="UINT" name="Emulation requests number exceeds maximum" sid="email_mta.stat.too_many_connections"/>
				<Stat type="UINT" name="Emulation engine irresponsive" sid="email_mta.stat.ted_down"/>
				<Stat type="UINT" name="Attachment removal error" sid="email_mta.stat.strip_error"/>
				<Stat type="UINT" name="Links removal error" sid="email_mta.stat.neutralize_link_failed"/>
			</Block>
		</View>
		<View viewtag="SB-DLP" name="DLP" hide_on_mgmt="1">
			<Block heading="Overview:">
				<Stat type="UINT64" name="Total scanned messages" sid="dlp.general.total_traffic_scans"/>
				<Stat type="STRING" name="License status" sid="dlp.general.license_status"/>
				<Stat type="STRING" name="Bypass status" sid="dlp.general.bypass_status"/>
				<Stat type="STRING" name="Last install policy status" sid="dlp.general.last_policy_install"/>
				<Stat type="UINT64" name="RAM Disk utilized space (%)" sid="dlp.ramdisk.utilized_percentage"/>
			</Block>
			<Block heading="Traffic:">
				<Stat type="TABLE" override_width="17">
					<Column name="Protocol">
						<Row name="SMTP"/>
						<Row name="HTTP"/>
						<Row name="FTP"/>
					</Column>
					<Column name="Scanned messages">
						<Row type="UINT64" sid="dlp.smtp.total_num_sent"/>
						<Row type="UINT64" sid="dlp.http.total_num_scanned"/>
						<Row type="UINT64" sid="dlp.ftp.total_num_scanned"/>
					</Column>
					<Column name="Incidents">
						<Row type="UINT64" sid="dlp.smtp.total_num_incidents"/>
						<Row type="UINT64" sid="dlp.http.total_num_incidents"/>
						<Row type="UINT64" sid="dlp.ftp.total_num_incidents"/>
					</Column>
				</Stat>
			</Block>
			<Block heading="UserCheck:">
				<Stat type="UINT" name="Connected clients               " sid="dlp.usercheck.connected_clients"/>
			</Block>
			<Block heading="Quarantine:">
				<Stat type="UINT64" name="Discarded from quarantine by user" sid="dlp.smtp.discarded_from_quarentine"/>
				<Stat type="UINT64" name="Quarantine expired" sid="dlp.smtp.quartine_expired"/>
				<Stat type="UINT64" name="Sent from quarantine" sid="dlp.smtp.quartine_sent"/>
				<Stat type="UINT" name="Number of Messages" sid="dlp.quarantine.num_messages"/>
				<Stat type="UINT64" name="Size of messages" sid="dlp.quarantine.messages_size" suffix=" MB"/>
				<Stat type="UINT64" name="Free space" sid="dlp.quarantine.free_space" suffix=" MB"/>
			</Block>
			<Block heading="Connection to Mail Relay:">
				<Stat type="INT" name="Queue length" sid="dlp.mail_relay.queue_length"/>
				<Stat type="INT" name="Number of errors" sid="dlp.mail_relay.num_errors"/>
				<Stat type="INT" name="Emails in queue older than 1 hour" sid="dlp.mail_relay.queue_length_after_1h"/>
				<Stat type="UINT64" name="Size of emails in queue" sid="dlp.mail_relay.queue_size_of_messages" suffix=" MB"/>
				<Stat type="UINT64" name="Free space for queue" sid="dlp.mail_relay.queue_free_space" suffix=" MB"/>
			</Block>
			<Block heading="Queues:">
				<Stat type="TABLE" rows_num="1">
					<Column name="Mime Parser" type="INT" sid="dlp.async_queue.mime_parser"/>
					<Column name="DLP" type="INT" sid="dlp.async_queue.dlp_queue"/>
					<Column name="File convert" type="INT" sid="dlp.async_queue.file_convert"/>
					<Column name="Fingerprint" type="INT" sid="dlp.async_queue.fingerprint"/>
				</Stat>
			</Block>
			<Block heading="Health:">
				<Stat type="STRING" name="Operational status" sid="dlp.general.operational_status"/>
			</Block>
		</View>
		<View viewtag="SB-IDA" name="IDA" hide_on_mgmt="1">
			<Block heading="Entity Count By Identity Sources:">
				<Stat type="UINT" name="Captive Portal" sid="ida_userspace.logins.Logged_in_CaptivePortal"/>
				<Stat type="UINT" name="AD Query" sid="ida_userspace.logins.Logged_in_ADQuery"/>
				<Stat type="UINT" name="Agent                                      " sid="ida_userspace.logins.Logged_in_Agents"/>
				<Stat type="UINT" name="Terminal Server" sid="ida_userspace.logins.Logged_in_Muh"/>
				<Stat type="UINT" name="RADIUS Accounting" sid="ida_userspace.logins.Logged_in_Radius"/>
				<Stat type="UINT" name="Remote Access" sid="ida_userspace.logins.Logged_in_Vpn"/>
				<Stat type="UINT" name="Identity Collector [Active Directory]" sid="ida_userspace.logins.Logged_in_Idc"/>
				<Stat type="UINT" name="Identity Collector [Cisco ISE]" sid="ida_userspace.logins.Logged_in_Ise"/>
				<Stat type="UINT" name="Identity Collector [Syslog]" sid="ida_userspace.logins.Logged_in_Syslog"/>
				<Stat type="UINT" name="Identity Collector [eDirectory]" sid="ida_userspace.logins.Logged_in_eDirectory"/>
				<Stat type="UINT" name="Identity Awareness API" sid="ida_userspace.logins.Logged_in_Api"/>
			</Block>
			<Block heading="Authentication:">
				<Stat type="UINT" name="Authenticated Users [Total]" sid="ida_userspace.auth.Auth_Users"/>
				<Stat type="UINT" name="Authenticated Machines [Total]" sid="ida_userspace.auth.Auth_Machines"/>
				<Stat type="UINT" name="Authenticated Users [Kerberos]" sid="ida_userspace.auth.Auth_Kerb_User"/>
				<Stat type="UINT" name="Authenticated Machines [Kerberos]" sid="ida_userspace.auth.Auth_Kerb_Machine"/>
				<Stat type="UINT" name="Authenticated Users [User name and password]" sid="ida_userspace.auth.Auth_User_Name_And_Password"/>
				<Stat type="UINT" name="Authenticated Users [AD Query]" sid="ida_userspace.auth.Auth_ADQuery_User"/>
				<Stat type="UINT" name="Authenticated Machines [AD Query]" sid="ida_userspace.auth.Auth_ADQuery_Machine"/>
				<Stat type="UINT" name="Unauthenticated Guests" sid="ida_userspace.auth.Unauth_Guests"/>
			</Block>
			<Block heading="Login Statistic:">
				<Stat type="UINT" name="Successful User Logins [Kerberos]" sid="ida_userspace.logins.Kerb_user_succ_logins"/>
				<Stat type="UINT" name="Successful Machine Logins [Kerberos]" sid="ida_userspace.logins.Kerb_machine_succ_logins"/>
				<Stat type="UINT" name="Successful User Logins [User name and password]" sid="ida_userspace.logins.Username_pass_succ_logins"/>
				<Stat type="UINT" name="Successful User Logins [AD Query]" sid="ida_userspace.logins.ADQuery_user_succ_logins"/>
				<Stat type="UINT" name="Successful Machine Logins [AD Query]" sid="ida_userspace.logins.ADQuery_machine_succ_logins"/>
				<Stat type="UINT" name="Unsuccessful User Logins [Kerberos]" sid="ida_userspace.logins.Unsucc_Kerb_user_logins"/>
				<Stat type="UINT" name="Unsuccessful Machine Logins [Kerberos]" sid="ida_userspace.logins.Unsucc_Kerb_machine_logins"/>
				<Stat type="UINT" name="Unsuccessful User Logins [User name and password]" sid="ida_userspace.logins.Unsucc_user_and_pass_logins"/>
				<Stat type="UINT" name="Users With Anti-Spoofing Protection" sid="ida_userspace.logins.Users_with_Packettagging"/>
			</Block>
			<Block heading="LDAP:">
				<Stat type="UINT" name="Successful LDAP Queries                          " sid="ida_userspace.ldap.Succ_ldap_quiries"/>
				<Stat type="UINT" name="Unsuccessful LDAP Queries" sid="ida_userspace.ldap.Unsucc_ldap_queries"/>
			</Block>
			<Block heading="Pep Servers:">
				<Stat type="TABLE" override_width="5" sid="ida_userspace.components.components_table">
					<Column name="Name" type="STRING" sid="ida_userspace.components.components_table.name"/>
					<Column name="Status" type="UINT" sid="ida_userspace.components.components_table.status"/>
					<Column name="Disconnections" type="UINT" sid="ida_userspace.components.components_table.disconnections"/>
					<Column name="IsLocal" type="STRING" sid="ida_userspace.components.components_table.isLocal"/>
				</Stat>
			</Block>
			<Block heading="Domain Controllers:">
				<Stat type="TABLE" override_width="5" sid="ida_userspace.adquery.adquery_table">
					<Column name="Name" type="STRING" sid="ida_userspace.adquery.adquery_table.name"/>
					<Column name="IP" type="STRING" sid="ida_userspace.adquery.adquery_table.ip"/>
					<Column name="Status" type="UINT" sid="ida_userspace.adquery.adquery_table.status"/>
					<Column name="Events" type="UINT" sid="ida_userspace.adquery.adquery_table.events"/>
				</Stat>
			</Block>
			<Block heading="Kernel Information:">
				<Stat type="UINT" name="Kbuf memory used by sessions (bytes)" sid="ida.memory.kbuf_mem_used_by_sessions"/>
				<Stat type="UINT" name="Kbuf memory used by supersessions (bytes)" sid="ida.memory.kbuf_mem_used_by_super_sessions"/>
				<Stat type="UINT" name="Kbuf memory used by client_db (bytes)" sid="ida.memory.kbuf_mem_used_by_client_db"/>
			</Block>
			<Block heading="PDP Session Objects:">
				<Stat type="UINT" name="Basic Sessions                           " sid="ida_userspace.memory.basicSessions"/>
				<Stat type="UINT" name="Super Sessions" sid="ida_userspace.memory.superSessions"/>
			</Block>
		</View>
		<View viewtag="ppak-Drops" name="falcon" hide_on_mgmt="1">
			<Dynamic max_views_num="10" type="snd_falcon" views_per_sub_menu="0"/>
			<Block heading="Summary">
				<Stat type="INT64" name="Dropped Bytes" sid="ppak_.drops_category.dropped_bytes" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Dropped Packets" sid="ppak_.drops_category.dropped_packets" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Dropped IP Option" sid="ppak_.drops_category.ip_option" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Dropped Fragmantation Violation" sid="ppak_.drops_category.fragmantation_violation" sid_prefix="ppak_"/>
			</Block>
			<Block heading="Drop Reasons">
				<Stat type="TABLE" sid="ppak_.drops_category.drops_table" sid_prefix="ppak_">
					<Column type="STRING" name="Reason"  sid="ppak_.drops_category.drops_table.drop_reason" sid_prefix="ppak_"/>
					<Column type="INT" name="Count" sid="ppak_.drops_category.drops_table.drop_count" sid_prefix="ppak_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="Protocols-Path_Distribution" name="Path" hide_on_mgmt="1" hide_on_nonGaia="1">
			<Dynamic max_views_num="10" sid="" type="snd_falcon"/>
			<Block heading="Path distribution summary:">
				<Stat type="TABLE" rows_num="10" override_width="6" sid="network_profile_ppak_.network.total_services" sid_prefix="network_profile_ppak_">
					<Column name="Totals        " type="STRING" sid="network_profile_ppak_.network.total_services.service_name" sid_prefix="network_profile_ppak_"/>
					<Column name="SXL Mbps" type="UINT64" sid="network_profile_ppak_.network.total_services.sxl_bps" units="Mb" sid_prefix="network_profile_ppak_"/>
					<Column name="SXL pps" type="UINT64" sid="network_profile_ppak_.network.total_services.sxl_pps" sid_prefix="network_profile_ppak_"/>
					<Column name="PXL Mbps" type="UINT64" sid="network_profile_ppak_.network.total_services.pxl_bps" units="Mb" sid_prefix="network_profile_ppak_"/>
					<Column name="PXL pps" type="UINT64" sid="network_profile_ppak_.network.total_services.pxl_pps" sid_prefix="network_profile_ppak_"/>
					<Column name=" FW Mbps" type="UINT64" sid="network_profile_ppak_.network.total_services.f2f_bps" units="Mb" sid_prefix="network_profile_ppak_"/>
					<Column name=" FW pps" type="UINT64" sid="network_profile_ppak_.network.total_services.f2f_pps" sid_prefix="network_profile_ppak_"/>
				</Stat>
				<Stat type="TABLE" rows_num="10" override_width="6" sid="network_profile_ppak_.network.top_services" sid_prefix="network_profile_ppak_">
					<Column name="Protocol       " type="PROTOCOL" sid="network_profile_ppak_.network.top_services.service_name" sid_prefix="network_profile_ppak_"/>
					<Column name="SXL Mbps" type="UINT64" sid="network_profile_ppak_.network.top_services.sxl_bps" units="Mb" sid_prefix="network_profile_ppak_"/>
					<Column name="SXL pps" type="UINT64" sid="network_profile_ppak_.network.top_services.sxl_pps" sid_prefix="network_profile_ppak_"/>
					<Column name="PXL Mbps" type="UINT64" sid="network_profile_ppak_.network.top_services.pxl_bps" units="Mb" sid_prefix="network_profile_ppak_"/>
					<Column name="PXL pps" type="UINT64" sid="network_profile_ppak_.network.top_services.pxl_pps" sid_prefix="network_profile_ppak_"/>
					<Column name=" FW Mbps" type="UINT64" sid="network_profile_ppak_.network.top_services.f2f_bps" units="Mb" sid_prefix="network_profile_ppak_"/>
					<Column name=" FW pps" type="UINT64" sid="network_profile_ppak_.network.top_services.f2f_pps" sid_prefix="network_profile_ppak_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="Protocols-Direction_Distribution" name="Direction" hide_on_mgmt="1" hide_on_nonGaia="1">
			<Dynamic max_views_num="10" sid="" type="snd_falcon"/>
			<Block heading="Direction distribution summary:">
				<Stat type="TABLE" rows_num="10" override_width="6" sid="network_profile_ppak_.network.total_services" sid_prefix="network_profile_ppak_">
					<Column name="Totals        " type="STRING" sid="network_profile_ppak_.network.total_services.service_name" sid_prefix="network_profile_ppak_"/>
					<Column name="Total Mbps" type="UINT64" sid="network_profile_ppak_.network.total_services.throughput" units="Mb" sid_prefix="network_profile_ppak_"/>
					<Column name="  c2s Mbps" type="UINT64" sid="network_profile_ppak_.network.total_services.c2s_bps" units="Mb" sid_prefix="network_profile_ppak_"/>
					<Column name="  s2c Mbps" type="UINT64" sid="network_profile_ppak_.network.total_services.s2c_bps" units="Mb" sid_prefix="network_profile_ppak_"/>
					<Column name="Total pps" type="UINT64" sid="network_profile_ppak_.network.total_services.packet_rate" sid_prefix="network_profile_ppak_"/>
					<Column name="  c2s pps" type="UINT64" sid="network_profile_ppak_.network.total_services.c2s_pps" sid_prefix="network_profile_ppak_"/>
					<Column name="  s2c pps" type="UINT64" sid="network_profile_ppak_.network.total_services.s2c_pps" sid_prefix="network_profile_ppak_"/>
				</Stat>
				<Stat type="TABLE" rows_num="10" override_width="6" sid="network_profile_ppak_.network.top_services" sid_prefix="network_profile_ppak_">
					<Column name="Protocol       " type="PROTOCOL" sid="network_profile_ppak_.network.top_services.service_name" sid_prefix="network_profile_ppak_"/>
					<Column name="Total Mbps" type="UINT64" sid="network_profile_ppak_.network.top_services.throughput" units="Mb" sid_prefix="network_profile_ppak_"/>
					<Column name="  c2s Mbps" type="UINT64" sid="network_profile_ppak_.network.top_services.c2s_bps" units="Mb" sid_prefix="network_profile_ppak_"/>
					<Column name="  s2c Mbps" type="UINT64" sid="network_profile_ppak_.network.top_services.s2c_bps" units="Mb" sid_prefix="network_profile_ppak_"/>
					<Column name="Total pps" type="UINT64" sid="network_profile_ppak_.network.top_services.packet_rate" sid_prefix="network_profile_ppak_"/>
					<Column name="  c2s pps" type="UINT64" sid="network_profile_ppak_.network.top_services.c2s_pps" sid_prefix="network_profile_ppak_"/>
					<Column name="  s2c pps" type="UINT64" sid="network_profile_ppak_.network.top_services.s2c_pps" sid_prefix="network_profile_ppak_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="Protocols-Size_Distribution" name="Size" hide_on_mgmt="1" hide_on_nonGaia="1">
			<Dynamic max_views_num="10" sid="" type="snd_falcon"/>
			<Block heading="Packet size distribution summary:">
				<Stat type="TABLE" rows_num="10" override_width="5" sid="network_profile_ppak_.network.total_services" sid_prefix="network_profile_ppak_">
					<Column name="Totals          " type="STRING" sid="network_profile_ppak_.network.total_services.service_name" sid_prefix="network_profile_ppak_"/>
					<Column name="Total pps" type="UINT64" sid="network_profile_ppak_.network.total_services.packet_rate" sid_prefix="network_profile_ppak_"/>
					<Column name=" &lt;256" type="UINT64" sid="network_profile_ppak_.network.total_services.size256_pps" sid_prefix="network_profile_ppak_"/>
					<Column name=" &lt;512" type="UINT64" sid="network_profile_ppak_.network.total_services.size512_pps" sid_prefix="network_profile_ppak_"/>
					<Column name="&lt;1024" type="UINT64" sid="network_profile_ppak_.network.total_services.size1024_pps" sid_prefix="network_profile_ppak_"/>
					<Column name="&lt;1536" type="UINT64" sid="network_profile_ppak_.network.total_services.size1536_pps" sid_prefix="network_profile_ppak_"/>
					<Column name="Jumbo" type="UINT64" sid="network_profile_ppak_.network.total_services.jumbo_pps" sid_prefix="network_profile_ppak_"/>
				</Stat>
				<Stat type="TABLE" rows_num="10" override_width="5" sid="network_profile_ppak_.network.top_services" sid_prefix="network_profile_ppak_">
					<Column name="Protocol       " type="PROTOCOL" sid="network_profile_ppak_.network.top_services.service_name" sid_prefix="network_profile_ppak_"/>
					<Column name="Total pps" type="UINT64" sid="network_profile_ppak_.network.top_services.packet_rate" sid_prefix="network_profile_ppak_"/>
					<Column name=" &lt;256" type="UINT64" sid="network_profile_ppak_.network.top_services.size256_pps" sid_prefix="network_profile_ppak_"/>
					<Column name=" &lt;512" type="UINT64" sid="network_profile_ppak_.network.top_services.size512_pps" sid_prefix="network_profile_ppak_"/>
					<Column name="&lt;1024" type="UINT64" sid="network_profile_ppak_.network.top_services.size1024_pps" sid_prefix="network_profile_ppak_"/>
					<Column name="&lt;1536" type="UINT64" sid="network_profile_ppak_.network.top_services.size1536_pps" sid_prefix="network_profile_ppak_"/>
					<Column name="Jumbo" type="UINT64" sid="network_profile_ppak_.network.top_services.jumbo_pps" sid_prefix="network_profile_ppak_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="FW-BOTH_FIN-packets" name="FW" hide_on_mgmt="1">
			<Block heading="TCP packets after BOTH_FIN per second:">
				<Stat type="TABLE" sid="fw.bothfin_stats.bothfin_pkts_tab">
					<Column name="Second" type="UINT" sid="fw.bothfin_stats.bothfin_pkts_tab.second"/>
					<Column name="#Packets" type="INT64" sid="fw.bothfin_stats.bothfin_pkts_tab.pkts"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="FW-kernel-mem" name="FW-Kernel/Host" hide_on_mgmt="1">
			<Block heading="Firewall kernel memory usage summary:">
				<Stat type="TABLE" rows_num="1">
					<Column name="Total" type="UINT64" sid="kernel_memory.kmem.total_alloc_limit" units="AUTOBYTES"/>
					<Column name="Used" type="UINT64" sid="fw.memory.used_virt_mem" units="AUTOBYTES"/>
					<Column name="%Usage" type="PERCENT" sid="fw.memory.used_virt_mem_percentage"/>
					<Column name="Free" type="UINT64" sid="fw.memory.free_virt_mem" units="AUTOBYTES"/>
				</Stat>
			</Block>
			<Block heading="KMEM:">
				<Stat type="TABLE" override_width="11">
					<Column name="">
						<Row name="Memory Usage:"/>
					</Column>
					<Column name="Used KB">
						<Row type="UINT64" sid="kernel_memory.kmem.used_bytes" units="KB"/>
					</Column>
					<Column name="Peak KB">
						<Row type="UINT64" sid="kernel_memory.kmem.peak_bytes" units="KB"/>
					</Column>
				</Stat>
				<Stat type="TABLE" override_width="11">
					<Column name="External Allocations:">
						<Row name="SecureXL"/>
						<Row name="Packets"/>
					</Column>
					<Column name="Used KB">
						<Row type="UINT64" sid="kernel_memory.kmem.extern_sxl_alloc" units="KB"/>
						<Row type="UINT64" sid="kernel_memory.kmem.extern_packet_alloc" units="KB"/>
					</Column>
				</Stat>
				<Stat type="TABLE" override_width="11">
					<Column name="">
						<Row name="Allocated        "/>
						<Row name="Freed"/>
					</Column>
					<Column name="Succeeded">
						<Row type="UINT" sid="kernel_memory.kmem.alloc_operations"/>
						<Row type="UINT" sid="kernel_memory.kmem.free_operations"/>
					</Column>
					<Column name="Failed">
						<Row type="UINT" sid="kernel_memory.kmem.failed_alloc"/>
						<Row type="UINT" sid="kernel_memory.kmem.failed_free"/>
					</Column>
				</Stat>
				<Stat type="UINT" name="Current allocations" sid="kernel_memory.kmem.items"/>
			</Block>
			<Block heading="HMEM:">
				<Stat type="TABLE" override_width="11">
					<Column name="">
						<Row name="HMEM Size KB"/>
						<Row name="Blocks"/>
						<Row name="Pools"/>
					</Column>
					<Column name="Current">
						<Row type="UINT64" sid="kernel_memory.hmem.alloc_bytes" units="KB"/>
						<Row type="UINT" sid="kernel_memory.hmem.alloc_blocks"/>
						<Row type="UINT" sid="kernel_memory.hmem.pools"/>
					</Column>
					<Column name="Limit">
						<Row type="UINT64" sid="kernel_memory.hmem.max_bytes" units="KB"/>
						<Row type="UINT" sid="kernel_memory.hmem.max_blocks"/>
						<Row type="UINT" sid="kernel_memory.hmem.max_pools"/>
					</Column>
				</Stat>
				<Stat type="TABLE" override_width="11">
					<Column name="">
						<Row name="HMEM Usage KB"/>
						<Row name="Blocks Usage"/>
					</Column>
					<Column name="Used">
						<Row type="INT64" sid="kernel_memory.hmem.used_bytes" units="KB"/>
						<Row type="INT" sid="kernel_memory.hmem.used_blocks"/>
					</Column>
					<Column name="Unused">
						<Row type="UINT64" sid="kernel_memory.hmem.unused_bytes" units="KB"/>
						<Row type="UINT" sid="kernel_memory.hmem.unused_blocks"/>
					</Column>
					<Column name="Peak">
						<Row type="UINT64" sid="kernel_memory.hmem.peak_bytes" units="KB"/>
						<Row type="UINT" sid="kernel_memory.hmem.peak_blocks"/>
					</Column>
				</Stat>
				<Stat type="TABLE" override_width="11">
					<Column name="">
						<Row name="Allocated        "/>
						<Row name="Freed"/>
					</Column>
					<Column name="Succeeded">
						<Row type="UINT" sid="kernel_memory.hmem.alloc_operations"/>
						<Row type="UINT" sid="kernel_memory.hmem.free_operations"/>
					</Column>
					<Column name="Failed">
						<Row type="UINT" sid="kernel_memory.hmem.failed_alloc"/>
						<Row type="UINT" sid="kernel_memory.hmem.failed_free"/>
					</Column>
				</Stat>
				<Stat type="UINT64" name="Current allocations" sid="kernel_memory.hmem.items"/>
			</Block>
			<Block heading="SMEM:">
				<Stat type="TABLE" override_width="11">
					<Column name="Memory usage:">
						<Row name="Total"/>
						<Row name="Atomic"/>
						<Row name="Sleepable"/>
					</Column>
					<Column name="Used KB">
						<Row type="UINT64" sid="kernel_memory.smem.used_bytes" units="KB"/>
						<Row type="UINT64" sid="kernel_memory.smem.used_nosleep_bytes" units="KB"/>
						<Row type="UINT64" sid="kernel_memory.smem.used_sleep_bytes" units="KB"/>
					</Column>
					<Column name="Peak KB">
						<Row type="UINT64" sid="kernel_memory.smem.peak_bytes" units="KB"/>
						<Row type="UINT64" sid="kernel_memory.smem.peak_nosleep_bytes" units="KB"/>
						<Row type="UINT64" sid="kernel_memory.smem.peak_sleep_bytes" units="KB"/>
					</Column>
				</Stat>
				<Stat type="TABLE" override_width="11">
					<Column name="">
						<Row name="Vmalloc     "/>
					</Column>
					<Column name="Expensive">
						<Row type="STRING" sid="kernel_memory.smem.vmalloc_expensive"/>
					</Column>
					<Column name="Used">
						<Row type="UINT64" sid="kernel_memory.smem.vmalloc" units="KB" suffix="KB"/>
					</Column>
				</Stat>
				<Stat type="TABLE" override_width="11">
					<Column name="">
						<Row name="Allocated      "/>
						<Row name="Freed"/>
					</Column>
					<Column name="Succeeded">
						<Row type="UINT" sid="kernel_memory.smem.alloc_operations"/>
						<Row type="UINT" sid="kernel_memory.smem.free_operations"/>
					</Column>
					<Column name="Failed">
						<Row type="UINT" sid="kernel_memory.smem.failed_alloc"/>
						<Row type="UINT" sid="kernel_memory.smem.failed_free"/>
					</Column>
				</Stat>
				<Stat type="UINT" name="Current allocations" sid="kernel_memory.smem.items"/>
				<Stat type="UINT64" name="Memory waste" sid="kernel_memory.smem.waste" units="KB" suffix="KB"/>
			</Block>
		</View>
		<View viewtag="FW-failed_allocs" name="SMEM-Failures" hide_on_mgmt="1">
			<Block heading="Failed memory requests">
				<Stat type="TABLE" sid="kernel_memory.smem_failed_allocs.failed_allocs">
					<Column name="Time" type="TIMESTAMP" sid="kernel_memory.smem_failed_allocs.failed_allocs.time"/>
					<Column name="Size" type="UINT" sid="kernel_memory.smem_failed_allocs.failed_allocs.size"/>
					<Column name="Reason" type="STRING" sid="kernel_memory.smem_failed_allocs.failed_allocs.reason"/>
					<Column name="Caller" type="STRING" sid="kernel_memory.smem_failed_allocs.failed_allocs.caller"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="Memory-Contexts" name="Contexts" hide_on_mgmt="1">
			<Block heading="Contexts">
				<Stat type="TABLE" override_width="3">
					<Column name="">
						<Row name="URL Filtering"/>
						<Row name="Application Control"/>
						<Row name="DLP"/>
						<Row name="WS"/>
						<Row name="PSL"/>
						<Row name="PSL Applications"/>
					</Column>
					<Column name="Used">
						<Row type="UINT64" sid="urlf_context.kmem_context.used_bytes" units="KB" suffix="KB"/>
						<Row type="UINT64" sid="appi_context.kmem_context.used_bytes" units="KB" suffix="KB"/>
						<Row type="UINT64" sid="dlp_context.kmem_context.used_bytes" units="KB" suffix="KB"/>
						<Row type="UINT64" sid="ws_context.kmem_context.used_bytes" units="KB" suffix="KB"/>
						<Row type="UINT64" sid="psl_context.kmem_context.used_bytes" units="KB" suffix="KB"/>
						<Row type="UINT64" sid="psl_app_context.kmem_context.used_bytes" units="KB" suffix="KB"/>
					</Column>
					<Column name="Peak">
						<Row type="UINT64" sid="urlf_context.kmem_context.peak_bytes" units="KB" suffix="KB"/>
						<Row type="UINT64" sid="appi_context.kmem_context.peak_bytes" units="KB" suffix="KB"/>
						<Row type="UINT64" sid="dlp_context.kmem_context.peak_bytes" units="KB" suffix="KB"/>
						<Row type="UINT64" sid="ws_context.kmem_context.peak_bytes" units="KB" suffix="KB"/>
						<Row type="UINT64" sid="psl_context.kmem_context.peak_bytes" units="KB" suffix="KB"/>
						<Row type="UINT64" sid="psl_app_context.kmem_context.peak_bytes" units="KB" suffix="KB"/>
					</Column>
					<Column name="Items">
						<Row type="UINT" sid="urlf_context.kmem_context.items"/>
						<Row type="UINT" sid="appi_context.kmem_context.items"/>
						<Row type="UINT" sid="dlp_context.kmem_context.items"/>
						<Row type="UINT" sid="ws_context.kmem_context.items"/>
						<Row type="UINT" sid="psl_context.kmem_context.items"/>
						<Row type="UINT" sid="psl_app_context.kmem_context.items"/>
					</Column>
					<Column name="Failed alloc">
						<Row type="UINT" sid="urlf_context.kmem_context.failed_alloc"/>
						<Row type="UINT" sid="appi_context.kmem_context.failed_alloc"/>
						<Row type="UINT" sid="dlp_context.kmem_context.failed_alloc"/>
						<Row type="UINT" sid="ws_context.kmem_context.failed_alloc"/>
						<Row type="UINT" sid="psl_context.kmem_context.failed_alloc"/>
						<Row type="UINT" sid="psl_app_context.kmem_context.failed_alloc"/>
					</Column>
				</Stat>
			</Block>
		</View>
		<View viewtag="CPU-Contexts" name="Contexts" hide_on_mgmt="1">
			<Block heading="Contexts">
				<Stat type="TABLE" override_width="3">
					<Column name="">
						<Row name="URL Filtering"/>
						<Row name="Application Control"/>
						<Row name="DLP"/>
						<Row name="WS"/>
						<Row name="PSL"/>
					</Column>
					<Column name="CPU">
						<Row type="PERCENT" sid="urlf_context.cpu_context.cpu_usage"/>
						<Row type="PERCENT" sid="appi_context.cpu_context.cpu_usage"/>
						<Row type="PERCENT" sid="dlp_context.cpu_context.cpu_usage"/>
						<Row type="PERCENT" sid="ws_context.cpu_context.cpu_usage"/>
						<Row type="PERCENT" sid="psl_context.cpu_context.cpu_usage"/>
					</Column>
				</Stat>
			</Block>
		</View>
		<View viewtag="Flofiler-ALL-0" name="Top-Protocols" hide_on_vsx="1" hide_on_mgmt="1" hide_on_nonGaia="1">
			<Block heading="CPU Utilization">
				<Stat type="TABLE" override_width="5">
					<Column name=" ">
						<Row name="Top Protocols"/>
						<Row name="Other Protocols"/>
						<Row name="Total Protocols"/>
					</Column>
					<Column name="Protocols">
						<Row type="UINT" sid="flofiler_0.flofiler_category_all_0.top_n_count" />
						<Row type="UINT" sid="flofiler_0.flofiler_category_all_0.other_count" />
						<Row type="UINT" sid="flofiler_0.flofiler_category_all_0.all_count" />
					</Column>
					<Column name="% out of CPU">
						<Row type="CENTIPERCENT" sid="flofiler_0.flofiler_category_all_0.sum_cyc_top_n_centipercent" />
						<Row type="CENTIPERCENT" sid="flofiler_0.flofiler_category_all_0.sum_cyc_other_centipercent" />
						<Row type="CENTIPERCENT" sid="flofiler_0.flofiler_category_all_0.sum_cyc_centipercent" />
					</Column>
				</Stat>
			</Block>
			<Block heading="Top Protocols">
				<Stat type="TABLE" override_width="5" sid="flofiler_0.flofiler_category_all_0.flofiler_category_table">
					<Column name="Protocol" type="PROTOCOL" sid="flofiler_0.flofiler_category_all_0.flofiler_category_table.prto"/>
					<Column name="% out of CPU" type="CENTIPERCENT" sid="flofiler_0.flofiler_category_all_0.flofiler_category_table.cycles_centipercent"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="Flofiler-ALL-1" name="Components" hide_on_vsx="1" hide_on_mgmt="1" hide_on_nonGaia="1">
			<Block heading="CPU Utilization">
				<Stat type="TABLE" override_width="5">
					<Column name=" ">
						<Row name="Top Components"/>
						<Row name="Other Components"/>
						<Row name="Total Components"/>
					</Column>
					<Column name="Components">
						<Row type="UINT" sid="flofiler_0.flofiler_category_all_1.top_n_count" />
						<Row type="UINT" sid="flofiler_0.flofiler_category_all_1.other_count" />
						<Row type="UINT" sid="flofiler_0.flofiler_category_all_1.all_count" />
					</Column>
					<Column name="% out of CPU">
						<Row type="CENTIPERCENT" sid="flofiler_0.flofiler_category_all_1.sum_cyc_top_n_centipercent" />
						<Row type="CENTIPERCENT" sid="flofiler_0.flofiler_category_all_1.sum_cyc_other_centipercent" />
						<Row type="CENTIPERCENT" sid="flofiler_0.flofiler_category_all_1.sum_cyc_centipercent" />
					</Column>
				</Stat>
			</Block>
			<Block heading="Top Components">
				<Stat type="TABLE" override_width="5" sid="flofiler_0.flofiler_category_all_1.flofiler_category_table">
					<Column name="Component" type="STRING" sid="flofiler_0.flofiler_category_all_1.flofiler_category_table.comp"/>
					<Column name="% out of CPU" type="CENTIPERCENT" sid="flofiler_0.flofiler_category_all_1.flofiler_category_table.cycles_centipercent"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="Flofiler-ALL-2" name="PM-Stats" hide_on_vsx="1" hide_on_mgmt="1" hide_on_nonGaia="1">
			<Block heading="CPU Utilization">
				<Stat type="TABLE" override_width="5">
					<Column name=" ">
						<Row name="Top PM-Stats"/>
						<Row name="Other PM-Stats"/>
						<Row name="Total PM-Stats"/>
					</Column>
					<Column name="PM-Stats">
						<Row type="UINT" sid="flofiler_0.flofiler_category_all_2.top_n_count" />
						<Row type="UINT" sid="flofiler_0.flofiler_category_all_2.other_count" />
						<Row type="UINT" sid="flofiler_0.flofiler_category_all_2.all_count" />
					</Column>
					<Column name="% out of CPU">
						<Row type="CENTIPERCENT" sid="flofiler_0.flofiler_category_all_2.sum_cyc_top_n_centipercent" />
						<Row type="CENTIPERCENT" sid="flofiler_0.flofiler_category_all_2.sum_cyc_other_centipercent" />
						<Row type="CENTIPERCENT" sid="flofiler_0.flofiler_category_all_2.sum_cyc_centipercent" />
					</Column>
				</Stat>
			</Block>
			<Block heading="Top PM-Stats">
				<Stat type="TABLE" override_width="5" sid="flofiler_0.flofiler_category_all_2.flofiler_category_table">
					<Column name="PM" type="STRING" sid="flofiler_0.flofiler_category_all_2.flofiler_category_table._pm_"/>
					<Column name="% out of CPU" type="CENTIPERCENT" sid="flofiler_0.flofiler_category_all_2.flofiler_category_table.cycles_centipercent"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="Flofiler-Pivot-0" name="FW-Instance" hide_on_vsx="1" hide_on_mgmt="1" hide_on_nonGaia="1">
			<Dynamic max_views_num="40" sid="kernel_memory.kmem.number_of_instances" views_per_sub_menu="6"/>
			<Block heading="CPU Utilization">
				<Stat type="TABLE">
					<Column name=" ">
						<Row name="Top Protocols"/>
						<Row name="Other Protocols"/>
						<Row name="Total Protocols"/>
					</Column>
					<Column name="Protocols">
						<Row type="UINT" sid="flofiler_.flofiler_category_0.top_n_count" sid_prefix="flofiler_"/>
						<Row type="UINT" sid="flofiler_.flofiler_category_0.other_count" sid_prefix="flofiler_"/>
						<Row type="UINT" sid="flofiler_.flofiler_category_0.all_count" sid_prefix="flofiler_"/>
					</Column>
					<Column name="% out of CPU">
						<Row type="CENTIPERCENT" sid="flofiler_.flofiler_category_0.sum_cyc_top_n_centipercent" sid_prefix="flofiler_"/>
						<Row type="CENTIPERCENT" sid="flofiler_.flofiler_category_0.sum_cyc_other_centipercent" sid_prefix="flofiler_"/>
						<Row type="CENTIPERCENT" sid="flofiler_.flofiler_category_0.sum_cyc_centipercent" sid_prefix="flofiler_"/>
					</Column>
				</Stat>
			</Block>
			<Block heading="Top Protocols">
				<Stat type="TABLE" override_width="5" sid="flofiler_.flofiler_category_0.flofiler_category_table" sid_prefix="flofiler_">
					<Column name="Protocol" type="PROTOCOL" sid="flofiler_.flofiler_category_0.flofiler_category_table.prto" sid_prefix="flofiler_"/>
					<Column name="% out of CPU" type="CENTIPERCENT" sid="flofiler_.flofiler_category_0.flofiler_category_table.cycles_centipercent" sid_prefix="flofiler_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="Flofiler-Pivot-1" name="FW-Instance" hide_on_vsx="1" hide_on_mgmt="1" hide_on_nonGaia="1">
			<Dynamic max_views_num="40" sid="kernel_memory.kmem.number_of_instances" views_per_sub_menu="6"/>
			<Block heading="CPU Utilization">
				<Stat type="TABLE">
					<Column name=" ">
						<Row name="Top Components"/>
						<Row name="Other Components"/>
						<Row name="Total Components"/>
					</Column>
					<Column name="Components">
						<Row type="UINT" sid="flofiler_.flofiler_category_1.top_n_count" sid_prefix="flofiler_"/>
						<Row type="UINT" sid="flofiler_.flofiler_category_1.other_count" sid_prefix="flofiler_"/>
						<Row type="UINT" sid="flofiler_.flofiler_category_1.all_count" sid_prefix="flofiler_"/>
					</Column>
					<Column name="% out of CPU">
						<Row type="CENTIPERCENT" sid="flofiler_.flofiler_category_1.sum_cyc_top_n_centipercent" sid_prefix="flofiler_"/>
						<Row type="CENTIPERCENT" sid="flofiler_.flofiler_category_1.sum_cyc_other_centipercent" sid_prefix="flofiler_"/>
						<Row type="CENTIPERCENT" sid="flofiler_.flofiler_category_1.sum_cyc_centipercent" sid_prefix="flofiler_"/>
					</Column>
				</Stat>
			</Block>
			<Block heading="Top Components">
				<Stat type="TABLE" sid="flofiler_.flofiler_category_1.flofiler_category_table" sid_prefix="flofiler_">
					<Column name="Component" type="STRING" sid="flofiler_.flofiler_category_1.flofiler_category_table.comp" sid_prefix="flofiler_"/>
					<Column name="% out of CPU" type="CENTIPERCENT" sid="flofiler_.flofiler_category_1.flofiler_category_table.cycles_centipercent" sid_prefix="flofiler_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="Flofiler-Pivot-2" name="FW-Instance" hide_on_vsx="1" hide_on_mgmt="1" hide_on_nonGaia="1">
			<Dynamic max_views_num="40" sid="kernel_memory.kmem.number_of_instances" views_per_sub_menu="6"/>
			<Block heading="CPU Utilization">
				<Stat type="TABLE">
					<Column name=" ">
						<Row name="Top PM-Stats"/>
						<Row name="Other PM-Stats"/>
						<Row name="Total PM-Stats"/>
					</Column>
					<Column name="PM-Stats">
						<Row type="UINT" sid="flofiler_.flofiler_category_2.top_n_count" sid_prefix="flofiler_"/>
						<Row type="UINT" sid="flofiler_.flofiler_category_2.other_count" sid_prefix="flofiler_"/>
						<Row type="UINT" sid="flofiler_.flofiler_category_2.all_count" sid_prefix="flofiler_"/>
					</Column>
					<Column name="% out of CPU">
						<Row type="CENTIPERCENT" sid="flofiler_.flofiler_category_2.sum_cyc_top_n_centipercent" sid_prefix="flofiler_"/>
						<Row type="CENTIPERCENT" sid="flofiler_.flofiler_category_2.sum_cyc_other_centipercent" sid_prefix="flofiler_"/>
						<Row type="CENTIPERCENT" sid="flofiler_.flofiler_category_2.sum_cyc_centipercent" sid_prefix="flofiler_"/>
					</Column>
				</Stat>
			</Block>
			<Block heading="Top PM-Stats">
				<Stat type="TABLE" sid="flofiler_.flofiler_category_2.flofiler_category_table" sid_prefix="flofiler_">
					<Column name="PM" type="STRING" sid="flofiler_.flofiler_category_2.flofiler_category_table._pm_" sid_prefix="flofiler_"/>
					<Column name="% out of CPU" type="CENTIPERCENT" sid="flofiler_.flofiler_category_2.flofiler_category_table.cycles_centipercent" sid_prefix="flofiler_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="CPU-Top-Conns-Instance" name="Instances" hide_on_vsx="1" hide_on_mgmt="1">
			<Dynamic max_views_num="40" sid="kernel_memory.kmem.number_of_instances" views_per_sub_menu="6"/>
			<Block heading="CPU Utilization">
				<Stat type="CENTIPERCENT" name="Average connection CPU utilization" sid="top_conn_.conn_load.avg_conn" sid_prefix="top_conn_"/>
				<Stat type="TABLE" sid="top_conn_.conn_load.general_tab" sid_prefix="top_conn_">
					<Column name="" type="STRING" sid="top_conn_.conn_load.general_tab.row_name" sid_prefix="top_conn_"/>
					<Column name="Connections" type="UINT64" sid="top_conn_.conn_load.general_tab.num_of_conns" sid_prefix="top_conn_"/>
					<Column name="CPU utilization" type="CENTIPERCENT" sid="top_conn_.conn_load.general_tab.cpu_percentage" sid_prefix="top_conn_"/>
				</Stat>
			</Block>
			<Block heading="Top Connections">
				<Stat type="TABLE" sid="top_conn_.conn_load.tab" sid_prefix="top_conn_">
					<Column name="Connection" type="STRING" sid="top_conn_.conn_load.tab.conn" sid_prefix="top_conn_"/>
					<Column name="Protocol" type="PROTOCOL" sid="top_conn_.conn_load.tab.service" sid_prefix="top_conn_"/>
					<Column name="% out of CPU" type="CENTIPERCENT" sid="top_conn_.conn_load.tab.cpu_percentage" sid_prefix="top_conn_" override_width="13"/>1

				</Stat>
			</Block>
		</View>
		<View viewtag="HW_GAIA-temperature" name ="Temperature">
			<Block heading="Information">
				<Stat type="TABLE" sid="hardware_health.sensors.temperature" override_width="15">
					<Column name="Name" type="STRING" sid="hardware_health.sensors.temperature.name"/>
					<Column name="Value" type="STRING" sid="hardware_health.sensors.temperature.value"/>
					<Column name="Unit" type="STRING"  sid="hardware_health.sensors.temperature.unit"/>
					<Column name="Min" type="STRING"  sid="hardware_health.sensors.temperature.min"/>
					<Column name="Max" type="STRING" sid="hardware_health.sensors.temperature.max"/>
					<Column name="Status" type="UINT64" sid="hardware_health.sensors.temperature.status" limit_threshold_percent="1" />
				</Stat>
			</Block>
		</View>
		<View viewtag="HW_GAIA-voltage" name ="Voltage">
			<Block heading="Information">
				<Stat type="TABLE" sid="hardware_health.sensors.voltage" override_width="15">
					<Column name="Name" type="STRING" sid="hardware_health.sensors.voltage.name"/>
					<Column name="Value" type="STRING" sid="hardware_health.sensors.voltage.value"/>
					<Column name="Unit" type="STRING" sid="hardware_health.sensors.voltage.unit"/>
					<Column name="Min" type="STRING" sid="hardware_health.sensors.voltage.min"/>
					<Column name="Max" type="STRING" sid="hardware_health.sensors.voltage.max"/>
					<Column name="Status" type="UINT64" sid="hardware_health.sensors.voltage.status" limit_threshold_percent="1"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="HW_GAIA-power" name ="Power-Supply">
			<Block heading="Information">
				<Stat type="TABLE" sid="hardware_health.sensors.power_supply" override_width="15">
					<Column name="Name" type="STRING" sid="hardware_health.sensors.power_supply.name"/>
					<Column name="Value" type="STRING" sid="hardware_health.sensors.power_supply.value"/>
					<Column name="Unit" type="STRING" sid="hardware_health.sensors.power_supply.unit"/>
					<Column name="Status" type="UINT64" sid="hardware_health.sensors.power_supply.status" limit_threshold_percent="1"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="HW_GAIA-fan" name ="Fan">
			<Block heading="Information">
				<Stat type="TABLE" sid="hardware_health.sensors.fan" override_width="15">
					<Column name="Name" type="STRING" sid="hardware_health.sensors.fan.name"/>
					<Column name="Value" type="STRING" sid="hardware_health.sensors.fan.value"/>
					<Column name="Unit" type="STRING" sid="hardware_health.sensors.fan.unit"/>
					<Column name="Min" type="STRING" sid="hardware_health.sensors.fan.min"/>
					<Column name="Max" type="STRING" sid="hardware_health.sensors.fan.max"/>
					<Column name="Status" type="UINT64" sid="hardware_health.sensors.fan.status" limit_threshold_percent="1"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="HW_GAIA-bios" name ="Bios">
			<Block heading="Information">
				<Stat type="TABLE" sid="hardware_health.sensors.bios" override_width="15">
					<Column name="Name" type="STRING" sid="hardware_health.sensors.bios.name"/>
					<Column name="Value" type="STRING" sid="hardware_health.sensors.bios.value"/>
					<Column name="Unit" type="STRING" sid="hardware_health.sensors.bios.unit"/>
					<Column name="Status" type="UINT64" sid="hardware_health.sensors.bios.status" limit_threshold_percent="1"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="SecureXL-Drop-reasons" name="Drop-Reasons" hide_on_mgmt="1">
			<Block heading="Drop Reasons">
				<Stat type="TABLE" sid="sxl.drops.drops_tab">
					<Column name="Reason" type="STRING" sid="sxl.drops.drops_tab.reason"/>
					<Column name="Value" type="UINT64" sid="sxl.drops.drops_tab.value"/>
					<Column name="% out of Total" type="PERCENT" sid="sxl.drops.drops_tab.percent"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="SecureXL-BOTH_FIN-packets" name="SecureXL" hide_on_mgmt="1">
			<Block heading="TCP packets after BOTH_FIN per second (available when SecureXL is on):">
				<Stat type="TABLE" sid="sxl.bothfin_stats.bothfin_pkts_tab">
					<Column name="Second" type="UINT" sid="sxl.bothfin_stats.bothfin_pkts_tab.second"/>
					<Column name="#Packets" type="INT64" sid="sxl.bothfin_stats.bothfin_pkts_tab.pkts"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="SecureXL-Synatk" name="SYN-Defender" hide_on_mgmt="1">
			<Block heading="SYN Defender">
				<Stat name="Configuration" type="STRING" sid="sxl.synatk.configuration"/>
				<Stat name="Status" type="STRING" sid="sxl.synatk.status"/>
				<Stat type="TABLE" sid="sxl.synatk.ifn_tab">
					<Column name="Interface" type="STRING" sid="sxl.synatk.ifn_tab.name"/>
					<Column name="Topology" type="STRING" sid="sxl.synatk.ifn_tab.topology"/>
					<Column name="State" type="STRING" sid="sxl.synatk.ifn_tab.state"/>
					<Column name="Duration" type="INT64" sid="sxl.synatk.ifn_tab.duration"/>
					<Column name="Non-est. Conns" type="INT64" sid="sxl.synatk.ifn_tab.non_established"/>
					<Column name="Sent Cookies" type="INT64" sid="sxl.synatk.ifn_tab.sent_cookies"/>
					<Column name="Succ. Validations" type="INT64" sid="sxl.synatk.ifn_tab.succ_validations"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="PrioQ-General" name="Overview" hide_on_vsx="1" hide_on_mgmt="1">
			<Block heading="PrioQ General Information">
				<Stat type="INT" name="PrioQ enabled" sid="PrioQ.PrioQ_stats.PrioQ_enabled"/>
				<Stat type="INT" name="Number of active queues" sid="PrioQ.PrioQ_stats.queues_num"/>
				<Stat type="INT" name="Queue length limit" sid="PrioQ.PrioQ_stats.queue_len_limit"/>
				<Stat type="INT" name="packet limit/conn" sid="PrioQ.PrioQ_stats.conn_token_limit"/>
			</Block>
		</View>
		<View viewtag="PrioQ-Instance" name="Instances" hide_on_vsx="1" hide_on_mgmt="1">
			<Dynamic max_views_num="40" sid="kernel_memory.kmem.number_of_instances" views_per_sub_menu="6"/>
			<Block heading="Instance Information">
				<Stat name="Control Connections Load" type="PERCENT"  sid="PrioQ_.PrioQ_stats.Control_Connections_Ratio" sid_prefix="PrioQ_"/>
				<Stat name="Data Connections Load"    type="PERCENT"  sid="PrioQ_.PrioQ_stats.Data_Connections_Ratio"    sid_prefix="PrioQ_"/>
			</Block>
			<Block heading="Queues Table">
				<Stat type="TABLE" override_width="2" sid="PrioQ_.PrioQ_instance.PrioQ_ins_table" sid_prefix="PrioQ_">
					<Column name="" type="STRING" sid="PrioQ_.PrioQ_instance.PrioQ_ins_table.PrioQ_queue_name" sid_prefix="PrioQ_"/>
					<Column name="Packets" type="UINT64" sid="PrioQ_.PrioQ_instance.PrioQ_ins_table.PrioQ_packets" sid_prefix="PrioQ_"/>
					<Column name="Usage" type="PERCENT" sid="PrioQ_.PrioQ_instance.PrioQ_ins_table.PrioQ_capacity" sid_prefix="PrioQ_" limit_threshold_percent="90"/>
					<Column name="Deq Ratio" type="PERCENT" sid="PrioQ_.PrioQ_instance.PrioQ_ins_table.PrioQ_sample_ratio" sid_prefix="PrioQ_"/>
					<Column name="Drops/sec" type="UINT64" sid="PrioQ_.PrioQ_instance.PrioQ_ins_table.PrioQ_drop_rate" sid_prefix="PrioQ_"/>
					<Column name="Drops Ratio" type="PERCENT" sid="PrioQ_.PrioQ_instance.PrioQ_ins_table.PrioQ_drop_ratio" sid_prefix="PrioQ_"/>
					<Column name="Latancy(ms)" type="UINT64" sid="PrioQ_.PrioQ_instance.PrioQ_ins_table.PrioQ_latancy" sid_prefix="PrioQ_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="CoreXL-Global" name="Global" hide_on_mgmt="1">
			<Block heading="Global connections stats:">
				<Stat type="UINT64" name="Notifications handled" sid="fwmultik_dispatcher.gconn.gconn_stats.notification handled"/>
				<Stat type="UINT64" name="Conns create failed" sid="fwmultik_dispatcher.gconn.gconn_stats.conn_create_failed"/>
				<Stat type="UINT64" name="Conns from pool" sid="fwmultik_dispatcher.gconn.gconn_stats.conns_from_pool"/>
				<Stat type="UINT64" name="Conns not from pool" sid="fwmultik_dispatcher.gconn.gconn_stats.conns_not_from_pool"/>
				<Stat type="UINT64" name="Free conns from pool" sid="fwmultik_dispatcher.gconn.gconn_stats.free_conns_from_pool"/>
				<Stat type="UINT64" name="Free conns not from pool" sid="fwmultik_dispatcher.gconn.gconn_stats.free_conns_not_from_pool"/>
				<Stat type="UINT64" name="Conns deleted" sid="fwmultik_dispatcher.gconn.gconn_stats.conns_deleted"/>
				<Stat type="UINT64" name="Conns deleted failed" sid="fwmultik_dispatcher.gconn.gconn_stats.conn_delete_failed"/>
				<Stat type="UINT64" name="Bad notifications" sid="fwmultik_dispatcher.gconn.gconn_stats.bad_notifications"/>
				<Stat type="UINT64" name="Packet partial search" sid="fwmultik_dispatcher.gconn.gconn_stats.pkt_partial_search"/>
				<Stat type="UINT64" name="Packet partial match" sid="fwmultik_dispatcher.gconn.gconn_stats.pkt_partial_match"/>
				<Stat type="UINT64" name="Packet localsrc search" sid="fwmultik_dispatcher.gconn.gconn_stats.pkt_localsrc_search"/>
				<Stat type="UINT64" name="Packet localsrc match" sid="fwmultik_dispatcher.gconn.gconn_stats.pkt_localsrc_match"/>
				<Stat type="UINT64" name="Multik forwarding count" sid="fwmultik_dispatcher.global_vs.multik_forwarding"/>
			</Block>
			<Block heading="Dispatch reason table:">
				<Stat type="TABLE" override_width="20" sid="fwmultik_dispatcher.global_vs.global_dispatch_tab">
					<Column name="Dispatch reason" type="STRING" sid="fwmultik_dispatcher.global_vs.global_dispatch_tab.dispatch reason"/>
					<Column name="Value" type="UINT64" sid="fwmultik_dispatcher.global_vs.global_dispatch_tab.value"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="CoreXL-Instance" name="FW-Instance" hide_on_vsx="1" hide_on_mgmt="1">
			<Dynamic max_views_num="40" sid="kernel_memory.kmem.number_of_instances" views_per_sub_menu="6"/>
			<Activate sid="fwthread_stats.fw_worker__activation.activate" sid_prefix="fwthread_stats.fw_worker_"/>
			<IsActive sid="fwthread_stats.fw_worker_.is_active" sid_prefix="fwthread_stats.fw_worker_"/>
			<Block heading=" ">
				<Stat type="STRING" name="Statistics Collection status:" sid="fwthread_stats.fw_worker_.banner_curr_state" sid_prefix="fwthread_stats.fw_worker_"/>
				<Stat type="STRING" name="Total Statistics Collection time:" sid="fwthread_stats.fw_worker_.banner_run_time" sid_prefix="fwthread_stats.fw_worker_"/>
			</Block>
			<Block heading="Worker thread stats">
				<Stat type="TABLE">
					<Column name="">
						<Row name="Inbound packet kernel"/>
						<Row name="Outbound packet kernel"/>
						<Row name="Multik message kernel"/>
						<Row name="F2P packet kernel"/>
						<Row name="Notification kernel"/>
						<Row name="PSL_SecureXL new conn"/>
						<Row name="PSL_SecureXL release conn"/>
						<Row name="SecureXL_off_completed"/>
						<Row name="Etm multik chain"/>
						<Row name="Accounting"/>
						<Row name=""/>
						<Row name="Total"/>
						<Row name="Time passed since dequeue"/>
						<Row name="Time taken to dequeue"/>
					</Column>
					<Column name="Total entries processed">
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.total_inbound_packet_kernel" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.total_outbound_packet_kernel" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.total_multik_message_kernel" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.total_f2p_packet_kernel" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.total_notification_kernel" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.total_psl_sxl_new_conn" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.total_psl_sxl_release_conn" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.total_sxl_off_completed" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.total_etm_multik_chain" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.total_accounting" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="STRING" sid="fwthread_stats.fw_worker_.empty_str" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.total_entries" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="STRING" sid="fwthread_stats.fw_worker_.empty_str" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="STRING" sid="fwthread_stats.fw_worker_.empty_str" sid_prefix="fwthread_stats.fw_worker_"/>
					</Column>
					<Column name="Top queue (entries)">
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_ent_inbound_packet_kernel" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_ent_outbound_packet_kernel" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_ent_multik_message_kernel" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_ent_f2p_packet_kernel" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_ent_notification_kernel" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_ent_psl_sxl_new_conn" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_ent_psl_sxl_release_conn" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_ent_sxl_off_completed" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_ent_etm_multik_chain" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_ent_accounting" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="STRING" sid="fwthread_stats.fw_worker_.empty_str" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_ent_total" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_ent_time_passed_since_de_q" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="STRING" sid="fwthread_stats.fw_worker_.empty_str" sid_prefix="fwthread_stats.fw_worker_"/>
					</Column>
					<Column name="Top queue (entries)">
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_time_inbound_packet_kernel" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_time_outbound_packet_kernel" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_time_multik_message_kernel" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_time_f2p_packet_kernel" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_time_notification_kernel" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_time_psl_sxl_new_conn" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_time_psl_sxl_release_conn" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_time_sxl_off_completed" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_time_etm_multik_chain" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_time_accounting" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="STRING" sid="fwthread_stats.fw_worker_.empty_str" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_time_total" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.top_time_time_passed_since_de_q" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="STRING" sid="fwthread_stats.fw_worker_.top_time_time_taken_to_dequeue" sid_prefix="fwthread_stats.fw_worker_"/>
					</Column>
				</Stat>
			</Block>
			<Block heading="Summary">
				<Stat type="UINT64" name="Avg. dequeue rate" sid="fwthread_stats.fw_worker_.avg_dequeu_rate" sid_prefix="fwthread_stats.fw_worker_" suffix=" (entries / second)"/>
				<Stat type="UINT64" name="Avg. queue size" sid="fwthread_stats.fw_worker_.avg_queue_size" sid_prefix="fwthread_stats.fw_worker_"/>
				<Stat type="STRING" name="Avg. queue proccessing time" sid="fwthread_stats.fw_worker_.avg_dequeue_time" sid_prefix="fwthread_stats.fw_worker_"/>
				<Stat type="UINT64" name="Sleep count" sid="fwthread_stats.fw_worker_.sleep_count" sid_prefix="fwthread_stats.fw_worker_"/>
				<Stat type="STRING" name="Time passed since last sleep" sid="fwthread_stats.fw_worker_.last_sleep" sid_prefix="fwthread_stats.fw_worker_"/>
				<Stat type="STRING" name="Avg. time between sleeps" sid="fwthread_stats.fw_worker_.avg_time_between_sleeps" sid_prefix="fwthread_stats.fw_worker_"/>
				<Stat type="STRING" name="Avg. FW-Lock time per entry" sid="fwthread_stats.fw_worker_.avg_lock_per_entry" sid_prefix="fwthread_stats.fw_worker_"/>
			</Block>
			<Block heading="FW Stats">
				<Stat type="TABLE">
					<Column name="">
						<Row name="F2F Inbound"/>
						<Row name="F2F Outbound"/>
						<Row name="F2P"/>
						<Row name="Drops"/>
					</Column>
					<Column name="Total">
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.total_inbound_packet_kernel" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.total_outbound_packet_kernel" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.total_f2p_packet_kernel" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.drops" sid_prefix="fwthread_stats.fw_worker_"/>
					</Column>
					<Column name="per second">
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.f2f_inbound_pps" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.f2f_outbound_pps" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.f2p_pps" sid_prefix="fwthread_stats.fw_worker_"/>
						<Row type="UINT64" sid="fwthread_stats.fw_worker_.drops_pps" sid_prefix="fwthread_stats.fw_worker_"/>
					</Column>
				</Stat>
			</Block>
			<Block heading="Top FW-Lock consumers:">
				<Stat type="TABLE" sid="fwthread_stats.fw_worker_.top_fw_lock" sid_prefix="fwthread_stats.fw_worker_">
					<Column name="Type" type="STRING" sid="fwthread_stats.fw_worker_.top_fw_lock.type" sid_prefix="fwthread_stats.fw_worker_"/>
					<Column name="Time (CYC)" type="UINT64" sid="fwthread_stats.fw_worker_.top_fw_lock.time" sid_prefix="fwthread_stats.fw_worker_"/>
					<Column name="Time ago (sec)" type="UINT64" sid="fwthread_stats.fw_worker_.top_fw_lock.time_ago" sid_prefix="fwthread_stats.fw_worker_"/>
					<Column name="Data" type="STRING" sid="fwthread_stats.fw_worker_.top_fw_lock.data" sid_prefix="fwthread_stats.fw_worker_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="CoreXL-General" name="Overview" hide_on_mgmt="1">
			<Block heading="VS stats">
				<Stat type="UINT64" name="Zeco data mapped" sid="fwmultik_dispatcher.vs_stats.vs_stats_tab.zeco_data_mapped"/>
				<Stat type="UINT64" name="Zeco data unmapped" sid="fwmultik_dispatcher.vs_stats.vs_stats_tab.zeco_data_unmapped"/>
				<Stat type="UINT64" name="Zeco shared info mapped" sid="fwmultik_dispatcher.vs_stats.vs_stats_tab.zeco_shared_info_mapped"/>
				<Stat type="UINT64" name="Zeco shared info unmapped" sid="fwmultik_dispatcher.vs_stats.vs_stats_tab.zeco_shared_info_unmapped"/>
				<Stat type="UINT64" name="Cut through" sid="fwmultik_dispatcher.vs_stats.vs_stats_tab.cut_through"/>
				<Stat type="UINT64" name="Non linear skbs" sid="fwmultik_dispatcher.vs_stats.vs_stats_tab.non_linear"/>
				<Stat type="UINT64" name="Shared skbs" sid="fwmultik_dispatcher.vs_stats.vs_stats_tab.shared_skbs"/>
				<Stat type="UINT64" name="Data alloc from pool" sid="fwmultik_dispatcher.vs_stats.vs_stats_tab.htab_data_alloc_from_pool"/>
				<Stat type="UINT64" name="Data alloc not from pool" sid="fwmultik_dispatcher.vs_stats.vs_stats_tab.htab_data_alloc_not_from_pool"/>
				<Stat type="UINT64" name="Data free from pool" sid="fwmultik_dispatcher.vs_stats.vs_stats_tab.htab_data_free_from_pool"/>
				<Stat type="UINT64" name="Data free not from pool" sid="fwmultik_dispatcher.vs_stats.vs_stats_tab.htab_data_free_not_from_pool"/>
			</Block>
			<Block heading="Queues:">
				<Stat type="TABLE" override_width="5" sid="fwmultik_module.vs_dequeue_stats.dequeue_tab">
					<Column name="Queue entry type" type="STRING" sid="fwmultik_module.vs_dequeue_stats.dequeue_tab.name"/>
					<Column name="Enqueue" type="UINT64" sid="fwmultik_dispatcher.vs_stats_enqueue.enqueue_stats_table.value"/>
					<Column name="Enqueue fail" type="UINT64" sid="fwmultik_dispatcher.vs_stats_enqueue_fail.enqueue_fail_stats_table.value"/>
					<Column name="Dequeue" type="UINT64" sid="fwmultik_module.vs_dequeue_stats.dequeue_tab.value"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="SB-CTNT-DT-BIDT" name="Built-in-Data-Types" hide_on_mgmt="1">
			<Block heading="Current built-in data types matches:">
				<Stat type="TABLE" override_width="17">
					<Column name="">
						<Row name="All protocols:"/>
					</Column>
				</Stat>
				<Stat type="TABLE" override_width="17" sid="ctnt.builtin_dts_matches.all">
					<Column name="Data Type Name" type="STRING" sid="ctnt.builtin_dts_matches.all.name"/>
					<Column name="Upload" type="UINT" sid="ctnt.builtin_dts_matches.all.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.builtin_dts_matches.all.download"/>
				</Stat>
			</Block>
			<Block heading="HTTP:">
				<Stat type="TABLE" override_width="17" sid="ctnt.builtin_dts_matches.http">
					<Column name="Data Type Name" type="STRING" sid="ctnt.builtin_dts_matches.http.name"/>
					<Column name="Upload" type="UINT" sid="ctnt.builtin_dts_matches.http.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.builtin_dts_matches.http.download"/>
				</Stat>
			</Block>
			<Block heading="SMTP:">
				<Stat type="TABLE" override_width="17" sid="ctnt.builtin_dts_matches.smtp">
					<Column name="Data Type Name" type="STRING" sid="ctnt.builtin_dts_matches.smtp.name"/>
					<Column name="Upload" type="UINT" sid="ctnt.builtin_dts_matches.smtp.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.builtin_dts_matches.smtp.download"/>
				</Stat>
			</Block>
			<Block heading="FTP:">
				<Stat type="TABLE" override_width="17" sid="ctnt.builtin_dts_matches.ftp">
					<Column name="Data Type Name" type="STRING" sid="ctnt.builtin_dts_matches.ftp.name"/>
					<Column name="Upload" type="UINT" sid="ctnt.builtin_dts_matches.ftp.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.builtin_dts_matches.ftp.download"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="SB-CTNT-DT-CDT" name="Custom-Data-Types" hide_on_mgmt="1">
			<Block heading="Current custom data types matches:">
				<Stat type="TABLE" override_width="17">
					<Column name="">
						<Row name="All protocols:"/>
					</Column>
				</Stat>
				<Stat type="TABLE" override_width="17" sid="ctnt.custom_dts_matches.all">
					<Column name="Data Type Name" type="STRING" sid="ctnt.custom_dts_matches.all.name"/>
					<Column name="Upload" type="UINT" sid="ctnt.custom_dts_matches.all.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.custom_dts_matches.all.download"/>
				</Stat>
			</Block>
			<Block heading="HTTP:">
				<Stat type="TABLE" override_width="17" sid="ctnt.custom_dts_matches.http">
					<Column name="Data Type Name" type="STRING" sid="ctnt.custom_dts_matches.http.name"/>
					<Column name="Upload" type="UINT" sid="ctnt.custom_dts_matches.http.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.custom_dts_matches.http.download"/>
				</Stat>
			</Block>
			<Block heading="SMTP:">
				<Stat type="TABLE" override_width="17" sid="ctnt.custom_dts_matches.smtp">
					<Column name="Data Type Name" type="STRING" sid="ctnt.custom_dts_matches.smtp.name"/>
					<Column name="Upload" type="UINT" sid="ctnt.custom_dts_matches.smtp.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.custom_dts_matches.smtp.download"/>
				</Stat>
			</Block>
			<Block heading="FTP:">
				<Stat type="TABLE" override_width="17" sid="ctnt.custom_dts_matches.ftp">
					<Column name="Data Type Name" type="STRING" sid="ctnt.custom_dts_matches.ftp.name"/>
					<Column name="Upload" type="UINT" sid="ctnt.custom_dts_matches.ftp.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.custom_dts_matches.ftp.download"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="SB-CTNT-F-FBS" name="Files-by-Size" hide_on_mgmt="1">
			<Block heading="Current inspected file size by ranges:">
				<Stat type="TABLE" override_width="17">
					<Column name="">
						<Row name="All protocols:"/>
					</Column>
				</Stat>
				<Stat type="TABLE" override_width="17" rows_num="9" sid="ctnt.files_by_size.all">
					<Column name="File Size Range" type="STRING" sid="ctnt.files_by_size.all.range_name"/>
					<Column name="Upload" type="UINT" sid="ctnt.files_by_size.all.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.files_by_size.all.download"/>
				</Stat>
			</Block>
			<Block heading="HTTP:">
				<Stat type="TABLE" override_width="17" rows_num="9" sid="ctnt.files_by_size.http">
					<Column name="File Size Range" type="STRING" sid="ctnt.files_by_size.http.range_name"/>
					<Column name="Upload" type="UINT" sid="ctnt.files_by_size.http.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.files_by_size.http.download"/>
				</Stat>
			</Block>
			<Block heading="SMTP:">
				<Stat type="TABLE" override_width="17" rows_num="9" sid="ctnt.files_by_size.smtp">
					<Column name="File Size Range" type="STRING" sid="ctnt.files_by_size.smtp.range_name"/>
					<Column name="Upload" type="UINT" sid="ctnt.files_by_size.smtp.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.files_by_size.smtp.download"/>
				</Stat>
			</Block>
			<Block heading="FTP:">
				<Stat type="TABLE" override_width="17" rows_num="9" sid="ctnt.files_by_size.ftp">
					<Column name="File Size Range" type="STRING" sid="ctnt.files_by_size.ftp.range_name"/>
					<Column name="Upload" type="UINT" sid="ctnt.files_by_size.ftp.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.files_by_size.ftp.download"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="SB-CTNT-F-FBT" name="Files-By-Type" hide_on_mgmt="1">
			<Block heading="Current inspected files by type:">
				<Stat type="TABLE" override_width="17">
					<Column name="">
						<Row name="All protocols:"/>
					</Column>
				</Stat>
				<Stat type="TABLE" override_width="17" sid="ctnt.files_by_type.all">
					<Column name="File Type" type="STRING" sid="ctnt.files_by_type.all.name"/>
					<Column name="Upload" type="UINT" sid="ctnt.files_by_type.all.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.files_by_type.all.download"/>
				</Stat>
			</Block>
			<Block heading="HTTP:">
				<Stat type="TABLE" override_width="17" sid="ctnt.files_by_type.http">
					<Column name="File Type" type="STRING" sid="ctnt.files_by_type.http.name"/>
					<Column name="Upload" type="UINT" sid="ctnt.files_by_type.http.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.files_by_type.http.download"/>
				</Stat>
			</Block>
			<Block heading="SMTP:">
				<Stat type="TABLE" override_width="17" sid="ctnt.files_by_type.smtp">
					<Column name="File Type" type="STRING" sid="ctnt.files_by_type.smtp.name"/>
					<Column name="Upload" type="UINT" sid="ctnt.files_by_type.smtp.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.files_by_type.smtp.download"/>
				</Stat>
			</Block>
			<Block heading="FTP:">
				<Stat type="TABLE" override_width="17" sid="ctnt.files_by_type.ftp">
					<Column name="File Type" type="STRING" sid="ctnt.files_by_type.ftp.name"/>
					<Column name="Upload" type="UINT" sid="ctnt.files_by_type.ftp.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.files_by_type.ftp.download"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="SB-CTNT-F-FBE" name="Files-By-Extension" hide_on_mgmt="1">
			<Block heading="Current inspected files by extension:">
				<Stat type="TABLE" override_width="17">
					<Column name="">
						<Row name="All protocols:"/>
					</Column>
				</Stat>
				<Stat type="TABLE" override_width="17" sid="ctnt.files_by_extension.all">
					<Column name="File Extension" type="STRING" sid="ctnt.files_by_extension.all.extension"/>
					<Column name="Upload" type="UINT" sid="ctnt.files_by_extension.all.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.files_by_extension.all.download"/>
				</Stat>
			</Block>
			<Block heading="HTTP:">
				<Stat type="TABLE" override_width="17" sid="ctnt.files_by_extension.http">
					<Column name="File Extension" type="STRING" sid="ctnt.files_by_extension.http.extension"/>
					<Column name="Upload" type="UINT" sid="ctnt.files_by_extension.http.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.files_by_extension.http.download"/>
				</Stat>
			</Block>
			<Block heading="SMTP:">
				<Stat type="TABLE" override_width="17" sid="ctnt.files_by_extension.smtp">
					<Column name="File Extension" type="STRING" sid="ctnt.files_by_extension.smtp.extension"/>
					<Column name="Upload" type="UINT" sid="ctnt.files_by_extension.smtp.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.files_by_extension.smtp.download"/>
				</Stat>
			</Block>
			<Block heading="FTP:">
				<Stat type="TABLE" override_width="17" sid="ctnt.files_by_extension.ftp">
					<Column name="File Extension" type="STRING" sid="ctnt.files_by_extension.ftp.extension"/>
					<Column name="Upload" type="UINT" sid="ctnt.files_by_extension.ftp.upload"/>
					<Column name="Download" type="UINT" sid="ctnt.files_by_extension.ftp.download"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="ClusterXL-Overview" name="Overview" hide_on_mgmt="1">
			<Block heading="Information">
				<Stat type="UINT64" name="Version" sid="cxl.cxl_stats.fwha_cpv_version"/>
				<Stat type="UINT64" name="MAC Magic" sid="cxl.cxl_stats.fwha_cpv_magic"/>
				<Stat type="STRING" name="Cluster Mode" sid="cxl.cxl_stats.fwha_cpv_mode"/>
			</Block>
			<Block heading="Status:">
				<Stat type="TABLE" sid="cxl.cxl_stats.status">
					<Column name="ID" type="STRING" sid="cxl.cxl_stats.status.member_id"/>
					<Column name="State" type="STRING" sid="cxl.cxl_stats.status.member_state"/>
					<Column name="Name" type="STRING" sid="cxl.cxl_stats.status.member_name"/>
				</Stat>
				<Stat type="STRING" override_width="1" name="Active PNOTEs:" sid="cxl.cxl_stats.problem"/>
			</Block>
			<Block heading="Last member state change event:">
				<Stat type="STRING" name="Event Code" sid="cxl.cxl_stats.fwha_cpv_last_state_event_code"/>
				<Stat type="STRING" name="Previous state" sid="cxl.cxl_stats.fwha_cpv_last_state_change"/>
				<Stat type="STRING" name="Reason for state change" sid="cxl.cxl_stats.fwha_cpv_last_state_event"/>
				<Stat type="TIMESTAMP" name="Event time" sid="cxl.cxl_stats.fwha_cpv_time_change"/>
			</Block>
			<Block heading="Last cluster failover event:">
				<Stat type="STRING" name="Previous ACTIVE" sid="cxl.cxl_stats.fwha_cpv_last_failover_from"/>
				<Stat type="STRING" name="Reason" sid="cxl.cxl_stats.fwha_cpv_last_failover_reason"/>
				<Stat type="UINT64" name="Cluster failover counter" sid="cxl.cxl_stats.fwha_cpv_failover_counter"/>
				<Stat type="TIMESTAMP" name="Event time" sid="cxl.cxl_stats.fwha_cpv_last_failover_time"/>
			</Block>
		</View>
		<View viewtag="VSX-Overview" name="Overview" hide_on_vss="1">
			<Activate sid="vsx.overview_activation.activate"/>
			<IsActive sid="vsx.overview.is_active"/>
			<Block heading="Virtual System Summary:">
				<Stat type="INT" name="Number Of Virtual Devices" sid="vsx.overview.vss_amount"/>
				<Stat type="STRING" name="Virtual Systems Allowed By License" sid="vsx.overview.vss_allowed"/>
				<Stat type="TABLE" override_width="5" sid="vsx.overview.summary_table">
					<Column name="Type" type="STRING" sid="vsx.overview.summary_table.type"/>
					<Column name="Total" type="INT" sid="vsx.overview.summary_table.vss_amount_per_type"/>
					<Column name="Active" type="INT" sid="vsx.overview.summary_table.active_vss_amount_per_type"/>
					<Column name="Access Policy" type="INT" sid="vsx.overview.summary_table.with_ac_vss_amount_per_type"/>
					<Column name="Threat Policy" type="INT" sid="vsx.overview.summary_table.with_tp_vss_amount_per_type"/>
				</Stat>
			</Block>
			<Block heading="Total Traffic Counters:">
				<Stat type="UINT64" name="Throughput" sid="vsx.overview.total_throughtput" suffix=" Mbps"/>
				<Stat type="UINT64" name="Packets Rate" sid="vsx.overview.packets_rate" suffix=" pps"/>
				<Stat type="UINT" name="Concurrent Conns" sid="vsx.overview.total_connections"/>
			</Block>
		</View>
		<View viewtag="VSX-VSs-Configuration" name="Configuration" hide_on_vss="1">
			<Activate sid="vsx.configuration_activation.activate"/>
			<IsActive sid="vsx.configuration.is_active"/>
			<Block heading="Configuration">
				<Stat type="TABLE" override_width="5" sid="vsx.configuration.summary_table">
					<Column name="VSID" type="INT" sid="vsx.configuration.summary_table.vsid"/>
					<Column name="Type" type="STRING" sid="vsx.configuration.summary_table.type"/>
					<Column name="Name" type="STRING" sid="vsx.configuration.summary_table.name"/>
					<Column name="IPv4 Inst." type="INT" sid="vsx.configuration.summary_table.i4"/>
					<Column name="IPv6 Inst." type="INT" sid="vsx.configuration.summary_table.i6"/>
					<Column name="Access-Policy" type="STRING" sid="vsx.configuration.summary_table.ac_policy_name"/>
					<Column name="Access-Policy Installation Time" type="STRING" sid="vsx.configuration.summary_table.ac_policy_time"/>
					<Column name="Threat-Policy" type="STRING" sid="vsx.configuration.summary_table.tp_policy_name"/>
					<Column name="SIC State" type="STRING" sid="vsx.configuration.summary_table.trust"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="VSX-VSs-Physical-Resources" name="Physical-Resources" hide_on_vss="1">
			<Activate sid="vsx.physical_resources_activation.activate"/>
			<IsActive sid="vsx.physical_resources.is_active"/>
			<Block heading="Resources Consumption">
				<Stat type="TABLE" override_width="5" sid="vsx.physical_resources.summary_table">
					<Column name="VSID" type="INT" sid="vsx.physical_resources.summary_table.vsid"/>
					<Column name="Type" type="STRING" sid="vsx.physical_resources.summary_table.type"/>
					<Column name="Name" type="STRING" sid="vsx.physical_resources.summary_table.name"/>
					<Column name="Memory MB" type="UINT" sid="vsx.physical_resources.summary_table.memory"/>
					<Column name="Memory %" type="PERCENT" sid="vsx.physical_resources.summary_table.memory_pct"/>
					<Column name="Disk MB" type="UINT" sid="vsx.physical_resources.summary_table.disk"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="VSX-VSs-Traffic" name="Traffic" hide_on_vss="1">
			<Activate sid="vsx.traffic_activation.activate"/>
			<IsActive sid="vsx.traffic.is_active"/>
			<Block heading="Traffic">
				<Stat type="TABLE" override_width="5" sid="vsx.traffic.summary_table">
					<Column name="VSID" type="INT" sid="vsx.traffic.summary_table.vsid"/>
					<Column name="Type" type="STRING" sid="vsx.traffic.summary_table.type"/>
					<Column name="Name" type="STRING" sid="vsx.traffic.summary_table.name"/>
					<Column name="Connections" type="UINT" sid="vsx.traffic.summary_table.current_connections"/>
					<Column name="Peak" type="UINT" sid="vsx.traffic.summary_table.peak"/>
					<Column name="Limit" type="UINT" sid="vsx.traffic.summary_table.current_limit"/>
					<Column name="Throughput KBPS" type="UINT64" sid="vsx.traffic.summary_table.throughput"/>
					<Column name="PPS" type="UINT64" sid="vsx.traffic.summary_table.pps"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="VSX-Statistics" name="Statistics" hide_on_vss="1">
			<Activate sid="vsx.statistics_activation.activate"/>
			<IsActive sid="vsx.statistics.is_active"/>
			<Block heading="Top Memory Consumers:">
				<Stat type="TABLE" sid="vsx.statistics.memory">
					<Column name="VSID" type="INT" sid="vsx.statistics.memory.vsid"/>
					<Column name="Type" type="STRING" sid="vsx.statistics.memory.type"/>
					<Column name="Name" type="STRING" sid="vsx.statistics.memory.name"/>
					<Column name="Memory MB" type="UINT" sid="vsx.statistics.memory.val"/>
					<Column name="Memory %" type="PERCENT" sid="vsx.statistics.memory.pct"/>
				</Stat>
			</Block>
			<Block heading="Top Disk Consumers:">
				<Stat type="TABLE" sid="vsx.statistics.disk">
					<Column name="VSID" type="INT" sid="vsx.statistics.disk.vsid"/>
					<Column name="Type" type="STRING" sid="vsx.statistics.disk.type"/>
					<Column name="Name" type="STRING" sid="vsx.statistics.disk.name"/>
					<Column name="Disk MB" type="UINT" sid="vsx.statistics.disk.val"/>
				</Stat>
			</Block>
			<Block heading="Top Connections Consumers:">
				<Stat type="TABLE" sid="vsx.statistics.conns">
					<Column name="VSID" type="INT" sid="vsx.statistics.conns.vsid"/>
					<Column name="Type" type="STRING" sid="vsx.statistics.conns.type"/>
					<Column name="Name" type="STRING" sid="vsx.statistics.conns.name"/>
					<Column name="Connections" type="UINT" sid="vsx.statistics.conns.val"/>
				</Stat>
			</Block>
			<Block heading="Top Throughput Consumers:">
				<Stat type="TABLE" sid="vsx.statistics.throughput">
					<Column name="VSID" type="INT" sid="vsx.statistics.throughput.vsid"/>
					<Column name="Type" type="STRING" sid="vsx.statistics.throughput.type"/>
					<Column name="Name" type="STRING" sid="vsx.statistics.throughput.name"/>
					<Column name="Throughput KBPS" type="UINT64" sid="vsx.statistics.throughput.val"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="nip-stats" name="ppk" hide_on_no_ac1="1">
			<Dynamic max_views_num="5" sid="ipsctl_ac0_errors.stats.slots"/>
			<Block heading="Nip Stats">
				<Stat type="TABLE" sid="ipsctl_ac_errors.nip_stats_category.nip_stats_table" sid_prefix="ipsctl_ac">
					<Column name="" type="STRING" sid="ipsctl_ac_errors.nip_stats_category.nip_stats_table.row_name" sid_prefix="ipsctl_ac"/>
					<Column name="Count" type="UINT64" sid="ipsctl_ac_errors.nip_stats_category.nip_stats_table.stats" sid_prefix="ipsctl_ac"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="ppak-side-by-side" name="Side-by-Side" hide_on_mgmt="1">
			<Block heading="  ">
				<Stat type="TABLE">
					<Column name="">
						<Row name=""/>
						<Row name="Inbound packets/sec"/>
						<Row name="Outbound packets/sec"/>
						<Row name="Inbound bits/sec"/>
						<Row name="Outbound bits/sec"/>
						<Row name="Connections/sec"/>
						<Row name="Concurrent connections"/>
						<Row name="Dropped Packets"/>
						<Row name="Average CPU"/>
						<Row name="OS Memory Total"/>
						<Row name="OS Memory Used"/>
						<Row name="OS Memory Free"/>
						<Row name="SXL Memory Total"/>
						<Row name="SXL Memory Used"/>
						<Row name="SXL Memory Free"/>
						<Row name="Packet Pool Total"/>
						<Row name="Packet Pool Used"/>
						<Row name="Packet Pool Free"/>
					</Column>
					<Column name="">
						<Row type="STRING"  sid ="falcons_stats.falcons_info.host"/>
						<Row type="UINT64"  sid="ppak_0.network_category.inbound_pkts" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_0.network_category.outbound_pkts" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_0.network_category.inbound_bits" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_0.network_category.outbound_bits" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_0.network_category.conns_per_sec" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_0.network_category.concurrent_conns" units="AUTO"/>
						<Row type="INT64"   sid="ppak_0.drops_category.dropped_packets"/>
						<Row type="UINT"    sid="ppak_0.cpu_category.cpu_avg"/>
						<Row type="UINT64"  sid="ppak_0.memory_category.os_tot" units="MB"/>
						<Row type="UINT64"  sid="ppak_0.memory_category.os_used" units="MB" limit_threshold_percent="90"></Row>
						<Row type="UINT64"  sid="ppak_0.memory_category.os_free" units="MB"/>
						<Row type="UINT64"  sid="ppak_0.memory_category.sxl_tot" units="MB"/>
						<Row type="UINT64"  sid="ppak_0.memory_category.sxl_used" units="MB" limit_threshold_percent="90"></Row>
						<Row type="UINT64"  sid="ppak_0.memory_category.sxl_free" units="MB"/>
						<Row type="UINT64"  sid="ppak_0.memory_category.pkt_pool_tot" units="MB"/>
						<Row type="UINT64"  sid="ppak_0.memory_category.pkt_pool_used" units="MB"  limit_threshold_percent="90"></Row>
						<Row type="UINT64"  sid="ppak_0.memory_category.pkt_pool_free" units="MB"/>
					</Column>
					<Column name="">
						<Row type="STRING"  sid ="falcons_stats.falcons_info.falcon_1"/>
						<Row type="UINT64"  sid="ppak_1.network_category.inbound_pkts" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_1.network_category.outbound_pkts" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_1.network_category.inbound_bits" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_1.network_category.outbound_bits" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_1.network_category.conns_per_sec" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_1.network_category.concurrent_conns" units="AUTO"/>
						<Row type="INT64"   sid="ppak_1.drops_category.dropped_packets"/>
						<Row type="UINT"    sid="ppak_1.cpu_category.cpu_avg"/>
						<Row type="UINT64"  sid="ppak_1.memory_category.os_tot" units="MB"/>
						<Row type="UINT64"  sid="ppak_1.memory_category.os_used" units="MB" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_1.memory_category.os_tot"/>
						</Row>
						<Row type="UINT64"  sid="ppak_1.memory_category.os_free" units="MB"/>
						<Row type="UINT64"  sid="ppak_1.memory_category.sxl_tot" units="MB"/>
						<Row type="UINT64" units="MB" sid="ppak_1.memory_category.sxl_used" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_1.memory_category.sxl_tot"/>
						</Row>
						<Row type="UINT64"  sid="ppak_1.memory_category.sxl_free" units="MB"/>
						<Row type="UINT64"  sid="ppak_1.memory_category.pkt_pool_tot" units="MB"/>
						<Row type="UINT64" units="MB" sid="ppak_1.memory_category.pkt_pool_used" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_1.memory_category.pkt_pool_tot"/>
						</Row>
						<Row type="UINT64"  sid="ppak_1.memory_category.pkt_pool_free" units="MB"/>
					</Column>
					<Column name="">
						<Row type="STRING"  sid ="falcons_stats.falcons_info.falcon_2"/>
						<Row type="UINT64"  sid="ppak_2.network_category.inbound_pkts" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_2.network_category.outbound_pkts" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_2.network_category.inbound_bits" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_2.network_category.outbound_bits" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_2.network_category.conns_per_sec" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_2.network_category.concurrent_conns" units="AUTO"/>
						<Row type="INT64"   sid="ppak_2.drops_category.dropped_packets"/>
						<Row type="UINT"    sid="ppak_2.cpu_category.cpu_avg"/>
						<Row type="UINT64"  sid="ppak_2.memory_category.os_tot" units="MB"/>
						<Row type="UINT64"  sid="ppak_2.memory_category.os_used" units="MB" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_2.memory_category.os_tot"/>
						</Row>
						<Row type="UINT64"  sid="ppak_2.memory_category.os_free" units="MB"/>
						<Row type="UINT64"  sid="ppak_2.memory_category.sxl_tot" units="MB"/>
						<Row type="UINT64" units="MB" sid="ppak_2.memory_category.sxl_used" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_2.memory_category.sxl_tot"/>
						</Row>
						<Row type="UINT64"  sid="ppak_2.memory_category.sxl_free" units="MB"/>
						<Row type="UINT64"  sid="ppak_2.memory_category.pkt_pool_tot" units="MB"/>
						<Row type="UINT64" units="MB" sid="ppak_2.memory_category.pkt_pool_used" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_2.memory_category.pkt_pool_tot"/>
						</Row>
						<Row type="UINT64"  sid="ppak_2.memory_category.pkt_pool_free" units="MB"/>
					</Column>
					<Column name="">
						<Row type="STRING"  sid ="falcons_stats.falcons_info.falcon_3"/>
						<Row type="UINT64"  sid="ppak_3.network_category.inbound_pkts" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_3.network_category.outbound_pkts" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_3.network_category.inbound_bits" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_3.network_category.outbound_bits" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_3.network_category.conns_per_sec" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_3.network_category.concurrent_conns" units="AUTO"/>
						<Row type="INT64"   sid="ppak_3.drops_category.dropped_packets"/>
						<Row type="UINT"    sid="ppak_3.cpu_category.cpu_avg"/>
						<Row type="UINT64"  sid="ppak_3.memory_category.os_tot" units="MB"/>
						<Row type="UINT64"  sid="ppak_3.memory_category.os_used" units="MB" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_3.memory_category.os_tot"/>
						</Row>
						<Row type="UINT64"  sid="ppak_3.memory_category.os_free" units="MB"/>
						<Row type="UINT64"  sid="ppak_3.memory_category.sxl_tot" units="MB"/>
						<Row type="UINT64" units="MB" sid="ppak_3.memory_category.sxl_used" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_3.memory_category.sxl_tot"/>
						</Row>
						<Row type="UINT64"  sid="ppak_3.memory_category.sxl_free" units="MB"/>
						<Row type="UINT64"  sid="ppak_3.memory_category.pkt_pool_tot" units="MB"/>
						<Row type="UINT64" units="MB" sid="ppak_3.memory_category.pkt_pool_used" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_3.memory_category.pkt_pool_tot"/>
						</Row>
						<Row type="UINT64"  sid="ppak_3.memory_category.pkt_pool_free" units="MB"/>
					</Column>
					<Column name="">
						<Row type="STRING"  sid ="falcons_stats.falcons_info.falcon_4"/>
						<Row type="UINT64"  sid="ppak_4.network_category.inbound_pkts" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_4.network_category.outbound_pkts" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_4.network_category.inbound_bits" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_4.network_category.outbound_bits" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_4.network_category.conns_per_sec" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_4.network_category.concurrent_conns" units="AUTO"/>
						<Row type="INT64"   sid="ppak_4.drops_category.dropped_packets"/>
						<Row type="UINT"    sid="ppak_4.cpu_category.cpu_avg"/>
						<Row type="UINT64"  sid="ppak_4.memory_category.os_tot" units="MB"/>
						<Row type="UINT64"  sid="ppak_4.memory_category.os_used" units="MB" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_4.memory_category.os_tot"/>
						</Row>
						<Row type="UINT64"  sid="ppak_4.memory_category.os_free" units="MB"/>
						<Row type="UINT64"  sid="ppak_4.memory_category.sxl_tot" units="MB"/>
						<Row type="UINT64" units="MB" sid="ppak_4.memory_category.sxl_used" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_4.memory_category.sxl_tot"/>
						</Row>
						<Row type="UINT64"  sid="ppak_4.memory_category.sxl_free" units="MB"/>
						<Row type="UINT64"  sid="ppak_4.memory_category.pkt_pool_tot" units="MB"/>
						<Row type="UINT64" units="MB" sid="ppak_4.memory_category.pkt_pool_used" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_4.memory_category.pkt_pool_tot"/>
						</Row>
						<Row type="UINT64"  sid="ppak_4.memory_category.pkt_pool_free" units="MB"/>
					</Column>
					<Column name="">
						<Row type="STRING"  sid ="falcons_stats.falcons_info.falcon_5"/>
						<Row type="UINT64"  sid="ppak_5.network_category.inbound_pkts" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_5.network_category.outbound_pkts" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_5.network_category.inbound_bits" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_5.network_category.outbound_bits" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_5.network_category.conns_per_sec" units="AUTO"/>
						<Row type="UINT64"  sid="ppak_5.network_category.concurrent_conns" units="AUTO"/>
						<Row type="INT64"   sid="ppak_5.drops_category.dropped_packets"/>
						<Row type="UINT"    sid="ppak_5.cpu_category.cpu_avg"/>
						<Row type="UINT64"  sid="ppak_5.memory_category.os_tot" units="MB"/>
						<Row type="UINT64"  sid="ppak_5.memory_category.os_used" units="MB" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_5.memory_category.os_tot"/>
						</Row>
						<Row type="UINT64"  sid="ppak_5.memory_category.os_free" units="MB"/>
						<Row type="UINT64"  sid="ppak_5.memory_category.sxl_tot" units="MB"/>
						<Row type="UINT64" units="MB" sid="ppak_5.memory_category.sxl_used" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_5.memory_category.sxl_tot"/>
						</Row>
						<Row type="UINT64"  sid="ppak_5.memory_category.sxl_free" units="MB"/>
						<Row type="UINT64"  sid="ppak_5.memory_category.pkt_pool_tot" units="MB"/>
						<Row type="UINT64" units="MB" sid="ppak_5.memory_category.pkt_pool_used" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_5.memory_category.pkt_pool_tot"/>
						</Row>
						<Row type="UINT64"  sid="ppak_5.memory_category.pkt_pool_free" units="MB"/>
					</Column>
				</Stat>
			</Block>
		</View>
		<View viewtag="ppak-network" name="falcon" hide_on_mgmt="1">
			<Dynamic max_views_num="10" type="snd_falcon" views_per_sub_menu="0"/>
			<Block heading="General Statistics">
				<Stat type="UINT64" name="Inbound packets/sec" sid="ppak_.network_category.inbound_pkts" sid_prefix="ppak_" units="AUTO"/>
				<Stat type="UINT64" name="Outbound packets/sec" sid="ppak_.network_category.outbound_pkts" sid_prefix="ppak_" units="AUTO"/>
				<Stat type="UINT64" name="Inbound bits/sec" sid="ppak_.network_category.inbound_bits" sid_prefix="ppak_" units="AUTO"/>
				<Stat type="UINT64" name="Outbound bits/sec" sid="ppak_.network_category.outbound_bits" sid_prefix="ppak_" units="AUTO"/>
				<Stat type="UINT64" name="Connections/sec" sid="ppak_.network_category.conns_per_sec" sid_prefix="ppak_" units="AUTO"/>
				<Stat type="UINT64" name="Concurrent connections" sid="ppak_.network_category.concurrent_conns" sid_prefix="ppak_" units="AUTO"/>
			</Block>
			<Block heading="TCP Statistics">
				<Stat type="UINT64" name="TCP Connections" sid="ppak_.network_category.tcp_conns" sid_prefix="ppak_"/>
				<Stat type="UINT64" name="Handshake Connections" sid="ppak_.network_category.handshake_conns" sid_prefix="ppak_"/>
				<Stat type="UINT64" name="Established Connections" sid="ppak_.network_category.establ_conns" sid_prefix="ppak_"/>
				<Stat type="UINT64" name="Closed Connections" sid="ppak_.network_category.closed_conns" sid_prefix="ppak_"/>
				<Stat type="INT64" name="TCP violations" sid="ppak_.accel_category.tcp_violations" sid_prefix="ppak_"/>
			</Block>
			<Block heading="UDP Statistics">
				<Stat type="UINT64" name="UDP Connections" sid="ppak_.network_category.udp_conns" sid_prefix="ppak_" override_width="23"/>
			</Block>
			<Block heading="Corrections">
				<Stat type="UINT64" name="Current Corrections" sid="ppak_.network_category.current_corrections" sid_prefix="ppak_" override_width="19"/>
				<Stat type="UINT64" name="Deleted Corrections" sid="ppak_.network_category.deleted_corrections" sid_prefix="ppak_" override_width="19"/>
				<Stat type="UINT64" name="Created Corrections" sid="ppak_.network_category.created_corrections" sid_prefix="ppak_" override_width="19"/>
				<Stat type="UINT64" name="Corrected Packets " sid="ppak_.network_category.corrected_packets" sid_prefix="ppak_" override_width="20"/>
				<Stat type="UINT64" name="Corrected Bytes" sid="ppak_.network_category.corrected_bytes" sid_prefix="ppak_" override_width="23"/>
			</Block>
			<Block heading="Others">
				<Stat type="UINT64" name="Other Connections" sid="ppak_.network_category.other_conns" sid_prefix="ppak_"/>
				<Stat type="UINT64" name="Encrypted Connections" sid="ppak_.network_category.encr_conns" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Conns deleted" sid="ppak_.accel_category.conns_deleted" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Nat conns" sid="ppak_.accel_category.nat_conns" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Fragments received" sid="ppak_.accel_category.fragments_received" sid_prefix="ppak_"/>
				<Stat type="INT64" name="Fragments dropped" sid="ppak_.accel_category.fragments_dropped" sid_prefix="ppak_"/>
				<Stat type="INT64" name="IP options stripped" sid="ppak_.accel_category.ip_options_stripped" sid_prefix="ppak_"/>
				<Stat type="INT64" name="IP options dropped" sid="ppak_.accel_category.ip_options_dropped" sid_prefix="ppak_"/>
				<Stat type="INT64" name="F2F packets" sid="cphwd_.cphwd.f2f_packets" sid_prefix="cphwd_"/>
				<Stat type="INT64" name="F2V packets" sid="cphwd_.cphwd.f2v_packets" sid_prefix="cphwd_"/>
			</Block>
		</View>
		<View viewtag="ppak-CPU" name="falcon" hide_on_mgmt="1">
			<Dynamic max_views_num="10" type ="falcon" views_per_sub_menu="0"/>
			<Block heading="NPU:">
				<Stat type="TABLE" override_width="7"  sid="ppak_.cpu_category.cpu_table" sid_prefix="ppak_">
					<Column name="NPU"  type="UINT64"  sid="ppak_.cpu_category.cpu_table.name_of_cpu" sid_prefix="ppak_"/>
					<Column name="Used" type="PERCENT" sid="ppak_.cpu_category.cpu_table.cpu_usage" sid_prefix="ppak_"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="ppak-memory" name="falcon" hide_on_mgmt="1">
			<Dynamic max_views_num="10" type="falcon" views_per_sub_menu="0"/>
			<Block heading="Summary:">
				<Stat type="TABLE">
					<Column name="">
						<Row name="OS"/>
						<Row name="SXL"/>
						<Row name="Packet Pool"/>
						<Row name="Total"/>
					</Column>
					<Column name="Total MB">
						<Row type="UINT64" units="MB" sid="ppak_.memory_category.os_tot" sid_prefix="ppak_"/>
						<Row type="UINT64" units="MB" sid="ppak_.memory_category.sxl_tot" sid_prefix="ppak_"/>
						<Row type="UINT64" units="MB" sid="ppak_.memory_category.pkt_pool_tot" sid_prefix="ppak_"/>
						<Row type="UINT64" units="MB" sid="ppak_.memory_category.total_tot" sid_prefix="ppak_"/>
					</Column>
					<Column name="Used MB">
						<Row type="UINT64" units="MB" sid="ppak_.memory_category.os_used" sid_prefix="ppak_" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_.memory_category.os_tot" sid_prefix="ppak_"/>
						</Row>
						<Row type="UINT64" units="MB" sid="ppak_.memory_category.sxl_used" sid_prefix="ppak_" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_.memory_category.sxl_tot" sid_prefix="ppak_"/>
						</Row>
						<Row type="UINT64" units="MB" sid="ppak_.memory_category.pkt_pool_used" sid_prefix="ppak_" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_.memory_category.pkt_pool_tot" sid_prefix="ppak_"/>
						</Row>
						<Row type="UINT64" units="MB" sid="ppak_.memory_category.total_used" sid_prefix="ppak_" limit_threshold_percent="90">
							<Limit type="UINT64" sid="ppak_.memory_category.total_tot" sid_prefix="ppak_"/>
						</Row>
					</Column>
					<Column name="Free MB">
						<Row type="UINT64" units="MB" sid="ppak_.memory_category.os_free" sid_prefix="ppak_"/>
						<Row type="UINT64" units="MB" sid="ppak_.memory_category.sxl_free" sid_prefix="ppak_"/>
						<Row type="UINT64" units="MB" sid="ppak_.memory_category.pkt_pool_free" sid_prefix="ppak_"/>
						<Row type="UINT64" units="MB" sid="ppak_.memory_category.total_free" sid_prefix="ppak_"/>
					</Column>
				</Stat>
			</Block>
			<Block heading="KMEM:">
				<Stat type="TABLE" override_width="11">
					<Column name="">
						<Row name="Memory Usage"/>
					</Column>
					<Column name="Used KB">
						<Row type="UINT64" units="KB" sid="ppak_.memory_category.kmem_used_bytes" sid_prefix="ppak_"/>
					</Column>
					<Column name="Peak KB">
						<Row type="UINT64" units="KB" sid="ppak_.memory_category.kmem_peak_bytes" sid_prefix="ppak_"/>
					</Column>
				</Stat>
				<Stat type="TABLE" override_width="11">
					<Column name="">
						<Row name="Allocated    "/>
						<Row name="Free    "/>
					</Column>
					<Column name="Succeeded">
						<Row type="UINT64" sid="ppak_.memory_category.kmem_alloc_succeeded" sid_prefix="ppak_"/>
						<Row type="UINT64" sid="ppak_.memory_category.kmem_free_succeeded" sid_prefix="ppak_"/>
					</Column>
					<Column name="Failed">
						<Row type="UINT64" sid="ppak_.memory_category.kmem_failed_alloc" sid_prefix="ppak_"/>
						<Row type="UINT64" sid="ppak_.memory_category.kmem_failed_free" sid_prefix="ppak_"/>
					</Column>
				</Stat>
				<Stat type="UINT64" name="No Global Lock Allocations" sid="ppak_.memory_category.kmem_alloc_no_global_lock" sid_prefix="ppak_"/>
				<Stat type="UINT64" name="Current Allocations" sid="ppak_.memory_category.kmem_items" sid_prefix="ppak_"/>
			</Block>
			<Block heading="HMEM:">
				<Stat type="TABLE" override_width="11">
					<Column name="">
						<Row name="HMEM Total Bytes:"/>
					</Column>
					<Column name="Current">
						<Row type="UINT64" sid="ppak_.memory_category.smem_total_hmem_use" sid_prefix="ppak_"/>
					</Column>
					<Column name="Limit">
						<Row type="UINT64" sid="ppak_.memory_category.smem_total_max_hmem" sid_prefix="ppak_"/>
					</Column>
				</Stat>
				<Stat type="TABLE" override_width="11">
					<Column name="">
						<Row name="Blocks      "/>
						<Row name="Bytes      "/>
					</Column>
					<Column name="Current">
						<Row type="UINT64" sid="ppak_.memory_category.hmem_alloc_blocks" sid_prefix="ppak_"/>
						<Row type="UINT64" sid="ppak_.memory_category.hmem_alloc_bytes" sid_prefix="ppak_"/>
					</Column>
					<Column name="Peak">
						<Row type="UINT64" sid="ppak_.memory_category.hmem_peak_blocks" sid_prefix="ppak_"/>
						<Row type="UINT64" sid="ppak_.memory_category.hmem_peak_bytes" sid_prefix="ppak_"/>
					</Column>
				</Stat>
				<Stat type="TABLE" override_width="11">
					<Column name="">
						<Row name="Allocated    "/>
						<Row name="Free    "/>
					</Column>
					<Column name="Succeeded">
						<Row type="UINT64" sid="ppak_.memory_category.hmem_alloc_succeeded" sid_prefix="ppak_"/>
						<Row type="UINT64" sid="ppak_.memory_category.hmem_free_succeeded" sid_prefix="ppak_"/>
					</Column>
					<Column name="Failed">
						<Row type="UINT64" sid="ppak_.memory_category.hmem_failed_alloc" sid_prefix="ppak_"/>
						<Row type="UINT64" sid="ppak_.memory_category.hmem_failed_free" sid_prefix="ppak_"/>
					</Column>
				</Stat>
				<Stat type="UINT64" name="Total Blocks Allocated" sid="ppak_.memory_category.hmem_total_blocks_alloc" sid_prefix="ppak_"/>
				<Stat type="UINT64" name="Total Blocks Freed"     sid="ppak_.memory_category.hmem_total_blocks_free" sid_prefix="ppak_"/>
			</Block>
			<Block heading="SMEM:">
				<Stat type="TABLE" override_width="11">
					<Column name="">
						<Row name="Atomic"/>
						<Row name="Sleepable"/>
					</Column>
					<Column name="Used KB">
						<Row type="UINT64" units="KB" sid="ppak_.memory_category.smem_used_nosleep_bytes" sid_prefix="ppak_"/>
						<Row type="UINT64" units="KB" sid="ppak_.memory_category.smem_used_sleep_bytes" sid_prefix="ppak_"/>
					</Column>
					<Column name="Peak KB">
						<Row type="UINT64" units="KB" sid="ppak_.memory_category.smem_peak_nosleep_bytes" sid_prefix="ppak_"/>
						<Row type="UINT64" units="KB" sid="ppak_.memory_category.smem_peak_sleep_bytes" sid_prefix="ppak_"/>
					</Column>
				</Stat>
				<Stat type="TABLE" override_width="11">
					<Column name="">
						<Row name="Allocated    "/>
						<Row name="Free    "/>
					</Column>
					<Column name="Succeeded">
						<Row type="UINT64" sid="ppak_.memory_category.smem_alloc_succeeded" sid_prefix="ppak_"/>
						<Row type="UINT64" sid="ppak_.memory_category.smem_free_succeeded" sid_prefix="ppak_"/>
					</Column>
					<Column name="Failed">
						<Row type="UINT64" sid="ppak_.memory_category.smem_failed_alloc" sid_prefix="ppak_"/>
						<Row type="UINT64" sid="ppak_.memory_category.smem_failed_free" sid_prefix="ppak_"/>
					</Column>
				</Stat>
				<Stat type="UINT64" name="Current Allocations    " sid="ppak_.memory_category.smem_items" sid_prefix="ppak_"/>
				<Stat type="UINT64" name="Memory Waste    " sid="ppak_.memory_category.smem_total_waste" sid_prefix="ppak_"/>
			</Block>
		</View>
		<View viewtag="bgp" name="BGP" hide_on_mgmt="1">
			<Block heading="General:">
				<Stat type="UINT64" name="Local Autonomous System:" sid="routed.bgp.local_as"/>
			</Block>
			<Block heading="BGP Peers Table">
				<Stat type="TABLE" sid="routed.bgp.bgp_peers">
					<Column name="Autonomous System" type="UINT64" sid="routed.bgp.bgp_peers.peer_as"/>
					<Column name="Peer" type="STRING" sid="routed.bgp.bgp_peers.peer_id"/>
					<Column name="State" type="STRING" sid="routed.bgp.bgp_peers.state" override_width="20"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="ospf" name="OSPF" hide_on_mgmt="1">
			<Block heading="General:">
				<Stat type="STRING" name="Router ID:" sid="routed.ospf.router_id"/>
			</Block>
			<Block heading="Neighbors:">
				<Stat type="TABLE" sid="routed.ospf.ospf_neighbors">
					<Column name="Neighbor ID" type="STRING" sid="routed.ospf.ospf_neighbors.ospf_neighbor_id" override_width="17"/>
					<Column name="State" type="STRING" sid="routed.ospf.ospf_neighbors.state" override_width="14"/>
					<Column name="Interface" type="STRING" sid="routed.ospf.ospf_neighbors.interface" override_width="17"/>
				</Stat>
			</Block>
			<Block heading="Interfaces:">
				<Stat type="TABLE" sid="routed.ospf.ospf_interfaces">
					<Column name="Name" type="STRING" sid="routed.ospf.ospf_interfaces.name" override_width="17"/>
					<Column name="IP Address" type="STRING" sid="routed.ospf.ospf_interfaces.ip" override_width="17"/>
					<Column name="Area ID" type="STRING" sid="routed.ospf.ospf_interfaces.area" override_width="13"/>
					<Column name="State" type="STRING" sid="routed.ospf.ospf_interfaces.state" override_width="13"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="rip" name="RIP" hide_on_mgmt="1">
			<Block heading="Neighbors:">
				<Stat type="TABLE" sid="routed.rip.rip_neighbors">
					<Column name="IP Address" type="STRING" sid="routed.rip.rip_neighbors.address" override_width="17"/>
					<Column name="Interface" type="STRING" sid="routed.rip.rip_neighbors.interface" override_width="17"/>
					<Column name="Active Routes" type="UINT64" sid="routed.rip.rip_neighbors.active_rts" override_width="13"/>
					<Column name="Bad Packets" type="UINT64" sid="routed.rip.rip_neighbors.bad_pkts"/>
					<Column name="Bad Routes" type="UINT64" sid="routed.rip.rip_neighbors.bad_rts"/>
				</Stat>
			</Block>
			<Block heading="Interfaces:">
				<Stat type="TABLE" sid="routed.rip.rip_interfaces">
					<Column name="Interface" type="STRING" sid="routed.rip.rip_interfaces.interface" override_width="17"/>
					<Column name="IP Address" type="STRING" sid="routed.rip.rip_interfaces.ip_address" override_width="17"/>
					<Column name="Tx" type="UINT64" sid="routed.rip.rip_interfaces.sent"/>
					<Column name="Rx" type="UINT64" sid="routed.rip.rip_interfaces.recv"/>
					<Column name="Errors" type="UINT64" sid="routed.rip.rip_interfaces.errors"/>
				</Stat>
			</Block>
		</View>
		<View viewtag="pim" name="PIM" hide_on_mgmt="1">
			<Block heading="General:">
				<Stat type="STRING" name="PIM Mode:" sid="routed.pim.mode"/>
			</Block>
			<Block heading="Neighbors:">
				<Stat type="TABLE" sid="routed.pim.pim_neighbors">
					<Column name="Neighbor" type="STRING" sid="routed.pim.pim_neighbors.neighbor" override_width="17"/>
					<Column name="Interface" type="STRING" sid="routed.pim.pim_neighbors.interface" override_width="17"/>
					<Column name="Expire Time" type="TIMESTAMP" sid="routed.pim.pim_neighbors.expires" override_width="8"/>
				</Stat>
			</Block>
			<Block heading="Interfaces:">
				<Stat type="TABLE" sid="routed.pim.pim_interfaces">
					<Column name="Interface" type="STRING" sid="routed.pim.pim_interfaces.interface" override_width="17"/>
					<Column name="Status" type="STRING" sid="routed.pim.pim_interfaces.status" override_width="8"/>
					<Column name="State" type="STRING" sid="routed.pim.pim_interfaces.state" override_width="8"/>
					<Column name="DR Address" type="STRING" sid="routed.pim.pim_interfaces.dr" override_width="17"/>
				</Stat>
			</Block>
			<Block heading="Rendezvous Points:">
				<Stat type="TABLE" sid="routed.pim.rps">
					<Column name="Address" type="STRING" sid="routed.pim.rps.address" override_width="17"/>
					<Column name="Type" type="STRING" sid="routed.pim.rps.type" override_width="10"/>
					<Column name="Group" type="UINT64" sid="routed.pim.rps.num_groups"/>
					<Column name="Expire Time" type="TIMESTAMP" sid="routed.pim.rps.expires" override_width="13"/>
				</Stat>
			</Block>
			<Block heading="Joins:">
				<Stat type="TABLE" sid="routed.pim.pim_joins">
					<Column name="(Source,Group)" type="STRING" sid="routed.pim.pim_joins.source_group" override_width="35"/>
					<Column name="Added Time" type="TIMESTAMP" sid="routed.pim.pim_joins.added_time" override_width="20"/>
					<Column name="Expire Time" type="TIMESTAMP" sid="routed.pim.pim_joins.expire_time" override_width="20"/>
					<Column name="Flags" type="STRING" sid="routed.pim.pim_joins.flags" override_width="13"/>
					<Column name="Rendezvous Point" type="STRING" sid="routed.pim.pim_joins.rp" override_width="20"/>
					<Column name="Incoming Interface" type="STRING" sid="routed.pim.pim_joins.incoming" override_width="20"/>
					<Column name="Outgoing Interface Num" type="INT" sid="routed.pim.pim_joins.outgoing_num" override_width="6"/>
				</Stat>
			</Block>
		</View>
	</Views>
</CPViewConfig>
`;