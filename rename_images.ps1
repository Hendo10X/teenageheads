$renames = @(
    @("Gemini_Generated_Image_1rqbbc1rqbbc1rqb.png", "teenage001.png"),
    @("Gemini_Generated_Image_699gio699gio699g.png", "teenage002.png"),
    @("Gemini_Generated_Image_85ombq85ombq85om.png", "teenage003.png"),
    @("Gemini_Generated_Image_945pu4945pu4945p.png", "teenage004.png"),
    @("Gemini_Generated_Image_94l3kx94l3kx94l3.png", "teenage005.png"),
    @("Gemini_Generated_Image_bvko9tbvko9tbvko.png", "teenage006.png"),
    @("Gemini_Generated_Image_fx2qntfx2qntfx2q.png", "teenage007.png"),
    @("Gemini_Generated_Image_hcsni7hcsni7hcsn.png", "teenage008.png"),
    @("Gemini_Generated_Image_kiithqkiithqkiit.png", "teenage009.png"),
    @("Gemini_Generated_Image_o38sx4o38sx4o38s.png", "teenage010.png"),
    @("Gemini_Generated_Image_okqe5okqe5okqe5o.png", "teenage011.png"),
    @("Gemini_Generated_Image_pajkjipajkjipajk.png", "teenage012.png"),
    @("Gemini_Generated_Image_rqe7ydrqe7ydrqe7.png", "teenage013.png"),
    @("Gemini_Generated_Image_tf62totf62totf62.png", "teenage014.png"),
    @("Gemini_Generated_Image_u4ep1du4ep1du4ep.png", "teenage015.png"),
    @("Gemini_Generated_Image_vw2mxtvw2mxtvw2m.png", "teenage016.png"),
    @("Gemini_Generated_Image_w9pbzww9pbzww9pb.png", "teenage017.png"),
    @("Gemini_Generated_Image_ywtateywtateywta.png", "teenage018.png"),
    @("Gemini_Generated_Image_8v8rpg8v8rpg8v8r.png", "teenage019.png"),
    @("Gemini_Generated_Image_spdvorspdvorspdv.png", "teenage020.png")
)

foreach ($pair in $renames) {
    $oldPath = Join-Path "public" $pair[0]

    if (Test-Path $oldPath) {
        Rename-Item -Path $oldPath -NewName $pair[1] -Force
        Write-Host "Renamed $($pair[0]) to $($pair[1])"
    } else {
        Write-Host "File not found: $($pair[0])"
    }
}
