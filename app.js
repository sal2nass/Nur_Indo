// NUR Halaqah - clean build. Admin 111, halaqa codes, student codes. localStorage.
const LS = "nur-halaqah-v1";
const $ = (s) => document.querySelector(s);

const I18N = {
  ar: {
    brand_name: "نور", brand_sub: "حلقة تحفيظ القرآن - اندونيسيا",
    nav_home: "الرئيسية", nav_about: "من نحن", nav_register: "التسجيل", nav_login: "دخول الطلاب",
    notice_all: "كل الإعلانات",
    hero_badge: "اندونيسيا - عمر 10 الى 25 سنة",
    hero_title: "احفظ القرآن، خطوة بخطوة.",
    hero_sub: "مجموعات صغيرة، متابعة واضحة، وولي الأمر يرى كل شيء.",
    hero_cta1: "التسجيل", hero_cta2: "دخول الطلاب",
    sched_title: "مواعيد الحلقة", d1: "الاثنين", d2: "الاربعاء", d3: "الجمعة",
    sched_note: "المدة 90 دقيقة لكل لقاء.",
    ann_title: "الاعلانات", ann_sub: "آخر ما اعلنه المشرف.",
    steps_title: "ثلاث خطوات فقط",
    step1_t: "سجل اسمك", step1_d: "دقيقة واحدة.",
    step2_t: "استلم رقمك", step2_d: "رقم دخول خاص بك.",
    step3_t: "تابع تقدمك", step3_d: "درجات وحضور وواجبات.",
    about_title: "من نحن", about_sub: "حلقة تحفيظ القرآن في اندونيسيا.",
    ab1t: "مجموعات صغيرة", ab1d: "كل حلقة بعدد محدود.",
    ab2t: "متابعة موثقة", ab2d: "حفظ ودرجات وحضور.",
    ab3t: "ولي الامر مطلع", ab3d: "يدخل برقم الطالب.",
    reg_title: "التسجيل بالحلقة", reg_sub: "مجانا. نتواصل معك بعد التسجيل.",
    f_name: "الاسم الكامل", f_name_ph: "الاسم", f_age: "العمر", f_wa: "واتساب",
    f_guardian: "اسم ولي الامر", f_submit: "تسجيل",
    login_title: "تسجيل الدخول", login_sub: "ادخل رقمك. المشرف: 111.",
    login_btn: "دخول",
    login_hint: "رقم الحلقة يعرض طلابها. رقمك الخاص يفتح ملفك.",
    admin_title: "لوحة المشرف", admin_sub: "ادارة الطلاب والحلقات والاعلانات.",
    logout: "خروج", tab_students: "الطلاب", tab_halaqat: "الحلقات", tab_news: "الاعلانات",
    search_ph: "بحث بالاسم او الرقم", h_ar_ph: "اسم الحلقة بالعربية",
    n_ar_ph: "الخبر بالعربية", add: "اضافة", publish: "نشر",
    back: "رجوع", foot: "حلقة تحفيظ القرآن - اندونيسيا"
  },
  id: {
    brand_name: "NUR", brand_sub: "Halaqah Tahfiz Quran - Indonesia",
    nav_home: "Beranda", nav_about: "Tentang", nav_register: "Daftar", nav_login: "Masuk Santri",
    notice_all: "Semua info",
    hero_badge: "Indonesia - Usia 10-25 tahun",
    hero_title: "Hafal Quran, langkah demi langkah.",
    hero_sub: "Kelompok kecil, pantauan jelas, wali bisa melihat semua.",
    hero_cta1: "Daftar", hero_cta2: "Masuk Santri",
    sched_title: "Jadwal Halaqah", d1: "Senin", d2: "Rabu", d3: "Jumat",
    sched_note: "Durasi 90 menit per pertemuan.",
    ann_title: "Pengumuman", ann_sub: "Info terbaru dari admin.",
    steps_title: "Tiga langkah saja",
    step1_t: "Isi nama", step1_d: "Satu menit.",
    step2_t: "Terima kodemu", step2_d: "Kode masuk pribadi.",
    step3_t: "Pantau progres", step3_d: "Nilai, hadir, tugas.",
    about_title: "Tentang Kami", about_sub: "Halaqah tahfiz Quran di Indonesia.",
    ab1t: "Kelompok kecil", ab1d: "Tiap halaqah terbatas.",
    ab2t: "Pantauan tercatat", ab2d: "Hafalan, nilai, hadir.",
    ab3t: "Wali memantau", ab3d: "Masuk dengan kode santri.",
    reg_title: "Pendaftaran", reg_sub: "Gratis. Kami hubungi setelah mendaftar.",
    f_name: "Nama lengkap", f_name_ph: "Nama", f_age: "Usia", f_wa: "WhatsApp",
    f_guardian: "Nama wali", f_submit: "Daftar",
    login_title: "Masuk", login_sub: "Masukkan kodemu. Admin: 111.",
    login_btn: "Masuk",
    login_hint: "Kode halaqah menampilkan santrinya. Kode pribadimu membuka raportmu.",
    admin_title: "Panel Admin", admin_sub: "Kelola santri, halaqah, info.",
    logout: "Keluar", tab_students: "Santri", tab_halaqat: "Halaqah", tab_news: "Info",
    search_ph: "Cari nama atau kode", h_ar_ph: "Nama Arab halaqah",
    n_ar_ph: "Berita (Arab)", add: "Tambah", publish: "Kirim",
    back: "Kembali", foot: "Halaqah Tahfiz Quran - Indonesia"
  }
};

