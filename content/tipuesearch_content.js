var tipuesearch = {"pages": [{'title': 'About', 'text': '總整理 \n 英文單詞 \n \n \n \n \n \n \n \n \n 塞子歌 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n 維護結束要將網站推至遠端可以使用 https協定以及 ssh協定進行連線,若在 IPv6的網路下要使用https協定連上 github必須使用 proxy才能進行連線, IPv4則不需要 proxy.若是在\xa0 IPv6的網路下要使用 ssh協定連上 github必須擁有 private key及 public key兩把鑰匙並且確定 putty的 proxy跟金鑰都是正確的再把 github轉為 ssh協定並綁定 ssh key, IPv4則不需要 proxy但仍需要 private key及 public key. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定e_ti sittle 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '網際網路', 'text': '網際網路 （英語： Internet ）是指 20世紀 末期興起 電腦網路 與電腦網路之間所串連成的龐大 網路 系統 。這些網路 以一些標準的 網路協定 相連 。它是由從地方到全球範圍內幾百萬個私人、 學術界 、企業和政府的網路所構成，透過 電子 ， 無線 和 光纖網路技術 等等一系列廣泛的技術聯繫在一起。網際網路承載範圍廣泛的資訊資源和服務，例如相互關聯的 超文字 檔案，還有 全球資訊網 （ WWW ）的應用， 電子郵件 ， 通話 ，以及 檔案分享 服務。 \n 網際網路的起源可以追溯到1960年代 美國聯邦政府 委託進行的一項研究，目的是建立容錯與電腦網路的通信。網際網路的前身 ARPANET 最初在1980年代作為區域學術和軍事網路連接的骨幹。1980年代， NSFNET 成為新的骨幹而得到資助，以及其他商業化擴展得到了私人資助，導致了全世界網路技術的發展，以及許多網路的合併。到1990年代初，商業網路和企業之間的連接標誌著向現代網際網路的過渡。儘管網際網路在1980年代被學術界廣泛使用 ， 但商業化的服務和技術融入了現代每個人的生活 。 \n', 'tags': '', 'url': '網際網路.html'}, {'title': 'SSH', 'text': 'Secure Shell （ 安全外殼協定 ， 簡稱 SSH ）是一種 加密的 網路傳輸協定 ，可 在不安全的網路中為網路服務提供安全的傳輸環境 。SSH 通過在網路中建立 安全隧道 來實現SSH客戶端與伺服器之間的連接 。雖然任何網路服務都可以通過SSH實現安全傳輸，SSH最常見的用途是遠端登入系統，人們 通常利用SSH來傳輸 命令行介面 和遠端執行命令 。SSH使用頻率最高的場合是 類Unix系統 ，但是 Windows 作業系統也能有限度地使用SSH。2015年，微軟宣布將在未來的作業系統中提供原生SSH協定支援 ， Windows \xa0 10 1809版本已提供 OpenSSH 工具 。 \n SSH以 非對稱加密 實現 身分驗證 。身分驗證有多種途徑，例如其中一種方法是 使用自動生成的公鑰-私鑰對來簡單地加密網路連接 ，隨後使用密碼認證進行登入；另一種方法是 人工生成一對公鑰和私鑰，通過生成的金鑰進行認證 ，這樣就 可以在不輸入密碼的情況下登入 。任何人都可以自行生成金鑰。公鑰需要放在待存取的電腦之中，而對應的私鑰需要由用戶自行保管。認證過程基於生成出來的私鑰，但整個認證過程中私鑰本身不會傳輸到網路中。 \n SSH協定有兩個主要版本，分別是SSH-1和SSH-2。無論是哪個版本，核實未知金鑰來源都是重要的事情，因為SSH只驗證提供用戶是否擁有與公鑰相匹配的私鑰，只要接受公鑰而且金鑰匹配伺服器就會授予許可。這樣的話，一旦接受了惡意攻擊者的公鑰，那麼系統也會把攻擊者視為合法用戶。 \n', 'tags': '', 'url': 'SSH.html'}, {'title': 'IPv6', 'text': '網際協定第6版 （英語： I nternet \xa0 P rotocol \xa0 v ersion \xa0 6 ，縮寫： IPv6 ）是 網際協定 的最新版本 ，用作 網際網路 的 網路層 協定。用它來取代 IPv4 主要是 為了解決 IPv4位址枯竭問題 ，同時它也在其他方面對於IPv4有許多改進。 \n IPv6的設計 目的是取代IPv4 ，然而長期以來IPv4在網際網路流量中仍占據主要地位，IPv6的使用增長緩慢。在2019年12月，通過IPv6使用 Google 服務的用戶百分率首次超過30%。 \n', 'tags': '', 'url': 'IPv6.html'}, {'title': 'IPv4', 'text': '網際協定版本4 （英語： I nternet \xa0 P rotocol \xa0 v ersion \xa0 4 ，縮寫： IPv4 ，又稱 網際網路通訊協定第四版 ）是 網際協定 開發過程中的第四個修訂版本 ，也是此協定第一個被廣泛部署和使用的版本。其後繼版本為 IPv6 ，直到2011年， IANA \xa0 IPv4位元址完全用盡時，IPv6仍處在部署的初期。 \n IPv4在 IETF 於1981年9月發布的 \xa0 RFC 791 \xa0 中被描述，此RFC替換了於1980年1月發布的 \xa0 RFC 760 。 \n IPv4是一種 無連接 的協定 ，操作在使用 封包交換 的連結層（如 乙太網路 ）上。此協定會盡最大努力交付封包，意即它不保證任何封包均能送達目的地，也不保證所有封包均按照正確的順序無重複地到達。這些方面是由上層的傳輸協定（如 傳輸控制協定 ）處理的。 \n', 'tags': '', 'url': 'IPv4.html'}, {'title': 'Proxy', 'text': '代理 （英語： Proxy ）也稱 網路代理 ，是一種特殊的網路服務， 允許一個 網路終端 （一般為 客戶端 ） 通過這個服務與另一個 網路終端 （一般為 伺服器 ） 進行非直接的連接 。一些 閘道器 、 路由器 等網路裝置具備網路代理功能。一般認為代理服務 有利於保障網路終端的隱私或安全，防止攻擊 。 \n 提供代理服務的電腦系統或其它類型的網路終端稱為代理伺服器（英文：Proxy Server）。一個完整的代理請求過程為： 客戶端 首先 與代理伺服器建立連接 ，接著根據代理伺服器所使用的代理協定， 請求對目標伺服器建立連接 、或者獲得目標伺服器的指定資源（如：檔案）。在後一種情況中，代理伺服器可能對目標伺服器的資源下載至本地 快取 ，如果客戶端所要取得的資源在代理伺服器的快取之中，則代理伺服器並不會向目標伺服器傳送請求，而是直接傳回已快取的資源。一些代理協定允許代理伺服器改變客戶端的原始請求、目標伺服器的原始回應，以滿足代理協定的需要。代理伺服器的選項和設定在電腦程式中，通常包括一個「防火牆」，允許用戶輸入代理位址，它會遮蓋他們的網路活動，可以允許繞過網際網路過濾實現網路存取。 \n 代理伺服器的基本行為就是接收客戶端傳送的請求後轉發給其他伺服器。代理不改變請求 URI ，會直接傳送給前方持有資源的目標伺服器。 \n 持有資源實體的伺服器被稱為 源伺服器 。從源伺服器返回的回應經過代理伺服器後再傳給客戶端。 \n', 'tags': '', 'url': 'Proxy.html'}, {'title': 'NAT', 'text': '網路位址轉換 （英語： N etwork \xa0 A ddress \xa0 T ranslation ，縮寫： NAT ；又稱 網路掩蔽 、 IP 掩蔽 ）在 計算機網路 中是一種 在 IP 封包 通過 路由器 或 防火牆 時重寫來源 IP地址 或目的 IP 位址的技術 。這種技術被普遍使用在有多台主機但只通過一個公有IP位址存取 網際網路 的 私有網路 中。它是一個方便且得到了廣泛應用的技術。當然， NAT 也 讓主機之間的通信變得複雜，導致了通信效率的降低 。 \n', 'tags': '', 'url': 'NAT.html'}, {'title': 'DHCP', 'text': '由於 IP 位址不夠， 為了節省子網路中 IP 位址的使用量 ，可以設定網路中的一台主機做為指揮中心，稱為「動態主機組態協定伺服器（DHCP server）」或「DHCP 伺服器」。負責動態分配 IP 位址，當網路中有任何一台 電腦要連線時 ，才 向 DHCP 伺服器要求一個 IP 位址 ， DHCP 伺服器會從資料庫中找出一個目前尚未被使用的 IP 位址提供給該電腦使用， 使用完畢後電腦再將這個 IP 位址還給 DHCP 伺服器 ，提供給其他上線的電腦使用。 \n 「動態主機組態協定（Dynamic Host Configuration Protocol, DHCP）」主要的功能是提供用戶端電腦動態的 IP 位址、子網路遮罩（Subnet mask）、預設閘道器（Default gateway）、DNS 伺服器的 IP 位址等，可以減少用戶端手動設定 IP 位址的麻煩，並且減少手動設定發生錯誤的機率，又可以節省 IP 位址的使用量。 \n', 'tags': '', 'url': 'DHCP.html'}, {'title': 'OSI模型', 'text': '開放式系統互聯模型 （英語： O pen \xa0 S ystem \xa0 I nterconnection Model ，縮寫：OSI；簡稱為 OSI模型 ）是一種 概念模型 ，由 國際標準化組織 提出，一個試圖使各種電腦在世界範圍內互連為網路的標準框架。 \n OSI是一個定義良好的協定規範集，並有許多可選部分完成類似的任務。它定義了開放系統的階層、層次之間的相互關係以及各層所包括的可能的任務，作為一個框架來協調和組織各層所提供的服務。 \n OSI參考模型並沒有提供一個可以實現的方法，而是描述了一些概念，用來協調行程間通訊標準的制定。即OSI參考模型並不是一個標準，而是一個在制定標準時所使用的概念性框架。 \n', 'tags': '', 'url': 'OSI模型.html'}, {'title': '第1層 實體層', 'text': '實體層（Physical Layer）在局部區域網路上傳送 資料框 （Data Frame），它 負責管理電腦通訊裝置和網路媒體之間的互通 。包括了針腳、電壓、線纜規範、集線器、中繼器、網卡、主機介面卡等。 \n', 'tags': '', 'url': '第1層 實體層.html'}, {'title': '第2層 資料連結層', 'text': '資料連結層（Data Link Layer） 負責網路尋址、錯誤偵測和改錯 。當表頭和表尾被加至資料包時，會形成 資訊框 （Data Frame）。資料連結串列頭（DLH）是包含了實體位址和錯誤偵測及改錯的方法。資料連結串列尾（DLT）是一串指示資料包末端的字串。例如乙太網、無線區域網路（Wi-Fi）和通用分組無線服務（GPRS）等。 \n 分為兩個子層：邏輯鏈路控制（logical link control，LLC）子層和媒介存取控制（Media access control，MAC）子層。 \n', 'tags': '', 'url': '第2層 資料連結層.html'}, {'title': '第3層 網路層', 'text': '網路層（Network Layer） 決定資料的路徑選擇和轉寄，將網路表頭（NH）加至資料包，以形成封包 。網路表頭包含了網路資料。例如:網際網路協定（IP）等。 \n', 'tags': '', 'url': '第3層 網路層.html'}, {'title': '第4層 傳輸層', 'text': '傳輸層（Transport Layer） 把傳輸表頭（TH）加至資料以形成資料包 。傳輸表頭包含了所使用的協定等傳送資訊。例如:傳輸控制協定（TCP）等。 \n', 'tags': '', 'url': '第4層 傳輸層.html'}, {'title': '第5層 會議層', 'text': '會議層（Session Layer） 負責在資料傳輸中設定和維護電腦網路中兩台電腦之間的通訊連接 。 \n', 'tags': '', 'url': '第5層 會議層.html'}, {'title': '第6層 表達層', 'text': '表達層（Presentation Layer） 把資料轉換為能與接收者的系統格式相容並適合傳輸的格式 。 \n', 'tags': '', 'url': '第6層 表達層.html'}, {'title': '第7層 應用層', 'text': '應用層（Application Layer） 提供為應用軟體而設的介面，以設定與另一應用軟體之間的通訊 。例如: HTTP、HTTPS、FTP、TELNET、SSH、SMTP、POP3、HTML等。 \n', 'tags': '', 'url': '第7層 應用層.html'}, {'title': '電腦常用快捷鍵', 'text': 'Windowss 標誌鍵 + Shift + S\xa0 == 選取某部分截圖 \n Ctrl + X ==\xa0剪下選取的項目 \n Ctrl + C (或 Ctrl + Insert) ==\xa0複製選取的項目 \n Ctrl+N ==\xa0 開啟新網頁。 \n Ctrl+W ==\xa0 關閉目前視窗。 \n Ctrl + V (或 Shift + Insert) ==\xa0貼上選取的項目 \n Ctrl + Z ==\xa0復原動作 \n Alt + Tab ==\xa0在開啟的應用程式之間切換 \n Alt + F4 ==\xa0關閉使用中的項目，或結束使用中的應用程式 \n Windows 標誌鍵\xa0 \xa0 + L ==\xa0鎖定您的電腦 \n Windows 標誌鍵\xa0 \xa0 + D ==\xa0顯示或隱藏桌面 \n F2 ==\xa0重新命名選取的項目 \n F3 ==\xa0重新命名選取的項目 \n F4 ==\xa0在 [檔案總管] 中顯示網址列清單 \n F5 ==\xa0重新整理使用中視窗 \n F6 ==\xa0重新整理使用中視窗 \n F10 ==\xa0啟動使用中應用程式的功能表列 \n Ctrl + Shift + Esc ==\xa0開啟 [工作管理員]。 \n Windows 標誌鍵\xa0 \xa0 + V ==\xa0開啟剪貼簿。 \n Windows 標誌鍵\xa0 \xa0 + U ==\xa0開啟 [輕鬆存取中心]。 \n Windows 標誌鍵\xa0 \xa0 + X ==\xa0開啟 [快速連結] 功能表。 \n Windows 標誌鍵\xa0 \xa0 + G ==\xa0開啟 [意見反應中樞] 並抓取螢幕擷取畫面。 \n Windows 標誌鍵\xa0 \xa0 + D ==\xa0顯示或隱藏桌面。 \n', 'tags': '', 'url': '電腦常用快捷鍵.html'}, {'title': '電腦構造', 'text': '\n 輸入單元 ：負責將資料、程式及命令的輸入。如鍵盤、滑鼠、光筆及磁碟機等 \n 輸出單元 ：負責輸出電腦所執行的結果，或顯示電腦系統的訊息，如印表機、喇叭及螢幕等。 \n 算術邏輯單元 ：負責電腦內部之算術（加、減、乘、除）及邏輯（AND、OR、NOT）運算。 \n 控制單元 ：負責分析、指揮及控制各單元的運作，它會適時遞送出控制訊號使電腦系統能正確的執行。 \n 記憶單元 ：負責儲存程式或資料，又可分為主記憶體與輔助記憶體。主記憶體分為唯讀記憶體（ROM）只能讀不能寫、隨機存取記憶體（RAM）能讀能寫；輔助記憶體如磁碟、光碟等。 \n \n \n', 'tags': '', 'url': '電腦構造.html'}, {'title': '硬體(Hardware)', 'text': '\n', 'tags': '', 'url': '硬體(Hardware).html'}, {'title': '機箱', 'text': '電腦的許多硬體，如主機板、硬碟和電源等，都安放與固定在機箱當中。機箱是一個相對封閉的空間，箱體一般由 鋼 和 鋁 等金屬製成 [6] （其他材料亦可用，但不多見），同時設有許多通風口，以促進箱內空氣流動，防止內部溫度過高。機箱的顏色、大小乃至形狀等可根據內部硬體之實際需要以及個人的喜好而變。 \n 目前市場比較普遍的機箱規格有 ATX規格 和 Micro ATX 等2種，另外以 ITX 標準小型機箱也在流行趨勢中。 \n', 'tags': '', 'url': '機箱.html'}, {'title': '主機板', 'text': '主機板是計算機的主要 電路板 （PCB）。計算機的其他硬體一般直接插入到主機板中來交換資訊。主機板通常由 晶片組 、 BIOS 、 印表埠 、各種周邊裝置連接埠（如 網路埠 、 Audio 、 USB ）、 PS/2 鍵盤/鼠標介面和PCIe/PCI擴展插槽等組成。有時為了減小主機板尺寸，節省成本也通過插到主機板的子板來擴充更多擴展槽。現時主流的主機板規格有 ATX規格 、 MicroATX 、 Mini-ITX 。 \n \n \n', 'tags': '', 'url': '主機板.html'}, {'title': '中央處理器', 'text': '中央處理器 \xa0 （英語： C entral \xa0 P rocessing \xa0 U nit ，縮寫： CPU ）是 電腦 的主要裝置之一，功能主要是解釋電腦 指令 以及處理電腦 軟體 中的 資料 。電腦的可程式化性主要是指對中央處理器的 編程 。1970年代以前，中央處理器由多個獨立單元構成，後來發展出由 積體電路 製造的中央處理器，這些高度收縮的元件就是所謂的 微處理器 ，其中分出的中央處理器最為複雜的電路可以做成單一微小功能強大的單元，也就是所謂的核心。 \n 中央處理器廣義上指一系列可以執行複雜的電腦程式的邏輯機器。這個空泛的定義很容易地將在「CPU」這個名稱被普遍使用之前的早期電腦也包括在內。無論如何，至少從1960年代早期開始，這個名稱及其縮寫已開始在電腦產業中得到廣泛應用。儘管與早期相比，「中央處理器」在物理形態、設計製造和具體任務的執行上有了極大的發展，但是其基本的操作原理一直沒有改變。 \n', 'tags': '', 'url': '中央處理器.html'}, {'title': '主記憶體', 'text': '隨機存取記憶體 （英語： R andom \xa0 A ccess \xa0 M emory ，縮寫： RAM ；也叫 主記憶體 ）是與 CPU 直接交換資料的記憶體。 [1] 它可以隨時讀寫（重新整理時除外，見下文），而且速度很快，通常作為 作業系統 或其他正在執行中的程式的臨時資料儲存媒介。 \n', 'tags': '', 'url': '主記憶體.html'}, {'title': '電源供應器', 'text': '電腦電源供應單元 （英語： PC Power supply unit ，常直接以 電源供應器 稱之，簡稱 PSU 或 電源 ），是 電腦 的一種電能轉換類的電源（有別於 電池 供電類的電源），負責將標準 交流電 轉成低壓穩定的 直流電 ，給電腦內其它的組件所使用。目前一般的電腦電源供應器都是 開關模式電源 ，輸入電壓自動適應用家所在地點 市電 參數（而某些產品可能需要用家調整電壓切換開關）。 \n 現時常用的 ATX規格 PC電源供應器輸入電壓一般為100V至250V之間自動適應，輸入交流電頻率頻率50Hz或60Hz，輸出12V、5V及3.3V三種穩定的直流電壓。 \n', 'tags': '', 'url': '電源供應器.html'}, {'title': '顯示器', 'text': '顯示器 （英語： display device ）是一種 輸出裝置 ，用於顯示影像及色彩。常見的顯示器是 電腦 及 電視 的螢幕。 \n', 'tags': '', 'url': '顯示器.html'}, {'title': '軟體(software)', 'text': '軟體 （英語： software ）是一系列按照特定順序組織的 電腦 資料和指令，是電腦中的非有形部分。電腦中的有形部分稱為 硬體 ，由電腦的外殼及各零件及電路所組成。電腦軟體需有硬體才能運作，反之亦然，軟體和硬體都無法在不互相配合的情形下進行實際的運作。 \n 一般來說，電腦軟體劃分為 程式語言 、 系統軟體 、 應用軟體 和介於這兩者之間的 中介軟體 。其中系統軟體為電腦使用提供最基本的功能，但是並不針對某一特定應用領域。而應用軟體則恰好相反，不同的應用軟體根據用戶和所服務的領域提供不同的功能。 \n 軟體包括所有在電腦執行的程式，和其架構無關，例如 執行檔 、 函式庫 及 手稿語言 都屬於軟體。軟體不分架構，有其共通的特性，在執行後可以讓硬體執行依設計時要求的機能。軟體儲存在 記憶體 中，軟體不是可以碰觸到的實體，可以碰觸到的都只是儲存軟體的零件（記憶體）或是媒介（ 光碟 或 磁片 等）。 \n 軟體並不一定只包括可以在電腦上執行的 電腦程式 ，有些定義中，與電腦程式相關的 文件 ，一般也被認為是軟體的一部分。簡單的說軟體就是程式加文件的集合體。軟體被應用於世界的各個領域，對人們的生活和工作都產生了深遠的影響。 \n', 'tags': '', 'url': '軟體(software).html'}, {'title': '系統軟體', 'text': '系統軟體 （英語： System software ），主要指用來執行或控制 硬體 所開發的 計算機軟體 ，如 作業系統 、 直譯器 、 編譯器 、 資料庫管理系統 、 公用程式 等面向開發者的軟體。 \n 系統軟體一詞常與系統程式 (system program) 混用，狹義而言，系統程式指的是作業系統設計，以及與作業系統相關的程式，例如行程排班、記憶體管理、行程通訊、平行程式、驅動程式等等；廣義來說，系統程式泛指與計算機系統相關的程式設計，例如嵌入式系統、組合語言程式設計、C 語言程式設計、Linux 核心程式設計等等；而系統軟體主要指的是輔佐系統程式能夠在電腦上執行或執行特定工作 (例如除錯、行程排班) 等等的工具程式。 \n 常見的系統軟體包含： \n \n 作業系統 \xa0 (operating system)：控制與管理計算機硬體與軟體資源，並提供使用者操作介面，讓使用者可與計算機互動的系統軟體，例如：UNIX、Linux、OS X、Microsoft Windows。 \n 編譯器 \xa0 (compiler)：將程式語言撰寫的程式碼，轉換成計算機可識讀的機器語言，產生可執行檔案，例如：GNU C Compiler (GCC)、LLVM，現今許多編譯器包含了編譯、組譯與連結等多種系統程式功能。 \n 直譯器 \xa0 (或 解譯器interpreter)：能夠把高階程式語言逐行直接轉譯執行，而非將所有內容都轉譯後才執行。 \n 連結器 \xa0 (linker)：將由編譯器或組譯器產生的目的檔和外部程式庫連結為一個可執行檔案。 \n 載入器 \xa0 (loader)：負責將程式載入到記憶體中，並組態記憶體與相關參數，使之能夠執行，現今許多整合開發環境 (IDE) 整合了編譯器與載入器，使的開發人員可以在編譯後立即執行測試結果。 \n 組譯器 \xa0 (assembly)：將用組合語言編寫，或是編譯器轉換過程中產生的組合語言檔案，轉換成機器語言檔案。 \n 除錯器 \xa0 (debugger)：用於偵錯其它程式，能夠讓程式碼在指令組模擬器（ISS）中可以檢查執行狀況以及選擇性地執行 (例如設定中斷點)。 \n 硬體 驅動程式 \xa0 (driver)：它提供了一個軟硬體介面，讓電腦軟體可以與硬體互動的程式。 \n 公用程式 ：管理電腦的許多工具程式，如:檔案管理程式、格式化工具、磁碟管理。 \n \n', 'tags': '', 'url': '系統軟體.html'}, {'title': '應用軟體', 'text': '應用程式 （英語： application program ）或 應用軟體 （ application software ），簡稱 應用 （ app ），是 電腦軟體 的主要分類之一，是指為針對使用者的某種特殊應用目的所撰寫的電腦程式，例如 文字處理器 ，表格，會計應用，瀏覽器，媒體播放器，航空飛行模擬器，命令行遊戲，圖像編輯器等。與之相對應的是主要功能為驅動電腦執行的系統軟體。或者說，應用軟體可以直接完成終端用戶的工作。從某種意義上來講，系統軟體是為應用軟體服務的，應用軟體才是真正直接 提高用戶工作的。 \n 應用軟體可能與電腦及其系統軟體相捆綁，也可以被分開發布，並且可能以私有、開源或通用專案的形式編寫。 [3] 為行動平台所編寫的應用被稱為行動應用。 \n 從目前的電腦應用現狀來看，業內已有各種各樣的應用軟體，許多專家也從不同的角度提出了多種不同的應用軟體分類方式。 \n 應用軟體是為了某種特定的用途而被開發的軟體。它可以是一個特定的程式，比如一個圖片檢視器。也可以是一組功能聯絡緊密，可以互相協同運作的程式的集合，比如 微軟 的 Office 軟體。也可以是一個由眾多獨立程式組成的龐大的軟體系統，比如 資料庫 管理系統。 \n 較常見的有 \n \n 文書處理軟體 如 Office 、 GNOME Office 、 \xa0 KOffice 、 LibreOffice 、 Google Docs 、 WPS Office \n 關聯式資料庫 如 Oracle Database 資料庫、 SQL Server 資料庫 \n 電腦輔助設計 如 CATIA 、 AutoCAD 、 FreeCAD \n 電腦程式設計 如 C / C++ 、 組合語言 、 BASIC \xa0 、 \xa0 Swift 、 JavaScript 、 Java \n P2P軟體 如 BitTorrent 、 \xa0 µTorrent \xa0 、 Foxy 、 比特精靈 、 Vuze 、 \xa0 Free Download Manager \n 影像處理軟體 如 Photoshop 、 CorelDRAW 、 Corel painter 、 GIMP 、 MAYA 、 Softimage 、 3ds Max 、 Blender 、 xsi 、 lightwave 、 Cinema 4D 、 Houdini 、 Krita \n 動態圖形 和 視覺特效 如 After Effects 、 shake \n 網頁瀏覽軟體 如 Internet Explorer 、 Edge 、 Firefox 、 Chrome 、 Safari 、 Opera 、 Konqueror \n 網路通訊軟體 如 Line 、 ICQ 、 Windows Live Messenger 、 UUcall 、 Skype 、 Yahoo! Messenger 、 QQ 、 AOL Instant Messenger \n 媒體播放器 如 MPC-HC 、 MPlayer 、 RealPlayer 、 GOM 、 VLC 、 WMP 、 暴風影音 、 風雷影音、 Winamp 、 Foobar2000 \n 下載管理軟體 如 Free Download Manager 、 IDM \n 電子郵件 如 Outlook.com 、 Windows Live Mail 、 Outlook Express 、 Foxmail 、 ThunderBird 、 Dreammail 、 KMail \n 資訊安全軟體 如 ESET 、 360安全衛士 、 德國小紅傘 、 卡巴斯基 、 PC-cillin 、 諾頓防毒 、 BitDefender 、 瑞星防毒 、 金山毒霸 \n 虛擬機器 如 VMware 、 VirtualBox 、 Microsoft Virtual PC 、 Bochs \n 輸入法 軟體如 新酷音輸入法 、 Google拼音輸入法 \n 實時控制系統 \n 教育軟體 \n \n', 'tags': '', 'url': '應用軟體.html'}, {'title': '惡意軟體', 'text': '惡意軟體 （英語： Malware , \xa0 malicious software ），又稱「 流氓軟體 」，一般是指通過網路、可攜式儲存裝置等途徑散播的，故意對個人電腦、伺服器、智慧型裝置、電腦網路等造成隱私或機密資料外洩、系統損害（包括但不限於系統崩潰等）、資料丟失等非使用預期故障及資安問題，並且試圖以各種方式阻擋使用者移除它們，如同「 流氓 」一樣的軟體。 惡意軟體的形式包括二進位可執行檔、指令碼、活動內容等。 就定義來說，電腦病毒、電腦蠕蟲、特洛伊木馬、勒索軟體、間諜軟體、恐嚇軟體、利用漏洞執行的軟體、甚至是一些廣告軟體，也被囊括在惡意軟體的分類中。不過，無意的非使用預期的電腦裝置故障，則一般視作軟體臭蟲（ software bug ）。 \n \n 2006年11月9日， 中國互聯網協會 公布了惡意軟體的官方定義如下： \n 惡意軟體（俗稱「流氓軟體」）是指在未明確提示用戶或未經用戶許可的情況下，在用戶電腦或其他 終端 上安裝執行，侵犯用戶合法權益的軟體。 \n \n 強制安裝：指在未明確提示用戶或未經用戶許可的情況下，在用戶電腦或其他終端上安裝軟體的行為。 \n 難以解除安裝：指未提供通用的解除安裝方式，或在不受其他軟體影響、人為破壞的情況下，解除安裝後仍活動程式的行為。 \n 瀏覽器 劫持：指未經用戶許可，修改用戶瀏覽器或其他相關設定，迫使用戶存取特定網站或導致用戶無法正常上網的行為。 \n 廣告 彈出：指未明確提示用戶或未經用戶許可的情況下，利用安裝在用戶電腦或其他終端上的軟體彈出廣告的行為。 \n 惡意收集用戶資訊：指未明確提示用戶或未經用戶許可，惡意收集用戶資訊的行為。 \n 惡意解除安裝：指未明確提示用戶、未經用戶許可，或誤導、欺騙用戶解除安裝非惡意軟體的行為。 \n 惡意捆綁：指在軟體中捆綁已被認定為惡意軟體的行為。 \n 其他侵犯用戶 知情權 、選擇權的惡意行為。 \n \n', 'tags': '', 'url': '惡意軟體.html'}, {'title': '韌體(firmware)', 'text': '韌體 （英語： firmware ），是一種嵌入在 硬體 裝置中的 軟體 。通常它是位於 特殊應用積體電路 （ASIC）或 可程式邏輯裝置 （PLD）之中的 快閃記憶體 或 EEPROM 或 PROM 裡，有的可以讓使用者更新。可以應用在非常廣泛的電子產品中，從 遙控器 、 計算機 到 電腦 中的 鍵盤 、 硬碟 ，甚至 工業機器人 中都可見到它的身影。 \n 顧名思義，韌體的所在是位於軟體和硬體之間的。像軟體一樣，他是一個被電腦所執行的程式。然而它是對於硬體內部而言更加貼近以及更加重要的部份，而對於外在的世界而言較無重要的意義。 \n \n 韌體已經演進為一個硬體裝置當中的可程式化的內容，比如說韌體可能包含有一處理器之機器碼或者固定功能之裝置，或是閘道陣列或者可程式化之邏輯裝置之設定。 \n 韌體的一個一般性的特色是它可以隨時以 電流清除並重寫 或 更換儲存媒介 的方式更新。 \n 韌體可以（但並非必需）暴露出一個可由外界連接的介面。比如說在某些數據機的實作中，韌體並非可以直接存取，但卻是由硬體以及韌體所組成回應主機的一部分。 \n 韌體原本被存放在於ROM中，然而價格以及效能的需求已經讓原件供應商妥協於其他的替代方案，包含了非揮發性的媒體比如說EEPROM以及快閃記憶體或是SRAM的解決方案。 \n \n', 'tags': '', 'url': '韌體(firmware).html'}, {'title': '課程進度', 'text': '', 'tags': '', 'url': '課程進度.html'}, {'title': 'W1-W6', 'text': '1.將遠端的 wcmj2020 以 git clone 取下. \n \xa0 \xa0 \xa0git clone\xa0 https://github.com/50833101/wcmj2020.git \n \xa0 \xa0 \xa0git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0 cmsimde \n 2.進入 cmsimde 以 python wsgi.py 啟動動態系統 \n \xa0 \xa0 \xa0以瀏覽器\xa0 https://localhost:9443 \xa0 可以利用 admin 為帳號登入管理 \n 3.動態系統維護後, 利用 generate_pages 轉為靜態. \n \n 4.\xa0git add .\xa0 \xa0 \xa0git commit -m "commit message"\xa0 \xa0 \xa0git push \n', 'tags': '', 'url': 'W1-W6.html'}, {'title': 'W7', 'text': '1.介紹 portable OBS . google meet . shareX \n 2.利用google meet做線上教學 \n 3.學習用portable OBS 做串流直播 \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '1.第一次線上直播教學測試 \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '1.第一次線上直播教學(google meet) \n 2.完成期中作業 \n 3.完成填寫自評分數 \n \n \n', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '1. 利用 putty 建立 public key / private key \n 2. 利用cmd 將 public key 轉成 github接受的格式 \n 3. 將轉換後的 public key 放到 github-setting 中的SSH keys \n 4.\xa0 利用 puttygen.exe 將 id_rsa 轉為 Putty 可以解讀的 .ppk 格式, 並修改隨身系統的啟動批次檔案, 指定利用 putty 目錄下的 plink 執行 git 指令的網路代理設定. \n 5. 利用 puttygen.exe 載入第二步驟所建立的 private key, 也就是 id_rsa.開啟 puttygen 之後, 以右下方的 load 載入 id_rsa, 成功載入後, 利用 save private key 按鈕, 將已經轉為 putty 格式的 .ppk 存檔. 此一 .ppk 檔案必須在設定 putty 中 github.com session 時, 在 Connection->SSH->Auth 項目下, 將轉檔後的 .ppk 指向 private key file for authentication 欄位.\xa0並在 Connection->Proxy 項目下, 指定 Proxy type: HTTP, 並將 IPv6 代理主機設為 ::53 或 ::42 埠號設為 3128. \n 6. 最後再將 wcmj2020 倉儲中 .git 目錄下的 config 檔案中的連線協定, 由 https 改為採 ssh 連線 \n 之後就可以透過近端的 .ppk private key 與 Github.com 上的 public key 對應, 無需輸入帳號密碼就可以進行 git push. \n p.s.\xa0 若找不到.git 試著將隱藏目錄的設定移除, 看能否進入 .git 目錄, 然後看到 config 檔案. \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '將上個禮拜未完成的進度完成後利用leo指令打開Editer leo,將網誌轉為近端,最後可以在近端檢視網誌 \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '利用隨身系統的leo指令啟動Editer leo \n 利用Editer leo新增節點,編輯網誌並轉成近端及遠端 \n \n 若要在Editer leo中插入程式碼筆記需加入 \n <pre class="brush python">作開頭 \n </pre>作結尾 \n \n Editer leo指令: \n Ctrl+I 新增一個新的節點 \n Delete 刪除節點 \n Ctrl+R 將節點往右(right)移動 \n Ctrl+L 將節點往左(left)移動 \n Ctrl+U 將節點往上(up)移動 \n Ctrl+D 將節點向下(down)移動 \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13-W14', 'text': '如何利用leo editer 將pelican blog 跟google blogger 同步 \n \n 隨身程式系統必須安裝\xa0 google-api-python-client 與 oauth2client \xa0 \xa0 \xa0 \xa0<pip install google-api-python-client oauth2client> \n 在leo editer 建立add_to_blogger 及edit_to_blogger 兩個按鈕 \n 將 網站 上的按鈕內容複製貼上到leo editer 的按鈕內容裡 \n 利用學生帳號登入 google blogger api \n 開啟blogger API服務 \n 建立一個Desktop client 類型的憑證 \n 並將其儲存成client_secrets.json 使用者完成 client_secrets.json 設定後, 必須將檔案存在倉儲目錄外部 \n 即可使用add_to_blogger按鈕將網誌新增至google blogger \n 使用edit_to_blogger按鈕將更新後的網誌同步至google blogger \n \n \n 準備W15-W18的期末總整理 \n \n', 'tags': '', 'url': 'W13-W14.html'}, {'title': 'W15-W18', 'text': '將 W1-W14 週的所有上課內容, 以圖文及影音資料加以整理在個人及分組倉儲、網站及簡報並另選一主題, 將分組協同的過程與內容整理在個人與分組的倉儲資料中 \n \n \n \n \n', 'tags': '', 'url': 'W15-W18.html'}]};