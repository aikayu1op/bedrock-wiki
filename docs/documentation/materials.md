---
title: バニラ Material
description: Material のドキュメントです。
show_outline: false
tags:
    - expert
mentions:
    - SirLich
    - Lufurrius
    - MedicalJewel105
    - SmokeyStack
    - ThomasOrs
---

:::warning
Material は扱いが難しいです。クラッシュ、コンテンツログエラー、長い読み込み時間が起こりうることを覚悟してください。
:::

Material は、エンティティをより個性的にするのに非常に役立ちます。アドオン用に新しく作ることも、既存のバニラ Material を使うこともできます。

Material の作成については [こちら](/visuals/materials) で詳しく学べます。

## バニラ Material 一覧

| Vanilla_Material                                                                        |
| --------------------------------------------------------------------------------------- |
| [alpha_block](#alpha-block)                                                             |
| [alpha_block_color](#alpha-block-color)                                                 |
| [banner](#banner)                                                                       |
| [banner_pole](#banner-pole)                                                             |
| [beacon_beam](#beacon-beam)                                                             |
| [beacon_beam_transparent](#beacon-beam-transparent)                                     |
| [charged_creeper](#charged-creeper)                                                     |
| [conduit_wind](#conduit-wind)                                                           |
| [entity](#entity)                                                                       |
| [entity_alphablend](#entity-alphablend)                                                 |
| [entity_alphablend_nocolorentity_static](#entity-alphablend-nocolorentity-static)       |
| [entity_alphatest](#entity-alphatest)                                                   |
| [entity_alphatest_change_color](#entity-alphatest-change-color)                         |
| [entity_alphatest_change_color_glint](#entity-alphatest-change-color-glint)             |
| [entity_alphatest_glint](#entity-alphatest-glint)                                       |
| [entity_alphatest_glint_item](#entity-alphatest-glint-item)                             |
| [entity_alphatest_multicolor_tint](#entity-alphatest-multicolor-tint)                   |
| [entity_beam](#entity-beam)                                                             |
| [entity_beam_additive](#entity-beam-additive)                                           |
| [entity_change_color](#entity-change-color)                                             |
| [entity_change_color_glint](#entity-change-color-glint)                                 |
| [entity_custom](#entity-custom)                                                         |
| [entity_dissolve_layer0](#entity-dissolve-layer0)                                       |
| [entity_dissolve_layer1](#entity-dissolve-layer1)                                       |
| [entity_emissive](#entity-emissive)                                                     |
| [entity_emissive_alpha](#entity-emissive-alpha)                                         |
| [entity_emissive_alpha_one_sided](#entity-emissive-alpha-one-sided)                     |
| [entity_flat_color_line](#entity-flat-color-line)                                       |
| [entity_glint](#entity-glint)                                                           |
| [entity_lead_base](#entity-lead-base)                                                   |
| [entity_loyalty_rope](#entity-loyalty-rope)                                             |
| [entity_multitexture](#entity-multitexture)                                             |
| [entity_multitexture_alpha_test](#entity-multitexture-alpha-test)                       |
| [entity_multitexture_alpha_test_color_mask](#entity-multitexture-alpha-test-color-mask) |
| [entity_multitexture_color_mask](#entity-multitexture-color-mask)                       |
| [entity_multitexture_masked](#entity-multitexture-masked)                               |
| [entity_multitexture_multiplicative_blend](#entity-multitexture-multiplicative-blend)   |
| [entity_nocull](#entity-nocull)                                                         |
| [guardian_ghost](#guardian-ghost)                                                       |
| [item_in_hand](#item-in-hand)                                                           |
| [item_in_hand_entity_alphatest](#item-in-hand-entity-alphatest)                         |
| [item_in_hand_entity_alphatest_color](#item-in-hand-entity-alphatest-color)             |
| [item_in_hand_glint](#item-in-hand-glint)                                               |
| [item_in_hand_multicolor_tint](#item-in-hand-multicolor-tint)                           |
| [map](#map)                                                                             |
| [map_decoration](#map-decoration)                                                       |
| [map_marker](#map-marker)                                                               |
| [moving_block](#moving-block)                                                           |
| [moving_block_alpha](#moving-block-alpha)                                               |
| [moving_block_alpha_seasons](#moving-block-alpha-seasons)                               |
| [moving_block_alpha_single_side](#moving-block-alpha-single-side)                       |
| [moving_block_blend](#moving-block-blend)                                               |
| [moving_block_double_side](#moving-block-double-side)                                   |
| [moving_block_seasons](#moving-block-seasons)                                           |
| [opaque_block](#opaque-block)                                                           |
| [opaque_block_color](#opaque-block-color)                                               |
| [opaque_block_color_uv2](#opaque-block-color-uv2)                                       |

## プロパティ

Material には、見た目に影響するさまざまなプロパティがあります。たとえば:

### Backface-Culling

これにより、モデルの内側の面は **描画されなくなります**。

### Alpha Channel

テクスチャの alpha channel を使った、連続的な半透明表現を有効にします。

### Emissive

テクスチャが暗い照明の影響を受けず、発光しているように見えます。alpha channel を使っている場合、発光度は各ピクセルの透明度に直接比例します。

### Set Translucency

他のプロパティに関係なく、あらかじめ決められた半透明度で常に描画されます。

### Texture Blending

複数のテクスチャがある場合、何らかのフィルターを使って、テクスチャに基づいてエンティティの見た目を変えることがあります。

## Material の詳細

以下は各 Material の一覧と、一般に知られているプロパティです。名前は各 Material の動作をざっくり示すもので、予測しづらい挙動をするものや、未文書の用途を持つものもあります。そのため、ここでは各 Material で確実だと分かっていることだけを載せています。

:::warning
以下のセクションは、現時点では **単一テクスチャでのみ** テストされています。参考程度に見てください。Material は自分でも試してみることを強くおすすめします。
:::

### alpha_block

-   Backface-culling
-   Completely Opaque

### alpha_block_color

-   Backface-Culling
-   Translucencies as Transparent

### banner

Inconsistently renders objects with transparency behind.

-   N/A

### banner_pole

Inconsistently renders objects with transparency behind.

-   Backface-Culling
-   Transparency

### beacon_beam

-   Completely Opaque

### beacon_beam_transparent

This one is rather different. Particles that are behind it are rendered in front, and it appears to have "Frontface-Culling".

-   Alpha Channel

### charged_creeper

Inconsistently renders objects with transparency behind.

-   Emissive
-   Set Translucency

### conduit_wind

-   Transparency
-   Translucency as Transparency

### entity

-   Completely Opaque
-   Backface Culling

### entity_alphablend

Inconsistently renders objects with transparency behind.

-   Backface-Culling
-   Alpha Channel

### entity_alphablend_nocolorentity_static

-   Unknown
-   Potential Crash

### entity_alphatest

-   Transparency
-   Translucency as Transparency

### entity_alphatest_change_color

-   Transparency
-   Translucency as Opaque

### entity_alphatest_change_color_glint

-   Unknown

### entity_alphatest_glint

-   Unknown

### entity_alphatest_glint_item

-   Unknown

### entity_alphatest_multicolor_tint

-   Greyscale
-   Backface-Culling
-   Transparency
-   Translucency as Opaque

### entity_beam

-   Transparency
-   Translucency as Transparency

### entity_beam_additive

Particles always render on top

-   Transparency
-   Emissive
-   Backface-Culling
-   Set Translucency

### entity_change_color

-   Completely Opaque

### entity_change_color_glint

-   Unknown

### entity_custom

Inconsistently renders objects with transparency behind.

-   Backface-Culling
-   Alpha Channel

### entity_dissolve_layer0

Inconsistently renders objects with transparency behind.

-   Unknown

### entity_dissolve_layer1

-   Unknown

### entity_emissive

-   Emissive
-   Completely Opaque
-   Backface-Culling

### entity_emissive_alpha

-   Emissive
-   Alpha Channel
-   Transparency

### entity_emissive_alpha_one_sided

-   Emissive
-   Alpha Channel
-   Transparency
-   Backface-Culling

### entity_flat_color_line

-   Backface-Culling
-   Completely Opaque

### entity_glint

-   Unknown

### entity_lead_base

Inconsistently renders objects with transparency behind.

-   Alpha Channel

### entity_loyalty_rope

-   Unknown

### entity_multitexture

-   Unknown

### entity_multitexture_alpha_test

-   Unknown

### entity_multitexture_alpha_test_color_mask

-   Unknown

### entity_multitexture_color_mask

-   Unknown

### entity_multitexture_masked

-   Unknown

### entity_multitexture_multiplicative_blend

-   Unknown

### entity_nocull

-   Completely Opaque

### guardian_ghost

Inconsistently renders objects with transparency behind.

-   Backface-Culling
-   Alpha Channel

### item_in_hand

-   Completely Opaque
-   Backface-Culling

### item_in_hand_entity_alphatest

-   Transparency
-   Translucency into either Opaque or Transparent depends on level.

### item_in_hand_entity_alphatest_color

-   Transparency
-   Translucency into either Opaque or Transparent depends on level.

### item_in_hand_glint

-   Unknown

### item_in_hand_multicolor_tint

-   Greyscale
-   Completely Opaque
-   Backface-Culling

### map

-   Transparency
-   Translucency into either Opaque or Transparent depends on level.

### map_decoration

-   Backface-Culling
-   Transparency
-   Translucency into either Opaque or Transparent depends on level.

### map_marker

-   Backface-Culling
-   Transparency
-   Translucency into either Opaque or Transparent depends on level.
-   Potential Crash

### moving_block

-   Completely Opaque
-   Backface-Culling

### moving_block_alpha

-   Backface-Culling
-   Transparency
-   Translucency into either Opaque or Transparent depends on level.

### moving_block_alpha_seasons

-   Translucency into either Opaque or Transparent depends on level.
-   Transparency

### moving_block_alpha_single_side

-   Backface-Culling
-   Transparency
-   Translucency into either Opaque or Transparent depends on level.

### moving_block_blend

Inconsistently renders objects with transparency behind.

-   Backface-Culling
-   Alpha Channel

### moving_block_double_side

-   Completely Opaque

### moving_block_seasons

-   Completely Opaque
-   Backface-Culling

### opaque_block

-   Completely Opaque
-   Backface-Culling

### opaque_block_color

-   Completely Opaque
-   Backface-Culling

### opaque_block_color_uv2

-   Completely Opaque
-   Backface-Culling

:::warning
これらも RenderDragon 環境でのみテストされています。RenderDragon 以外では見た目が異なる場合があります。
:::