function seed() {
  return {
    lang: "ar",
    news: [
      { id: 1, ar: "مسابقة الحفظ الكبرى يوم الجمعة بعد العصر.", id_text: "Lomba hafalan Jumat bada Ashar.", date: "2026-10-08" },
      { id: 2, ar: "حلقة جديدة: سورة الملك - التسجيل مفتوح.", id_text: "Halaqah baru: Al-Mulk - pendaftaran dibuka.", date: "2026-10-06" },
      { id: 3, ar: "الدوام: الاثنين والاربعاء والجمعة 16:00.", id_text: "Jadwal: Senin, Rabu, Jumat 16.00.", date: "2026-10-01" }
    ],
    halaqas: [
      { id: "h1", name_ar: "حلقة ابو بكر الصديق", name_id: "Halaqah Abu Bakar", code: "1122" },
      { id: "h2", name_ar: "حلقة عمر بن الخطاب", name_id: "Halaqah Umar", code: "2233" }
    ],
    students: [
      { id: "s1", name: "احمد فوزي", age: 14, wa: "081234567", guardian: "Pak Fauzi", halaqaId: "h1", code: "5001", progress_ar: "سورة الملك حتى آية 12", progress_id: "Al-Mulk ayat 12", homework_ar: "مراجعة 5 آيات", homework_id: "Murajaah 5 ayat", attendance: [{ d: "2026-10-06", p: 1 }, { d: "2026-10-08", p: 1 }], grades: [{ t: "الملك 1-5", s: 95 }] },
      { id: "s2", name: "بلال رمضان", age: 12, wa: "081987654", guardian: "Ibu Sari", halaqaId: "h1", code: "5002", progress_ar: "سورة الكهف آية 10", progress_id: "Al-Kahfi ayat 10", homework_ar: "حفظ آيتين", homework_id: "Hafal 2 ayat", attendance: [{ d: "2026-10-06", p: 1 }, { d: "2026-10-08", p: 0 }], grades: [{ t: "مراجعة", s: 85 }] },
      { id: "s3", name: "فاطمة زهرة", age: 16, wa: "082111222", guardian: "Pak Hadi", halaqaId: null, code: "5003", progress_ar: "بانتظار الفرز", progress_id: "Menunggu penempatan", homework_ar: "-", homework_id: "-", attendance: [], grades: [] }
    ]
  };
}

let DB;
try { DB = JSON.parse(localStorage.getItem(LS)) || seed(); } catch (e) { DB = seed(); }
if (!DB.halaqas) DB = seed();
function save() { localStorage.setItem(LS, JSON.stringify(DB)); }
function lang() { return DB.lang || "ar"; }
function T(k) { const d = I18N[lang()] || I18N.ar; return d[k] || I18N.ar[k] || k; }
function hName(h) { return lang() === "ar" ? h.name_ar : h.name_id; }
function esc(s) {
  return String(s == null ? "" : s).split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;");
}
function today() { return new Date().toISOString().slice(0, 10); }
function isAr() { return lang() === "ar"; }

// ---------- nav ----------
document.querySelectorAll("[data-go]").forEach(function (b) { b.onclick = function () { go(b.dataset.go); }; });
function go(v) {
  document.querySelectorAll(".view").forEach(function (x) { x.classList.remove("active"); });
  $("#view-" + v).classList.add("active");
  document.querySelectorAll(".nav button").forEach(function (n) { n.classList.toggle("active", n.dataset.go === v); });
  window.scrollTo({ top: 0 });
}
function applyLang() {
  const l = lang();
  document.documentElement.lang = l === "ar" ? "ar" : "id";
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("ar", l === "ar");
  document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = T(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { el.placeholder = T(el.dataset.i18nPh); });
  $("#langBtn").textContent = l === "ar" ? "ID" : "AR";
}
$("#langBtn").onclick = function () { DB.lang = isAr() ? "id" : "ar"; save(); renderAll(); };
$("#noticeAll").onclick = function () { $("#newsGrid").scrollIntoView({ behavior: "smooth", block: "start" }); };

// ---------- home ----------
function renderNotice() {
  const n = DB.news[0];
  $("#noticeBar").style.display = n ? "flex" : "none";
  if (n) $("#noticeText").textContent = isAr() ? n.ar : n.id_text;
}
function renderHome() {
  const rows = DB.news.slice(0, 5).map(function (n) {
    return '<div class="news-row"><time>' + esc(n.date) + "</time><p>" + esc(isAr() ? n.ar : n.id_text) + "</p></div>";
  });
  $("#newsGrid").innerHTML = rows.join("") || '<div class="news-row"><p>-</p></div>';
}

// ---------- register ----------
let lastCode = null;
$("#regForm").onsubmit = function (e) {
  e.preventDefault();
  const name = $("#rName").value.trim();
  if (!name) return;
  let code = "";
  do { code = String(Math.floor(5000 + Math.random() * 4999)); }
  while (code === "111" || DB.halaqas.some(function (h) { return h.code === code; }) || DB.students.some(function (s) { return s.code === code; }));
  DB.students.push({
    id: "s" + Date.now(), name: name, age: +$("#rAge").value || 0,
    wa: $("#rWa").value.trim(), guardian: $("#rGuardian").value.trim(),
    halaqaId: null, code: code,
    progress_ar: "بانتظار الفرز", progress_id: "Menunggu penempatan",
    homework_ar: "-", homework_id: "-",
    attendance: [], grades: []
  });
  save();
  lastCode = code;
  e.target.reset();
  const ok = $("#regOk");
  ok.classList.remove("hidden");
  const msg = isAr()
    ? "تم تسجيل <b>" + esc(name) + "</b>.<br>رقم الدخول الخاص بك:<br>" + codeHtml(code) + '<br><button class="btn" id="goLogin">دخول برقمي</button>'
    : "Pendaftaran <b>" + esc(name) + "</b> berhasil.<br>Kode masuk pribadimu:<br>" + codeHtml(code) + '<br><button class="btn" id="goLogin">Masuk</button>';
  ok.innerHTML = msg;
  $("#goLogin").onclick = function () { go("login"); $("#loginCode").value = lastCode; $("#pickList").classList.add("hidden"); };
  window.scrollTo({ top: document.body.scrollHeight });
};
function codeHtml(code) { return '<span class="code-big">' + esc(code) + "</span>"; }

// ---------- login ----------
$("#loginBtn").onclick = doLogin;
$("#loginCode").addEventListener("keydown", function (e) { if (e.key === "Enter") doLogin(); });
function doLogin() {
  const c = $("#loginCode").value.trim();
  const err = $("#loginErr");
  const box = $("#pickList");
  err.classList.add("hidden");
  box.classList.add("hidden");
  box.innerHTML = "";
  if (c === "111") { go("admin"); renderAdmin(); return; }
  const h = DB.halaqas.find(function (x) { return x.code === c; });
  if (h) {
    const list = DB.students.filter(function (s) { return s.halaqaId === h.id; });
    box.classList.remove("hidden");
    let html = '<div class="hintline">' + esc(hName(h)) + " - " + list.length + "</div>";
    html += list.map(function (s) { return '<button data-s="' + s.id + '">' + esc(s.name) + "</button>"; }).join("");
    if (!list.length) html += '<div class="hintline">-</div>';
    box.innerHTML = html;
    box.querySelectorAll("button[data-s]").forEach(function (b) { b.onclick = function () { showStudent(b.dataset.s); }; });
    return;
  }
  const s = DB.students.find(function (x) { return x.code === c; });
  if (s) { showStudent(s.id); return; }
  err.classList.remove("hidden");
  err.textContent = isAr() ? "الرقم غير صحيح. تحقق منه او اسال المشرف." : "Kode salah. Periksa lagi atau tanya admin.";
}
function attPct(s) {
  if (!s.attendance.length) return 0;
  return Math.round(s.attendance.filter(function (a) { return a.p; }).length / s.attendance.length * 100);
}
function avgGr(s) {
  if (!s.grades.length) return "-";
  return Math.round(s.grades.reduce(function (a, g) { return a + (+g.s || 0); }, 0) / s.grades.length);
}
function gradeLines(s) {
  return s.grades.map(function (g, i) {
    return '<div class="gline"><span>' + esc(g.t) + " - <b>" + esc(g.s) + '</b></span><button data-gdel="' + s.id + "|" + i + '">x</button></div>';
  }).join("");
}
function halaqaOptions(sel) {
  return DB.halaqas.map(function (x) {
    return '<option value="' + x.id + '"' + (x.id === sel ? " selected" : "") + ">" + esc(hName(x)) + "</option>";
  }).join("");
}
function attDots(s) {
  return s.attendance.slice(-30).map(function (a) {
    return '<i class="' + (a.p ? "" : "no") + '" title="' + esc(a.d) + '"></i>';
  }).join("");
}
function showStudent(id) {
  const s = DB.students.find(function (x) { return x.id === id; });
  if (!s) return;
  const h = DB.halaqas.find(function (x) { return x.id === s.halaqaId; });
  const A = isAr();
  go("student");
  let html = '<div class="profile">';
  html += '<div class="prof-head"><span class="avatar">' + esc((s.name || "?").trim()[0]) + "</span>";
  html += "<h2>" + esc(s.name) + "</h2><br>";
  html += '<span class="hchip">' + (h ? esc(hName(h)) : (A ? "بانتظار الفرز" : "Menunggu penempatan")) + "</span></div>";
  html += '<div class="kpis">';
  html += '<div class="kpi"><b>' + attPct(s) + "%</b><span>" + (A ? "الحضور" : "Kehadiran") + "</span></div>";
  html += '<div class="kpi"><b>' + avgGr(s) + "</b><span>" + (A ? "المعدل" : "Rata-rata") + "</span></div>";
  html += '<div class="kpi"><b>' + s.grades.length + "</b><span>" + (A ? "تسميع" : "Setoran") + "</span></div>";
  html += "</div>";
  html += '<div class="psec">';
  html += "<h4>" + (A ? "اين وصلت" : "Progres") + '</h4><div class="pbox">' + (esc(A ? s.progress_ar : s.progress_id) || "-") + "</div>";
  html += "<h4>" + (A ? "الواجب" : "Tugas") + '</h4><div class="pbox">' + (esc(A ? s.homework_ar : s.homework_id) || "-") + "</div>";
  html += "<h4>" + (A ? "الدرجات" : "Nilai") + '</h4><div class="pbox">' + (gradeLines(s) || "-") + "</div>";
  html += "<h4>" + (A ? "الحضور" : "Hadir") + '</h4><div class="attDots">' + (attDots(s) || "-") + "</div>";
  html += "</div></div>";
  $("#studentCard").innerHTML = html;
}

// ---------- admin ----------
document.querySelectorAll(".tabs button").forEach(function (b) {
  b.onclick = function () {
    document.querySelectorAll(".tabs button").forEach(function (x) { x.classList.remove("active"); });
    b.classList.add("active");
    document.querySelectorAll("#view-admin .tab").forEach(function (x) { x.classList.remove("active"); });
    $("#tab-" + b.dataset.tab).classList.add("active");
  };
});
$("#logoutBtn").onclick = function () { $("#loginCode").value = ""; go("home"); };
function renderAdmin() { renderFilter(); renderAdminStudents(); renderHalaqat(); renderNewsAdmin(); }
function renderFilter() {
  const A = isAr();
  $("#filterH").innerHTML = '<option value="">' + (A ? "الكل" : "Semua") + '</option><option value="__none__">' + (A ? "بلا حلقة" : "Belum ditempatkan") + "</option>" + DB.halaqas.map(function (h) {
    return '<option value="' + h.id + '">' + esc(hName(h)) + " - " + h.code + "</option>";
  }).join("");
}
$("#search").oninput = renderAdminStudents;
$("#filterH").onchange = renderAdminStudents;
function copyTxt(txt, btn) {
  const back = btn.textContent;
  const done = function () { btn.textContent = isAr() ? "تم" : "OK"; setTimeout(function () { btn.textContent = back; }, 900); };
  if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(txt).then(done).catch(done); }
  else { done(); }
}
function stuCard(s, A) {
  let html = '<div class="stu">';
  html += '<div class="stu-top"><span class="avatar">' + esc((s.name || "?").trim()[0]) + "</span>";
  html += '<div class="stu-id"><b>' + esc(s.name) + "</b><small>" + esc(s.age) + " - " + esc(s.wa) + " - " + esc(s.guardian || "-") + "</small></div>";
  html += '<span class="codechip">' + esc(s.code) + '<button data-copy="' + esc(s.code) + '">' + (A ? "نسخ" : "Salin") + "</button></span></div>";
  html += '<div class="stu-work">';
  html += '<select data-h="' + s.id + '"><option value="">' + (A ? "بلا حلقة" : "-") + "</option>" + halaqaOptions(s.halaqaId) + "</select>";
  html += '<div class="att"><button class="abtn y" data-att="' + s.id + '|1">' + (A ? "حاضر" : "Hadir") + '</button><button class="abtn" data-att="' + s.id + '|0">' + (A ? "غائب" : "Absen") + '</button><span class="pct">' + attPct(s) + "%</span></div>";
  html += "</div>";
  html += '<details class="more"><summary>' + (A ? "الدرجات والتقدم والواجب" : "Nilai, progres, tugas") + "</summary>";
  html += '<div class="mgrid">';
  html += '<div class="box"><h4>' + (A ? "الدرجات" : "Nilai") + "</h4>" + gradeLines(s);
  html += '<div class="mrow"><input data-gt="' + s.id + '" placeholder="' + (A ? "المادة" : "Materi") + '"><input data-gs="' + s.id + '" type="number" min="0" max="100" placeholder="0-100" style="max-width:84px"><button class="mbtn" data-gadd="' + s.id + '">+</button></div></div>';
  html += '<div class="box"><h4>' + (A ? "التقدم" : "Progres") + "</h4>";
  html += '<div class="mrow"><input data-par="' + s.id + '" value="' + esc(s.progress_ar) + '" placeholder="AR"><input data-pid="' + s.id + '" value="' + esc(s.progress_id) + '" placeholder="ID"></div>';
  html += '<div class="mrow"><button class="mbtn" data-psave="' + s.id + '">' + (A ? "حفظ" : "Simpan") + "</button></div></div>";
  html += '<div class="box"><h4>' + (A ? "الواجب" : "Tugas") + "</h4>";
  html += '<div class="mrow"><input data-har="' + s.id + '" value="' + esc(s.homework_ar) + '" placeholder="AR"><input data-hid="' + s.id + '" value="' + esc(s.homework_id) + '" placeholder="ID"></div>';
  html += '<div class="mrow"><button class="mbtn" data-hsave="' + s.id + '">' + (A ? "حفظ" : "Simpan") + "</button></div></div>";
  html += '<div class="box"><h4>' + (A ? "حذف الطالب" : "Hapus santri") + "</h4>";
  html += '<div class="mrow"><button class="mbtn danger" data-del="' + s.id + '">' + (A ? "حذف" : "Hapus") + "</button></div></div>";
  html += "</div></details></div>";
  return html;
}
function renderAdminStudents() {
  const q = ($("#search").value || "").toLowerCase();
  const f = $("#filterH").value;
  const A = isAr();
  let list = DB.students.filter(function (s) { return (s.name + (s.code || "")).toLowerCase().indexOf(q) >= 0; });
  if (f === "__none__") list = list.filter(function (s) { return !s.halaqaId; });
  else if (f) list = list.filter(function (s) { return s.halaqaId === f; });
  $("#adminStudents").innerHTML = list.map(function (s) { return stuCard(s, A); }).join("") || '<p class="lead">-</p>';
  document.querySelectorAll("[data-h]").forEach(function (sel) {
    sel.onchange = function () {
      const st = DB.students.find(function (x) { return x.id === sel.dataset.h; });
      st.halaqaId = sel.value || null;
      save();
      renderAdminStudents();
    };
  });
  document.querySelectorAll("[data-att]").forEach(function (b) {
    b.onclick = function () {
      const parts = b.dataset.att.split("|");
      const st = DB.students.find(function (x) { return x.id === parts[0]; });
      st.attendance.push({ d: today(), p: +parts[1] });
      save();
      renderAdminStudents();
    };
  });
  document.querySelectorAll("[data-del]").forEach(function (b) {
    b.onclick = function () {
      if (!confirm("x")) return;
      DB.students = DB.students.filter(function (x) { return x.id !== b.dataset.del; });
      save();
      renderAdminStudents();
    };
  });
  document.querySelectorAll("[data-gadd]").forEach(function (b) {
    b.onclick = function () {
      const st = DB.students.find(function (x) { return x.id === b.dataset.gadd; });
      const ti = document.querySelector('[data-gt="' + st.id + '"]').value.trim() || "-";
      const sc = +document.querySelector('[data-gs="' + st.id + '"]').value || 0;
      st.grades.push({ t: ti, s: sc });
      save();
      renderAdminStudents();
    };
  });
  document.querySelectorAll("[data-gdel]").forEach(function (b) {
    b.onclick = function () {
      const parts = b.dataset.gdel.split("|");
      const st = DB.students.find(function (x) { return x.id === parts[0]; });
      st.grades.splice(+parts[1], 1);
      save();
      renderAdminStudents();
    };
  });
  document.querySelectorAll("[data-psave]").forEach(function (b) {
    b.onclick = function () {
      const st = DB.students.find(function (x) { return x.id === b.dataset.psave; });
      st.progress_ar = document.querySelector('[data-par="' + st.id + '"]').value;
      st.progress_id = document.querySelector('[data-pid="' + st.id + '"]').value;
      save();
    };
  });
  document.querySelectorAll("[data-hsave]").forEach(function (b) {
    b.onclick = function () {
      const st = DB.students.find(function (x) { return x.id === b.dataset.hsave; });
      st.homework_ar = document.querySelector('[data-har="' + st.id + '"]').value;
      st.homework_id = document.querySelector('[data-hid="' + st.id + '"]').value;
      save();
    };
  });
  document.querySelectorAll("[data-copy]").forEach(function (b) { b.onclick = function () { copyTxt(b.dataset.copy, b); }; });
}

// ---------- halaqat ----------
$("#hAdd").onclick = function () {
  const ar = $("#hNameAr").value.trim();
  const idn = $("#hNameId").value.trim() || ar;
  const code = $("#hCode").value.trim();
  if (!ar || !code) { alert(isAr() ? "اكمل الاسم والرمز" : "Lengkapi nama dan kode"); return; }
  const used = code === "111" || DB.halaqas.some(function (h) { return h.code === code; }) || DB.students.some(function (s) { return s.code === code; });
  if (used) { alert(isAr() ? "الرمز مستخدم" : "Kode dipakai"); return; }
  DB.halaqas.push({ id: "h" + Date.now(), name_ar: ar, name_id: idn, code: code });
  save();
  $("#hNameAr").value = "";
  $("#hNameId").value = "";
  $("#hCode").value = "";
  renderHalaqat();
  renderFilter();
};
function renderHalaqat() {
  const A = isAr();
  $("#halaqaList").innerHTML = DB.halaqas.map(function (h) {
    const n = DB.students.filter(function (s) { return s.halaqaId === h.id; }).length;
    let html = '<div class="hrow"><b>' + esc(hName(h)) + '</b> <small style="color:var(--muted)">' + esc(h.name_ar) + " - " + esc(h.name_id) + " - " + n + "</small> ";
    html += '<span class="codechip">' + esc(h.code) + '<button data-hcopy="' + esc(h.code) + '">' + (A ? "نسخ" : "Salin") + "</button></span>";
    html += '<div class="mrow"><input data-ear="' + h.id + '" value="' + esc(h.name_ar) + '"><input data-eid="' + h.id + '" value="' + esc(h.name_id) + '"><input data-ecd="' + h.id + '" value="' + esc(h.code) + '" style="max-width:96px"><button class="mbtn" data-esv="' + h.id + '">' + (A ? "حفظ" : "Simpan") + '</button><button class="mbtn danger" data-edel="' + h.id + '">x</button></div></div>';
    return html;
  }).join("");
  document.querySelectorAll("[data-esv]").forEach(function (b) {
    b.onclick = function () {
      const h = DB.halaqas.find(function (x) { return x.id === b.dataset.esv; });
      const nc = document.querySelector('[data-ecd="' + h.id + '"]').value.trim();
      const clash = nc !== h.code && (nc === "111" || DB.halaqas.some(function (x) { return x.code === nc; }) || DB.students.some(function (x) { return x.code === nc; }));
      if (clash) { alert(isAr() ? "الرمز مستخدم" : "Kode dipakai"); return; }
      h.name_ar = document.querySelector('[data-ear="' + h.id + '"]').value;
      h.name_id = document.querySelector('[data-eid="' + h.id + '"]').value;
      h.code = nc;
      save();
      renderHalaqat();
      renderFilter();
    };
  });
  document.querySelectorAll("[data-edel]").forEach(function (b) {
    b.onclick = function () {
      if (!confirm("x")) return;
      DB.students.forEach(function (s) { if (s.halaqaId === b.dataset.edel) s.halaqaId = null; });
      DB.halaqas = DB.halaqas.filter(function (x) { return x.id !== b.dataset.edel; });
      save();
      renderHalaqat();
      renderFilter();
    };
  });
  document.querySelectorAll("[data-hcopy]").forEach(function (b) { b.onclick = function () { copyTxt(b.dataset.hcopy, b); }; });
}

// ---------- news ----------
$("#nAdd").onclick = function () {
  const ar = $("#nAr").value.trim();
  const idn = $("#nId").value.trim() || ar;
  if (!ar) return;
  DB.news.unshift({ id: Date.now(), ar: ar, id_text: idn, date: today() });
  save();
  $("#nAr").value = "";
  $("#nId").value = "";
  renderAll();
  renderNewsAdmin();
};
function renderNewsAdmin() {
  const A = isAr();
  $("#newsAdmin").innerHTML = DB.news.map(function (n) {
    return '<div class="hrow"><small style="color:var(--muted)">' + esc(n.date) + '</small><p style="margin:4px 0">' + esc(n.ar) + "<br>" + esc(n.id_text) + '</p><button class="mbtn danger" data-ndel="' + n.id + '">' + (A ? "حذف" : "Hapus") + "</button></div>";
  }).join("");
  document.querySelectorAll("[data-ndel]").forEach(function (b) {
    b.onclick = function () {
      DB.news = DB.news.filter(function (x) { return x.id != b.dataset.ndel; });
      save();
      renderAll();
      renderNewsAdmin();
    };
  });
}

function renderAll() { applyLang(); renderNotice(); renderHome(); }
renderAll();
